import Button from "@/ui/button"
import Link from "next/link"
import PhotoStack from "@/ui/photo-stack"
import VoyagerLogo from "@/ui/voyager-logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Voyager III",
  description:
    "The best kept government secret has been unveiled — Voyager III.",
}

export default function Page() {
  return (
    <main className={`max-h-full w-full`}>
      <div
        className={`align-center flex h-screen w-full flex-row justify-center gap-0`}
      >
        {/* Hero Image */}
        <section
          className={`hidden h-full max-w-[60%] flex-auto items-center justify-center md:flex md:max-w-[40%] lg:max-w-[50%]`}
        >
          <PhotoStack />
        </section>
        {/* Page Content */}
        <section
          className={`grid-col-1 grid-row-6 m-0 grid h-screen max-h-screen w-full items-center justify-center space-y-5 md:me-16`}
        >
          <VoyagerLogo className={`row-span-2 row-start-1 self-stretch`} />
          {/* Main content */}
          <article
            className={`row-span-2 space-y-5 justify-self-center rounded-md bg-yellow-50 px-8 py-5 text-left shadow-sm`}
          >
            <h1 className={`row-span-1 row-start-2 pb-2 text-4xl font-bold`}>
              Voyager III
            </h1>
            <span className={`text-xl text-gray-800`}>
              The best kept U.S. government secret unvieled.
            </span>
            <p className={`text-md text-justify font-light`}>
              The Voyager program was setup to explore the outer reaches of
              space but unbeknownst to the public, the U.S. government had
              created a third probe, a maned probe, called the Voyager III.
              Built and launched in secret, its mission was to travel to Proxima
              Centauri b, the closest star to Earth, and determine its
              feasability for human life.
            </p>
            <p className={`text-md text-justify font-light`}>
              Launched in 1977, the Voyager III mission has been en route to
              Proxima Centauri b for the past 40 years. Recently, the U.S.
              Virginia Satellite towers intercepted a scrambled transmission
              from the Voyager III spacecraft. To bring this monumental
              discovery to light, I, Dr. John H. Perkins, have created this blog
              to keep the world informed about what could be the most
              significant finding in human history and the future of our
              species.
            </p>
            <br />
            <p>
              <strong>Dr. John H. Perkins</strong>
            </p>
            <span className={`text-sm text-gray-800`}>
              Senior Communications Specialist, Voyager III
            </span>
          </article>
          {/* Call to Action */}
          <div
            className={`row-span-1 m-0 flex h-auto flex-col items-center gap-2 self-start p-0`}
          >
            <div
              className={`m-4 flex h-auto w-64 flex-col gap-1 space-y-2 md:p-0`}
            >
              <Link tabIndex={-1} className={`focus-none`} href="/sign-up">
                <Button isPrimary={true} className={`w-full`}>
                  Sign Up
                </Button>
              </Link>
              <Link tabIndex={-1} className={`focus-none`} href="/login">
                <Button isPrimary={false} className={`w-full`}>
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className={`row-span-1 row-start-9 self-end py-2 text-center`}>
            <span className={`text-sm text-gray-800`}>
              © 2021 Voyager III. All rights reserved.
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}
