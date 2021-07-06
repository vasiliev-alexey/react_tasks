export type DummyState = Record<string, unknown>;
export type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type TextStyleType = 'normal' | 'quote' | 'bold';

export type HeaderPropType = {
  level: HeaderLevel;
  caption: string;
};
export type SpaceBlockPropType = {
  height: number;
};

export type ParagraphPropType = {
  style: TextStyleType;
  text: string;
};
