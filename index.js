const CONSECUTIVE= array =>  {
    let lastVal;
    let contador=0;
    array.forEach(element => {
        if (lastVal!==undefined) {
            if ((lastVal===1&&element===1)&&(lastVal===element)) {
                contador++;
            } else {
                contador=0;
            }
        } else {
            lastVal=element;
        }
    });
    console.log(contador)
}

CONSECUTIVE([1,0,1,1,1,1,0,0,0,0,1,1]);