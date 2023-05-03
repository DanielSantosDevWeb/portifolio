import styled from "styled-components";

export const Projeto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
  padding-bottom: 20px;
  
  span {
    font-weight: 700;
  }

  .bloco {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
  }

  h3 {
    text-shadow: 0px 0px 1px blue;
    font-size: 1.4em;
  }

  @media screen and (min-width: 1200px) {

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .bloco {
      max-width: 500px;
    }

}
`