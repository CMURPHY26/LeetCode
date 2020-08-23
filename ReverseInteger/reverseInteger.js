var reverse = function(x) {
    let numArr = x.toString().split("");
    const limit = 2147483648;
    const negLimit = -2147483648;
    if(numArr[numArr.length-1] == 0) {
        numArr.pop();
    }
    numArr = numArr.reverse();
    // console.log(numArr)
    if(numArr[numArr.length-1] == "-") {
        numArr.pop();
        numArr.unshift("-")
    }
    let reverseNum = numArr.join("").toString();
    reverseNum = Number(reverseNum);

    if(reverseNum < 0 && negLimit > reverseNum) {
        return 0;
    } else if (reverseNum > limit) {
        return 0
    } else if(reverseNum < limit) {
        return reverseNum;
    } 
    
};