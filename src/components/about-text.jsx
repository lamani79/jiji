const AboutText = ({closeAboutText}) => {
  return (
    <div className="fixed grid place-content-center   w-full h-full top-0 right-0 left-0 bottom-0 bg-black/70 z-50">
      <div className="bg-gray-200 px-2 py-8 w-[calc(max(300px,80%))] mx-auto rounded-md ">
        {/* close */}
        <div className="w-fit h-fit group cursor-pointer" onClick={closeAboutText}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-gray-600 group-hover:fill-black transition-colors"
              d="M76 25.64L70.36 20L48 42.36L25.64 20L20 25.64L42.36 48L20 70.36L25.64 76L48 53.64L70.36 76L76 70.36L53.64 48L76 25.64Z"
            />
          </svg>
        </div>
        <div className="space-y-4">
          <h2 className="text-black text-4xl  font-bold text-center">
            حول مبادرة فطرة
          </h2>
          <p className="text-black font-medium text-lg text-center">
            ‏الهدف الرئيسي من “فطرة” أن تكون مظلة عامة تتيح لكل الأفراد والفئات
            والفصائل والتيارات إعلانهم الرفض الصريح والقاطع لكل الحملات الموجهة
            والأفكار الخبيثة التي يتم الترويج لها، ولكل ما هو منافٍ للفطرة
            الإنسانية وأيضاً ممارسات الضغط التي يمارسها المجتمع الغربي لتطبيعها.
          </p>
          <div>
            <p>تابع القرائة حول المبادرة</p>
            <p>روابط مهمة:</p>

            <a
              className="block font-bold underline text-gray-600 hover:text-black"
              target="_blank"
              rel="noreferrer"
              href="https://al-ain.com/article/fitra-initiative-homosexuality"
            >
              "فطرة" تحارب المثلية بسلاحها.. جيش الرافضين يغزو السوشيال ميديا
              (خاص)
            </a>
            <a
              className="block font-bold underline text-gray-600 hover:text-black"
              target="_blank"
              rel="noreferrer"
              href="https://www.qposts.com/%D8%AD%D9%88%D8%A7%D8%B1-%D9%85%D8%B9-%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D9%81%D8%B7%D8%B1%D8%A9/"
            >
              حوار مع مبادرة فطرة
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
