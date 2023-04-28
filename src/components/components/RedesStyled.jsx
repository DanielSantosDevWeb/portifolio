import styled from "styled-components";
import { Logo } from "./Logo";

export const Redes = styled.div`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  color: black;
  width: 45px;
  transition: 1s;
  height: ${(props) => props.width};
  transform: translateY( ${props => props.translateY} );
  overflow: hidden;
  ${(props) => {
    console.log(props);

  }}

  ul {
    margin-top: 1px;
    display: grid;
    align-items: stretch;
    justify-content: stretch;
    height: 200px;
    
    list-style: none;

  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

 ul li a {
  color: ${({ theme }) => theme.colors.darkblue} ;
 }
`