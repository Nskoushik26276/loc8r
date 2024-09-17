module.exports.homelist = function(req, res) {
    res.render('location-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
    name: 'Starcups',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    distance: '100m'
    }, {
    name: 'Cafe Hero',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 4,
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    distance: '200m'
    }, {
    name: 'Burger Queen',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 2,
    facilities: ['Food', 'Premium wifi'],
    distance: '250m'
    }]
    });
    };
    module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'LocationInfo' });
    };
    module.exports.locationInfo1 = function(req, res){
    res.render('locations-info2', { title: 'LocationInfo1' });
    };
    module.exports.locationInfo2 = function(req, res){
    res.render('locations-info3', { title: 'LocationInfo2' });
    };
    module.exports.addReview = function(req, res){
    res.render('locations-review-form', { title: 'ADD REVIEW' });
    };