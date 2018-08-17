function TodoController(TodoService) {
    var ctrl = this;

    ctrl.addTodo = addTodo;
    ctrl.getRemaining = getRemaining;
    ctrl.updateTodo = updateTodo;
    ctrl.deleteTodo = deleteTodo;
    ctrl.$onInit = onInit; // Lifecycle hook
    ctrl.getTodos = getTodos;
    ctrl.list = [];
    ctrl.newTodoTitle = '';
    ctrl.newTodoCompleted = false;

    function onInit() {
        getTodos();
    }

    function getTodos() {
        TodoService.query().$promise.then(function (response) {
            ctrl.list = response;
        });
    }

    //////////////////////////////////////////
    function addTodo() {
        var newTodo = new TodoService();

        newTodo.completed = false;
        newTodo.title = ctrl.newTodoTitle;
        newTodo.userId = 1;

        newTodo.$save(function () {
            ctrl.list.unshift(newTodo); // called if successful
        });
        ctrl.newTodoTitle = '';
    }

    function getRemaining() {
        return ctrl.list.filter(function (item) {
            return !item.completed;
        });
    }

    function updateTodo(event, index) {
        ctrl.list[index] = event.item;
        if (!event.item.title) {
            ctrl.deleteTodo(event.item, index);
            return;
        }
        event.item.$update(function () {
            console.log('Updated!', event.item);
        });
    }

    function deleteTodo(event) {
        ctrl.list = event.list;
    }
}

angular
    .module('app')
    .controller('TodoController', TodoController);
