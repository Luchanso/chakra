import React, { Component } from 'react';
import Timer from 'components/Timer';
import Button from 'components/Button';
import styled from 'styled-components';

const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class App extends Component {
  handleTest() {
    console.log(this);
  }

  render() {
    return (
      <BaseWrapper>
        <Timer value="Work" />
        <Timer value="Idle" />
        <Button>Start/Stop/Pause</Button>
      </BaseWrapper>
    );
  }
}

export default App;
