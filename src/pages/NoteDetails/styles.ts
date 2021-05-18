import styled, { css } from "styled-components";

interface IPropsLittleBox {
  bgColor?: string;
}
export const LittleBox = styled.a<IPropsLittleBox>`
    width: 20%;
    height: 100%;
    margin-top: 2.5rem;
    padding: 0.5rem 0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration:none;
    border: 1px solid #ccc;
    border-radius: 0.125em;
    color:gray;
    cursor: pointer;
    background-color: #f5f5f5;

    @media screen and (max-width: 768px) {
      font-size: 0.8em;
      width: 33.3%;
    }

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

export const Line = styled.div`

    margin-top: 1rem;
    width: 100%;
    height: 14.5rem;
    position: relative;
    clear: both;

    @media screen and (max-width: 1024px) {
      height: auto;
    }

    @media screen and (max-width: 768px) {
      height: auto;
    }
`;

export const LineFix = styled.div`
    margin-left: 20%;
    margin-top: 0.5rem;
    width: 80%;
    height: 7rem;
    clear: both;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: auto;
      margin-left: 0;
    }
`;

interface ISizeGeneral {
  size?: string;
}
export const InfoBoxContainer = styled.div<ISizeGeneral>`
  width: 100%;
  height:6.5rem;
  border-radius: 0.313em;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    height:auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction:column;
    margin-bottom: 0.25rem;
    height: auto;
  }

  div {
    width: 19.6%;
    height: 6.5rem;
    margin-left: 0.5%;
    border-radius: 0.313em;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    &:nth-child(1){
      background: #17343c;
      color:#fff;
      margin-left: 0;
      height: 13.5rem;
    }

    @media screen and (max-width: 1024px) {
      min-width: 100%;
      margin-left: 0;
      margin-bottom: 0.25rem;

      &:nth-child(1){
        margin-left: 0;
        width: 100%;
        height: 6.5rem;
      }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    float:none;
    margin-bottom: 0.25rem;
  }

  }

  `

export const InfoBox = styled.div<ISizeGeneral>`
  width: 19.6%;
  height: 6.5rem;
  margin-left: 0.5%;
  margin-bottom: 0.5rem;
  border-radius: 0.313em;
  background: #276f8b;
  color:#fff;

  float:left;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  &:nth-child(1){
      margin-left: 0;
      position: absolute;
      height: 14rem;
    }

  @media screen and (max-width: 1024px) {
    width: 33.3%;
    margin-bottom: 0.25rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    ${props => props.size && css`
    height: 7rem;
  `}
  }

  strong {
    display:flex;
    align-items:center;

    i.up {
      color: #00e676;
      padding-right: 0.7em;
    }
    i.down {
      color: #ff1744;
      padding-right: 0.7em;
    }
  }
`;

export const Indicators = styled.div`
border:1px solid red;
  width: 24.62%;
  height: 6.5rem;
  margin-left: 0.5%;
  border-radius: 0.313em;
  float:left;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border: 1px solid #ccc;
  background-color: #ddd;

  &:nth-child(1){
    margin-left: 0;
  }

  @media screen and (max-width: 1024px) {
    width: 24.62%;
    margin-bottom: 0.15rem;
  }

  @media screen and (max-width: 768px) {
    width: 49.6%;
    height: 5.5rem;
    margin-bottom: 0.25rem;

    &:nth-child(1) {margin-left: 0;}
    &:nth-child(2) {margin-left: 0.5%;}
    &:nth-child(3) {margin-left: 0;}
    &:nth-child(4) {margin-left: 0.5%;}
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin-left: 0;
  }

  strong {
    display:flex;
    align-items:center;

    i.up {
      color: #00e676;
      padding-right: 0.7em;
    }
    i.down {
      color: #ff1744;
      padding-right: 0.7em;
    }
  }
`;

export const InfoBoxIndicator = styled.div<ISizeGeneral>`
  width: 19.6%;
  height: 6.5rem;
  margin-left: 0.5%;
  margin-bottom: 0.5rem;
  background: #276f8b;
  color:#fff;
  border-radius: 0.313em;

  float:left;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  &:nth-child(1){
      margin-left: 0;
      position: absolute;
      height: 13.5rem;
      background: #17343c;
      color:#fff;
    }

  &:nth-child(2){ margin-left: 20%; }
  &:nth-child(5) { background: #79a5b0;}

  @media screen and (max-width: 1024px) {
    width: 24.6%;
    height: 5.5rem;
    margin-bottom: 0.25rem;

    &:nth-child(1){
      width: 100%;
      margin-left: 0;
      position: relative;
      height: 5.5rem;
    }
    &:nth-child(2){ margin-left: 0; }
  }


@media screen and (max-width: 650px) {
    width: 100%;
    margin-left: 0;
  }
  strong {
    display:flex;
    align-items:center;

    i.up {
      color: #00e676;
      padding-right: 0.7em;
    }
    i.down {
      color: #ff1744;
      padding-right: 0.7em;
    }
  }
`;

export const Title = styled.h5`
  width:100%;
  text-align:center;
  font-size: 1.3em;
  margin-top:1.2rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;


