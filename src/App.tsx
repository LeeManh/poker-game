import { useEffect, useState } from "react";
import styled from "styled-components";

import type { IUser } from "types/user.type";

import User from "components/User";
import Computer from "components/Computer";
import Tabel from "components/Tabel";
import { Button } from "globalStyles.styled";
import { getRandomCards } from "utils/getDeckOfCard";
import { findWinner } from "utils/calcPoint";
import { motion, Variants } from "framer-motion";
import cssVariables from "constants/css";
import { dataUsers } from "data/users";

const Container = styled.div`
  position: relative;
  max-width: 1366px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
`;
const Menu = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  padding: 1rem;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const InforGame = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 90;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
`;
const BetMoneyWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Notification = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
const NotificationWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const WinnerUser = styled(motion.div)`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5,
    -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5,
    -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
`;
const NewGameButton = styled(Button)``;
const QuitGameButton = styled(Button)``;

const App = () => {
  const [isStartDistributeCards, setIsStartDistributeCards] = useState(false);
  const [isEndDistributeCards, setIsEndDistributeCards] = useState(false);
  const [isFlipCard, setIsFlipCard] = useState(false);
  const [isStartGame, setIsStartGame] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const bets = 100;

  const [listUser, setListUser] = useState<IUser[]>(dataUsers as IUser[]);

  const [winnerPlayers, setWinnerPlayers] = useState<IUser[]>([]);

  const variants: Variants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const handleStartDistributeCards = () => {
    if (isFlipCard) return;

    setIsStartDistributeCards(true);
    setWinnerPlayers([]);

    const listCardsRandom = getRandomCards();
    const cardsUser = listCardsRandom.slice(0, 3);
    const cardsComputer1 = listCardsRandom.slice(3, 6);
    const cardsComputer2 = listCardsRandom.slice(6, 9);
    const cardsComputer3 = listCardsRandom.slice(9, 12);

    const _listUser: IUser[] = JSON.parse(JSON.stringify(listUser));

    _listUser[0].cards = cardsUser;
    _listUser[1].cards = cardsComputer1;
    _listUser[2].cards = cardsComputer2;
    _listUser[3].cards = cardsComputer3;

    setListUser(_listUser);
  };

  const handleFlipCard = () => {
    if (isFlipCard) return;

    setIsFlipCard(true);

    const arrayWinners = findWinner(listUser);

    const idsWinners = arrayWinners.map((user) => user.id);

    let _listUser: IUser[] = JSON.parse(JSON.stringify(listUser));

    _listUser = _listUser.map((user) =>
      idsWinners.includes(user.id)
        ? { ...user, money: (user.money += (bets * 3) / arrayWinners.length) }
        : { ...user, money: (user.money -= bets) }
    );

    setListUser(_listUser);
    setWinnerPlayers(arrayWinners);

    setTimeout(() => {
      setShowNotification(true);
    }, 3000);
  };

  const handleNewRound = () => {
    setWinnerPlayers([]);
    setShowNotification(false);
    setIsFlipCard(false);
    setIsStartDistributeCards(false);
    setIsEndDistributeCards(false);
  };

  const resetNewGame = () => {
    setIsStartDistributeCards(false);
    setWinnerPlayers([]);
    setShowNotification(false);
    setIsFlipCard(false);
    setIsStartDistributeCards(false);
    setIsEndDistributeCards(false);
    setListUser(dataUsers as IUser[]);
    setIsStartGame(false);
  };

  useEffect(() => {
    if (!isStartDistributeCards) return;

    const id = setTimeout(() => {
      setIsEndDistributeCards(true);
    }, 4000);

    return () => clearTimeout(id);
  }, [isStartDistributeCards]);

  return (
    <Container>
      {!isStartGame ? (
        <Menu>
          <Button onClick={() => setIsStartGame(true)}>Bắt đầu</Button>
        </Menu>
      ) : (
        <>
          {showNotification && (
            <Notification>
              <NotificationWrap>
                <WinnerUser
                  variants={variants}
                  animate={winnerPlayers.length > 0 ? "show" : "hide"}
                >
                  {winnerPlayers.map((user) => user.name)} Win 🎉
                </WinnerUser>
                <NewGameButton onClick={handleNewRound}>
                  New Round
                </NewGameButton>
                <QuitGameButton
                  bg={cssVariables.colors.red}
                  shadow={cssVariables.colors["red-dark"]}
                  onClick={resetNewGame}
                >
                  Quit
                </QuitGameButton>
              </NotificationWrap>
            </Notification>
          )}
        </>
      )}

      <InforGame>
        <BetMoneyWrap>
          <div>Mức cược :</div>
          <div>{bets}</div>
        </BetMoneyWrap>
      </InforGame>

      <Tabel
        isStartDistributeCards={isStartDistributeCards}
        isFlipCard={isFlipCard}
      />

      {listUser.map((user) => {
        if (user.typeUser === "computer") {
          return (
            <Computer
              bets={bets}
              user={user}
              key={user.id}
              isFlipCard={isFlipCard}
              winnerPlayers={winnerPlayers}
            />
          );
        }

        return (
          <User
            winnerPlayers={winnerPlayers}
            bets={bets}
            key={user.id}
            user={user}
            isFlipCard={isFlipCard}
            handleStartDistributeCards={handleStartDistributeCards}
            handleFlipCard={handleFlipCard}
            isStartDistributeCards={isStartDistributeCards}
            isEndDistributeCards={isEndDistributeCards}
          />
        );
      })}
    </Container>
  );
};

export default App;
