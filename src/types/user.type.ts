import type { ICard } from "./card.type";

export type Position = "bottom" | "left" | "right" | "top";

export interface IUser {
  id: string;
  position: Position;
  typeUser: "player" | "computer";
  avatar: string;
  name: string;
  money: number;
  cards: ICard[];
}
