import styled from 'styled-components';
export const Box = styled.section`
display:flex;
flex-direction: row;
`;

export const MenuDesktop = styled.nav`
z-index:100;
position:absolute;
display:flex;
flex-direction: column;
justify-content: flex-start;
width: 268px;
height: 100vh;
background-color: rgba(0,0,0,1);
color:black;
i {padding-right:0.9rem;}
a{
    margin-top: 0.8rem;
    color:white;
    text-decoration: none;
    padding-left: 0.7rem;
}
`;

export const Header = styled.header`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color:white;
    height:3rem;
    div  {
        width: 85%;
        display:flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0 5rem;
        a {
            color:white;
            text-decoration:none;
        }
    }
`;

export const LogoMenu = styled.img`
    margin: 1.5rem auto;
    width:100%;
    max-width:180px;
    height:100%;
    max-height: 100px;
    margin-bottom: 1rem;
`;

export const MiniLogoMenu = styled.img`
    margin: 1rem auto;
    width:100%;
    max-width:65px;
    height:100%;
    max-height: 38px;
`;

export const Toggle = styled.span`
    position:absolute;
    color:white;
    font-size:1.3rem;
    left: 18rem;
    top:0.8rem;
    cursor:pointer;
`;

export const Span = styled.span`
    color:white;
    margin-top:0.9rem;
    padding-right:0.9rem;
    padding-left: 0.7rem;
    cursor: pointer;
`;

export const BoxLink = styled.div`
    overflow-y: auto;
    display:flex;
    flex-direction: column;
    padding-left: 0.5rem;
    a{
        margin-top: 0.8rem;
        color:white;
        text-decoration: none;
        padding-left: 0.7rem;
        font-weight: 300;
        font-size: 0.9rem;
    }
`;
