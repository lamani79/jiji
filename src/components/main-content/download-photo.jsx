const DownloadPhoto = ({download}) => {
  return (
    <div className="flex flex-col items-center">
      {/* icon upload */}
      <div onClick={() => download()} id="icon-download" className="group cursor-pointer">
        <svg
          width="100"
          height="100"
          viewBox="0 0 92 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          className="group-hover:fill-gray-200 transition-colors"
            d="M74.175 23.4867C71.5683 10.2617 59.9533 0.333328 46 0.333328C34.9217 0.333328 25.3 6.61999 20.5083 15.82C8.97 17.0467 0 26.8217 0 38.6667C0 51.355 10.3117 61.6667 23 61.6667H72.8333C83.4133 61.6667 92 53.08 92 42.5C92 32.38 84.1417 24.1767 74.175 23.4867ZM72.8333 54H23C14.5283 54 7.66667 47.1383 7.66667 38.6667C7.66667 30.8083 13.5317 24.2533 21.3133 23.4483L25.415 23.0267L27.3317 19.385C30.9733 12.37 38.1033 7.99999 46 7.99999C56.0433 7.99999 64.7067 15.13 66.6617 24.9817L67.8117 30.7317L73.6767 31.1533C79.6567 31.5367 84.3333 36.5583 84.3333 42.5C84.3333 48.825 79.1583 54 72.8333 54V54ZM51.5583 23.3333H40.4417V34.8333H30.6667L46 50.1667L61.3333 34.8333H51.5583V23.3333Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="text-white group-hover:text-gray-200 transition-colors text-base font-bold grid grid-cols-2 gap-2">
        <h2 className="place-self-end">حمل</h2>
        <h2 className="place-self-start">الصورة</h2>
      </div>
    </div>
  );
};

export default DownloadPhoto;
