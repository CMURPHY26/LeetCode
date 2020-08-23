var isPalindrome = function(x) {
    
    if(x.toString().split("").reverse().join("") === x.toString()) {
        return true
    } else {
        return false
    }
    
};