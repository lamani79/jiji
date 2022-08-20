const FetrahText = () => {
  return (
    <div className="space-y-2  p-8 relative overflow-hidden">
      <span className="line_anime_span"></span>
      <span className="line_anime_span"></span>
      <span className="line_anime_span"></span>
      <span className="line_anime_span"></span>

      {/* arabic */}
      <div className="text-white text-3xl sm:text-6xl font-bold grid grid-cols-2 gap-4">
        <h2 className="place-self-end">مولد</h2>
        <h2 className="place-self-start">فطرة</h2>
      </div>
      {/* english */}
      <div className="text-white text-3xl sm:text-6xl font-bold text-center">
        <h2 className="place-self-end">Fetrah</h2>
        <h2 className="place-self-start">Generator</h2>
      </div>
    </div>
  );
};

export default FetrahText;
