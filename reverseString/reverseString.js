const reverseString = function(word) {

    let wordArray = word.split('');

    let reverseWord = '';

    for (let i=0; i<word.length; i++){
        reverseWord += wordArray[word.length-i-1];
    }

    return reverseWord;
}

module.exports = reverseString
