import { parsePGN, Token, tokenizePGN } from "./index";

import * as testData from "./testdata";

test("tokenizePGN", () => {
  expect(tokenizePGN(testData.wikiGame)).toEqual([Token.LeftBrace]);
});

test("parsePGN works", () => {
  expect(parsePGN(testData.wikiGame)).toBeNull();
});
