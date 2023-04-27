import styled from "styled-components";

export const LinksNavStyle = styled.ul`
  list-style: none;
  display: flex;
  color: white;
  gap: 20px;

  

  a {
    color: white;
    text-decoration: none;
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