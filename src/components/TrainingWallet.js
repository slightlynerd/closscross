export default function TrainingWallet() {
  return (
    <div className="px-8 py-3">
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
              d="M3.5 6C3.5 5.72386 3.72386 5.5 4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V18C20.5 18.2761 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6ZM4.5 6.5V17.5H19.5V6.5H4.5Z"
              fill="#9AC802"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5 12C13.5 10.6193 14.6193 9.5 16 9.5H20C20.2761 9.5 20.5 9.72386 20.5 10V14C20.5 14.2761 20.2761 14.5 20 14.5H16C14.6193 14.5 13.5 13.3807 13.5 12ZM16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5H19.5V10.5H16Z"
              fill="#9AC802"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 12.5H16V11.5H17V12.5Z"
              fill="#9AC802"
            />
          </svg>

          <p className="title uppercase ml-4">Training Wallet</p>
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
      <div className="mt-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gray-500 text-xs">Trading</p>
            <p className="text-2xl font-semibold">$ 34,752.00</p>
          </div>
          <button className="btn-outline--accent text-sm text-black px-3 py-1 rounded-sm uppercase">
            Top up
          </button>
        </div>
        <div className="flex items-end justify-between mt-4">
          <div>
            <p className="text-gray-500 text-xs">Holding</p>
            <p className="text-2xl font-semibold">$ 4,102.00</p>
          </div>
          <button className="bg-accent text-black text-sm px-3 py-1 rounded-sm uppercase">
            Buy Dai
          </button>
        </div>
      </div>
    </div>
  );
}
