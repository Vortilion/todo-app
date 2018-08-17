describe('TodoItemController', function () {
    var $componentController, controller, item = {
        id: 1,
        title: 'Example Todo',
        userId: 1
    };

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $componentController = $injector.get('$componentController');
        var TodoService = mockAndReturnService();

        controller = $componentController('todoItem', {
            $scope: {},
            TodoService: TodoService
        }, {
            item: item
        });
    }));

    function mockAndReturnService() {
        // mock the todo service
        var TodoService = function () {};
        TodoService.prototype.$save = function () {
            controller.list.unshift({
                id: 1,
                title: 'Example Todo',
                userId: 1
            });
        };
        TodoService.query = function () {
            return {
                $promise: { // mock the promise object $resource gives us
                    then: function (callback) {
                        callback([{
                            id: 1,
                            title: 'Example Todo',
                            userId: 1
                        }]); // callback with fake data
                    }
                }
            };
        };

        TodoService.delete = function () {
            return true;
        };

        return TodoService;
    }

    it('should initialize with a single todo item', function () {
        controller.$onInit(); // necessary because our component isn't actually live and therefore doesn't get the bindings which does not call the lifecycle hooks
        expect(controller.singleTodoItem).toEqual(item);
    });

});
