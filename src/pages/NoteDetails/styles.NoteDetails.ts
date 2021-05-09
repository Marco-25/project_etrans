import styled, { css } from "styled-components";

interface BoxInfoProps {
  bgColor?: boolean;
}

interface IPropsLittleBox {
  bgColor?: string;
}
export const LittleBox = styled.a<IPropsLittleBox>`
    width: 20%;
    margin-top: 2.5rem;
    padding: 0.5rem 0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration:none;
    border: 1px solid #ccc;
    border-radius: 2px;
    color:gray;
    cursor: pointer;
    background-color: #f5f5f5;

    ${props => props.bgColor === 'default' && css`
    background: #276f8b;
    color:#fff;
    `}

    ${props => props.bgColor === 'general' && css`
    background: #17343c;
    color:#fff;
    `}

    ${props => props.bgColor === 'hard' && css`
    background: #79a5b0;
    color:#fff;
    `}
`;

export const ContainerRow = styled.section`
    margin-top: 0.6rem;
    padding:0;
    width: 100%;
    height: 27.2%;
    display: flex;
    flex-direction: row;
`;

export const BoxInfoPrinciple = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #17343c;
    border-radius: 5px;
    color:#fff;

    p:nth-child(1){
      font-size: 1.1em;
      text-transform:uppercase;
      font-weight: bold;
    }

    p:nth-child(2){
      font-size: 1.5em;
      text-transform:uppercase;
      font-weight: bold;
      margin-bottom: 0.35em;
    }

    p:nth-child(3){
      font-size: 0.6em;
      text-transform:uppercase;
      margin-bottom: 20px;

      i {
        color:red;
        margin-right: 10px;
        font-size: 1.8em;
      }
    }
`;

export const BoxDetails = styled.div`
    width: 100%;
    margin:0;
    padding-left: 1%;
    height: 90vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`;

export const RowDetails = styled.header`
    width: 100%;
    margin-bottom: 0.45rem;
    display: flex;
    justify-content:space-between;
    flex-direction: row;
    flex-wrap: wrap;
`;


export const BoxInfo = styled.div<BoxInfoProps>`
    width: 24.5%;
    border-radius: 5px;
    padding: 0.5em 0;
    color: #fff;
    text-align:center;
    display: grid;
    grid-template-columns: repeat(1, auto );
    grid-template-rows: repeat(3, 1.2rem  );
    justify-content:center;
    align-items:center;
    background-color: #276f8b;

    p:nth-child(1){
      font-size: 0.7em;
      text-transform:uppercase;
    }

    p:nth-child(2){
      font-size: 1.2em;
      text-transform:uppercase;
      font-weight: bold;
    }

    p:nth-child(3){
      font-size: 0.5em;
      text-transform:uppercase;
      i {
        color:red;
        margin-right: 10px;
      }
    }


`;

export const BoxInfoMoreDetail = styled.div<BoxInfoProps>`
    width: 24.5%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding:0.5rem;
    color: #fff;
    text-align:center;
    display: grid;
    grid-template-columns: repeat(1, auto );
    grid-template-rows: repeat(3, 1.3rem  );

    background-color:#f5f5f5;

    p:nth-child(1) {
      font-size: 0.7em;
      color: rgba(0,0,0, 0.5);
      text-transform:uppercase;
    }

    p:nth-child(2) {
      width: 100%;
      font-size: 1em;
      color: rgba(0,0,0, 0.7);
      text-transform:uppercase;
      font-weight:bold;
      display:flex;
      justify-content:center;
      align-items:center;

      span {
        font-size: 0.8em;
        font-weight:normal;
        text-transform:none;
      }

      strong {
        font-weight:bold;
        font-size: 1em;
      }

      svg {
        font-size: 1.8em;
      }
    }

    p:nth-child(3) {
      font-size: 14px;
      color: rgba(0,0,0, 0.6);
      display:flex;
      justify-content:center;
      align-items:center;
      svg {
        color:green;
      }
    }
`;

export const Title = styled.div`
    margin-top:2rem;
    padding-top: 20px;
    width: 100%;
    border-top: 1px solid #ccc;
    color: rgba(0,0,0, 0.7);
    text-align:center;
    font-size: 24px;
`;

export const Table = styled.div`
    margin-top:2rem;
    width: 100%;
    min-height: 200px;
    height: auto;
`;



