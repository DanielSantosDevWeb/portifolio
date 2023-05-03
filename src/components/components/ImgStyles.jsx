import styled from "styled-components";

export const ImgStyle = styled.div`

  img {
    width: ${({ wid }) => wid} ;
    animation: ${({ anim }) => anim} 15s linear infinite ;
    min-width: none ;
    max-width: 580px;
    border-radius: ${({ bordRad }) => bordRad} ;
  }

  @keyframes girar {
    100% {
      transform: rotate(360deg);
    }
  }

`