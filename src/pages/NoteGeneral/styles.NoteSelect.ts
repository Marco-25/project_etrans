import styled, { css } from "styled-components";

export const Header = styled.header`
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content:space-between;
    flex-direction: row;
    flex-wrap: wrap;
`;

interface IPropsBoxNoteSelect {
  bgColor?: string;
  color?: string;
}
export const MiddleBoxNoteSelect = styled.div<IPropsBoxNoteSelect>`
  width: 19.5%;
  height: 100%;
  padding:0.5rem;
  border-radius: 5px;
  color: #fff;
  text-align:center;
  display: grid;
  grid-template-columns: repeat(1, auto );
  grid-template-rows: repeat(3, 1.2rem  );
  background-color: #276f8b;

  ${props => props.bgColor === 'lightblue' && css`background-color: #5e97ae;`}
  ${props => props.bgColor === 'darkblue' && css`background-color: #17343c;`}

  h5 {
    font-size: 0.9em;
    font-weight: normal;
  }

  h4 {
    font-size: 1.3em;
  }

 p {
  display:flex;
  justify-content:center;
  align-items: center;
  font-size: 0.7em;

   svg {
    margin-right: 0.3em;
    font-size: 1.5em;
   }
 }

  @media screen and (max-width: 1024px) {
    width: 49.5%;
    max-height: 30%;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    max-height: 19%;
  }
`;

export const TitleNote = styled.h3`
  text-align: center;
  width: 100%;
  color: rgba(0,0,0, .6);
  margin: 0.5rem;
`;


interface IPropsLittleBox {
  bgColor?: string;
}
export const LittleBox = styled.a<IPropsLittleBox>`
    width: 25%;
    margin-top: 0.5rem;
    padding: 0.5rem 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration:none;
    border: 1px solid #ccc;
    border-radius: 2px;
    color:gray;
    position: relative;
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

export const ContainerList = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const Note = styled.div`
  width: 49.9%;

  h4 {
    background: #f5f5f5;
    border: 1px solid #ccc;
    display:flex;
    align-items:center;
    height: 40px;
    padding-left: 1rem;
  }

  ul {
    list-style: none;

    span {
      display: flex;
      justify-content:space-between;
      background: #ddd;
      border: 1px solid #ccc;
      padding: 2px 0.5rem;
      text-transform: capitalize;
      font-size: 1.1em;

      strong {
        font-weight: 500;
        font-size: 0.85em;
      }

      p {

        svg {
          color: #00c853;
        }
      }
    }

    li {
      display: flex;
      justify-content:space-between;
      align-items:center;
      background: #f5f5f5;
      border: 1px solid #ccc;
      padding:0.4rem 0.5rem;
      font-size: 0.95em;

      strong {
        font-weight:normal;
      }

      p {
        svg{
          color: #f61313;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    max-height: 19%;
  }
`;
