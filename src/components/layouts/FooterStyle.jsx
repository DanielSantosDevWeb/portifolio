import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkblue} ;
  color: white;
  height: 100px;
  width: 100%;
  
  div ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 25px;
    
  }

  div ul a {
    color: white;
  }

  p {
    background-color: black;
    padding: 6px;
    text-align: center;
    font-size: .8em;
  }
`
