/**
 * Created by liqing on 2016/4/4.
 */
//reference link: https://www.airpair.com/angularjs/posts/testing-angular-with-karma
//http://blog.jobbole.com/54936/
//http://blog.fens.me/nodejs-karma-jasmine/
//http://blog.fens.me/nodejs-jasmine-bdd/

//describe('should illustrate basic usage of $q', function () {
//
//    var scope, q, http, resource, user, UserFactory;
//    beforeEach(angular.mock.module('Scrum'));
//    beforeEach(angular.mock.inject(function ($rootScope, $http, $resource, $q, User) {
//        scope = $rootScope.$new();
//    }));
//
//
//    console.log($rootScope);
//
//    var pizzaOrderFulfillment = $q.defer();
//    var pizzaDelivered = pizzaOrderFulfillment.promise;
//
//    user = new UserFactory('Pawel');
//    pizzaDelivered.then(user.eat, user.beHungry);
//    pizzaOrderFulfillment.resolve('101');
//    scope.$digest();
//
//    it('pawel will eat pizza', function () {
//        except($log.info.logs).toContain(['Pawel is eating delicious 101']);
//    });
//});