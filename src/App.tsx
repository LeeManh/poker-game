import { useState } from "react";
import styled from "styled-components";

import type { IUser } from "types/user.type";
import User from "components/User";
import Computer from "components/Computer";
import cssVariables from "constants/css";
import Tabel from "components/Tabel";
import { Button } from "globalStyles.styled";

const Container = styled.div`
  position: relative;
  max-width: 1366px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
`;
const BackGround = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  background-color: rgba(104, 93, 93, 0.4);
  display: grid;
  place-items: center;
`;

const App = () => {
  const [listUser, setListUser] = useState<IUser[]>([
    {
      id: "1",
      position: "bottom",
      typeUser: "player",
      avatar: "",
      cards: [
        { number: 7, suit: "spades" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "clubs" },
      ],
      money: 1000,
      name: "leemanh",
    },
    {
      id: "2",
      position: "left",
      typeUser: "computer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      cards: [
        { number: 7, suit: "spades" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "clubs" },
      ],
      money: 5000,
      name: "Chị Quỳnh",
    },
    {
      id: "3",
      position: "top",
      typeUser: "computer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      cards: [
        { number: 7, suit: "spades" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "clubs" },
      ],
      money: 5000,
      name: "Quyết ĐK",
    },
    {
      id: "4",
      position: "right",
      typeUser: "computer",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      cards: [
        { number: 7, suit: "spades" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "clubs" },
      ],
      money: 5000,
      name: "Tân",
    },
  ]);

  // const [isStartGame, setIsStartGame] = useState(false);
  const [isStartDistributeCards, setIsStartDistributeCards] = useState(false);

  const handleStartDistributeCards = () => {
    setIsStartDistributeCards(true);
  };

  return (
    <Container>
      {/* {!isStartGame && (
        <BackGround>
          <Button onClick={() => setIsStartGame(true)}>Bắt đầu</Button>
        </BackGround>
      )} */}

      <Tabel isStartDistributeCards={isStartDistributeCards} />

      {listUser.map((user) => {
        if (user.typeUser === "computer") {
          return <Computer user={user} />;
        }

        return (
          <User
            user={user}
            handleStartDistributeCards={handleStartDistributeCards}
          />
        );
      })}
    </Container>
  );
};

export default App;
