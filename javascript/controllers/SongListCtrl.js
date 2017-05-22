app.controller("SongListCtrl", function($routeParams, $scope, SongFactory) {

    //$scope.songs = [];

    //Get Address List
    let getItems = () => {
        SongFactory.getSongs().then((itemz) => {
            $scope.songs = itemz;
            console.log("test",$scope.songs);
        }).catch((error) => {
            console.log("get Error", error);
        });
    };

    getItems();

    //Edit Address

    

    //Delete Address

    $scope.deleteSong = (songID) => {
        SongFactory.deletez(songID).then(() => {
            getItems();
        }).catch(() => {
            console.log("deleteItem error", error);
        });

    };


});
