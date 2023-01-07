import images from "assets/images";
import { Variants } from "framer-motion";
import {
  BackSideCardAnimate,
  BackSideCardImage,
  Container,
  DeckOfCardWrap,
} from "./Tabel.styled";

interface TabelProps {
  isStartDistributeCards: boolean;
  isFlipCard: boolean;
}

const Tabel = ({ isStartDistributeCards, isFlipCard }: TabelProps) => {
  const variants1: Variants = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: -90, y: 181, transition: { duration: 1, delay: 0 } },
  };
  const variants2 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: -2, y: 181, transition: { duration: 1, delay: 0 } },
  };
  const variants3 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: 90, y: 181, transition: { duration: 1, delay: 0 } },
  };

  const variants4 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: -435, y: -1, transition: { duration: 1, delay: 1 } },
  };
  const variants5 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: -346, y: -1, transition: { duration: 1, delay: 1 } },
  };
  const variants6 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: -256, y: -1, transition: { duration: 1, delay: 1 } },
  };

  const variants7 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: 435, y: -1, transition: { duration: 1, delay: 2 } },
  };
  const variants8 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: 346, y: -1, transition: { duration: 1, delay: 2 } },
  };
  const variants9 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: 256, y: -1, transition: { duration: 1, delay: 2 } },
  };

  const variants10 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: -90, y: -205, transition: { duration: 1, delay: 3 } },
  };
  const variants11 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: 0, y: -205, transition: { duration: 1, delay: 3 } },
  };
  const variants12 = {
    initial: { x: 8, y: -8, display: "none" },
    end: { x: 90, y: -205, transition: { duration: 1, delay: 3 } },
  };

  return (
    <Container>
      <DeckOfCardWrap>
        <BackSideCardImage
          src={images.card.backSideCard}
          alt="backSideCard"
          index={0}
        />
        <BackSideCardImage
          src={images.card.backSideCard}
          alt="backSideCard"
          index={1}
        />
        <BackSideCardImage
          src={images.card.backSideCard}
          alt="backSideCard"
          index={2}
        />

        {!isFlipCard && (
          <>
            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants1}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />

            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants1}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />

            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants2}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />
            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants3}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />

            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants4}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />
            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants5}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />
            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants6}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />

            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants7}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />
            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants8}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />
            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants9}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />

            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants10}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />
            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants11}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />
            <BackSideCardAnimate
              src={images.card.backSideCard}
              alt="backSideCard"
              variants={variants12}
              animate={!isStartDistributeCards ? "initial" : "end"}
            />
          </>
        )}
      </DeckOfCardWrap>
    </Container>
  );
};

export default Tabel;
