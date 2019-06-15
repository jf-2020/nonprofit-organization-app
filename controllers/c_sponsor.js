const Sponsors = require('../models/m_sponsor');

exports.getAllSponsors = async (req, res) => {
    const sponsors = await Sponsors.getAllSponsors();

    res.render('template', {
        locals: {
            title: 'Sponsors List',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            items: sponsors
        },
        partials: {
            partial: 'partial-sponsorsList',
            nav: 'partial-nav'
        }
    });
};

exports.getSponsor = async (req, res) => {
    const first = req.params['first_name'];
    const last = req.params['last_name'];
    const name = first + " " + last;
    const sponsees = await Sponsors.getSponseesByName(first);
    const photo = await Sponsors.getSponsorPhotoByName(first);

    res.render('template', {
        locals: {
            title: "Sponsor Profile",
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in,
            name: name,
            sponsees: sponsees,
            photo: photo.photo
        },
        partials : {
            partial: 'partial-sponsor-profile',
            nav: 'partial-nav'
        }
    });
};

/* GET handler for add sponsor page */
exports.addSponsor_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'Add Sponsor',
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name,
            userName: req.session.first_name
        },
        partials: {
            partial: 'partial-add-sponsor',
            nav: 'partial-nav'
        }
    });
};

/* POST handler for add sponsor page */
exports.addSponsor_post = (req, res) => {
    const { first_name, last_name, email, phone,
            donation, donation_date, deposit_date,
            photo 
        } = req.body;

    const sponsor = new Sponsors(null, first_name, last_name,
                                email, phone, donation,
                                donation_date, deposit_date,
                                photo, null);

    sponsor.addSponsor().then(() => {
        res.redirect('/sponsors');
    });
};

/* GET handler for delete sponsor page */
exports.deleteSponsor_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'Delete Sponsor',
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name,
            userName: req.session.first_name
        },
        partials: {
            partial: 'partial-delete-sponsor',
            nav: 'partial-nav'
        }
    })
}

/* POST handler for delete sponsor page */
exports.deleteSponsor_post = async (req, res) => {
    const { first_name, last_name } = req.body;

    const sponsor = new Sponsors(null, first_name, last_name, null,
                            null, null, null, null, null, null);


    sponsor.deleteSponsor().then(() => {
        res.redirect('/sponsors');
    });
};