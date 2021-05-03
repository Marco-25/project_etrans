import styled from "styled-components";

export const ButtonBox = styled.button`
  flex:1;
  margin-top: 32px;
  text-transform: uppercase;
  font-size: 18px;
  padding: 0.4rem 0;
  cursor:pointer;

  display:flex;
  justify-content:center;
  align-items:center;
  background: #f5f5f5;
  color: #757575;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

  & + button {
    margin-top:0;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display:flex;
  justify-content: space-between;

  border: 1px solid #e0e0e0;

  section {
    border: 1px solid #e0e0e0;
    width: 49%;
    height: 400px;
  }

  div {
    border: 1px solid #e0e0e0;
    width: 49%;
    height: 400px;
  }
`;

export const ContentFuel = styled.div`
  flex: 1;
  width: 100%;
  display:flex;
`;
