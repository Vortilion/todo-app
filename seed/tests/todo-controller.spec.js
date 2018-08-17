describe('TodoController', function () {
    var $componentController, controller;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $componentController = $injector.get('$componentController');
        var TodoService = mockAndReturnService();

        controller = $componentController('todo', {
            $scope: {},
            TodoService: TodoService
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

        return TodoService;
    }

    it('should have an initial list length of 0', function () {
        expect(controller.list.length).toEqual(0);
    });

    it('should get item from service and fill controller list', function () {
        controller.getTodos();
        expect(controller.list.length).toEqual(1);
    });

    it('should add a new todo item to the empty list', function () {
        controller.addTodo();
        expect(controller.list.length).toEqual(1);
        expect(controller.list[0].title).toEqual('Example Todo');
        expect(controller.list[0].id).toEqual(1);
    });

    it('should return remaining uncompleted todo item(s)', function () {
        controller.list.push({
            id: 1,
            title: 'Example Todo',
            userId: 1,
            completed: false
        });

        expect(controller.getRemaining().length).toEqual(1);
    });


});
