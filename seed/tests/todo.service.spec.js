describe('TodoService', function () {
    var TodoService, $httpBackend, TODO_API; // $httpBackend comes from angular-mocks, is a fake backend to test service

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        TodoService = $injector.get('TodoService');
        $httpBackend = $injector.get('$httpBackend');
        TODO_API = $injector.get('TODO_API');

        $httpBackend
            .when('GET', TODO_API).respond([{
                id: 1,
                title: 'Fake title',
                userId: 1
            }]);

        $httpBackend
            .when('DELETE', TODO_API + '/1').respond({});
    }));

    it('should get a list of todos from the server', function (done) {
        $httpBackend.expectGET(TODO_API);

        TodoService.query().$promise.then(function (res) {
            if (res[0].title === 'Fake title') {
                done();
            }
        });

        $httpBackend.flush();
    });

    it('should delete todo items from the server', function () {
        $httpBackend.expectDELETE(TODO_API + '/1');

        TodoService.delete({
            id: 1
        });

        $httpBackend.flush();
    });
});
