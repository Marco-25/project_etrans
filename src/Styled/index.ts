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
    height: 90vh;
    background-color: white;
    border-radius: 2px;
    border-right: 1px solid #cccccc;
    display:flex;
    flex-direction:column;

    h4 {
      display:flex;
      align-items:center;
      color: rgba(0,0,0,0.7);
      font-size:18px;
      svg {
        margin-left: 5px;
        font-size:18px;
      }
    }

    p {
      color: rgba(0,0,0,0.5);
      font-size:14px;
      width: 90%;
      margin: 1rem 0;
    }

    h5 {
      color: rgba(0,0,0,0.7);
      font-size: 17px;;
      margin-bottom: 2rem;
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
    position: absolute;
    margin-top: 0;
    top: 60px;
    right: 45px;
    padding: 7px;
    height: 34px;
    width: 85px;
    border: 0;
    border-radius: 7px;
    background: #236077;
    color: #FFF;
    font-size: 16px;
    cursor: pointer;
`;

interface IScreenKpi {
  isHeight70?: boolean;
}

export const Form = styled.form<IScreenKpi>`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    height: 50%;

    ${props => props.isHeight70 && css` height: 70%;`}
`;

export const Table = styled.div`
    width: 100%;
    height: 400px;
`;

interface IRowButton {
  align?: string;
}

export const RowButton = styled.div<IRowButton>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;

  ${props => props.align === 'center' && css`justify-content: center;`}
`;

export const ButtonSearch = styled.button`
  display: flex;
  justify-content:center;
  align-items:center;

  width: 150px;
  height: 25px;
  padding-top: 5px;
  line-height:20px;
  border: 0;
  border-radius: 5px;
  cursor:pointer;
  color: white;
  font-size: 15px;
  background:#00a6e0;
  text-transform:uppercase;

  a {
    display:flex;
    align-items:center;

    text-decoration:none;
    color:#fff;
    text-transform:uppercase;
  }

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 5px;
    margin-bottom: 8px;
    font-size: 18px;
  }
`;

export const FormContainerSelect = styled.div`
  height:130px;
  display:flex;
  justify-content:space-between;
  flex-direction:column;
`;
