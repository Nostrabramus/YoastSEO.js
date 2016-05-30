var getSentences = require( "../../js/researches/countSentencesFromText.js" );
var Paper = require( "../../js/values/Paper" );

describe("counts words in sentences from text", function(){
	it("returns sentences with question mark", function () {
		var paper = new Paper("Hello. How are you? Bye");
		expect( getSentences( paper )[0].sentenceLength ).toBe( 1 );
		expect( getSentences( paper )[1].sentenceLength ).toBe( 3 );
		expect( getSentences( paper )[2].sentenceLength ).toBe( 1 );
	});
	it("returns sentences with exclamation mark", function () {
		paper = new Paper("Hello. How are you! Bye");
		expect( getSentences( paper )[0].sentenceLength ).toBe( 1 );
		expect( getSentences( paper )[1].sentenceLength ).toBe( 3 );
		expect( getSentences( paper )[2].sentenceLength ).toBe( 1 );
	});
	it("returns sentences with many spaces", function () {
		paper = new Paper("Hello.        How are you! Bye");
		expect( getSentences( paper )[0].sentenceLength ).toBe( 1 );
		expect( getSentences( paper )[1].sentenceLength ).toBe( 3 );
		expect( getSentences( paper )[2].sentenceLength ).toBe( 1 );
	})
});