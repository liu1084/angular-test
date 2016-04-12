/**
 * Created by liqing on 2016/4/4.
 *
 * http://www.bradoncode.com/blog/2015/07/13/unit-test-promises-angualrjs-q/
 */
ScrumModule.factory('PersonService', ['$log', function($log){
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

