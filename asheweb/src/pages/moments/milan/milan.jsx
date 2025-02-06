import React from "react";
import "./milan.css";
import milna1 from "../../../assets/images/moments/Milan/gallery/milna1.JPG";
import milna2 from "../../../assets/images/moments/Milan/gallery/milna2.JPG";
import milna3 from "../../../assets/images/moments/Milan/gallery/milna3.JPG";
import milna4 from "../../../assets/images/moments/Milan/gallery/milna4.JPG";
import milna5 from "../../../assets/images/moments/Milan/gallery/milna5.JPG";
import milna6 from "../../../assets/images/moments/Milan/gallery/milna6.JPG";
import milna7 from "../../../assets/images/moments/Milan/gallery/milna7.JPG";
import milna8 from "../../../assets/images/moments/Milan/gallery/milna8.JPG";
import milna9 from "../../../assets/images/moments/Milan/gallery/milna9.JPG";
import milna10 from "../../../assets/images/moments/Milan/gallery/milna10.JPG";
import milna11 from "../../../assets/images/moments/Milan/gallery/milna11.JPG";
import milna12 from "../../../assets/images/moments/Milan/gallery/milna12.JPG";
import milna13 from "../../../assets/images/moments/Milan/gallery/milna13.JPG";
import milna14 from "../../../assets/images/moments/Milan/gallery/milna14.JPG";
import milna15 from "../../../assets/images/moments/Milan/gallery/milna15.JPG";
import milna16 from "../../../assets/images/moments/Milan/gallery/milna16.JPG";
import milna17 from "../../../assets/images/moments/Milan/gallery/milna17.JPG";
import milna18 from "../../../assets/images/moments/Milan/gallery/milna18.JPG";
import milna19 from "../../../assets/images/moments/Milan/gallery/milna19.JPG";
import milna20 from "../../../assets/images/moments/Milan/gallery/milna20.JPG";
import milna21 from "../../../assets/images/moments/Milan/gallery/milna21.JPG";
import milna22 from "../../../assets/images/moments/Milan/gallery/milna22.JPG";
import milna23 from "../../../assets/images/moments/Milan/gallery/milna23.JPG";
import milna24 from "../../../assets/images/moments/Milan/gallery/minla24.JPG";
import milna25 from "../../../assets/images/moments/Milan/gallery/minla25.JPG";
import milna26 from "../../../assets/images/moments/Milan/gallery/minla26.JPG";
import milna27 from "../../../assets/images/moments/Milan/gallery/milna27.JPG";

const items = [
  { text: "milna1", img: milna1, orientation: "horizontal" },
  { text: "milna2", img: milna2, orientation: "horizontal" },
  { text: "milna26", img: milna26, orientation: "vertical" }, 
  { text: "milna4", img: milna4, orientation: "vertical" },
  { text: "milna3", img: milna3, orientation: "horizontal" },
 
  { text: "milna5", img: milna5, orientation: "horizontal" },
  { text: "milna6", img: milna6, orientation: "horizontal" },
  { text: "milna7", img: milna7, orientation: "vertical" },
  { text: "milna8", img: milna8, orientation: "horizontal" },
  
  { text: "milna10", img: milna10, orientation: "horizontal" },
  { text: "milna11", img: milna11, orientation: "horizontal" },
  { text: "milna9", img: milna9, orientation: "vertical" },
  { text: "milna12", img: milna12, orientation: "vertical" },
  { text: "milna13", img: milna13, orientation: "horizontal" },
  { text: "milna14", img: milna14, orientation: "horizontal" },
  
  { text: "milna16", img: milna16, orientation: "horizontal" },
  { text: "milna15", img: milna15, orientation: "vertical" },
  { text: "milna17", img: milna17, orientation: "horizontal" },
  { text: "milna18", img: milna18, orientation: "horizontal" },
  
  { text: "milna20", img: milna20, orientation: "horizontal" },
  { text: "milna19", img: milna19, orientation: "vertical" },
  { text: "milna21", img: milna21, orientation: "horizontal" },
  { text: "milna25", img: milna25, orientation: "vertical" },
  { text: "milna22", img: milna22, orientation: "horizontal" },
  { text: "milna23", img: milna23, orientation: "horizontal" },
  { text: "milna24", img: milna24, orientation: "vertical" },
  { text: "milna27", img: milna27, orientation: "horizontal" },
  
  
];

export default function Milan() {
  return (
    <div className="gallery-container">
      <h1>My Gallery</h1>
      <div className="grid">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${
              item.orientation === "horizontal"
                ? "item--horizontal"
                : "item--vertical"
            }`}
          >
            <img src={item.img} alt={item.text} />
            <div className="item__details">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
