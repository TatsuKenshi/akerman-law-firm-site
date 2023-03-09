import { IconType } from "react-icons";

export type CardItemType = {
  id: number;
  icon: IconType;
  engTitle: string;
  serTitle: string;
  engContent: string;
  serContent: string;
};

export type MemberType = {
  id: number;
  name: string;
  engRole: string;
  serRole: string;
  engContent: string;
  serContent: string;
  image: any;
};
