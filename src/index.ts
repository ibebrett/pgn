export enum Token {
  LeftBrace,
  RightBrace
}

export const tokenizePGN = (text: string): [Token] => {
  return [Token.LeftBrace];
};

export const parsePGN = (text: string): null => {
  return null;
};
