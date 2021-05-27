import styled from "styled-components";

export const ContainerKPI = styled.div`
  margin-top: 3rem;
  width:100%;
  height: 15%;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  border:1px solid #cccccc;
  border-radius: 1rem;
  color: rgba(0,0,0,0.6);

  h5 {
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 1rem;
  }
`;

export const Header = styled.header`
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content:space-between;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const MiddleBoxKPI = styled.div`
  width: 24.5%;
  height: 90%;
  padding:1rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  color:rgba(0,0,0,0.6);
  text-align:center;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(1, auto );
  grid-template-rows: repeat(2, 1.5rem  );ContainerKPI

  h5 {
    font-size: 25px;
    font-weight:normal;
    color:black;
  }

  h4 {
    font-size: 14px;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 1024px) {
    width: 49.5%;
    max-height: 50%;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    max-height: 25%;
  }
`;

export const TitleKPI = styled.h3`
  text-align: center;
  width: 100%;
  color: rgba(0,0,0, .6);
  padding: 1.5rem;
  margin: 0.5rem;
`;

