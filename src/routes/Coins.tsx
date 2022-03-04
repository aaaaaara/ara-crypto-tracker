import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoins } from 'api';
import { motion } from 'framer-motion';
import { Container} from '../styles/Container.style'
import { useSetRecoilState } from 'recoil';
import { isDarkState } from '../atoms';
import { Helmet } from 'react-helmet';
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {

  const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);
  const setDarkAtom = useSetRecoilState(isDarkState);
  const toggleDartAtom = () => {
    setDarkAtom((prev) => !prev)
  }

  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <CoinsHeader>
        <Title>Coins</Title> 
        <button onClick={toggleDartAtom}>theme 변경</button>
      </CoinsHeader>
      
        {isLoading ?
          <Loader>Loading</Loader> :
          <CoinsList>
          {data?.slice(0, 100).map((coin)=>(
            <Coin whileHover={{scale: 1.1}} transition={{type:'tween'}} key={coin.id}>
              <Link to={`${coin.id}`} state={coin.name}>
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.name}/>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
          </CoinsList>
        }
      
    </Container>
  )
}

const CoinsHeader = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & > button {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      border: 2px solid ${props => props.theme.accentColor};
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 600;
      color: ${props => props.theme.accentColor};
    }
`;

const Loader = styled.span `
    text-align: center;
    font-weight: bold;
`;

const CoinsList = styled.ul`
`;

const Coin = styled(motion.li)`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    margin-bottom: 10px;
    border-radius: 15px;
    border: 2px solid ${props => props.theme.accentColor};

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