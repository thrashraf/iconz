import React from "react"

export default function page() {
  return (
    <>
      <div className="h-screen  bg-[#F9F9F9] px-60 py-10">
        <div className="rounded-2xl bg-white text-black">
          <div className="flex flex-col p-8 pt-24">
            <h1 className="mt-5 text-xl font-semibold">
              Hello, I am Hassan Amin
            </h1>
            <p className="mt-5 w-2/4 text-sm">
              I’m Hassan Amin, a passionate tech enthusiast and entrepreneur.
              Along with my team, I design, develop, and launch amazing websites
              and digital products for companies and for ourselves.
            </p>
            <picture>
              <img
                className="h-150 w-150 inline-block rounded-xl object-cover"
                src="https://pbs.twimg.com/profile_images/1681720758752665600/9s3w17HX_400x400.jpg"
                alt=""
              />
            </picture>
          </div>

          <div className="grid grid-cols-2 gap-2"></div>
        </div>
      </div>
    </>
  )
}
