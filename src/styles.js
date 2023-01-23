import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  min-width: 100vw;
  min-height: 100vh;
  aside{
    margin: 0px;
    display: block;
    flex-direction: row;
    justify-content: flex-end;
    width:25vw;
  }
  main{
    margin: 0;
    width: 100%;
  }
  @media(max-width: 652px){
    flex-direction: column;
    aside{
      display: block;
      width: 100%;
    }
  }
`;