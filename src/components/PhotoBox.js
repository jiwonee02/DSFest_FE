import React from "react";
import heic2any from "heic2any";
import * as P from "../styles/PhotoBoxStyle";

import PhotoCam from "../img/photo_cam_32x32.png";

function PhotoBox({ index, setImagePreview, imagePreview }) {
  const handleProfileImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // HEIC 이미지인지 확인
      const isHeic = file.type === "image/heic";

      if (isHeic) {
        // HEIC 이미지일 경우에만 디코딩
        const imageBuffer = await file.arrayBuffer();

        // 이미지를 Blob으로 변환
        const imageBlob = new Blob([imageBuffer]);

        const jpegBlob = await heic2any({ blob: imageBlob, toType: "image/jpeg" });

        // Blob URL 생성
        const imageUrl = URL.createObjectURL(jpegBlob);

        setImagePreview(index, imageUrl);
      } else {
        // HEIC가 아닌 경우는 기존 방식으로 처리
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(index, reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <P.PhotoBox>
      <P.UploadLabel htmlFor={`file${index}`}>
        {!imagePreview && <img src={PhotoCam} alt="이미지 업로드" />}
      </P.UploadLabel>
      <P.File
        type="file"
        name={`file${index}`}
        id={`file${index}`}
        accept="image/*, .heic"
        onChange={handleProfileImageChange}
      />
      <P.FilePreview>{imagePreview && <img src={imagePreview} alt="Preview" />}</P.FilePreview>
    </P.PhotoBox>
  );
}

export default PhotoBox;
