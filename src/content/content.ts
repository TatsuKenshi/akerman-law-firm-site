import { FaTrash, FaTimes } from "react-icons/fa";
import { CardItemType } from "./types";

export const cardItems: CardItemType[] = [
  {
    id: 0,
    icon: FaTrash,
    engTitle: "card1",
    serTitle: "kartica1",
    engContent:
      "This is card number 2. It is a mockup for the area of work card 1, which will replace it at some point. End of the description",
    serContent:
      "Ovo je kartica broj 1. Ova kartica je mokap za oblast rada karticu 1, koja ce je i zameniti. Kraj opisa.",
  },
  {
    id: 1,
    icon: FaTimes,
    engTitle: "card2",
    serTitle: "kartica2",
    engContent:
      "This is card number 2. It is a mockup for the area of work card 2, which will replace it at some point. End of the description",
    serContent:
      "Ovo je kartica broj 2. Ova kartica je mokap za oblast rada karticu 2, koja ce je i zameniti. Kraj opisa.",
  },
];
