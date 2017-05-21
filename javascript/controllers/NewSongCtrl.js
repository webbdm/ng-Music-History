app.controller("NewSongCtrl", function($routeParams, $scope, SongFactory) {
    $scope.songs = [];

    $scope.addNewSong = () => {

        //$scope.newAddress.isCompleted = false;
        SongFactory.postNewSong($scope.newSong).then((response) => {
            $scope.newSong = {};
            //$scope.showListView = true;
            //getItems();
        }).catch((error) => {
            console.log("addNewSong error", error);
        });

        //postNewItem
    };

});
