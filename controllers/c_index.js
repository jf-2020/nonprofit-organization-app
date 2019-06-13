/* home page controller */
exports.homePage = (req, res, next) => {
    res.render('template', {
        locals: {
            title: 'SCP',
            userName: req.session.first_name,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-index',
            nav: 'partial-nav'
        }
    });
};