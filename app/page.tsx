import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/projects");
}

// "use client";
// import FaceWithTearSvg from "@/components/Icons/FaceWithTearSvg";
// import FooterSection from "@/containers/home-page/footer-section";
// import HeaderSection from "@/containers/home-page/header-section";
// import { createClient } from "@/utils/supabase/client";
// import { User } from "@supabase/supabase-js";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
// import { twJoin } from "tailwind-merge";

// import { Robot } from "../containers/landing-page/Robot";
// import {
//   Stage,
//   OrbitControls,
//   Scroll,
//   ScrollControls,
// } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";

// export default function LandingPage() {
//   const [expression, setExpression] = useState("Smile");
//   return (
//     <main>
//       <HeaderSection />
//       {/* Robot section  */}
//       <div className="pt-0 scrollable">
//         <div
//           className="relative w-full h-[calc(100dvh-300px)] scrollable"
//           style={{
//             width: "100%",
//             scrollBehavior: "smooth",
//             scrollSnapType: "y mandatory",
//           }}
//         >
//           <Canvas
//             flat
//             shadows
//             camera={{ position: [0, 0, 20], fov: 25 }}
//             className="canvas-container"
//           >
//             <ScrollControls pages={3} distance={0.11} damping={0.1}>
//               <fog attach="fog" args={["black", 15, 22.5]} />
//               <Stage
//                 intensity={0.5}
//                 environment="studio"
//                 shadows={{
//                   type: "accumulative",
//                   bias: -0.001,
//                   intensity: Math.PI,
//                 }}
//                 adjustCamera={false}
//               >
//                 <Robot expression={expression} />
//               </Stage>
//               <OrbitControls
//                 enableZoom={false}
//                 makeDefault
//                 minPolarAngle={Math.PI / 2}
//                 maxPolarAngle={Math.PI / 2}
//                 enableRotate={false}
//                 enablePan={false}
//                 target={new THREE.Vector3(0, -0.7, 0)}
//                 position={new THREE.Vector3(0, 0, 0)}
//               />
//               <Scroll
//                 html
//                 style={{
//                   width: "100%",
//                   scrollBehavior: "smooth",
//                   scrollSnapType: "y mandatory",
//                   zIndex: -1,
//                 }}
//               >
//                 <div>
//                   <div
//                     className="relative w-full h-[calc(100dvh-300px)]"
//                     style={{
//                       scrollSnapAlign: "start",
//                     }}
//                   >
//                     <h1
//                       className="text-white text-[56px] leading-[72px] font-bold text-center"
//                       style={{
//                         background:
//                           "linear-gradient(360deg, #FFFFFF 41.67%, #DF424C 118.82%)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}
//                     >
//                       I hate tutorials & courses
//                     </h1>

//                     <button
//                       onMouseOver={() => {
//                         setExpression("Angry");
//                       }}
//                       onMouseLeave={() => {
//                         setExpression("Smile");
//                       }}
//                       className=" absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 font-bold bg-[#DF424C] flex rounded-lg text-white text-5xl leading-[58.09px] py-4 px-10 "
//                     >
//                       im angry..
//                     </button>
//                   </div>
//                   <div
//                     className="relative w-full h-[calc(100dvh-300px)]"
//                     style={{
//                       scrollSnapAlign: "start",
//                     }}
//                   >
//                     <h1
//                       className="text-white text-[56px] leading-[72px] font-bold text-center "
//                       style={{
//                         background:
//                           "linear-gradient(2.88deg, #FFFFFF 60.98%, #0059AB 102.07%)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}
//                     >
//                       doing them
//                       <br />
//                       makes me pretty sad
//                     </h1>

//                     <button
//                       onMouseOver={() => {
//                         setExpression("Cry");
//                       }}
//                       onMouseLeave={() => {
//                         setExpression("Smile");
//                       }}
//                       className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 font-bold bg-[#0059AB] flex rounded-lg text-white text-5xl leading-[58.09px] py-4 px-10"
//                     >
//                       im sad
//                     </button>
//                   </div>
//                   <div
//                     className="relative w-full h-[calc(100dvh-300px)]"
//                     style={{
//                       scrollSnapAlign: "start",
//                     }}
//                   >
//                     <h1
//                       className="text-[56px] leading-[72px] font-bold text-center h-[144px]"
//                       style={{
//                         background:
//                           "linear-gradient(0deg, rgb(255, 255, 255) 70.48%, rgb(253, 234, 49) 88.43%)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}
//                     >
//                       but there is a solution
//                     </h1>

//                     <button
//                       onMouseOver={() => {
//                         setExpression("Starry");
//                       }}
//                       onMouseLeave={() => {
//                         setExpression("Smile");
//                       }}
//                       className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 font-bold bg-[#FCFF67] flex rounded-lg text-[#3D3D3D] text-5xl leading-[58.09px] py-4 px-10"
//                     >
//                       Show me the solution
//                     </button>
//                   </div>
//                 </div>
//               </Scroll>
//             </ScrollControls>
//           </Canvas>
//         </div>
//       </div>
//       <FooterSection />
//     </main>
//   );
// }
