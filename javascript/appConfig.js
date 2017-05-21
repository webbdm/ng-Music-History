app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/Address-List.html',
            controller: 'AddressListCtrl'
        })
        // .when('/', {
        //     templateUrl: 'partials/New-Add.html',
        //     controller: 'NewAddCtrl'
        // })
        // .when('//:id', {
        //     templateUrl: 'partials/address-view.html',
        //     controller: 'EditCtrl'
        // })
        // .when('//:id', {
        //     templateUrl: 'partials/New-Add.html',
        //     controller: 'EditCtrl'
        // })
        .otherwise('/list');
});