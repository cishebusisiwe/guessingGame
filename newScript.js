let name="Aza Pupu"

function strReversed(txt) {
    let arr1 =""
    let newStr = txt.split("")
    for(let i = 0; i < newStr.length; i++){
        arr1 = newStr[i] +arr1
    }

   
    return arr1
}
 
console.log(strReversed ("Aza Pup"))