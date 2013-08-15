// Write code here that will find the solution count for a board of any size.
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
window.findNRooksSolution = function(n){
  var board = new Board({n:n});
  var results = [];
//displayBoard(board.rows());
var checkRow = function(boardcopy, row, column){
    //for( var column = 0; column < boardcopy.rows().length; column++ ){
      debugger;
      boardcopy.togglePiece(row, column);         // toggle piece
      displayBoard(boardcopy.rows());
      if(!boardcopy.hasAnyRooksConflicts()){      // check board; if no conflicts
        debugger;
        if ( row +1 < boardcopy.rows().length){   // if not last row
          row +=1;
          for (var i = 0; i < n; i++) {
            //var prevState = boardcopy;
            checkRow(boardcopy, row, i);
          }
          boardcopy.togglePiece(row-1, column);
          //checkRow(boardcopy, row, 0);
        } else{                                   // if last row
          debugger;
          results.push(board.rows());
          console.log(results);
          boardcopy.togglePiece(row, column);
          //boardcopy = prevState;
        }
      } else {                                    // if there's a conflict
        debugger;
        boardcopy.togglePiece(row, column);
//        boardcopy = prevState;
        //checkRow(boardcopy,row, column+1);
        }
      //}     For loop

  };
  
  checkRow(board, 0, 0);
    checkRow(board, 0, 1);
      checkRow(board, 0, 2);
        checkRow(board, 0, 3);
};




/*
toggle a cell,
pass the board - checks, if conflict, return false, if no conflict

*/
  /*
  board.togglePiece(1,1);
  console.log(boardState);
  displayBoard(boardState);
*/
  // var currentRow = 0;
  // var checkRow = function(rowNum) {
//     debugger;
//     for (var i = 0; i < n; i++){  // i is column number
//       board.togglePiece(rowNum, i);
//       if (!board.hasAnyRooksConflicts()){    // if no conflicts w/ toggled piece
//         if (currentRow < n) {               // if it's not the last row
//           currentRow++;
//         debugger;
//           checkRow(currentRow);
//         } else {                            // if it is the last row
//           debugger;
//           results.push(board.rows());
//           board.togglePiece(rowNum, i);
//         }
//       } else {                              // if there's a conflict
//       debugger
//         board.togglePiece(rowNum, i);
//       }
//     }
//   };
//   checkRow( 0);
//   return results;
//   //console.log('Single solution for ' + n + ' rooks:', solution);
// //  return solution;
// };

/*

for each recursion, want to know
do you have any conflicts, and would your kids answer 

*/

window.countNRooksSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', solution);
  return solution;
};

window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// This function uses a board visualizer lets you view an interactive version of any piece matrix.

window.displayBoard = function(matrix){
  $('body').html(
    new BoardView({
      model: new Board(matrix)
    }).render()
  );
};
