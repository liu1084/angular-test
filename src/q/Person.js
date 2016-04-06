/**
 * Created by liqing on 2016/4/4.
 */
ScrumModule.factory('User', ['$log', function($log, name){
    var Person = function(name){
        this.eat = function(food){
            $log.info(name + ' is eating delicious ' + food);
        };
        this.beHungry = function(reason){
            $log.info(name + ' is hungry, because ' + reason);
        };
    };
    return Person;
}]);

