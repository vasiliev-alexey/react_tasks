import React from 'react';

function withOverrideProps(component: React.Component, props: unknown) {
  return class extends Element {
    static defaultProps = props;
  };
}
