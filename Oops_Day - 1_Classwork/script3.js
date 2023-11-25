const nums = [1, 2, 3, 4, 5];

Array.prototype.mineFilter = function (callback) {
    const res = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            res.push(this[i]);
        }
    }
    return res;
};

const ans = nums.mineFilter((elm, i, array) => elm >= 2);
console.log(ans);

let res = nums.filter((elm, i, array) => elm * i >= 2);
console.log(res);

