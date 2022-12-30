import type { IUser } from "types/user.type";
import Card from "components/Card";
import { Button, MoneyBets, Point } from "globalStyles.styled";
import cssVariables from "constants/css";
import { Container, Footer, ListCardUser, MoneyUser } from "./User.styled";
import type { Variants } from "framer-motion";
import { ICard } from "types/card.type";
import calcPoint from "utils/calcPoint";

interface IUserProps {
  user: IUser;
  bets: number;
  winnerPlayers: IUser[];
  isFlipCard: boolean;
  isEndDistributeCards: boolean;
  isStartDistributeCards: boolean;
  handleStartDistributeCards: () => void;
  handleFlipCard: () => void;
}

const User = (props: IUserProps) => {
  const {
    user,
    bets,
    winnerPlayers,
    handleStartDistributeCards,
    handleFlipCard,
    isFlipCard,
    isEndDistributeCards,
    isStartDistributeCards,
  } = props;
  const pointUser = user.cards.reduce(
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
    <Container>
      <ListCardUser>
        {isFlipCard && (
          <>
            {user.cards.map((card, index) => (
              <Card key={index} card={card} isFlipCard={isFlipCard} />
            ))}
          </>
        )}

        <Point variants={pointVariants} animate={isFlipCard ? "show" : "hide"}>
          {calcPoint(pointUser)} điểm
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

      <Footer>
        <Button
          width="12rem"
          bg={cssVariables.colors.green}
          shadow={cssVariables.colors["green-dark"]}
          onClick={handleFlipCard}
          disabled={
            !isStartDistributeCards ||
            (isStartDistributeCards && !isEndDistributeCards)
          }
        >
          Lật bài
        </Button>
        <MoneyUser>{user.money}</MoneyUser>
        <Button width="12rem" onClick={handleStartDistributeCards}>
          Phát bài
        </Button>
      </Footer>
    </Container>
  );
};

export default User;
