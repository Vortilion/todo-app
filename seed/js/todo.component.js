var todo = {
    controller: 'TodoController',
    template: `
            <div class="todo"> 
                <form class="todo__form" ng-submit="$ctrl.addTodo();">
                    <input type="text" placeholder="Add new todo!" ng-model="$ctrl.newTodoTitle">
                </form>

                <ul class="todo__list">
                    <li ng-repeat="item in $ctrl.list">
                        <todo-item on-update="$ctrl.updateTodo($event, $index);" on-delete="$ctrl.deleteTodo($event, $index);" item="item" list="$ctrl.list" index="{{ $index }}"></todo-item>
                    </li>
                </ul>
                <p class="todo__remaining">
                    <span ng-show="$ctrl.getRemaining().length > 0">
                        You have {{ $ctrl.getRemaining().length }} of {{ $ctrl.list.length }} items todo!
                    </span>
                    <span ng-show="$ctrl.getRemaining().length === 0">
                        You are super productive!
                    </span>
                </p>
            </div>
            <div class="contacts">
                <contact-card>
                    <h1>Sascha Kleiber</h1>
                    <p>Description</p>
                </contact-card>
                <contact-card>
                    <h1>Tina Kleiber</h1>
                </contact-card>
            </div>
        `
};

angular
    .module('app')
    .component('todo', todo);
