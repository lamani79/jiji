const UploadPhoto = ({oppenCropper}) => {
      return (
            <div onClick={() => oppenCropper()}
             className="flex flex-col items-center">
            {/* icon upload */}
            <div id="icon-upload" className="group cursor-pointer">
              <svg
                width="100"
                height="100"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-gray-200 transition-colors"
                  d="M161.25 83.6667C155.583 54.9167 130.333 33.3333 100 33.3333C75.9167 33.3333 55 47 44.5833 67C19.5 69.6667 0 90.9167 0 116.667C0 144.25 22.4167 166.667 50 166.667H158.333C181.333 166.667 200 148 200 125C200 103 182.917 85.1667 161.25 83.6667ZM158.333 150H50C31.5833 150 16.6667 135.083 16.6667 116.667C16.6667 99.5833 29.4167 85.3333 46.3333 83.5833L55.25 82.6667L59.4167 74.75C67.3333 59.5 82.8333 50 100 50C121.833 50 140.667 65.5 144.917 86.9167L147.417 99.4167L160.167 100.333C173.167 101.167 183.333 112.083 183.333 125C183.333 138.75 172.083 150 158.333 150ZM66.6667 108.333H87.9167V133.333H112.083V108.333H133.333L100 75L66.6667 108.333Z"
                  fill="white"
                />
              </svg>
            </div>
    
            <div className="text-white group-hover:text-gray-200 transition-colors text-base font-bold grid grid-cols-2 gap-2">
              <h2 className="place-self-end">إرفع</h2>
              <h2 className="place-self-start">صورة</h2>
            </div>
          </div>
      );
}

export default UploadPhoto;