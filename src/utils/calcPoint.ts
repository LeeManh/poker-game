import type { IUser } from "types/user.type";

const calcPoint = (point: number) => {
  if (point >= 10 && point % 10 === 0) {
    return 10;
  }

  return point % 10;
};

export default calcPoint;

export const findWinner = (listUser: IUser[]) => {
  let maxPoint = 0;
  let arrayWinners: IUser[] = [];

  for (let index = 0; index < listUser.length; index++) {
    const user = listUser[index];

    const point = calcPoint(
      user.cards.reduce((sum, card) => sum + card.number, 0)
    );

    if (index === 0) {
      maxPoint = point;
      arrayWinners.push(user);
      continue;
    }

    if (point === maxPoint) {
      arrayWinners.push(user);
    } else if (point > maxPoint) {
      arrayWinners = [];
      arrayWinners.push(user);
      maxPoint = point;
    }
  }

  return arrayWinners;
};
