 module.exports = function solveSudoku(matrix) {
  
// search for an empty cell
function emptyCell(matrix){
for(let line = 0; line < 9; ++line){
  for(column = 0; column <9; ++column){
    if (matrix[line][column] === 0){
      return [line, column];
    }
  }
 }
return null;
}


// block of checks
function checks(candidate, position, matrix){

  let [line, column] = position;

// checking verticals
for (let i = 0; i < 9; ++i){
   if((matrix[i][column] === candidate) && (i !== line)){
    return false;
   }
  }

// checking lines
for (let j = 0; j < 9; ++j){
   if((matrix[line][j] === candidate) && (j !== column)){
    return false;
   }
  }

// checking blocks 3 x 3
let blockIine = Math.floor(line / 3) * 3;
let blockColumn = Math.floor(column / 3) * 3;
    
    for(i = blockIine; i < blockIine + 3; ++i){
       for(j = blockColumn; j < blockColumn + 3; ++j){
        if((matrix[i][j] === candidate) && (i !== line) && (j !== column)){
          return false;
        }
       }
    }
return true;
} 


// finding a cell solution
function solution(){
  let checPosition = emptyCell(matrix);

  if (checPosition === null){
    return true;
  }
  for(let i = 1; i < 10; i = ++i){
    let checNumber = i;
    let isValid = checks(checNumber, checPosition, matrix);
    if (isValid){
      let [isLine, isColumn] = checPosition;
      matrix [isLine][isColumn] = checNumber;
      if (solution()){
        return true;
      }
       matrix[isLine][isColumn] = 0;
    }
    }
    return false;
}


solution();
  return matrix;
  }
