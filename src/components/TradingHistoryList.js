import TradingHistoryCard from "./TradingHistoryCard";

export default function TradingHistoryList(props) {
  return (
    <div>
      {props.history.map((item) => {
        return <TradingHistoryCard key={item.id} data={item} />;
      })}
    </div>
  );
}
