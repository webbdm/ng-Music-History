app.controller("EditCtrl", function($location, $routeParams, $scope, SongFactory) {

    $scope.newSong = {};

    SongFactory.getSingleSong($routeParams.id).then((itemz) => {
        
        $scope.newSong = itemz;
        console.log("to edit", $scope.newSong);
        $scope.newSong.id = $routeParams.id;
    }).catch((error) => {
        console.log("edit Error", error);
    });


    $scope.addNewSong = () => {
        console.log("TEST PUT",$scope.newSong);
        SongFactory.editSong($scope.newSong).then(() => {
            $location.url('/list');
        }).catch((error) => {
            console.log(error);
        });
    };


    // $scope.EditNewItem = () => {
    //     ItemFactory.editItem($scope.editItem).then(() => {
    //         $location.url('/list');
    //     }).catch((error) => {
    //         console.log("editItem error", error);
    //     });
    // };



});
