import styled, { css } from "styled-components";

interface PropsColor {
  color?: string;
}

export const Center = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    background-color: #fff;
    box-shadow: 0 0 1px 2px #cecece;
    margin-top: 0.5rem;
`;

export const Box = styled.div`
    width: 100%;
    padding: 0 1%;
    height: 90vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
`;

export const SideBar = styled.div`
    margin: 0.7rem;
    width: 25%;
    max-height: 90vh;
    background-color: white;
    border-radius: 2px;
    border-right: 1px solid #cccccc;

    h4 {
      display:flex;
      align-items:center;
      color: rgba(0,0,0,0.7);
      svg {
        margin-left: 5px;
        font-size:15px;
      }
    }

    p {
      color: rgba(0,0,0,0.5);
      font-size:14px;
      margin-bottom: 5px;
    }

    h5 {
      color: rgba(0,0,0,0.7);
    }
`;

interface FullWidth {
  fullWidth?: boolean;
}
export const Column = styled.div<FullWidth>`
  display: flex;
  flex-direction: column;

  ${props => props.fullWidth && css`width:100%;`}
`;

export const LittleBox = styled.div<PropsColor>`
    width: 25%;
    margin: 0.5rem;
    padding: 1rem 1rem 0 1rem;
    background-color: #276f8b;
    border-radius: 5px;
    color:white;

   section {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, auto );
    grid-template-rows: repeat(2, 1.5rem  );
   }
`;

export const BoxLeft = styled.div`
    flex: 1;
    width: 500px;
    max-height: 80%;
    margin: 0.5rem ;
    box-shadow: 0 0 1px 1px black;
    background-color: white;
    border-radius: 3px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 45%;
      margin: 0.3rem 0;
    }
`;

export const BoxRight = styled.div`
    flex: 1;
    width: 500px;
    max-height: 80%;
    margin: 0.5rem;
    box-shadow: 0 0 1px 1px black;
    border-radius: 3px;
    background-color: white;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 40%;
      margin: 0.3rem 0;
    }
`;

export const Toggle = styled.button`
    margin-top: 0;
    height: 30px;
    width: 40px;
    border: 0;
    border-radius:3px;
    background: #000000;
    color: #FFF;
    font-size: 10px;
    cursor:pointer;
`;

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 70%;
`;

export const Table = styled.div`
    width: 100%;
    min-height: 200px;
    max-height: 400px;
`;
