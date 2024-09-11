import React from "react";

type Props = {
  /** variantの説明です．*/ // variantに説明文が表示される
  variant: "orange" | "green" | "yellow";
};

// stories.tsxで定義したvariantを受け取ることができる

/** 円のコンポーネントの説明です．*/ // タイトルに説明文が表示される
const Circle = ({ variant }: Props) => {
  let bg_color;

  switch (variant) {
    case "orange":
      bg_color = "bg-orange-400";
      break;
    case "green":
      bg_color = "bg-green-400";
      break;
    case "yellow":
      bg_color = "bg-yellow-400";
      break;
  }

  return <div className={`${bg_color} w-14 h-14 rounded-full p-2`}></div>;
};

export default Circle;
