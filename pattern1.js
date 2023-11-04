let numOfRows = 5;
let initialSpace = 8;

for(let i = 1; i <= numOfRows; i++){
    let line = '';
    for(let j = 1; j <= initialSpace; j++){
        line += ' ';
    }
    for(let num = 1; num <= 2 * i - 1; num++){
       line += num + ' ';
    }
    console.log(line);
    initialSpace -= 2;
}