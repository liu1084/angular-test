/**
 * Created by liqing on 2016/4/7.
 */
ScrumModule.controller('UserCtrl', ['User', '$scope', '$q', function (User, $scope, $q) {

    var deferred = $q.defer();
    var deleted = deferred.promise;

    var email = 'lq@gmail.com';

    //get all users
    var getAllUsers = function () {
        var users = User.query();
        console.log(users);
    };
    //get a user by email
    var getUserByEmail = function () {
        User.get({email: email}, function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    //create a new user
    var createUser = function () {
        var liqing = new User({name: 'lq', email: email});
        User.save({}, liqing, function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    //delete a user by email
    var deleteUserByEmail = function () {
        User.delete({email: email}, function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };


    //deleted
    //    .then(getAllUsers())
    //    .then(createUser())
    //    .then(getUserByEmail())
    //    .then(deleteUserByEmail())
    //    .then(getAllUsers());

    getAllUsers();
    createUser();
    getUserByEmail();
    deleteUserByEmail();
    getAllUsers();
}]);