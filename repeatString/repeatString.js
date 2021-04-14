const repeatString = function(word, repetitions) {

    let wordString = '';

    if (repetitions < 0){
        return 'ERROR';
    }

    for (let i=0; i<repetitions; i++){
        wordString += word;
    }

    return wordString;
}

module.exports = repeatString
