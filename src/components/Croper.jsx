import { useEffect } from "react";
import { useState } from "react";
import Avatar from "react-avatar-edit";

const Cropper = ({ setShowCropper }) => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
  };
  // useEffect(() => {
  //       console.log(src)
  // },[preview])
  return (
    <div className="crop_area">
      <Avatar
        width={300 - 15}
        height={300 - 15}
        // imageWidth={300}
        onClose={onClose}
        onCrop={onCrop}
        src={src}
        exportSize={300-15}
        backgroundColor="black"
        closeIconColor="red"
      />
      <button onClick={() => setShowCropper(false)}>close</button>
      <div className="img_container">
        <img id="bg" width={300} height={300} src="/png.png" />
        {preview && <img id="profile" src={preview} alt="jiji" />}
      </div>
    </div>
  );
};

export default Cropper;
