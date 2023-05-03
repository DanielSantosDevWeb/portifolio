import styled from "styled-components";

export const HabilidadeStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #ffffff;
  max-width: 350px;
  box-shadow: 2px 2px 10px #8080803b;
  transition: .5s;

  :hover {
    box-shadow: none;
  }
`