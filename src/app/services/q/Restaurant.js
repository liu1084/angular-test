/**
 * Created by liqing on 2016/4/13.
 */
ScrumModule.factory('RestaurantService', ['$q', '$rootScope', function($q, $rootScope){
    var Restaurant = function(){
        var currentOrder ;

        this.takeOrder = function(orderedItems){
            currentOrder = {
                items: orderedItems,
                deferred: $q.defer()
            };

            return currentOrder.deferred.promise;
        };

        this.deliverOrder = function(){
            currentOrder.deferred.resolve(currentOrder.items);
            $rootScope.$digest();
        };

        this.problemWithOrder = function(reason){
            currentOrder.deferred.reject(reason);
            $rootScope.$digest();
        }
    };

    return Restaurant;
}]);