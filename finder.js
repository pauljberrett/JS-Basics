
//Only use on objects with in
function finder(str, array){
    for(var i in array){
        if(str === array[i]){
            return true;
        }
    }
    return false;
}

var array = ['billy', 'bob', 'joe', 'brown'];
var str = 'joe';
console.log(finder(str, array));

var fs = 'jake?';
console.log(finder(fs, array));


//best practice for array
function finder(str, array){
    if(array.indexOf(str)>-1){
        return true;
    }
    return false;
}

console.log(finder(str, array));
console.log(finder(fs, array));

//for loop that is correct for arrays

function finder(str, array){
    for(var i=0;i<array.length;i++){
        if(str === array[i]){
            return true;
        }
    }
    return false;
}
console.log(finder(str, array));
console.log(finder(fs, array));