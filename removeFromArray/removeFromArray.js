const removeFromArray = function(theArray, ...args) {

    for (let i=0; i<args.length; i++){
        for (let j=0; j<theArray.length; j++){
            if (theArray[j] === args[i]){
                theArray.splice(j,1);
            }
        }
    }

    return theArray;

}

module.exports = removeFromArray
