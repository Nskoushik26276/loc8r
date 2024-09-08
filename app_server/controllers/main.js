/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Express' });
   };

   const signin = (req, res) => {
    res.render('signin', { title: 'Sign In' });
};

module.exports = {
    index,
    signin
};