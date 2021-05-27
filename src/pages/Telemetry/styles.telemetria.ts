import styled, { css } from "styled-components";

interface IMidlleBox {
  bgColor?: string;
}
export const MiddleBox = styled.div<IMidlleBox>`
    margin: 0.5rem;
    padding: 0 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-items: flex-start;
    text-align: start;
    width: 100%;
    min-width: 8rem;
    height: 60px;
    border-radius: 5px;

    color:white;
    position: relative;

    background-color: #276f8b;
    ${props => props.bgColor === 'red' && css`background-color: #e60000;`}
    ${props => props.bgColor === 'green' && css`background-color: #00b050;`}
    ${props => props.bgColor === 'yellow' && css`background-color: #f1c34e;`}

    p:nth-child(1) {
        font-size: 12px;
    }

    p:last-child {
        font-size:15px;
        font-weight:bolder;
    }
`;

export const ContainerChart = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Grafic = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const TextGrafic = styled.div`
    width: 70%;
    margin: 0 auto;
    display:flex;
    justify-content:space-around;
    align-items: center;

    span:nth-child(1) {
        color: rgba(0,0,0, 0.7);
        font-size: 15px;
        word-wrap: break-word;
    }

     span:last-child {
       display:flex;
       align-items:center;
      color: gray;
      font-size: 15px;

      svg {
        font-size: 35px;
      color: #00a6e0;
      }
    }
`;

export const BoxGrafic = styled.div`
    margin-top: 3rem;
    width: 90%;
    height: 300px;
`;

export const ContentGraphic = styled.div`
  display:flex;

  @media screen and(max-width: 1024px) {
    flex-direction:column;
  }

`;

interface PropsColor {
  bgColor?: string;
}

export const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Header = styled.header`
    margin-top:3rem;
    width: 100%;
    display: flex;
    justify-content:space-between;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const BoxHeader = styled.div<PropsColor>`
  width: 24%;
  height: 90%;
  padding:0.5rem;
  background-color: #276f8b;
  border-radius: 5px;
  color:white;
  text-align:center;
  display: grid;
  grid-template-columns: repeat(1, auto );
  grid-template-rows: repeat(3, 1.5rem  );

  h5 {
    font-size: 12px;
  }

  h4 {
    font-size: 15px;
  }

  p {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 10px;
    text-align:center;
    span {
      font-size: 1.2em;
    }
    padding-bottom: 0.4em;
  }

  section {
    display: grid;
    grid-template-columns: 80% 20% ;
    grid-template-rows: repeat(3, 1.5rem  );

    button {
      height: 15px;
      font-size: 12px;
      padding-top: 1px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 49%;
    height: auto;
    margin-bottom: 2px;
  }

  @media screen and (max-width: 760px) {
    width: 99%;
    height: auto;
    margin-bottom: 2px;
  }
`;
