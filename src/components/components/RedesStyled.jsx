import styled from "styled-components";
import { Logo } from "./Logo";

export const Redes = styled.div`
  
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  color: black;
  margin: 20px;
  transition: 1s;
  height: ${(props) => props.width};
  transform: translateY( ${props => props.translateY} );
  overflow: hidden;
  ${(props) => {
    console.log(props);

  }}

  ul {
    margin-top: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 45px;
    list-style: none;
  }

  ul li {
    height: 55px;
    padding: 20px;
    cursor: pointer;
  }

 ul li a {
  color: ${({ theme }) => theme.colors.darkblue} ;
 }
`