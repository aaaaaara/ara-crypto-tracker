import React from 'react'
import ApexChart from 'react-apexcharts';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchCoinHistory } from 'api'
import { useRecoilValue } from 'recoil'
import { isDarkState } from 'atoms'

interface RoutePrams {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Chart() {
  const isDark = useRecoilValue(isDarkState);
  const {coinId} = useParams() as unknown as RoutePrams;
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  console.log(data)
  
  return (
    <div>
            {
                isLoading ? (
                    "Loading Chart"
                ) : (
                    <ApexChart 
                        type="candlestick"
                        series={[
                            {
                                name: "price",
                                data: [{
                                  x: data?.map(price => price.time_open),
                                  y: data?.map(price => price.high)
                                },
                              ],
                                
                            },
                        ]}
                        options={{
                            theme: {
                                mode: isDark ? "dark" : "light"
                            },
                            plotOptions: {
                              candlestick: {
                                colors: {
                                  upward:'#0be881',
                                  downward: '#0fbcf9',
                                }
                              }
                            },
                            chart: {
                                width: 500,
                                height: 500,
                                toolbar : {
                                    show: false,
                                },
                                background: "transparent"
                            },
                            yaxis :{
                                tooltip: {
                                  enabled: true,
                                }
                            },
                            xaxis : {
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                                labels: { show: false },
                                type: "datetime",
                                categories: data?.map((price) => price.time_close),
                            },
                        }}
                    />
                )}
        </div>
  )
}
