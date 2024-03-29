// Write code here that will find the solution count for a board of any size.
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)


window.findNRooksSolution = function(n){
  var board = new Board({n:n});
  var results = [];
  var columnArray = [];
  for(var i=0; i<n; i++){
    columnArray[i] = 0;
  }


var freeCol = function(column){
  if (columnArray[column] === 1){
    return false;
  }
  return true;
};



  var checkRow = function(row, column){
    debugger;
    if(freeCol(column)){
      board.togglePiece(row, column);         // toggle piece
      columnArray[column] = 1;
      displayBoard(board.rows());
      debugger;
   // check board; if no conflicts
      if ( row +1 < board.rows().length){   // if not last row
        row +=1;
        for (var i = 0; i < n; i++) {
          checkRow(row, i);
        }
        debugger;
      board.togglePiece(row-1, column);
      debugger;
      } else{                                   // if last row
        results.push(board.rows());
        console.log(results);
        board.togglePiece(row, column);
        debugger;
      }
    }
  };
  checkRow(0, 0);
  return results[0];
};




/*window.findNRooksSolution = function(n){
  var board = new Board({n:n});
  var results = [];
  var checkRow = function(boardcopy, row, column){
    boardcopy.togglePiece(row, column);         // toggle piece
    displayBoard(boardcopy.rows());
    if(!boardcopy.hasAnyRooksConflicts()){      // check board; if no conflicts
      if ( row +1 < boardcopy.rows().length){   // if not last row
        row +=1;
        for (var i = 0; i < n; i++) {
          checkRow(boardcopy, row, i);
        }
        boardcopy.togglePiece(row-1, column);
      } else{                                   // if last row
        results.push(board.rows());
        console.log(results);
        boardcopy.togglePiece(row, column);
      }
    } else {                                    // if there's a conflict
      boardcopy.togglePiece(row, column);
      }
  };
  checkRow(board, 0, 0);
  return results[0];
};

window.countNRooksSolutions = function(n){
  var board = new Board({n:n});
  var results = 0;
  if (n === 0 || n === 1) {
    return 1;
  }
  var checkRow = function(boardcopy, row, column){
    boardcopy.togglePiece(row, column);         // toggle piece
    displayBoard(boardcopy.rows());
    if(!boardcopy.hasAnyRooksConflicts()){      // check board; if no conflicts
      if ( row +1 < boardcopy.rows().length){   // if not last row
        row +=1;
        for (var i = 0; i < n; i++) {
          checkRow(boardcopy, row, i);
        }
        boardcopy.togglePiece(row-1, column);
      } else{                                   // if last row
        results++;
        console.log(results);
        boardcopy.togglePiece(row, column);
      }
    } else {                                    // if there's a conflict
      boardcopy.togglePiece(row, column);
      }
  };
  for (var i = 0; i < n; i++) {
    checkRow(board, 0, i);
  }
  return results;
};
window.findNQueensSolution = function(n){
  var board = new Board({n:n});
  var results = [];
  var checkRow = function(row, column){
    board.togglePiece(row, column);         // toggle piece
    displayBoard(board.rows());
    if(!board.hasAnyQueensConflicts()){      // check board; if no conflicts
      if ( row +1 < board.rows().length){   // if not last row
        row +=1;
        for (var i = 0; i < n; i++) {
          debugger
          checkRow(row, i);
        }
        board.togglePiece(row-1, column);
      } else{                                   // if last row
        results.push(board.rows());
        console.log(results);
        board.togglePiece(row, column);
      }
    } else {                                    // if there's a conflict
      board.togglePiece(row, column);
      }
  };
  checkRow(0, 0);
  checkRow(0, 1);
  checkRow(0, 2);
  checkRow(0, 3);
  return results[0];
};


window.countNQueensSolutions = function(n){
  var board = new Board({n:n});
  var results = 0;
  if (n === 0 || n === 1) {
    return 1;
  }
  var checkRow = function(row, column){
    board.togglePiece(row, column);         // toggle piece
    displayBoard(board.rows());
    if(!board.hasAnyQueensConflicts()){      // check board; if no conflicts
      if ( row +1 < board.rows().length){   // if not last row
        row +=1;
        for (var i = 0; i < n; i++) {
          checkRow(row, i);
        }
        board.togglePiece(row-1, column);
      } else{                                   // if last row
        results++;
        board.togglePiece(row, column);
      }
    } else {                                    // if there's a conflict
      board.togglePiece(row, column);
      }
  //return results;
  };
  for (var j = 0; j < n; j++) {
    checkRow(0, j);
  }
  return results;
};


// This function uses a board visualizer lets you view an interactive version of any piece matrix.
*/
window.displayBoard = function(matrix){
  $('body').html(
    new BoardView({
      model: new Board(matrix)
    }).render()
  );
};


