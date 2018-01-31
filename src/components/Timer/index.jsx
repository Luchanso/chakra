import styled from 'styled-components';

const Timer = styled.input`
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0);

  &:focus, &:hover {
    outline: 0;
    border-bottom: 1px solid #eee;
  }
`;

export default Timer;
