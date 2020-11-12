function sorting(nums){
    if(nums.length <= 2){
        return nums;
    }

    var imp_nums = [];
    var par_nums = [];

    for (var i= 0 ;i<nums.length ; i++) {
        if (i % 2 == 0) {
            par_nums.push(nums[i]);
        } else {
            imp_nums.push(nums[i]);
        }
    }
   

    return [...sorting(par_nums), ...sorting(imp_nums)]

}

function imparparsorting(data){

    ans = sorting(data.arrayNum)

    return ans

}

module.exports = imparparsorting;