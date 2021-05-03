import styled from 'styled-components';

export const Overlay = styled.div`
    z-index:99;
    background: rgba(146, 146, 146, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerModal = styled.div`
    background: white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    color: black;
    width: 500px;
    height: 150px;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 0 2px 1px rgba(0, 0,0, 0.05);
    text-align: center;
    position: relative;
    bottom: 10rem;
    @media screen and (max-width: 1024px) {
        width: 90%;
    }
`;

export const ButtonModal = styled.button`
    display:flex;
    align-items:center;
    position: absolute;
    padding: 0.2rem 1rem;
    right: 0.9rem;
    top: 0.9rem;
    background: transparent;
    border: 0;
    font-size: 1.2rem;
    cursor: pointer;
    :hover {
      border-radius: 5px;
      border: 1px solid #000;
    }
`;

export const TitleModal = styled.h4`
    text-align: center;
    margin-bottom:1rem;
`;

export const BodyModal = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`;

export const ButtonDel = styled.button`
    padding: 0.3rem 1.5rem;
    font-weight:bold;
    background-color:#f44336;
    color: white;
    border: none;
    border-radius:3px;
    cursor: pointer;
    :focus {border: none}
`;

export const ButtonCancel = styled.button`
    width: 180px;
    height: 35px;
    font-weight:bold;
    background-color: gray;
    color: white;
    border: none;
    border-radius:3px;
    cursor: pointer;
    :focus {border: none}
    :hover{
      opacity: 0.6;
    }
`;
