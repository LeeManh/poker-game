import type { IUser } from "types/user.type";

const calcPoint = (point: number) => {
  if (point >= 10 && point % 10 === 0) {
    return 10;
  }

  return point % 10;
};

export default calcPoint;

export const findWinner = (listUser: IUser[]) => {
  const listUserExtraPoint = listUser.map((user) => {
    const point = user.cards.reduce((sum, card) => sum + card.number, 0);

    return { ...user, point: calcPoint(point) };
  });

  const winnerPlayer = listUserExtraPoint.reduce((winner, currentPlayer) => {
    return winner.point > currentPlayer.point ? winner : currentPlayer;
  }, listUserExtraPoint[0]);

  return winnerPlayer;
};
