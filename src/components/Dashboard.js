import { useState } from "react";
import cn from "classnames";
import TradingHistoryList from "./TradingHistoryList";
import tradingHistory from "../data/tradingHistory";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [history] = useState(tradingHistory);
  const [unit, setUnit] = useState("currency");

  return (
    <main className="dashboard pt-8">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex">
            <p className="text-gray-500 text-sm mr-4">
              Select assets, types and period:
            </p>
            <button className="btn-outline--accent uppercase rounded-sm text-xs px-3">
              Filter
            </button>
          </div>
          <div className="flex">
            <div className="flex mr-5">
              <span className="text-sm text-gray-500 mr-2">Units:</span>
              <div className="flex btn-outline--accent text-xs rounded-sm">
                <button
                  className={cn({
                    "bg-accent text-black": unit === "percent",
                    "px-2": true,
                  })}
                  onClick={() => setUnit("percent")}
                >
                  %
                </button>
                <button
                  className={cn({
                    "bg-accent text-black": unit === "currency",
                    "px-2": true,
                  })}
                  onClick={() => setUnit("currency")}
                >
                  $
                </button>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500 mr-2">Sort by:</span>
              <select className="sort">
                <option>Trending</option>
              </select>
            </div>
          </div>
        </div>
        <TradingHistoryList history={history} />
      </div>
    </main>
  );
}
