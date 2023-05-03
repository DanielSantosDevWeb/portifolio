import styled from "styled-components";
import { Logo } from "./Logo";

export const Redes = styled.div`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  color: black;
  width: 45px;
  transition: .5s;
  height: ${(props) => props.width};
  transform: translateY( ${props => props.translateY} );
  overflow: hidden;
  border: 1px solid #cfcfcf;
  position: absolute;
  right: 10%;
  

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

 @media screen and (min-width:770px) {

  height: 40px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -${props => props.translateY};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  margin: auto;
  
  ul {
  width: 100%;
  height: 100%;
  display: flex;
  height: auto;
  justify-content: space-around;
}

 }
`