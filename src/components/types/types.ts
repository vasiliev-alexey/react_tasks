export type DummyState = Record<string, unknown>;
export type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type ColumnCountType = 1 | 2 | 3 | 4 | 5 | 6;
export type TextStyleType = 'normal' | 'quote' | 'bold';
export type FloatStyleType = 'left' | 'right' | 'none';

export type HeaderPropType = {
  level: HeaderLevel;
  caption: string;
};

export type ColumnPropsType = {
  columnCount: ColumnCountType;
};
export type CollapsingBlockPropsType = {
  headerText: string;
  contentText: string;
  isCollapse: boolean;
};
export type CollapsingBlockStateType = {
  isCollapse: boolean;
};

export type SpaceBlockPropType = {
  height: number;
};

export type ParagraphPropType = {
  style: TextStyleType;
  text: string;
};

export type ImagePropsType = {
  imageSource: string;
  floatStyle: FloatStyleType;
};
