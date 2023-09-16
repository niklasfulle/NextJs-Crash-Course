"use client";

import { useState } from "react";

export function UploadForm() {
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      // handle the error
      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
    setUploading(false);
  };
  {
  }
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setFile(file);
            }
          }}
        />
        <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          {selectedImage ? <img src={selectedImage} alt="" /> : <span>Select Image</span>}
        </div>
      </label>
      <button
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-red-600 p-3 w-32 text-center rounded text-white"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
}
