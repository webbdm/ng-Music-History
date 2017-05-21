app.factory("SongFactory", function($http, $q, FIREBASE_CONFIG) {

    let getSongs = () => {
        let itemz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/songs.json`)
                .then((fbItems) => {
                    let itemCollection = fbItems.data;
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        itemz.push(itemCollection[key]);
                    });
                    resolve(itemz);
                }).catch((error) => {
                    reject(error);
                });
        });

    };

    let getSingleSong = (songID) => {
        console.log("test id",songID);
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/songs/${songID}.json`)
                .then((results) => {
                    let songToEdit = results.data;
                    //console.log(results.data);
                    resolve(songToEdit);
                }).catch((error) => {
                    reject(error);
                });
        });
    };

    let postNewSong = (newSong) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/songs.json`, JSON.stringify(newSong))
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    console.log("Post newSong error", error);
                });
        });
    };

    let deletez = (songId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/songs/${songId}.json`)
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    console.log("deletez error", error);
                });
        });
    };

    let editSong = (editedSong) => {
        console.log("PUT factory", editedSong);
        return $q((resolve, reject) => {
            $http.put(`${FIREBASE_CONFIG.databaseURL}/songs/${editedSong.id}.json`,
                JSON.stringify({
                    song_name: editedSong.song_name,
                    artist_name: editedSong.artist_name,
                    album: editedSong.album,
                    length: editedSong.length,
                    id: editedSong.id
                })
            ).then((resultz) => {
                resolve(resultz);
            }).catch((error) => {
                reject(error);
            });
        });
    };


    return { getSongs: getSongs, postNewAddress: postNewAddress, deletez: deletez, editAddress: editAddress, getSingleSong: getSingleSong };

});
