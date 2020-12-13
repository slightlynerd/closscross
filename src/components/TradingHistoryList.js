import TradingHistoryCard from "./TradingHistoryCard";

export default function TradingHistoryList(props) {
  return (
    <div className="mt-5">
      {props.history.map((item) => {
        return <TradingHistoryCard key={item.id} data={item} />;
      })}
    </div>
  );
}
