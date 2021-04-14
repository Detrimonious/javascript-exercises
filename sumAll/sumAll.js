const sumAll = function(begin, end) {

    if (begin < 0 || end < 0 || typeof begin != 'number' || typeof end != 'number') return 'ERROR';

    let smallerInt;
    let largerInt;
    let sumInt = 0;

    if (begin < end){
        smallerInt = begin;
        largerInt = end;
    }
    else{
        smallerInt = end;
        largerInt = begin;
    }

    for (i=smallerInt; i<largerInt+1; i++){
        sumInt += i;
    }

    return sumInt;

}

module.exports = sumAll
