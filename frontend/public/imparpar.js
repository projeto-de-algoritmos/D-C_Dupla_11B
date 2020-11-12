function sorting(nums){

    if(nums.len() <= 2){
        return nums;
    }

    imp_nums = [];
    par_nums = [];

    for (i in range(nums.len())) {
        if (i % 2 == 0) {
            par_nums.add(nums[i]);
        } else {
            imp_nums.add(nums[i]);
        }
    }

    return sorting(par_nums) + sorting(imp_nums);

}

function imparparsorting(a, arrayNum){

    ans = sorting(arrayNum)

    return ans

}