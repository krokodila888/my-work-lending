export type TPoint = {
  text1: string;
  text2?: string;
  text3?: string;
  pic: string;
  title: string;
};
 
export type TAttack = {
  name: string;
  lucky: string;
  unlucky: string;
  win: string;
  loose: string;
};

export type TCard = {
  text: string; 
  translation: string; 
  ID?: number
};