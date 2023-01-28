import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  aside{
    background: azure;
    margin: 0px;
    display: block;
    flex-direction: row;
    justify-content: flex-end;
    width:25vw;
    height:100%;
    position: fixed;
  }
  main{
    left: 25vw;
    position: relative;
    margin: 0;
  }
  @media(max-width: 652px){
    flex-direction: column;
    aside{
      display: block;
      width: 100%;
    }
  }
`;