describe('Custom Filters', function(){ //describe your object type
    beforeEach(module('myApp')); //load module
    describe('cardtype detection',function(){ //describe your app name
        var customfilter;
        beforeEach(inject(function($filter){ //initialize your filter
            customfilter = $filter('cardtype',{});
        }));
        it('Should return image path', function(){  //write tests
            expect(customfilter('rahil')).toBe('images/default.png'); //pass
            expect(customfilter('5245080001991500')).toBe('images/MasterCard.png'); //pass
        	expect(customfilter('4592050000915679')).toBe('images/visa.png'); //pass
        
        });
    });
});