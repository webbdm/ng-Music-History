app.controller("NewSongCtrl", function($location,$routeParams, $scope, SongFactory) {
    $scope.songs = [];

    $scope.addNewSong = () => {

        //$scope.newAddress.isCompleted = false;
        SongFactory.postNewSong($scope.newSong).then((response) => {
            $scope.newSong = {};
            //$scope.showListView = true;
            //getItems();
            $location.url('/list');
        }).catch((error) => {
            console.log("addNewSong error", error);
        });

        //postNewItem
    };

});
