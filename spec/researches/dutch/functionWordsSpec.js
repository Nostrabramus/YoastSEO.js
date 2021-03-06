let functionWords = require( "../../../js/researches/dutch/functionWords.js" );

describe('a test for the existence of the properties of functionWords', function() {
	it('returns true for all of its properties', function() {
		expect ( functionWords().hasOwnProperty('articles') ).toBe( true );
		expect ( functionWords().hasOwnProperty('personalPronouns') ).toBe( true );
		expect ( functionWords().hasOwnProperty('prepositions') ).toBe( true );
		expect ( functionWords().hasOwnProperty('demonstrativePronouns') ).toBe( true );
		expect ( functionWords().hasOwnProperty('conjunctions') ).toBe( true );
		expect ( functionWords().hasOwnProperty('verbs') ).toBe( true );
		expect ( functionWords().hasOwnProperty('quantifiers') ).toBe( true );
		expect ( functionWords().hasOwnProperty('relativePronouns') ).toBe( true );
		expect ( functionWords().hasOwnProperty('passiveAuxiliaries') ).toBe( true );
		expect ( functionWords().hasOwnProperty('transitionWords') ).toBe( true );
		expect ( functionWords().hasOwnProperty('miscellaneous') ).toBe( true );
		expect ( functionWords().hasOwnProperty('pronominalAdverbs') ).toBe( true );
		expect ( functionWords().hasOwnProperty('interjections') ).toBe( true );
		expect ( functionWords().hasOwnProperty('reflexivePronouns') ).toBe( true );
		expect ( functionWords().hasOwnProperty('reciprocalPronouns') ).toBe( true );
		expect ( functionWords().hasOwnProperty('all') ).toBe( true );
	});

	it('returns false for a non-existing property', function() {
		expect ( functionWords().hasOwnProperty('fakeProperty') ).toBe( false );
	});
});
