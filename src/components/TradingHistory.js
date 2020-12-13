import { useState } from "react";
import cn from "classnames";

export default function TradingHistory() {
  const [filter, setFilter] = useState("week");

  return (
    <div className="px-8 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4777 3.85259C20.4448 3.74549 20.3758 3.64878 20.2749 3.58235C20.1554 3.50369 20.0145 3.48294 19.8855 3.51328C19.8499 3.52164 19.8152 3.5339 19.782 3.54989L13.2905 6.54602C13.0397 6.66174 12.9303 6.95881 13.046 7.20953C13.1617 7.46026 13.4588 7.5697 13.7095 7.45398L18.6194 5.18785L11.6261 15.8121L8.17019 13.3329C8.05767 13.2521 7.91671 13.2217 7.78091 13.2488C7.64511 13.2759 7.52662 13.3581 7.45369 13.4758L3.57491 19.7367C3.42948 19.9714 3.50188 20.2796 3.73662 20.425C3.97137 20.5705 4.27956 20.4981 4.42499 20.2633L8.02201 14.4573L11.4661 16.928C11.5766 17.0073 11.7148 17.0382 11.8486 17.0134C11.9824 16.9886 12.1003 16.9103 12.1752 16.7966L19.5 5.66895V11C19.5 11.2761 19.7238 11.5 20 11.5C20.2761 11.5 20.5 11.2761 20.5 11V4.00734V4C20.5 3.98201 20.499 3.96414 20.4971 3.94647"
              fill="#9AC802"
            />
          </svg>
          <p className="title uppercase ml-4">Trading History</p>
        </div>
        <svg
          width="8"
          height="10"
          viewBox="0 0 8 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.882257 8L0 6.65456L3.29099 4L0 1.34545L0.882257 4.76837e-07L5.84127 4L0.882257 8Z"
            fill="#9AC802"
          />
        </svg>
      </div>
      <div className="flex justify-between text-gray-500 mt-3">
        <button
          className={cn({
            "bg-accent text-black rounded-sm px-2 py-1": filter === "last",
          })}
          onClick={() => setFilter("last")}
        >
          Last
        </button>
        <button
          className={cn({
            "bg-accent text-black rounded-sm px-2 py-1": filter === "day",
          })}
          onClick={() => setFilter("day")}
        >
          day
        </button>
        <button
          className={cn({
            "bg-accent text-black rounded-sm px-2 py-1": filter === "week",
          })}
          onClick={() => setFilter("week")}
        >
          week
        </button>
        <button
          className={cn({
            "bg-accent text-black rounded-sm px-2 py-1": filter === "month",
          })}
          onClick={() => setFilter("month")}
        >
          month
        </button>
        <button
          className={cn({
            "bg-accent text-black rounded-sm px-2 py-1": filter === "all",
          })}
          onClick={() => setFilter("all")}
        >
          all
        </button>
      </div>
      <div className="flex mt-6">
        <div>
          <p className="text-gray-500 text-xs">Total trades</p>
          <p className="text-2xl font-semibold">245</p>
        </div>
        <div className="ml-12">
          <p className="text-gray-500 text-xs">Profit</p>
          <p className="text-2xl font-semibold">+21.5%</p>
        </div>
      </div>
      <hr className="border-gray-500 mt-8" />
    </div>
  );
}
