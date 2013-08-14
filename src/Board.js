(function(){

  window.Board = Backbone.Model.extend({

    initialize: function(params){
      if (params.n) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function(){
      return _(_.range(this.get('n'))).map(function(rowIndex){
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex){
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex){
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex){
      return colIndex + rowIndex;
    },


    hasAnyRooksConflicts: function(){
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex){
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function(){
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex){
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


    // todo: fill in all these functions - they'll help you!

    hasRowConflictAt: function(rowIndex){
      var count = 0;
      for (var i = 0; i < this.attributes[rowIndex].length; i++) {
        if (this.attributes[rowIndex][i] === 1) {
          count++;
        }
      }
      if (count > 1) {
        return true;
      }
      return false;
    },

    hasAnyRowConflicts: function(){
      for (var i = 0; i < this.attributes.n; i++) {
        if (this.hasRowConflictAt(i)) {
          return true;
        }
      }
      return false; // fixme
    },

    hasColConflictAt: function(colIndex){
      var count = 0;
      for (var i =0; i < this.attributes.n; i++) {
        if (this.attributes[i][colIndex] === 1) {
          count++;
        }
      }
      if (count > 1) {
        return true;
      }
      return false; // fixme
    },

    hasAnyColConflicts: function(){
      for (var i = 0; i < this.attributes[0].length; i++) {
        if (this.hasColConflictAt(i)) {
          return true;
        }
      }
      return false; // fixme
    },

    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow){
      var colNum = majorDiagonalColumnIndexAtFirstRow;
      var count = 0;
      for (var i = 0; i < this.attributes.n; i++) {
        if ((colNum+i > -1) && this.attributes[i][colNum+i] === 1) {
          count++;
        }
      }
      if (count > 1) {
        return true;
      }
      return false; // fixme
    },

    hasAnyMajorDiagonalConflicts: function(){
      for (var i = -(this.attributes.n+1); i < this.attributes.n; i++) {
        if (this.hasMajorDiagonalConflictAt(i)) {
          return true;
        }
      }
      return false; // fixme
    },

    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow){
      var colNum = minorDiagonalColumnIndexAtFirstRow;
      var count = 0;
      for (var i = 0; i<this.attributes.n; i++){
        if(this._isInBounds(i, colNum - i) && this.attributes[i][colNum - i] === 1){
          count++;
        }
      }
      if (count>1){
        return true;
      }
      return false; // fixme
    },

    hasAnyMinorDiagonalConflicts: function(){
      for (var i = 0; i < 2*(this.attributes.n)-1; i++ ){
        if ( this.hasMinorDiagonalConflictAt(i)){
          return true;
        }
      }
      return false; // fixme
    }

  });

  var makeEmptyMatrix = function(n){
    return _(_.range(n)).map(function(){
      return _(_.range(n)).map(function(){
        return 0;
      });
    });
  };

}());
