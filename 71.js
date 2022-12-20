function solve(nums, div) {
    const arr = []
    for (let i=0;i<nums.length;i++){
        if(nums[i]%div===0){
            arr.push(nums[i])
        } else {
            let temp = nums[i]
            let add = 0
            while(temp%div!==0){
                temp-=1
                add+=1
            }
            arr.push(nums[i]+add)
        }
    }
    return arr
}