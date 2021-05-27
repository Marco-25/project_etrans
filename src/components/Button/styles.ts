import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  background: #4caf50;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#4caf50")};
  }
`;
