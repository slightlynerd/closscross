export default function OpenTrades() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.00331 0.500011C6.24429 0.501606 6.44985 0.674869 6.49221 0.912105L8.57769 12.5908L10.6478 4.17469C10.7021 3.95395 10.8985 3.79762 11.1258 3.79418C11.3531 3.79073 11.5541 3.94104 11.615 4.16003L13.0798 9.42216L13.8676 7.40624C13.9426 7.21446 14.1274 7.08824 14.3333 7.08824H17C17.2761 7.08824 17.5 7.31209 17.5 7.58824C17.5 7.86438 17.2761 8.08824 17 8.08824H14.6748L13.4657 11.182C13.3874 11.3824 13.1896 11.5102 12.9747 11.4994C12.7599 11.4885 12.576 11.3414 12.5183 11.1341L11.1632 6.26598L8.98553 15.1194C8.92912 15.3488 8.71993 15.5074 8.48388 15.4997C8.24784 15.4921 8.0493 15.3204 8.00779 15.0879L5.98185 3.74265L5.22434 7.68264C5.17908 7.91807 4.97308 8.08824 4.73333 8.08824H1C0.723858 8.08824 0.5 7.86438 0.5 7.58824C0.5 7.31209 0.723858 7.08824 1 7.08824H4.32031L5.50899 0.905598C5.55449 0.668944 5.76233 0.498416 6.00331 0.500011Z"
              fill="#9AC802"
            />
          </svg>
          <p className="title uppercase ml-4">Open trades</p>
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
      <div className="flex mt-6">
        <div>
          <p className="text-gray-500 text-xs">Trades in progress</p>
          <p className="text-2xl font-semibold">15</p>
        </div>
        <div className="ml-5">
          <p className="text-gray-500 text-xs">Closest outcome</p>
          <p className="text-2xl font-semibold">
            25m 40s <br />
            ETH 48 hour
          </p>
        </div>
      </div>
      <hr className="border-gray-500 mt-8" />
    </div>
  );
}
