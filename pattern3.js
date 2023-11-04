let noOfRows = 5;
let intialSpace = 8;

for(let i = 1; i <= noOfRows; i++){
    let line = '';
    for(let num = i; num >= 1; num--){
        line += num + ' ';
    }
    console.log(line);
    intialSpace -= 2;
}

intialSpace = 2;

for(let i = 1; i <= 4; i++){
    let line = '';
    for(let num = noOfRows - i; num >= 1; num--){
        line += num + ' ';
    }
    console.log(line);
    intialSpace += 2;
}