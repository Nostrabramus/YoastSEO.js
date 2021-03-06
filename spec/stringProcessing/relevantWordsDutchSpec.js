let WordCombination = require( "../../js/values/WordCombination" );
let relevantWords = require( "../../js/stringProcessing/relevantWords" );
let getRelevantWords = relevantWords.getRelevantWords;
let dutchFunctionWords = require( "../../js/researches/dutch/functionWords.js" )().all;

describe( "gets Dutch word combinations", function() {
	it( "returns word combinations", function() {
		let input = "Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn" +
			" heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen" +
			" met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden." +
			" Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel" +
			" veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel" +
			" veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit" +
			" zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel" +
			" zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel" +
			" veel woorden. Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden." +
			" Dit zijn heel veel zinnen met heel veel woorden. Dit zijn heel veel zinnen met heel veel woorden.";
		let expected = [
			new WordCombination( [ "zinnen", "met", "heel", "veel", "woorden" ], 23, dutchFunctionWords ),
			new WordCombination( [ "heel", "veel", "zinnen", "met", "heel" ], 23, dutchFunctionWords ),
			new WordCombination( [ "heel", "veel", "zinnen" ], 23, dutchFunctionWords ),
			new WordCombination( [ "zinnen", "met", "heel" ], 23, dutchFunctionWords ),
			new WordCombination( [ "heel", "veel", "woorden" ], 23, dutchFunctionWords ),
			new WordCombination( [ "zinnen" ], 23, dutchFunctionWords ),
			new WordCombination( [ "woorden" ], 23, dutchFunctionWords ),
		];

		// Make sure our words aren't filtered by density.
		spyOn( WordCombination.prototype, "getDensity" ).and.returnValue( 0.01 );

		let words = getRelevantWords( input, "nl_NL" );

		words.forEach( function( word ) {
			delete( word._relevantWords );
		});

		expect( words ).toEqual( expected );
	});
});

