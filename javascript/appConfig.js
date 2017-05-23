app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/Song-List.html',
            controller: 'SongListCtrl'
        })
        .when('/new', {
            templateUrl: 'partials/New-song.html',
            controller: 'NewSongCtrl'
        })
        .when('/song/:id', {
            templateUrl: 'partials/Song-view.html',
            controller: 'EditCtrl'
        })
        .when('/edit/:id', {
            templateUrl: 'partials/New-song.html',
            controller: 'EditCtrl'
        })
        .otherwise('/list');
});