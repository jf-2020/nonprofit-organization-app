const Stores = require('../models/m_stores');
const Supplies = require('../models/m_supplies');

exports.getAllStores = async (req, res) => {
    let arrOfStores = await Stores.getAllStores();

    res.render('template', {
        locals: {
            title: 'Stores List',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            storesList: arrOfStores
        },
        partials: {
            partial: 'partial-storesList',
            nav: 'partial-nav'
        }
    });
};

exports.getOneStore = async (req, res) => {
    const store_id = req.params.store;
    const oneStore = await Stores.getOneStore(store_id);
    const storeSupplies = await Supplies.getAllItemsByStoreID(store_id);   

    res.render('template', {
        locals: {
            title: 'Store Profile',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            storeList: oneStore,
            suppliesList: storeSupplies
        },
        partials: {
            partial: 'partial-storeProfile',
            nav: 'partial-nav'
        }
    })
};

exports.addStore_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'Add Store',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-add-store',
            nav: 'partial-nav'
        }
    });
};

exports.addStore_post = async (req, res) => {
    const data = req.body;
    const name = data.name,
          location = data.location;

    // need to set new store's store_id to max over stores store_id column + 1
    const maxStoreId = await Stores.getMaxStoreId();

    const store = new Stores(maxStoreId+1, name, location);
    
    store.addStore().then(() => {
        res.redirect('/stores');
    });
};

/* GET handler for delete store page */
exports.deleteStore_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'Delete Store',
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name,
            userName: req.session.first_name
        },
        partials: {
            partial: 'partial-delete-store',
            nav: 'partial-nav'
        }
    })
}

/* POST handler for delete store page */
exports.deleteStore_post = async (req, res) => {
    const { name } = req.body;

    const store = new Stores(null, name, null);

    store.deleteStore().then(() => {
        res.redirect('/stores');
    });
};

/* GET handler for adding inventory to a store */
exports.addSupply_get = async (req, res) => {
    const id = req.params.id;
    
    const store = await Stores.getOneStore(id);
    const name = store.name;

    res.render('template', {
        locals: {
            title: `Add Inventory to ${name}`,
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name,
            userName: req.session.first_name,
            id: id,
            is_store: true,
            is_student: false
        },
        partials: {
            partial: 'partial-add-supply',
            nav: 'partial-nav'
        }
    });
}

/* POST handler for adding inventory to a store */
exports.addSupply_post = async (req, res) => {
    const body = req.body;
    const params = req.params;

    const supply_name = body.supply_name,
          price = body.unit_cost,
          quantity = body.quantity,
          id = params.id;

    Stores.addItemToStore(supply_name, price, quantity, id)
    .then(() => {
        res.redirect(`/stores/${id}`);
    });
}

/* GET handler for removing inventory from a store */
exports.removeSupply_get = async (req, res) => {
    const id = req.params.id;
    
    const store = await Stores.getOneStore(id);
    const name = store.name;

    res.render('template', {
        locals: {
            title: `Remove Inventory from ${name}`,
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name,
            userName: req.session.first_name,
            id: id,
            is_store: true,
            is_student: false
        },
        partials: {
            partial: 'partial-delete-supply',
            nav: 'partial-nav'
        }
    });
}

/* POST handler for removing supplies from a student */
exports.removeSupply_post = async (req, res) => {
    const body = req.body;
    const params = req.params;
    
    const supply_name = body.supply_name,
          id = params.id;

    Stores.removeSupplyByStoreId(id, supply_name)
    .then(() => {
        res.redirect(`/stores/${id}`);
    });
}