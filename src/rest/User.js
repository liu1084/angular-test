/**
 * Created by liqing on 2016/4/7.
 */
ScrumModule
    .factory('User', ['$resource', 'dbConnection', function ($resource, conn) {
        return $resource(conn + '/user/:email')
    }]);