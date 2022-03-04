import React from 'react'
import { useQuery } from 'react-query';
import { fetchCoinTickers } from 'api';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

interface RoutePrams {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
export default function Price() {
  const {coinId} = useParams() as unknown as RoutePrams;
  const {isLoading, data:tickersData} = useQuery<PriceData>(["tickers",coinId], ()=>fetchCoinTickers(coinId));
  return (
    <>
    {
      isLoading ? "Loading" : <PriceBox>${tickersData?.quotes.USD.price.toFixed(3)}</PriceBox>
    }
      
    </>
  )
}

const PriceBox = styled.div`
  border: 2px solid ${props => props.theme.accentColor};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${props => props.theme.accentColor};
`;