/**
 * Created by liqing on 2016/4/7.
 */
ScrumModule.controller('UserCtrl', ['$scope', 'User', function ($scope, User) {
    var email = 'lq@gmail.com';

    //get all users
    $scope.getAllUsers = function () {
        User.query({}, function(users){
            $scope.users = users;
        }, function(error){
            console.log(error);
        });

    };
    //get a user by email
    $scope.getUserByEmail = function () {
        User.get({email: email}, function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    //create a new user
    $scope.createUser = function () {
        var liqing = new User({name: 'lq', email: email});
        User.save({}, liqing, function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    //delete a user by email
    $scope.deleteUserByEmail = function ($event, id) {
        var ans = confirm('Delete this itme?');
        if (ans.toLowerCase() === 'yes'){
            var element = $event.currentTarget;
            var id = jqLite(element).attr('id');
            var parent = jqLite(element).parents('li');

            User.delete({_id: id}, function (data) {
                console.log(data);
                jqLite(parent).hide();
            }, function (error) {
                console.log(error);
            });
        }

    };
}]);