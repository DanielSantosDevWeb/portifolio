import styled from "styled-components";
import { Theme } from "../../Theme";

export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 1.2em ;
  background-color: #ffffff00;
  font-family: serif ;
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  margin: 0px 20px;
  cursor: pointer;

  :hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 0px blue;
  }
  
 
` 