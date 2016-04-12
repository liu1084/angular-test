/**
 * Created by liqing on 2016/4/13.
 */
describe('Test Restaurant service', function(){
    var $q, deferred, $rootScope;
    var pizzaPit;
    var Restaurant, Person;
    var $log;
    beforeEach(module('Scrum'));
    beforeEach(inject(function(_$q_, _$rootScope_, _$log_, RestaurantService, PersonService){
        $q = _$q_;
        deferred = $q.defer();
        $rootScope = _$rootScope_;
        Restaurant = RestaurantService;
        Person = PersonService;
    }));

    console.log(Person);

    //pizzaPit = new Restaurant();
    //var pizzaDelivered = pizzaPit.takeOrder('Capricciosa');
    var pawl = new Person('Pawl');

    //pizzaDelivered.then(pawl.eat, pawl.beHungry);
    //pizzaPit.problemWithOrder('no Capricciosa, only Margherits left');
    //
    //it('should log', function(){
    //    expect($log.warn.logs).toContain(['Pawl is hungry, because no Capricciosa, only Margherits left']);
    //})
});