function HttpInterceptor($q, TODO_API) {
    return {
        request: function (config) {
            if (config.url === TODO_API) {
                config.headers['x-csrf-token'] = 'skleiber';
            }
            return config;
        },
        requestError: function (config) {
            return $q.reject(config);
        },
        response: function (response) {
            return response;
        },
        responseError: function (response) {
            return $q.reject(response);
        }
    };
}

angular
    .module('app')
    .factory('HttpInterceptor', HttpInterceptor);
