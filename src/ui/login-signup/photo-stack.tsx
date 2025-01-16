"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { albumOne, albumTwo } from "./images";

interface Photo {
  src: string;
  width: number;
  height: number;
  priority: boolean;
  alt: string;
}

export default function PhotoStack() {
  const photoScroller = useRef<HTMLDivElement>(null);

  // Clone the images to create a scrolling effect
  useEffect(() => {
    const scroller = photoScroller.current;

    function addAnimation(set: string) {
      if (!scroller) return;

      const innerScroller = scroller.querySelector(`.scroll_inner_${set}`);

      if (!innerScroller) return;

      if (innerScroller.getAttribute("data-cloned") === "true") return;

      const innerScrollerChildren = Array.from(innerScroller.children);

      if (set === "two") {
        innerScrollerChildren.reverse();
      }

      // First column of photos
      innerScrollerChildren.forEach((child: HTMLElement) => {
        const extendedPhotos = child.cloneNode(true) as HTMLElement;
        if (set === "one") {
          innerScroller.appendChild(extendedPhotos);
        } else {
          innerScroller.prepend(extendedPhotos);
        }
      });

      innerScroller.setAttribute("data-cloned", "true");
    }

    addAnimation("one");
    addAnimation("two");
  }, []);

  // Create a new array of Image components
  function renderImages(array: Photo[]) {
    return array.map((photo: Photo, index: number) => {
      return (
        <div key={index} className={`relative h-full w-full group`}>
          <Image
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            priority={photo.priority}
            className={`m-0 h-auto rounded-md shadow-2xl`}
          />
          <div
            className={`flex flex-col items-center justify-center rounded-md
              absolute top-0 invisible z-10 h-full w-full text-white 
              group-hover:visible bg-black bg-opacity-60`}
          >
            <p className={`w-50 text-xl p-10 text-center`}>{photo.alt}</p>
          </div>
        </div>
      );
    });
  }

  // Create two columns of images
  const PhotoColOne = renderImages(albumOne);
  const PhotoColTwo = renderImages(albumTwo);

  return (
    <div
      ref={photoScroller}
      className={`mx-5 my-0 grid max-h-screen grid-cols-2 items-start justify-center gap-2 overflow-hidden px-10 py-0`}
    >
      <div
        className={`scroll_inner_one animate-slowScrollUp hover:pause col-start-1 grid justify-center gap-2`}
      >
        {PhotoColOne}
      </div>
      <div
        className={`scroll_inner_two animate-slowScrollDown hover:pause col-start-2 grid -translate-y-[50%] transform justify-center gap-2`}
      >
        {PhotoColTwo}
      </div>
    </div>
  );
}
