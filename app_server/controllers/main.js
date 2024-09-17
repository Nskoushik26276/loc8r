/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Express' });
    };
    module.exports = module.exports.index=function(req,res){
        res.render('index', { title: 'Eeshanth Reyhanth' });
        };
        module.exports.signin=function(req,res){
        res.render('signin', { title: 'Eeshanth Reyhanth' });
        };
        module.exports.review=function(req,res){
        res.render('review', { title: 'Eeshanth Reyhanth' });
        };