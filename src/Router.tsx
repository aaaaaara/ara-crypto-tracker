import { BrowserRouter, Route, Routes } from "react-router-dom";

import Coins from "routes/Coins";
import Coin from "routes/Coin";

export default function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins />}/>
                <Route path="/:coinid" element={<Coin />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
