"use client"

import React from "react"

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

export default function page() {
  return (
    <div>
      <div className="bg-white">
        <main className="container mx-auto flex flex-row px-4 py-8">
          <div className=" sidebar h-auto min-h-[140px] w-64 overflow-scroll">
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Shoe</li>
              <li className="font-bold">Sport Bras</li>
              <li className="font-bold">Top & T-Shirts</li>
              <li className="font-bold">Hoodies & Sweatshirts</li>
            </ul>

            <ul className="gender mt-3 border-t border-[#E5E5E5] py-3">
              <li className="font-bold">
                <li className="font-bold">Gender</li>
                <input type="checkbox" name="" id="" /> Men
              </li>
              <li className="font-regular">
                <input type="checkbox" name="" id="" /> Women
              </li>
              <li className="font-regular">
                <input type="checkbox" name="" id="" /> Unisex
              </li>
              <li className="font-bold">Kids</li>
              <input type="checkbox" name="" id="" /> Boys
              <li className="font-regular">
                <input type="checkbox" name="" id="" /> Girls
              </li>
              <li className="font-bold">Shop By Price</li>
              <li className="font-regular">
                <input type="checkbox" name="" id="" /> Under RM1000
              </li>
              <li className="font-regular">
                <input type="checkbox" name="" id="" /> Upper RM1000
              </li>
            </ul>
          </div>
          <div className="content w-full">
            <h1 className="mb-4 text-4xl font-bold"></h1>
            <p className="mb-8 text-gray-600">Dress</p>

            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Single Product Card */}
              <div className="rounded-lg bg-white shadow-md">
                <img
                  src="/1.webp"
                  alt="Product 1"
                  className="h-full w-full  object-cover"
                />
              </div>
              <div className="rounded-lg bg-white shadow-md">
                <img
                  src="/1.webp"
                  alt="Product 1"
                  className="h-full w-full  object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    WHITE OSTRICH DRESS
                  </h3>
                  <p className="text-gray-600">3 Colour</p>
                  <div className="mt-4">
                    <span className="text-gray-500">RM2,899.00</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-md">
                <img
                  src="/1.webp"
                  alt="Product 1"
                  className="h-full w-full  object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    WHITE OSTRICH DRESS
                  </h3>
                  <p className="text-gray-600">3 Colour</p>
                  <div className="mt-4">
                    <span className="text-gray-500">RM2,899.00</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-md">
                <img
                  src="/1.webp"
                  alt="Product 1"
                  className="h-full w-full  object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    WHITE OSTRICH DRESS
                  </h3>
                  <p className="text-gray-600">3 Colour</p>
                  <div className="mt-4">
                    <span className="text-gray-500">RM2,899.00</span>
                  </div>
                </div>
              </div>
              {/* Add more product cards as needed */}
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">
                WHITE OSTRICH DRESS
              </h3>
              <p className="text-gray-600">3 Colour</p>
              <div className="mt-4">
                <span className="text-gray-500">RM2,899.00</span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        {/* ...same as previous example... */}
      </div>
    </div>
  )
}

{
  /* {" "}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Dress</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */
}
