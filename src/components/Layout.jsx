import React from "react";

import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";

export const Layout = () => {
  const style = {
    container: "flex flex-col",
    firstPhoto: " w-[40rem] md:w-[60rem]  object-cover pt-6 pb-3 ",
    firstPost: "p-4",
    secondaryPhotos: "w-[20rem] flex ",
    secondaryPosts: " flex flex-col p-4",
    secondaryPost: "",
    mainText: " text-white text-[1.5rem] font-[1rem] text-justify",
    secondaryText: " text-gray-400  font-small",
    date: "text-gray-500  text-sm",
    line: "border-b-2 border-gray-900 w-full mx-auto pt-2",
  }
  return (
    <div className={style.container}>
      <div className={style.firstPost}>
        <img
          className={style.firstPhoto}
          src={first}
          alt="bag with electronic items for photography neatly placed around it on a wooden floor"
        />
        <div className={style.date}>Nov 2022</div>
        <div className={style.mainText}>
          Lorem ipsum dolor sit amet consectetur
        </div>
        <div className={style.secondaryText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem quidem voluptatibus quos quas. Quisquam, quae. Quisquam
        </div>
        <div className={style.line}></div>
      </div>

      <div className={style.secondaryPosts}>
        <div className={style.secondaryPost}>
          <img
            className={style.secondaryPhotos}
            src={second}
            alt="a brown canvas bag next to a Swedish-modern type chair on a hardwood floor below a window"
          />
          <div className={style.date}>Nov 2022</div>
          <div className={style.mainText}>
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div className={style.secondaryText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            exercitationem quidem voluptatibus quos quas. Quisquam, quae.
            Quisquam
          </div>
          <div className={style.line}></div>
        </div>
        <img src={third} alt="/" />
        <img src={fourth} alt="/" />
      </div>
    </div>
  );
};
