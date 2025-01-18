"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { albumOne, albumTwo } from "@/lib/images";

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
            className={`m-0 w-full h-auto rounded-md shadow-2xl`}
          />
          <div
            className={`flex items-center justify-center rounded-md
              absolute top-0 invisible z-10 h-full w-full text-white 
              group-hover:visible bg-black bg-opacity-60`}
          >
            <p className={`w-50 text-xlg p-10 text-extra-light text-center`}>{photo.alt}</p>
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
      className={`mx-5 my-0 py-0 px-12 flex items-start gap-2 max-h-screen overflow-hidden `}
    >
      <div
        className={`scroll_inner_one flex flex-col gap-2 flex-1 animate-slowScrollUp hover:pause`}
      >
        {PhotoColOne}
      </div>
      <div
        className={`scroll_inner_two flex flex-col gap-2 flex-1 animate-slowScrollDown hover:pause transform -translate-y-[50%] xl:hidden`}
      >
        {PhotoColTwo}
      </div>
    </div>
  );
}
