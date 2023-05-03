import styled from "styled-components";

export const HomeStyle = styled.section`

  display: grid;
  height: 100%;
  gap: 30px;

  h1 {
    text-shadow: 0px 0px 1px blue;
  }
  
  p {
    padding: 20px;
    max-width: 1000px;
  }

  p span {
    font-weight: bold;
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 2.2em;
    }

    img {
      max-width: 100px;
      min-width: 300px;
    }
  }
`