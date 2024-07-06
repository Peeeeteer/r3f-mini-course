"use client";
import FaceWithTearSvg from "@/components/Icons/FaceWithTearSvg";
import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { twJoin } from "tailwind-merge";

import { Robot } from "../containers/landing-page/Robot";
import {
  Stage,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function LandingPage() {
  const [expression, setExpression] = useState("Smile");
  return (
    <main>
      <HeaderSection />
      {/* Robot section  */}
      <div className="pt-0 scrollable">
        <div
          className="relative w-full h-[calc(100dvh-300px)] scrollable"
          style={{
            width: "100%",
            scrollBehavior: "smooth",
            scrollSnapType: "y mandatory",
          }}
        >
          <Canvas
            flat
            shadows
            camera={{ position: [0, 0, 20], fov: 25 }}
            className="canvas-container"
          >
            <ScrollControls pages={3} distance={0.11} damping={0.1}>
              <fog attach="fog" args={["black", 15, 22.5]} />
              <Stage
                intensity={0.5}
                environment="studio"
                shadows={{
                  type: "accumulative",
                  bias: -0.001,
                  intensity: Math.PI,
                }}
                adjustCamera={false}
              >
                <Robot expression={expression} />
              </Stage>
              <OrbitControls
                enableZoom={false}
                makeDefault
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enableRotate={false}
                enablePan={false}
                target={new THREE.Vector3(0, -0.7, 0)}
                position={new THREE.Vector3(0, 0, 0)}
              />
              <Scroll
                html
                style={{
                  width: "100%",
                  scrollBehavior: "smooth",
                  scrollSnapType: "y mandatory",
                  zIndex: -1,
                }}
              >
                <div>
                  <div
                    className="relative w-full h-[calc(100dvh-300px)]"
                    style={{
                      scrollSnapAlign: "start",
                    }}
                  >
                    <h1
                      className="text-white text-[56px] leading-[72px] font-bold text-center"
                      style={{
                        background:
                          "linear-gradient(360deg, #FFFFFF 41.67%, #DF424C 118.82%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      I hate tutorials & courses
                    </h1>

                    <button
                      onMouseOver={() => {
                        setExpression("Angry");
                      }}
                      onMouseLeave={() => {
                        setExpression("Smile");
                      }}
                      className=" absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 font-bold bg-[#DF424C] flex rounded-lg text-white text-5xl leading-[58.09px] py-4 px-10 "
                    >
                      im angry..
                    </button>
                  </div>
                  <div
                    className="relative w-full h-[calc(100dvh-300px)]"
                    style={{
                      scrollSnapAlign: "start",
                    }}
                  >
                    <h1
                      className="text-white text-[56px] leading-[72px] font-bold text-center "
                      style={{
                        background:
                          "linear-gradient(2.88deg, #FFFFFF 60.98%, #0059AB 102.07%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      doing them
                      <br />
                      makes me pretty sad
                    </h1>

                    <button
                      onMouseOver={() => {
                        setExpression("Cry");
                      }}
                      onMouseLeave={() => {
                        setExpression("Smile");
                      }}
                      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 font-bold bg-[#0059AB] flex rounded-lg text-white text-5xl leading-[58.09px] py-4 px-10"
                    >
                      im sad
                    </button>
                  </div>
                  <div
                    className="relative w-full h-[calc(100dvh-300px)]"
                    style={{
                      scrollSnapAlign: "start",
                    }}
                  >
                    <h1
                      className="text-[56px] leading-[72px] font-bold text-center h-[144px]"
                      style={{
                        background:
                          "linear-gradient(0deg, rgb(255, 255, 255) 70.48%, rgb(253, 234, 49) 88.43%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      but there is a solution
                    </h1>

                    <button
                      onMouseOver={() => {
                        setExpression("Starry");
                      }}
                      onMouseLeave={() => {
                        setExpression("Smile");
                      }}
                      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 font-bold bg-[#FCFF67] flex rounded-lg text-[#3D3D3D] text-5xl leading-[58.09px] py-4 px-10"
                    >
                      Show me the solution
                    </button>
                  </div>
                </div>
              </Scroll>
            </ScrollControls>
          </Canvas>
        </div>
      </div>
      {/* Robot section  */}

      {/* Landing page design section  */}

      {/* <div className="w-full relative">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(/landing-page/bg-landing.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
        <div className="w-full flex justify-center">
          <div className="max-w-[1440px] relative flex flex-col justify-center items-center">
            <section ref={sectionRef} className="min-h-[815px]">
              <div className="pt-[77px] flex justify-center flex-col items-center gap-y-8">
                <h1
                  className="text-white text-[56px] leading-[72px] font-bold text-center"
                  style={{
                    background:
                      "linear-gradient(360deg, #FFFFFF 41.67%, #DF424C 118.82%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  I hate tutorials & courses
                </h1>
                <Image
                  src="/landing-page/bg1.png"
                  alt="hero"
                  width={509}
                  height={400}
                />
                <button className="font-bold mt-[114px] bg-[#DF424C] flex rounded-lg text-white text-5xl leading-[58.09px] py-4 px-10 ">
                  im angry..
                </button>
              </div>
            </section>
            <section className="min-h-[900px] pt-[101px]">
              <div className="flex justify-center flex-col items-center gap-y-6">
                <h1
                  className="text-white text-[56px] leading-[72px] font-bold text-center "
                  style={{
                    background:
                      "linear-gradient(2.88deg, #FFFFFF 60.98%, #0059AB 102.07%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  doing them
                  <br />
                  makes me pretty sad
                </h1>
                <Image
                  src="/landing-page/bg1.png"
                  alt="hero"
                  width={509}
                  height={400}
                />
                <button className="mt-4 leading-[58.09px] bg-[#0059AB] gap-x-3 flex items-center rounded-lg text-white text-5xl  py-4 px-10 font-bold">
                  <span>im sad</span>
                </button>
              </div>
            </section>
            <section className="min-h-[900px] ">
              <div className="pt-[108px] flex justify-center flex-col items-center gap-y-6">
                <h1
                  className="text-[56px] leading-[72px] font-bold text-center h-[144px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgb(255, 255, 255) 70.48%, rgb(253, 234, 49) 88.43%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  but there is a solution
                </h1>
                <Image
                  src="/landing-page/bg1.png"
                  alt="hero"
                  width={509}
                  height={400}
                />
                <button className="mt-4 bg-[#FCFF67] gap-x-3 flex items-center rounded-lg text-[#3D3D3D] text-5xl leading-[58.09px] py-4 px-10 font-bold">
                  <span>Show me the solution</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <p className="text-[#FFFFFF8F] text-xl leading-[32px] font-normal text-center">
          Scroll down to get started
        </p>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.78569 0.454545V12.1307L12.2743 7.62784L13.3823 8.72159L7.00444 15.0852L0.640803 8.72159L1.72035 7.62784L6.22319 12.1307V0.454545H7.78569Z"
            fill="#9EA0A0"
          />
        </svg>
      </div>
      <div className="min-h-[900px] flex justify-center items-center flex-col gap-y-6">
        <h2 className="text-[48px] leading-[64p] font-bold tracking-[0.5px] text-center mb-2">
          Start building projects, <br />
          its the best way to learn
        </h2>
        <button className="relative rounded-full bg-[#635AFF] py-3 ">
          <Link
            href={"/projects"}
            className="text-white text-xl leading-8 font-normal px-6 py-3 "
          >
            Get Started
          </Link>
          <div className="absolute border border-[#FFFFFF33] rounded-full w-[calc(100%+8px)] h-[calc(100%+8px)] -top-1 -left-1 px-[28px] py-4"></div>
          <div className="absolute border border-[#FFFFFF33] rounded-full w-[calc(100%+12px)] h-[calc(100%+12px)] -top-[6px] -left-[6px] px-[28px] py-4"></div>
        </button>
        <p className="text-[#FFFFFF8F] text-sm leading-[20px] ">
          Some projects are <span className="text-white">Free</span>{" "}
        </p>
      </div> */}
      <FooterSection />
    </main>
  );
}
