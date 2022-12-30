import styled from "styled-components";

export const Container = styled.div`
  height: 10rem;
  width: 8rem;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem;
  user-select: none;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const NumberCard = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: ${({ color }: { color: string }) => color};
`;
export const ImageSuitSmall = styled.img`
  width: 1rem;
  height: 1rem;
  display: block;
  object-fit: contain;
`;
export const ImageSuitBig = styled.img`
  width: 4rem;
  height: 4rem;
  display: block;
  object-fit: contain;
  margin: 0 auto;
`;
export const BackSideCardImage = styled.img`
  height: 10rem;
  width: 8rem;
  border-radius: 4px;
  cursor: pointer;
`;
