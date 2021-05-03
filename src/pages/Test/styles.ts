import styled from "styled-components";


export const Content = styled.div`
  margin-top: 8px;
  width:100%;
  height:92vh;
  box-shadow: 0px 0px 1px 1px black;

  display:grid;
  grid-template-columns: 20% 1fr ;
`;

export const SideBar = styled.div`
    margin:0;
    padding:0.5rem;
    width: 100%;
    background-color: white;
    border-radius: 2px;
    border-right: 1px solid #cccccc;
`;

export const BoxButton = styled.button`
    position:absolute;
    width: 5rem;
    left: 2%;
`;

export const BoxPrincipal = styled.div`
    width: 100%;
    padding: 0 1%;
    display:grid;
    /* grid-template-columns: repeat(4, 1fr) ; */
    grid-template-rows: 15% 55% 23%;
    grid-gap: 1rem;

    /* @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    } */
`;

export const Header = styled.div`
    width: 100%;
    border-radius: 2px;
    border: 1px solid #000;
    display:flex;
    justify-content:space-between;

    /* @media screen and (max-width: 1024px) {
      flex-direction:column;
    } */
`;

export const Main = styled.div`
    width: 100%;
    border-radius: 2px;
    border: 1px solid #cccccc;
`;

export const Footer = styled.div`
    width: 100%;
    border-radius: 2px;
    border: 1px solid #cccccc;
`;
