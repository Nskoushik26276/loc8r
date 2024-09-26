module.exports.homelist = function(req, res) { 
  res.render('locations-list', { 
      title: 'Hospital management ', 
      pageHeader: { 
          title: 'Hospital Management', 
          strapline: 'Find Hospitals which have Premium treatment' 
      }, 
      sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.", 
      locations: [{ 
          name: 'Apollo', 
          address: '125 High Street, Reading, RG6 1PS', 
          rating: 3, 
          facilities: ['Blood Donation', 'Hospitality', 'Premium Treatment'], 
          distance: '100m' 
      }, { 
          name: 'Yashoda', 
          address: '125 High Street, Reading, RG6 1PS', 
          rating: 4, 
          facilities: ['Blood Donation', 'Curing disease', 'Premium wifi'], 
          distance: '200m' 
      }, { 
          name: 'Maxivision', 
          address: '125 High Street, Reading, RG6 1PS', 
          rating: 2, 
          facilities: ['Eye treatment', 'Hospitality','Premium wifi'], 
          distance: '250m' 
  }] 
}); 
}; 
module.exports.locationInfo = function(req, res){ 
    res.render('locations-info', { title: 'LocationInfo' }); 
  }; 
module.exports.locationInfo1 = function(req, res){ 
    res.render('locations-info1', { title: 'LocationInfo1' }); 
  }; 
module.exports.locationInfo2 = function(req, res){ 
    res.render('locations-info2', { title: 'LocationInfo2' }); 
  }; 
module.exports.addReview = function(req, res){ 
    res.render('locations-review-form', { title: 'ADD REVIEW' }); 
  }; 
