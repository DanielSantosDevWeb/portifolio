import styled from "styled-components";

export const LinksNavStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color:${({ theme }) => theme.colors.darkblue};
  gap: 20px;

  

  a {
    color: ${({ theme }) => theme.colors.darkblue};
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 500;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.whiteblue};
    
  }

  a:focus {
    color: ${({ theme }) => theme.colors.whiteblue} ;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.whiteblue} ;
  }

`