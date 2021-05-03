import styled from "styled-components";

export const MiddleBoxKPI = styled.div`
    margin: 0.5rem;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items:center;
    text-align: start;
    width: 25%;
    height: 70px;
    border-radius: 2px;
    background-color: #f5f5f5;
    color:black;
    position: relative;

    p:nth-child(1) {
      font-size: 28px;

      span {
        font-size: 18px;
      }
    }

    p:last-child {
      color:gray;
      font-size: 18px;
      letter-spacing: 0.2rem;
    }
    
`;

export const TitleKPI = styled.h3`
  text-align: center;
  width: 100%;
  color: rgba(0,0,0, .6);
  margin: 0.5rem;
`;