 let numOfRows = 5;
 let intialSpace = 8;

 for(let i = 1; i <= numOfRows; i++){
    let line = '';
    for(let j = 1; j <= intialSpace; j++){
        line += ' ';
    }
    for(let num = 1; num <= i; num++){
        line += num + ' ';
    }
    console.log(line);
    intialSpace -= 2;
 }

 intialSpace = 2;

 for(let i = 1; i <= 4; i++){
    let line = '';
    for(let i = 1; i <= intialSpace; i++){
      line += ' ';
    }
    for(let num = 1; num <= numOfRows - i; num++){
      line += num + ' ';
    }
    console.log(line);
    intialSpace += 2;
 }