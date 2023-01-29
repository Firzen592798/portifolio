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
    display:flex;
    flex-direction: column;
    aside{
      position: initial;
      height: initial;
      display: block;
      width: 100%;
    }
    main{
      display: block;
      width: 100%;
      position: initial;
      left: 5vw;
    }
  }
`;