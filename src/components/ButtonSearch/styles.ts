import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9.375rem;
  height: 1.8rem;
  padding-top: 5px;
  line-height: 1.25rem;
  border: 0;
  border-radius: 0.3125em;
  cursor: pointer;
  color: white;
  font-size: 1.2em;
  background: #00a6e0;
  text-transform: uppercase;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
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

// export const Container = styled.button`;
//   background: #4caf50;
//   height: 56px;
//   border-radius: 10px;
//   border: 0;
//   padding: 0 16px;
//   color: #fff;
//   width: 100%;
//   font-weight: 500;
//   margin-top: 16px;

//   transition: background-color 0.2s;

//   &:hover {
//     background: ${shade(0.2, "#4caf50")};
//   }
// `;
