import styled from "styled-components";

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  color: #ffffff;
  min-height: 90px;
  max-height: 90px;
  padding: 0px 3%;

  div {
    margin: auto;
  }
`