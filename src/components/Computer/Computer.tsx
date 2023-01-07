import styled, { css } from "styled-components";

import type { IUser, Position } from "types/user.type";
import { ListCardUser } from "components/User/User.styled";
import Card from "components/Card";
import { ICard } from "types/card.type";
import { MoneyBets, Point } from "globalStyles.styled";
import calcPoint from "utils/calcPoint";
import { Variants } from "framer-motion";

const Container = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  ${(props: { position: Position }) => {
    switch (props.position) {
      case "left":
        return css`
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
          flex-direction: row-reverse;
        `;
      case "right":
        return css`
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
        `;
      case "top":
        return css`
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          flex-direction: column-reverse;
        `;

      default:
        break;
    }
  }}
`;
const InforWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const AvatarWrap = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Money = styled.div`
  color: yellow;
  font-weight: bold;
  text-transform: capitalize;
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
  text-transform: capitalize;
`;

interface IComputer {
  bets: number;
  user: IUser;
  isFlipCard: boolean;
  winnerPlayers: IUser[];
}

const Computer = ({ user, isFlipCard, winnerPlayers, bets }: IComputer) => {
  const pointComputer = user.cards.reduce(
    (sum: number, card: ICard) => sum + card.number,
    0
  );

  const pointVariants: Variants = {
    hide: {
      opacity: 0,
      y: 50,
      display: "none",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const moneyBetsVariants: Variants = {
    hide: {
      opacity: 0,
      y: 100,
      display: "none",
    },
    show: {
      opacity: 1,
      y: 50,
      transition: {
        duration: 1,
      },
    },
  };
  const checkIsWinner = () =>
    winnerPlayers.some((winnerPlayer) => winnerPlayer.id === user.id);

  return (
    <Container position={user.position}>
      <ListCardUser>
        {isFlipCard && (
          <>
            {user.cards.map((card, index) => (
              <Card key={index} card={card} isFlipCard={isFlipCard} />
            ))}
          </>
        )}
        <Point variants={pointVariants} animate={isFlipCard ? "show" : "hide"}>
          {calcPoint(pointComputer)} điểm
        </Point>
        <MoneyBets
          variants={moneyBetsVariants}
          animate={isFlipCard ? "show" : "hide"}
        >
          {checkIsWinner()
            ? `+ ${(bets * 3) / winnerPlayers.length} `
            : `- ${bets}`}
        </MoneyBets>
      </ListCardUser>
      <InforWrap>
        <Name>{user.name}</Name>
        <AvatarWrap>
          <AvatarImage src={user.avatar} alt={user.name} />
        </AvatarWrap>
        <Money>{user.money}</Money>
      </InforWrap>
    </Container>
  );
};

export default Computer;
