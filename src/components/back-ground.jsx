const BackGround = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
      <div className="h-screen relative">
      {/* black layer  */}
      <div className="h-full w-full absolute top-0 right-0 left-0 bottom-0 bg-black/20"></div>
      <div className="h-full grid grid-cols-2">
        {/* rose */}
        <div className="h-full bg-main-rose"></div>
        {/* blue */}
        <div className="h-full bg-main-blue"></div>
      </div>
    </div>
    </div>
  );
};

export default BackGround;
