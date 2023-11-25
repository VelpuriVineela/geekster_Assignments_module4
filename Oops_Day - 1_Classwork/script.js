const arr = [1, 2, 3, 4, 5];
Array.prototype.mineMap = function (callback) {
    const result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
};

const updated_arr = arr.mineMap((ele) => ele + 2);
console.log(updated_arr);
const updated_arr1 = arr.map((elm) => elm + 2);
console.log(updated_arr1);
