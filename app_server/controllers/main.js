module.exports.index=function(req,res){ 
    res.render('index', { title: 'index' }); 
    }; 
    module.exports.signin=function(req,res){ 
    res.render('signin', { title: 'signin' }); 
    }; 
    module.exports.review=function(req,res){ 
    res.render('review', { title: 'review' }); 
    };