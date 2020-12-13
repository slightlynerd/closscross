import HorChart from "./HorChart";
import VerChart from "./VerChart";
import "../styles/TradingCard.css";

export default function TradingHistoryList({ data }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        {/* name */}
        <div className="flex items-start">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9413 5.19689L9 1.1121L7.0587 5.19689C6.79175 5.75859 6.2788 6.14821 5.68533 6.24006L1.36947 6.908L4.48553 10.1005C4.91403 10.5395 5.10995 11.1699 5.01012 11.7884L4.28407 16.286L8.15121 14.1742C8.68298 13.8838 9.31701 13.8838 9.84879 14.1742L13.7159 16.286L12.9899 11.7884C12.89 11.1699 13.086 10.5395 13.5145 10.1005L16.6305 6.908L12.3147 6.24006C11.7212 6.14821 11.2083 5.75859 10.9413 5.19689ZM9.82092 0.685678C9.48386 -0.0235422 8.51613 -0.0235423 8.17908 0.685678L6.23777 4.77047C6.1043 5.05132 5.84783 5.24613 5.55109 5.29205L1.23523 5.95999C0.485895 6.07597 0.18685 7.03817 0.727876 7.59246L3.84394 10.7849C4.05819 11.0044 4.15615 11.3196 4.10623 11.6289L3.38019 16.1265C3.25413 16.9074 4.03704 17.502 4.70847 17.1354L8.5756 15.0237C8.84149 14.8785 9.15851 14.8785 9.42439 15.0237L13.2915 17.1354C13.963 17.502 14.7459 16.9074 14.6198 16.1265L13.8938 11.6289C13.8438 11.3196 13.9418 11.0044 14.1561 10.7849L17.2721 7.59246C17.8131 7.03817 17.5141 6.07597 16.7648 5.95999L12.4489 5.29205C12.1522 5.24613 11.8957 5.05132 11.7622 4.77047L9.82092 0.685678Z"
              fill="#9AC802"
            />
          </svg>
          <div className="ml-3 -mt-1">
            <p className="text-lg font-semibold mt-0">{data.name}</p>
            <p className="text-sm text-gray-500">{data.currency}</p>
          </div>
        </div>
        {/* outcome */}
        <div className="border-l-2 border-dotted border-gray-500 px-6">
          <div className="flex">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2069 5.37931H19.0345C16.9655 1.65517 14.4797 0.320011 9.51724 0C11.1724 1.24138 11.1724 2.48276 10.7586 2.89655C7.03448 0.827586 3.31034 3.72414 0 0C0.827586 4.96552 2.48276 6.2069 5.7931 7.86207C3.31034 7.86207 2.06897 8.27586 0.827586 9.93103C5.7931 10.7586 6.62069 11.1724 9.10345 13.6552L11.5862 10.7586L6.2069 5.37931Z"
                fill="#9AC802"
              />
              <path
                d="M11.5862 6.62069H9.10345L13.2414 10.7586L9.10345 15.7241H11.5862L15.7241 10.7586L11.5862 6.62069Z"
                fill="#9AC802"
              />
              <path
                d="M15.7241 6.6207H13.2413L17.3792 10.7586L13.2413 15.7242H15.7241L19.862 10.7586L15.7241 6.6207Z"
                fill="#9AC802"
              />
              <path
                d="M19.862 6.6207H17.3792L21.5172 10.7586L17.3792 15.7242H19.862L23.9999 10.7586L19.862 6.6207Z"
                fill="#9AC802"
              />
            </svg>
            <p className="ml-4">2,2x</p>
          </div>
          <p className="text-gray-500 text-xs">{data.outcome}</p>
        </div>
        {/* line chart */}
        <HorChart />
        {/* rotated line chart */}
        <VerChart />
        {/* total */}
        <div>
          <p className="text-lg font-semibold">$ {data.total}</p>
          <p className="font-semibold text-xs text-gray-500">
            Total commitment funds
          </p>
        </div>
      </div>
    </div>
  );
}
