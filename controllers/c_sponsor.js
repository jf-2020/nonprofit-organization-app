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