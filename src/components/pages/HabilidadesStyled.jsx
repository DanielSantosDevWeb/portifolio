import styled from "styled-components";

export const Habilidades = styled.div`

    height: 100%;
    display: grid;
    gap: 20px;
    margin: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    @media screen and (min-width: 770px) {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      max-width: 900px;
      margin: 20px auto ;
      
    }

    @media screen and (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 1200px;
    }

`