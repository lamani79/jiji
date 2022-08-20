import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Cropper from "./Croper";

const Canva = () => {
  const [showCropper,setShowCropper] = useState(false)
  const url_input_ref = useRef();
  const img_ref = useRef();

  // const canvas_width = useRef();

  useEffect(() => {}, []);
  let str = null;

  async function generateFitra() {
    const canvas = document.getElementById("main_canvas");
    let width = canvas.width;
    let height = canvas.height;
    let ctx = canvas.getContext("2d");

    async function get_upload() {
      return new Promise((resolve, reject) => {
        const img_file = window.file.files[0];

        let reader = new FileReader();

        // Setup the callback event to run when the file is read
        reader.onload = (event) => {
          str = event.target.result;
          return resolve(str);
        };

        // Read the file
        reader.readAsDataURL(window.file.files[0]);
      });
    }

    async function draw_bg() {
      // const fitra_url =
      //   "https://i0.wp.com/faharas.net/wp-content/uploads/2022/07/What-is-the-Fitra-campaign.jpg?resize=750%2C430&ssl=1";

      // const background = new Image();

      // background.src = fitra_url;
      // ###########################
      // background.onload = function () {
      //   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      //   ctx.save();
      // };
      ctx.drawImage(document.getElementById('jiji'),0,0,300,300);
      ctx.drawImage(document.getElementById('pipi'),15,15,270,270)
    }
    async function draw_pic() {
      const the_img = await get_upload();
      // 100 for padding
      const size = width - 150;
      const profile_url = the_img;

      var img = new Image();
      let url = url_input_ref.current.value;

      img.src = url;
      img.onload = function () {
        // size
        const profile_size = width - 10;
        roundedImage();
        ctx.clip();
        ctx.drawImage(
          img,
          width / 2 - profile_size / 2,
          height / 2 - profile_size / 2,
          profile_size,
          profile_size
        );
        ctx.save();
      };

      function roundedImage() {
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 150, 0, 2 * Math.PI);
        ctx.closePath();
      }
    }

    //  ctx.drawImage(document.getElementById("jiji"), 50, 50, 300, 300);
    await draw_bg();
    // await draw_pic();
  }
  return (
    <div>
      { showCropper && <Cropper setShowCropper={setShowCropper}/>}
      <div>
        <button onClick={() => {setShowCropper(true)}}>click me</button>
      {/* <img id="pipi" src="/profile.png" />

      <img id="jiji" src="/png.png" /> */}
      </div>
      <div>
        <input ref={img_ref} type="file" id="file" accept="image/*" />

        <button onClick={(e) => generateFitra(url_input_ref.current.value)}>
          generate fitra img
        </button>
      </div>
      <canvas id="main_canvas" width={"300px"} height={"300px"}></canvas>
    </div>
  );
};

export default Canva;
