import React from 'react';
import styled from 'styled-components';

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WrapperContainer>
        {this.props.children}
      </WrapperContainer>
    );
  }
}

const WrapperContainer = styled.div`
  margin-left: 20%;
  margin-right: 20%;
`;
