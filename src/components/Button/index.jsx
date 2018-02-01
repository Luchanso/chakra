import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  padding: 4px 15px;
  font-size: 16px;
  background: 0;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 2px;

  &:focus {
    outline: 0;
  }
`;

export default Button;
