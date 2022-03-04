import axios from "axios";


const BASE_URL =`https://api.coinpaprika.com/v1`

//get coins
export const fetchCoins = async() => {
    const {data}  = await axios.get(`${BASE_URL}/coins`);
    return data;
} 

//get coin info
export const fetchCoinInfo = async(coinId:string) => {
    const {data} = await axios.get(`${BASE_URL}/coins/${coinId}`);
    return data;
}

//get coin tickers
export const fetchCoinTickers = async(coinId:string) => {
    const {data} = await axios.get(`${BASE_URL}/tickers/${coinId}`);
    return data;
}

//get coin history
export const fetchCoinHistory = async(coinId:string) => {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;
    const {data} = await axios.get(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`);
    return data;
}
