describe('RemoveVowelsFilter', function () {
    var $filter;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $filter = $injector.get('$filter');
    }));

    it('should remove the vowels of a word', function () {
        var result = $filter('removeVowels')('asldkfjasldkjhasd');

        expect(result).toEqual('sldkfjsldkjhsd');
    });
});
