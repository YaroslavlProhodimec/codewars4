function missingNo(nums) {
    for(let i =0;i<=nums.sort((a,b)=>a-b).length;i++){
        if(nums[i]!==i) return i
    }
}