import { BrowserRouter, Route, Routes } from "react-router-dom";

import Coins from "routes/Coins";
import Coin from "routes/Coin";

export default function Router() {
  return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />} />
              <Route path="/:coinId/*" element={<Coin />} /> 
          </Routes>
        </BrowserRouter>
  )
}
