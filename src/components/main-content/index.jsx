import { useState } from "react";
import Cropper from "./cropper";
import DownloadPhoto from "./download-photo";
import FetrahText from "./fetrah-text";
import UploadPhoto from "./upload-photo";

const MainContent = () => {
  const [preview, setPreview] = useState(null);

  const [step, setStep] = useState(0);
  // const [src, setSrc] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const oppenCropper = () => setShowCropper(true);

  const generateNewPhoto = () => {
    setShowCropper(false);
    setStep(1);
  };
  const createNewCanvas = () => {
    // const canvas = document.getElementById("main_canvas");
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "main_canvas");
    canvas.setAttribute("width", "300");
    canvas.setAttribute("height", "300");

    let width = canvas.width;
    let height = canvas.height;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(document.getElementById("bg"), 0, 0, 300, 300);
    ctx.drawImage(document.getElementById("profile"), 15, 15, 270, 270);
    return canvas;
  };
  const download = () => {
    const canvas = createNewCanvas();

    var link = document.createElement("a");
    link.download = "fetrah_photo.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-screen h-screen grid place-content-center space-y-8">
      <FetrahText />
      {step === 0 && (
        <div className="mt-8">
          <UploadPhoto oppenCropper={oppenCropper} />
          {showCropper && (
            <Cropper
              setAvatar={setAvatar}
              generateNewPhoto={generateNewPhoto}
              // src={src}
              setStep={setStep}
              preview={preview}
              setPreview={setPreview}
            />
          )}
        </div>
      )}
      {/* <div className="mx-auto">
        <div
          className={step === 1 ? "grid" : "hidden  place-content-center mt-8"}
        >
          <canvas width={300} height={300} id="main_canvas"></canvas>
        </div>
      </div> */}

      {step === 1 && (
        <div id="conti" className="mt-8 mx-auto">
          <div className="relative flex justify-center items-center w-[300px] h-[300px]">
            {/* bg */}
            <img
              id="bg"
              src="/png.png"
              alt=""
              className="absolute top-0 left-0 w-[300px] h-[300px]"
            />
            {/* avatar */}
            <img id="profile" src={preview} alt="new img" />
          </div>
          {/* download btn */}
          <DownloadPhoto download={download} />
        </div>
      )}
    </div>
  );
};

export default MainContent;
