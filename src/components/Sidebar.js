import OpenTrades from "./OpenTrades";
import TradingHistory from "./TradingHistory";
import TrainingWallet from "./TrainingWallet";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <OpenTrades />
      <TradingHistory />
      <TrainingWallet />
    </aside>
  );
}
