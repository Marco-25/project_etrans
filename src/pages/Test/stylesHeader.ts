import styled from "styled-components";

interface PropsColor {
  bgColor?: string;
}

export const BoxHeader = styled.div<PropsColor>`
  width: 24%;
  height: 90%;
  padding:0.5rem;
  background-color: #276f8b;
  border-radius: 5px;
  color:white;
  text-align:center;
  display: grid;
  grid-template-columns: repeat(1, auto );
  grid-template-rows: repeat(3, 1.5rem  );

  h5 {
    font-size: 12px;
  }

  h4 {
    font-size: 15px;
  }

  p {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 10px;
    text-align:center;
    svg {
      margin-right: 8px;
    }
  }

  section {
    display: grid;
    grid-template-columns: 80% 20% ;
    grid-template-rows: repeat(3, 1.5rem  );

    button {
      height: 15px;
      font-size: 12px;
    }
  }
`;
