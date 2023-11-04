let numOfRows = 5;
let initialSpace = 0;
let limit = 2 * numOfRows - 1

for(let i = 1; i <= numOfRows; i++){
    let line = '';
    for(let j = 1; j <= initialSpace; j++){
        line += ' ';
    }
    for(let num = 1; num <= limit; num++){
       line += num + ' ';
    }
    console.log(line);
    initialSpace += 2;
    limit -= 2;
}