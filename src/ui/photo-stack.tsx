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
        <div key={index} className={`group relative h-full w-full`}>
          <Image
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            priority={photo.priority}
            className={`m-0 h-auto w-full rounded-md shadow-2xl`}
          />
          <div
            className={`invisible absolute top-0 z-10 flex h-full w-full items-center justify-center rounded-md bg-black bg-opacity-60 text-white group-hover:visible`}
          >
            <p
              className={`w-50 text-extra-light p-5 text-center text-base md:p-10`}
            >
              {photo.alt}
            </p>
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
      className={`mx-5 my-0 flex max-h-screen items-start gap-2 overflow-hidden px-12 py-0`}
    >
      {/* Photo Column One - flow up */}
      <div
        className={`scroll_inner_one hover:pause flex flex-1 animate-slowScrollUp flex-col gap-2`}
      >
        {PhotoColOne}
      </div>
      {/* Photo Column Two - float down */}
      <div
        className={`scroll_inner_two hover:pause hidden flex-1 -translate-y-[50%] transform animate-slowScrollDown flex-col gap-2 md:flex`}
      >
        {PhotoColTwo}
      </div>
    </div>
  );
}
