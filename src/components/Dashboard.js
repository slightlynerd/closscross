import { useState } from "react";
import TradingHistoryList from "./TradingHistoryList";
import tradingHistory from "../data/tradingHistory";

export default function Dashboard() {
  const [history] = useState(tradingHistory);

  return (
    <main>
      <div className="flex">
        <div>
          <p>Select assets, types and period</p>
          <button>Filter</button>
        </div>
        <div>
          <select>
            <option>Trending</option>
          </select>
        </div>
      </div>
      <TradingHistoryList history={history} />
    </main>
  );
}
