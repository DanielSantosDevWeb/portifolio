import styled from "styled-components";

export const SobreStyle = styled.div`

  h2 {
    text-shadow: 0px 0px 1px blue;
    margin: 20px;
  }
  
  .habilidades {
    height: 100%;
    display: grid;
    gap: 20px;
    margin: 20px;
    align-items: center;
    justify-content: center;
  }

  .sobreMin {
    display: flex;
    flex-direction: column;
    
    margin: 0 20px;
    max-width: 1000px;

    span {
      font-weight: 700;
    }
  }

  @media screen and (min-width: 1200px) {
    
    h2 {
      font-size: 2em;
    }

  }
  

  
  
`