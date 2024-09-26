module.exports.index=function(req,res){ 
    res.render('index', { title: 'index' }); 
    }; 
    module.exports.signin=function(req,res){ 
    res.render('signin', { title: 'signin' }); 
    }; 
    module.exports.review=function(req,res){ 
    res.render('review', { title: 'review' }); 
    };
    module.exports.patient=function(req,res){ 
    res.render('patientinfo', { title: 'add patient' }); 
    };
    module.exports.donor=function(req,res){ 
    res.render('donorinfo', { title: 'add donor' }); 
    };