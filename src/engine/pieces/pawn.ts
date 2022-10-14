import Board from '../board'
import Player from '../player'
import { Piece } from './piece'
import Square from '../square'

export class Pawn extends Piece {
  constructor(player: Player) {
    super(player)
  }

  getAvailableMoves(board: Board): Square[] {
    const currentSquare = board.findPiece(this);

    const oneSpace = Square.at(
      currentSquare.row + (this.player === Player.WHITE ? 1 : -1), 
      currentSquare.col,
    )

    const twoSpace = Square.at(
      currentSquare.row + (this.player === Player.WHITE ? 2 : -2), 
      currentSquare.col,
    )

    const firstMove = currentSquare.row === 1 && this.player === Player.WHITE || currentSquare.row === 6 && this.player === Player.BLACK

    if (firstMove) {
      return [ oneSpace, twoSpace ]
    }

    return [ oneSpace ]
  }
}