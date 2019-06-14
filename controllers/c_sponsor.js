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