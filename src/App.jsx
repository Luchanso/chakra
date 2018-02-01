import React, { Component } from 'react';
import Timer from 'components/Timer';
import Button from 'components/Button';
import styled from 'styled-components';
import isNumber from 'is-number';

const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const STATUS = {
  start: 'start',
  stop: 'stop',
};

class App extends Component {
  state = {
    timeWork: 0,
    timeIdle: 0,
    status: STATUS.stop,
  };

  handleChangeWorkTimer = ({ target: { value } }) => {
    if (!isNumber(value) && value !== '') return;

    this.setState({
      timeWork: value,
      status: STATUS.stop,
    });
  };

  handleChangeIdleTimer = ({ target: { value } }) => {
    if (!isNumber(value) && value !== '') return;

    this.setState({
      timeIdle: value,
      status: STATUS.stop,
    });
  };

  handleStart = () => {
    this.setState({
      status: STATUS.start,
    });
  };

  handleStop = () => {
    this.setState({
      status: STATUS.stop,
    });
  };

  renderBtn() {
    const { status } = this.state;
    const options = {
      text: 'Stop',
      onClick: this.handleStop,
    };

    if (status === STATUS.stop) {
      options.onClick = this.handleStart;
      options.text = 'Start';
    }

    return <Button onClick={options.onClick}>{options.text}</Button>;
  }

  render() {
    const { timeWork, timeIdle } = this.state;

    return (
      <BaseWrapper>
        <Timer
          onChange={this.handleChangeWorkTimer}
          value={timeWork || ''}
          placeholder="Work time"
        />
        <Timer
          onChange={this.handleChangeIdleTimer}
          value={timeIdle || ''}
          placeholder="Idle time"
        />
        {this.renderBtn()}
      </BaseWrapper>
    );
  }
}

export default App;
