/* base home page controller */
exports.homePage = (req, res) => {
    res.render('template', {
        locals: {
            title: 'SCP',
            secTitle: 'Sponsored Children Project',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-index',
            nav: 'partial-nav'
        }
    });
};