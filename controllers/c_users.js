const bcrypt = require('bcryptjs'),
      User = require('../models/m_user');

/* GET request for home page login */
exports.login_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'SCP',
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            partial: 'partial-login',
            nav: 'partial-nav'
        }
    });
}

/* POST handler for home page login */
exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    const userInstance = new User(null, password, null, null, email, null, null, null);    
    const user = await userInstance.getUserByEmail();

    const valid_login = bcrypt.compareSync(password, user.password);
    
    if (!!valid_login) {
        req.session.is_logged_in = true;
        req.session.user_id = user.id
        req.session.first_name = user.first_name;
        req.session.last_name = user.last_name;
        res.redirect('/');
    } else {
        res.sendStatus(401)
    }
}

/* GET handler for logout */
exports.logout_get = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

/* GET handler for signup */
exports.sign_up_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Sign Up',
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            partial: 'partial-signup',
            nav: 'partial-nav'
        }
    });
}

/* POST handler for signup */
exports.sign_up_post = (req, res) => {
    const { email, first_name, last_name } = req.body;

    const salt = bcrypt.genSaltSync(10),
          hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User(null, hash, first_name, last_name, email, null, null, null);    

    user.addUser().then(() => {
        res.redirect('/');
    });
}

/* GET handler for profile page */
exports.user_profile = async (req, res) => {
    const name = req.params['first'];
    const user = await User.getUserByName(name);

    res.render('template', {
        locals: {
            title: user.first + " Profile",
            is_logged_in: req.session.is_logged_in,
            userName: [user.first, user.last],
            user: user
        },
        partials: {
            partial: 'partial-user-profile',
            nav: 'partial-nav'
        }
    });
}