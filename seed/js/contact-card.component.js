var contactCard = {
    bindings: {

    },
    transclude: {
        name: 'h1',
        description: '?p'
    },
    template: `
        <div>
            <span ng-transclude="name"></span>
            <div ng-transclude="description">No description</div>
        </div>
    `
};

angular
    .module('app')
    .component('contactCard', contactCard);
