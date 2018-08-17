angular
    .module('app', [
        'ngResource'
    ])
    .constant('TODO_API', 'https://jsonplaceholder.typicode.com/todos')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    });
