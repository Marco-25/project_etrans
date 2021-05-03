import styled from "styled-components";

export const MiddleBoxNoteSelect = styled.div`
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items:center;
   
    width:25%;
    height: 100px;
    margin: 0.5rem;
    padding: 0 0.5rem;
    display: flex;
  
    border-radius: 5px;
    background-color: rgb(39, 111, 139);
    color:white;

    p + p {
      margin-top: 0.3rem;
    }

    p:nth-child(1) {
      font-size: 16px;
    }

    p:nth-child(2) {
      font-size: 25px;
      font-weight: 700;
    }

    p:nth-child(3) {
      font-size: 13px;

      i {
        color: #f61313;
        margin-right: 0.3rem;
      }
    }
    
`;

export const TitleNote = styled.h3`
  text-align: center;
  width: 100%;
  color: rgba(0,0,0, .6);
  margin: 0.5rem;
`;

export const LittleBox = styled.a`
    width: 25%;
    margin-top: 0.5rem;
    padding: 0.5rem 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration:none;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 2px;
    color:gray;
    position: relative;
`;

export const Note = styled.div`
  flex: 1;
  /* border: 1px solid black; */

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
      font-size: 20px;
      text-transform: capitalize;

      strong {
        font-weight: 500;
      }

      p {

        i.red {
          color: red;
          font-size: 15px;
        }

        i.green {
          color: #00c853;
          font-size: 15px;
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
      font-size: 18px;

      strong {
        font-weight:normal;
      }

      p {
        i{
          color: #f61313;
        }
      }
    }
  }
`;
