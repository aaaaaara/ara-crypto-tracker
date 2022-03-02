import React from 'react'
import styled from 'styled-components';

export default function Coins() {
  return (
    <Container>
      <CoinsHeader>
        <Title>Coins</Title> 
      </CoinsHeader>
      <CoinsList>
        코인코인
      </CoinsList>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 10% 10px;
`;

const CoinsHeader = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader = styled.span `
    text-align: center;
    font-weight: bold;
`;

const CoinsList = styled.ul`
`;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;

    & > a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 20px;    
        transition: all .3s ease-in;

        &:hover {
            color: ${props => props.theme.accentColor};
            transition: all .3s ease-in;
        }
    }
`;

const Img = styled.img `
    width: 25px;
    height: 25px;
    vertical-align: middle;
`;
const Title = styled.h1 `
    color: ${props => props.theme.accentColor};
    font-weight: bold;
    font-size: 30px;
`;