import { useState } from "react";
import Avatar from "react-avatar-edit";

const Cropper = ({ setAvatar, generateNewPhoto,preview,setPreview }) => {

//   const [src,setSrc] = useState(null)

  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
    setAvatar(view);
  };
  const crop_img = () => {
    generateNewPhoto();
  };
  return (
    <div
      id="avatar_container"
      className="overflow-hidden w-screen h-screen absolute top-0 left-0 grid place-content-center bg-black/95"
    >
      <Avatar
      
        width={300 - 15}
        height={400 - 15}
        onClose={onClose}
        onCrop={onCrop}
      //   src={src}
        exportSize={300}
        labelStyle={{
          color: "white",
          fontWeight: "bold",
          fontSize: "2rem",
          cursor: "pointer",
          display: "block",
          height: "100%",
          textAlign: "center",
        }}
      />
      {/* controler */}
      <div className="mt-4 mx-auto">
        {preview && (
          <div
            onClick={() => crop_img()}
            className="text-white font-bold cursor-pointer bg-gradient-to-r from-main-rose transform hover:scale-105 transition-transform to-main-blue px-4 py-2 w-fit rounded-md"
          >
            قص الصورة
          </div>
        )}
      </div>
    </div>
  );
};

export default Cropper;
