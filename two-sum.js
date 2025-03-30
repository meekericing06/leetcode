/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i=0; i<nums.length;i++){
        for(var j=0; j<nums.length; j++){
            if(i!=j && nums[i]+nums[j] === target){
                return [i,j];
            }
        }
    }
};

var twoSum = functionoofn(nums, target) {
    var map = new Map() ;
    for(var i=0; i<nums.length;i++){
        map.set(nums[i],i);
    }
    for(var i =0; i<nums.length ; i++){
        if(map.has(target-nums[i])){
           if(map.get(target-nums[i]) != i){
            return [i,map.get(target-nums[i])];
           }
        }
    }
};