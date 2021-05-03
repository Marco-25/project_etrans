import styled from "styled-components";

interface BoxInfoProps {
    bgColor?: boolean;
}

export const LittleBox = styled.a`
    width: 22%;
    margin: 0.5rem;
    padding: 0.5rem 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration:none;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 2px;
    color:gray;
    position: relative;
`;

export const ContainerRow = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const BoxInfoPrinciple = styled.div`
    width: 24%;
    margin: 0.5rem;
    padding: 0.5rem 0;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(23, 52, 60);
    border: 1px solid #ccc;
    border-radius: 5px;
    color:#fff;

    p:nth-child(1){
      font-size: 20px;
      text-transform:uppercase;
      font-weight: bold;
    }

    p:nth-child(2){
      font-size: 45px;
      text-transform:uppercase;
      font-weight: bold;
      margin: 12px 0;
    }

    p:nth-child(3){
      font-size: 12px;
      text-transform:uppercase;
      margin-bottom: 20px;

      i {
        color:red;
        margin-right: 10px;
        font-size: 16px;
      }
    }
`;

export const BoxInfo = styled.div<BoxInfoProps>`
    width: 25%;
    margin: 0.5rem;
    padding: 0.5rem 0;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    color:#fff;

    background-color: rgb(39, 111, 139);

    p:nth-child(1){
      font-size: 14px;
      text-transform:uppercase;
    }

    p:nth-child(2){
      font-size: 30px;
      text-transform:uppercase;
      font-weight: bold;
    }

    p:nth-child(3){
      font-size: 12px;
      text-transform:uppercase;
      margin-bottom: 20px;

      i {
        color:red;
        margin-right: 10px;
        font-size: 16px;
      }
    }


`;

export const BoxInfo01 = styled.div<BoxInfoProps>`
    width: 25%;
    margin: 0.5rem;
    padding: 0.5rem 0;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    color:#000;

    background-color:#f5f5f5;

    p:nth-child(1) {
      font-size: 14px;
      color: rgba(0,0,0, 0.5);
      text-transform:uppercase;
    }

    p:nth-child(2) {
      width: 100%;
      text-align:center;
      font-size: 30px;
      color: rgba(0,0,0, 0.7);
      text-transform:uppercase;
      font-weight:bold;
      position: relative;

      span {
        font-size: 16px;
        font-weight:normal;
        text-transform:none;
      }

      strong {
        font-weight:bold;
        font-size: 20px;
      }

      svg {
        position: absolute;
        left: 40px;
        top:0;
        font-size: 30px;
      }
    }

    p:nth-child(3) {
      font-size: 14px;
      color: rgba(0,0,0, 0.6);
      i.red { color: red;}
      i.green { color: green;}
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



