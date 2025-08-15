"use client";

import React, { useRef, useState, useCallback } from "react";


export default function DeepfasWebcamTab() {
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [label, setLabel] = useState<"Real" | "Fake" | null>(null);
  const [ping, setPing] = useState(500);
  const [imageUrl, setImageUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const openFile = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const url = URL.createObjectURL(target.files[0]);
        setImageUrl(url);
      }
    };
    input.click();
  }, []);

  const onImageLoadDetect = useCallback(() => {
    if (!imageUrl || !imageRef.current || !canvasRef.current) return;

    // Giả lập gọi hàm detect DeepFake
    // detectDF(imageRef.current, canvasRef.current, ping, setAccuracy, setLabel);
  }, [imageUrl, ping]);

  return (
    <div className="flex flex-col justify-start">
      <div className="mb-2">
        <button
          onClick={openFile}
          className="px-3 py-2 bg-blue-600 text-white rounded"
        >
          Bật camera của bạn
        </button>
      </div>

      {accuracy !== null && label !== null && (
        <div className="my-4 space-y-2">
          <div className="flex items-center justify-center space-x-3">
            <span
              className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                label === "Real" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {label}
            </span>
            <span className="text-lg font-bold text-gray-900 tracking-wide">
              Accuracy:{" "}
              <span className="text-primary">{accuracy.toFixed(2)}%</span>
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden shadow-inner">
            <div
              className={`h-full transition-all duration-700 ease-in-out ${
                label === "Real" ? "bg-green-500" : "bg-red-500"
              }`}
              style={{ width: `${accuracy}%` }}
            />
          </div>
        </div>
      )}

      {imageUrl && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full w-full">
          <div className="relative flex justify-center items-center h-full w-full">
            <div className="absolute top-0 left-0 bg-red-500 text-white font-bold p-2 flex items-center">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 16.5a3.5 3.5 0 017 0M5.07 12.93a8.5 8.5 0 0113.86 0M1.5 9a13 13 0 0121 0"
                />
              </svg>
              <span className="ml-1 text-base">{ping}ms</span>
            </div>
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>
          <div className="flex justify-center items-center h-full w-full">
            <img
              ref={imageRef}
              className="h-full w-full object-contain"
              src={imageUrl}
              onLoad={onImageLoadDetect}
            />
          </div>
        </div>
      )}
    </div>
  );
}