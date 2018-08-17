function removeVowels() {
    return function (value) {
        return value.replace(/[aeiou]/gi, '');
    };
}

angular
    .module('app')
    .filter('removeVowels', removeVowels);
