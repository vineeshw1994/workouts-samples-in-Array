const array = [1,2,3,4,5,3,2,1];
let count=0;
for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        if(array[i]===array[j] && i!=j){
            count ++;
            break;
        }
    }
    if(count===1){
        console.log(array[i])
        count = 0;
    }
}