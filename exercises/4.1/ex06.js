let piece = 'bishop';
piece.toLocaleLowerCase();
switch(piece) {
  case 'king':
    console.log('diagonally, horizontally, or vertically');
    break;
  case 'queen':
    console.log('diagonally, horizontally, or vertically');
    break;
  case 'rook':
    console.log('horizontally or vertically');
    break;
  case 'bishop':
    console.log('diagonally');
    break;
  case 'knight':
    console.log('‘L’ shape’');
    break;
  case 'pawn':
    console.log('vertically');
    break;
}
