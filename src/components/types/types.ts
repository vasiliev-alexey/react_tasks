export type DummyState = Record<string, unknown>;
export type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeaderPropType = {
  level: HeaderLevel;
  caption: string;
};
