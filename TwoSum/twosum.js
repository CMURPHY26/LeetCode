var twoSum = function(nums, target) {
    let targetArr = [] 
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                if(targetArr.length !== 2) {
                    targetArr.push(i)
                    targetArr.push(j)   
                }
            }   
        }
    }
    return targetArr
};