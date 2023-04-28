import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkblue};
  color: white;
  min-height: 90px;
  max-height: 90px;
  padding: 0px 3%;
`