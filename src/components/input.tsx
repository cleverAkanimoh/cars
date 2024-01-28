"use client";

import Image from "next/image";
import React from "react";

export default function FileInput() {
  const [file, setFile] = React.useState({
    filePath: "",
    fileName: "",
    fileSize: "",
  });
  
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileSize = formatFileSize(e.target.files[0].size);
      const fileName = e.target.files[0].name;
      const filePath = e.target.files[0].type;

      setFile({ fileName, filePath, fileSize });
    }
    console.log(e);
  };

  return (
    <div className="grid gap-4">
      <div>
        <label htmlFor="fileupload">upload file</label>
        <input
          type="file"
          name="fileupload"
          id="fileupload"
          multiple
          onChange={handleUpload}
          className="hidden"
        />
      </div>
      <div className="flex gap-4">
        <span>{file.filePath || "nothing yet"}</span>
        <span>{file.fileSize || "nothing yet"}</span>
        <span>{file.fileName || "nothing yet"}</span>
      </div>
      <div>
        <p>image preview</p>
        <Image
          src={`/images/${file.fileName}`}
          alt="dummy image"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
}

const formatFileSize = (num: number) => {
  if (num < 1024) {
    return `${num} bytes`;
  }
  if (num >= 1024 && num < 1048576) {
    return `${(num / 1024).toFixed(1)} kb`;
  }
  if (num >= 1048576) {
    return `${(num / 1048576).toFixed(1)} mb`;
  }
  return `number not valid`;
};
