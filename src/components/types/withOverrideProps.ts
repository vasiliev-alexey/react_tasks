import React from 'react';

export function withOverrideProps(
  component: React.ComponentClass,
  overrideProps: unknown
): React.ComponentClass {
  class EncClass extends component {
    static defaultProps = overrideProps;
  }

  return EncClass;
}
