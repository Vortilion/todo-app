function TodoItemController(TodoService) {
    var ctrl = this;

    ctrl.updateTodo = updateTodo;
    ctrl.deleteTodo = deleteTodo;
    ctrl.toggleState = toggleState;
    ctrl.$onChanges = onChanges; // Lifecycle hook
    ctrl.$onInit = onInit; // Lifecycle hook


    function onInit() {
        ctrl.singleTodoItem = ctrl.item; // would not work outside of $onInit! (since AngularJS 1.6)
    }


    //////////////////////////////////////////
    function deleteTodo(id) {
        TodoService.delete({
            id: id
        });

        ctrl.list = ctrl.list.filter(function (item) {
            return item.id !== ctrl.singleTodoItem.id;
        });

        ctrl.onDelete({
            $event: {
                list: ctrl.list,
            }
        });
    }

    function toggleState() {
        TodoService.update(ctrl.singleTodoItem).then(
            function () {},
            function () {
                ctrl.singleTodoItem.completed = !ctrl.singleTodoItem.completed;
            }
        );
    }

    function updateTodo() {
        ctrl.onUpdate({
            $event: {
                item: ctrl.singleTodoItem,
            },
            index: ctrl.index,
        });
    }

    function onChanges(changes) {
        // breaks the binding
        if (changes.item) {
            ctrl.singleTodoItem = angular.copy(ctrl.item);
        }
        if (changes.list) {
            ctrl.singleTodoItem = angular.copy(ctrl.list);
        }
    }
}

angular.module('app').controller('TodoItemController', TodoItemController);
