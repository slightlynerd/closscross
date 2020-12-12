import OpenTrades from "./OpenTrades";
import TradingHistory from "./TradingHistory";
import TrainingWallet from "./TrainingWallet";

export default function Sidebar() {
  return (
    <aside>
      <OpenTrades />
      <TradingHistory />
      <TrainingWallet />
    </aside>
  );
}
