import styled from "styled-components";

import Card from "components/Card";
import type { IUser } from "types/user.type";
import { Button } from "globalStyles.styled";
import cssVariables from "constants/css";

const Container = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;
const ListCardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  transform: translateX(-80px);
`;

const MoneyUser = styled.div`
  color: yellow;
  text-align: center;
  min-width: 5rem;
  padding: 1rem;
  border-radius: 2rem;
  width: 15rem;
  background-color: #3b313a;
  text-transform: uppercase;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-weight: 700;
  border: 2px solid white;
`;

interface IUserProps {
  user: IUser;
  handleStartDistributeCards: () => void;
}

const User = (props: IUserProps) => {
  const { user, handleStartDistributeCards } = props;

  return (
    <Container>
      <ListCardUser>
        {user.cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </ListCardUser>
      <Footer>
        <Button
          width="12rem"
          bg={cssVariables.colors.red}
          shadow={cssVariables.colors["red-dark"]}
        >
          bỏ bài
        </Button>
        <Button
          width="12rem"
          bg={cssVariables.colors.green}
          shadow={cssVariables.colors["green-dark"]}
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
