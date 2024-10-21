module.exports.homelist = function(req, res) { 
  res.render('locations-list', { 
      title: 'Swasthya', 
      pageHeader: { 
          title: 'Swasthya', 
          strapline: 'Find Hospitals which have Premium treatment' 
      }, 
      locations: [{ 
          name: 'Apollo', 
          address: "Pollicetty Towers, St. John's Road, beside KEYES HIGH SCHOOL FOR GIRLS, Regimental Bazaar, Shivaji Nagar, Secunderabad, Telangana 500025", 
          rating: 3, 
          facilities: ['Blood Donation', 'Hospitality', 'Premium Treatment'], 
          distance: '100m' 
      }, { 
          name: 'Yashoda', 
          address: ' 6-3-905, Raj Bhavan Rd, Matha Nagar, Somajiguda, Hyderabad, Telangana 500082 ', 
          rating: 4, 
          facilities: ['Blood Donation', 'Curing disease', 'Premium wifi'], 
          distance: '200m' 
      }, { 
          name: 'Maxivision', 
          address: '6-3-903/a 1, Raj Bhavan Road1, opp. Yashoda Hospital, Somajiguda, Hyderabad, Telangana 500082', 
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
