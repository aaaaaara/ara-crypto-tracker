import React from 'react'
import { useParams, useLocation } from 'react-router'

interface RouteParams {
  coinId: string;
}
export default function Coin() {
  const { coinId } =useParams();
  return (
    <h1>this is {coinId}</h1>
  )
}
