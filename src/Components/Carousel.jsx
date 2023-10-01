import { CarouselItem } from "./CarouselItem";
import example1 from "../assets/example1.svg";
import example2 from "../assets/example2.svg";
import example3 from "../assets/example3.svg";
import { useState } from "react";

const items = [
  {
    title: "Baseball",
    description: "blah blah",
    icon: example1,
  },
  {
    title: "Walking",
    description: "blah blah",
    icon: example2,
  },
  {
    title: "Weights",
    description: "blah blah",
    icon: example3,
  },
];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
        newIndex = 0;
    }else if(newIndex >= items.length){
        newIndex = items.length - 1
    }

    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`,
        }}
      >
        {items.map((item, idx) => (
          <CarouselItem key={idx} item={item} />
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={()=>updateIndex(activeIndex-1)} className="button-arrow">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, idx) => (
            <button onClick={()=>updateIndex(idx)} className="indicator-buttons" key={idx}>
              <span className={`material-symbols-outlined ${idx === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'}`}>
                radio_button_checked
              </span>
            </button>
          ))}
        </div>
        <button onClick={()=>updateIndex(activeIndex+1)} className="button-arrow">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
