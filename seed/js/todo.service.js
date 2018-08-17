function TodoService($http, $resource, TODO_API) {
    /*
    defaults:
    {
        'get':   { method: 'GET' }, 
        'save':   { method: 'POST' }, 
        'query':   { method: 'GET', isArray: true }, 
        'remove':   { method: 'DELETE' }, 
        'delete':   { method: 'DELETE' } 
    };
    */
    var apiUrl = TODO_API + '/:id';


    return $resource(apiUrl, {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}

angular
    .module('app')
    .factory('TodoService', TodoService);
