"use client";

import CheckCircleSvg from "@/components/Icons/CheckCircleSvg";
import DataFlowSvg from "@/components/Icons/DataFlowSvg";
import StarsSvg from "@/components/Icons/StartsSvg";

import Image from "next/image";
import React, { FC, useState } from "react";

import "./style.css";

import { Robot } from "../../landing-page/Robot"
import { Stage, OrbitControls, Scroll, ScrollControls, } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';


interface HeroSectionProps { }

const HeroSection: FC<HeroSectionProps> = ({ }) => {
  const [expression, setExpression] = useState("Smile");

  return (
    <>
      <section className="w-full flex justify-between items-start gap-x-10">
        <div className="pt-[23px]">
          <h1 className="text-white font-bold text-[56px] leading-[72px] mb-6">
            Coding Projects
          </h1>
          <p className="text-white56 text-xl leading-8 mb-8">
            No tutorials, No courses. Just code projects.
          </p>
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-2">
              <DataFlowSvg />
              <div className="flex gap-x-1">
                <span className="text-white text-xl leading-8">10</span>
                <span className="text-white56 text-xl leading-8">
                  milestones
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <StarsSvg />
              <div className="flex gap-x-1">
                <span className="text-white text-xl leading-8">30</span>
                <span className="text-white56 text-xl leading-8">
                  tips/hints
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <CheckCircleSvg />
              <div className="flex gap-x-1">
                <span className="text-white text-xl leading-8">1</span>
                <span className="text-white56 text-xl leading-8">
                  Finished project
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <h3 className="text-[48px] leading-[60px] text-[#CECECE] font-nanumPenScript">
              click boxy to learn more
            </h3>
            <div className="relative -right-[55px]">
              <svg
                width="162"
                height="122"
                viewBox="0 0 162 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_377_702)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M142.38 45.1127C138.522 44.1686 129.389 40.338 126.352 38.4264C124.305 37.1165 123.606 36.7999 123.113 36.9592C120.751 37.6113 124.165 40.8032 130.753 44.1699L134.953 46.3022L132.544 46.1293C123.205 45.4576 118.149 46.2286 119.689 48.1508C121.296 50.1796 121.878 50.329 127.403 50.3824C130.259 50.4134 132.694 50.4449 132.758 50.4737C132.821 50.5025 131.982 51.0025 130.835 51.5925C124.899 54.6436 122.95 57.9319 127.009 58.0103C128.414 58.0345 132.122 56.6912 136.795 54.484C138.802 53.5179 142.369 52.1487 144.696 51.4043C151.876 49.0699 151.199 47.2707 142.38 45.1127ZM110.181 46.3312C106.809 46.2577 98.7301 47.5346 98.1483 48.2277C96.256 50.5467 100.646 52.344 105.916 51.4401C107.914 51.0827 110.954 50.623 112.694 50.416C118.422 49.6816 116.427 46.4818 110.181 46.3312ZM90.3204 49.1207C86.5705 49.3737 78.6237 52.4704 78.2215 53.7807C77.5754 56.0518 81.3467 56.7653 85.1843 55.1362L91.0029 52.6826C92.7848 51.9591 94.2345 51.1233 94.2716 50.8723C94.3544 50.1827 91.7829 49.0179 90.3204 49.1207ZM72.4591 56.8721C69.2891 57.1964 62.6064 65.19 63.0458 68.106C63.6246 71.8122 69.0549 68.1876 75.8057 59.5361C76.6698 58.4733 74.3859 56.6734 72.4591 56.8721ZM80.0354 64.4751C75.3408 63.6879 74.4122 63.8795 75.1729 65.4103C75.7628 66.5577 77.8123 67.5244 79.9847 67.6283C83.1899 67.8174 90.1883 72.1356 91.223 71.4563C93.3213 70.0343 85.9851 65.4483 80.0354 64.4751ZM93.3848 74.5403C93.1745 74.7512 92.8353 75.669 92.6836 76.5952C92.0043 80.0376 88.3611 84.7013 85.0082 86.3586C82.4366 87.6428 82.2293 87.9315 83.2255 88.6889C87.3608 91.978 95.4653 86.0826 96.5668 79.0047C96.9386 76.4945 94.6929 73.2578 93.3848 74.5403ZM53.4985 66.8808C49.5863 66.5627 38.8389 74.3223 40.3675 76.3541C41.7632 78.1726 44.3587 77.5115 50.1323 73.8894C52.5853 72.3602 55.1911 70.7471 55.955 70.3278C58.0621 69.1394 56.6115 67.1046 53.4985 66.8808ZM61.7575 73.5686C59.0177 74.126 60.9382 80.2768 65.2046 84.5437C67.8967 87.2173 76.4376 90.6653 77.5641 89.5301C78.5408 88.5567 77.5559 87.6896 73.4486 85.9438C68.992 84.0398 67.5821 82.6741 66.7528 79.3519C65.5756 74.6858 64.1714 73.0548 61.7575 73.5686ZM32.8905 81.1179C30.0261 81.2745 21.8701 91.9299 23.0268 94.0228C24.8512 97.2601 27.78 95.5254 32.1646 88.6337C36.2095 82.2387 36.3463 80.923 32.8905 81.1179ZM20.1269 100.171C17.8826 100.226 12.5207 112.147 13.7983 114.142C16.1686 117.779 18.8026 115.682 21.5074 108.105C23.9707 101.147 23.8049 100.077 20.1269 100.171Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_377_702">
                    <rect
                      width="122"
                      height="122"
                      fill="white"
                      transform="translate(50.6855 0.344543) rotate(24.37)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[328px] min-h-[280px]">
          <div className="flex flex-col w-full items-center justify-center ">
            <div >
              <Canvas flat shadows camera={{ position: [0, 0, 20], fov: 25 }}>
                <fog attach="fog" args={['black', 15, 22.5]} />
                <Stage intensity={0.5} environment="studio" shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }} adjustCamera={false}>
                  <Robot expression={expression} />
                </Stage>
                <OrbitControls enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableRotate={false} enablePan={false} target={new THREE.Vector3(0, -0.7, 0)} position={new THREE.Vector3(0, 0, 0)} />
              </Canvas>
              {/* <Image
              src={"/robot-face.png"}
              alt="Hero IMG"
              fill
              objectFit="contain"
            /> */}

            </div>
          </div>
          <div className="flex items-center gap-x-4 absolute -bottom-24 left-0 ">
            <Image
              width={72}
              height={72}
              className="object-cover cursor-pointer"
              onMouseOver={() => { setExpression("Angry"); }}
              onMouseLeave={() => { setExpression("Smile") }}
              src={"/PoutingFace.png"}
              alt="PoutingFace IMG"
            />

            <Image
              width={72}
              height={72}
              onMouseOver={() => { setExpression("Cry"); }}
              onMouseLeave={() => { setExpression("Smile") }}
              className="object-cover cursor-pointer"
              src={"/LoudlyCryingFace.png"}
              alt="LoudlyCryingFace IMG"
            />

            <Image
              width={72}
              height={72}
              onMouseOver={() => { setExpression("Starry"); }}
              onMouseLeave={() => { setExpression("Smile") }}
              className="object-cover cursor-pointer"
              src={"/StarStruck.png"}
              alt="Star Struck IMG"
            />
            <Image
              width={72}
              height={72}
              onMouseOver={() => { setExpression("Neutral"); }}
              onMouseLeave={() => { setExpression("Smile") }}
              className="object-cover cursor-pointer"
              src={"/neutral_face.png"}
              alt="Slightly smiling IMG"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
