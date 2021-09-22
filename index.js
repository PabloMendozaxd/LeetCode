function countOnes(array){
    let lastVal;
    let contador=0;
    array.forEach(element => {
        if (lastVal!==undefined) {
            ((lastVal===1&&element===1)&&(lastVal===element))?contador++:contador=0;
        } else {
            lastVal=element;
        }
    });
    return contador;
}

module.exports=countOnes;