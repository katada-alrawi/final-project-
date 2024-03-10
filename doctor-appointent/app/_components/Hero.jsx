import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-90 lg:order-last lg:h-full">
            <img
              alt=""
              src="/doctor.png"
            
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Discover and schedule an <span className="text-blue-400">appointment </span> with your preferred  <span className="text-blue-400"> physician </span>
            </h2>

            <p className="mt-4 text-gray-600">
              Simplify your healthcare journey by effortlessly finding and
              booking appointments with your preferred doctor. Our user-friendly
              platform ensures personalized, convenient access to quality
              medical care, enhancing your well-being seamlessly
            </p>

           <Button className="mt-10"> Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
