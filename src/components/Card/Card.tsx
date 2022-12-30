import images from "assets/images";

import { ICard } from "types/card.type";
import {
  BackSideCardImage,
  Container,
  HeaderCard,
  ImageSuitBig,
  ImageSuitSmall,
  NumberCard,
} from "./Card.styled";

interface CardProps {
  card: ICard;
  isFlipCard: boolean;
}

const Card = ({ card, isFlipCard }: CardProps) => {
  const suitCardImg =
    card.suit === "clubs"
      ? images.card.suits.clubsIcon
      : card.suit === "diamonds"
      ? images.card.suits.diamondsIcon
      : card.suit === "hearts"
      ? images.card.suits.heartsIcon
      : images.card.suits.spadesIcon;
  const color =
    card.suit === "hearts" || card.suit === "diamonds" ? "red" : "black";

  return (
    <>
      {!isFlipCard ? (
        <BackSideCardImage src={images.card.backSideCard} alt="backSideCard" />
      ) : (
        <Container>
          <HeaderCard>
            <NumberCard color={color}>{card.number}</NumberCard>
            <ImageSuitSmall src={suitCardImg} alt="card" />
          </HeaderCard>

          <ImageSuitBig
            src={suitCardImg}
            alt="card"
            width="3rem"
            height="3rem"
          />
        </Container>
      )}
    </>
  );
};

export default Card;
