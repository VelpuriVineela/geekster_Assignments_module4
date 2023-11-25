Array.prototype.mineReduce = function (callback, seed){
    for(let i = 0; i < this.length; i++){
        if(undefined === seed){
            seed = this[i];
        }
        else {
            seed = callback(seed, this[i], i, this);
        }
    }
    return seed;
};

const nums = [1, 2, 3, 4, 5];
const result2 = nums.mineReduce((acc, value) => acc + value, 0);
console.log(result2);

const result1 = nums.reduce((acc, value) => acc + value, 0);
console.log(result1);