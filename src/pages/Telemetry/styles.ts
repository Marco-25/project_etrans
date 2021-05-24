import styled from "styled-components";

export const Toast = styled.div``;

export const ButtonBox = styled.button`
  flex: 1;
  margin-top: 32px;
  text-transform: uppercase;
  font-size: 18px;
  padding: 0.4rem 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  color: #757575;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

  & + button {
    margin-top: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #cccc;

  ul {
    margin-top: 1em;
    margin-bottom: 1em;
    width: 50%;
    height: 27rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;

    li {
      padding: 0.5rem 1rem;
      width: 100%;
      padding-left: 0.5%;

      p {
        padding-left: 1em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.1em;
        font-weight: 600;
        letter-spacing: 0.1em;

        span {
          font-weight: normal;
          margin-left: 3em;
        }
      }
    }
  }
`;

export const ContentFuel = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
`;
