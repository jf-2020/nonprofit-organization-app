const Stores = require('../models/m_stores');

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

    res.render('template', {
        locals: {
            title: 'Store Profile',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            storeList: oneStore
        },
        partials: {
            partial: 'partial-storeProfile',
            nav: 'partial-nav'
        }
    })
};
