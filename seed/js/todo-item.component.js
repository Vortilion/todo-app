var todoItem = {
    bindings: {
        item: '<', // one way databinding down to child component
        list: '<', // one way databinding down to child component
        index: '@',
        onUpdate: '&', // passing function for one way data binding back to parent component
        onDelete: '&' // passing function for one way data binding back to parent component
    },
    controller: 'TodoItemController',
    template: `
        <div>
            <input type="checkbox" id="todo-{{ $ctrl.index }}" ng-model="$ctrl.item.completed" ng-change="$ctrl.toggleState();">
            <label class="toggle" for="todo-{{ $ctrl.index }}"></label>
            <p ng-dblclick="showEditField = true;" ng-hide="showEditField">
                {{ $ctrl.item.title }}
            </p>
            <div ng-show="showEditField">
                <input type="text" ng-model="$ctrl.item.title" ng-blur="$ctrl.updateTodo(); showEditField = false;" todo-autofocus="showEditField">
            </div>
            <a href="" ng-click="$ctrl.deleteTodo($ctrl.item.id);">&#215;</a>
        </div>
    `
};


angular
    .module('app')
    .component('todoItem', todoItem);
