// import { motion } from 'framer-motion';

// function HeroSection() {
//   return (
//     <motion.section
//       id="hero"

//       className="bg-[#070324] text-white py-16 relative sm:px-19"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: 'easeOut' }}
//     >

//       <div className="container sm:ml-20  sm:pl-10 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 text-center md:text-left">
//           <motion.h1
//             className="text-4xl md:text-7xl  mb-6 space-y-4"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <p>Driving Sales</p> <p> and Capturing</p> Attention Through <div className="text-yellow-400">Graphic Designs</div>
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl mb-6 sm:ml-8 text-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >

//             <li> On-board the Top 1% Design Talent.</li> <li> Communicate your brand’s story.</li> <li>Impactful Marketing Collateral.</li>
//           </motion.p>
//           <motion.button
//             className="bg-[#1600ea] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             Book a Demo
//           </motion.button>
//         </div>
//         <motion.div
//           className="mt-8 md:mt-28 sm:ml-10 flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <div>
//             {/* Adjusted margin-left to move the image to the right */}
//             <img
//               className="sm:w-[600px] sm:h-[600px] sm:ml-[280px] sm:mt-10"
//               src="/pic-01.png"
//               alt="Hero Image"
//             />

//             <div className="flex items-center gap-2 sm:h-[100px] sm:w-[200px] text-lg sm:ml-[650px]">
//               <img className="sm:h-full sm:w-full" src="/pic-18.png" />
//             </div>
//           </div>
//         </motion.div>



//       </div>
//     </motion.section>
//   );
// }

// export default HeroSection




// import { motion } from 'framer-motion';

// function HeroSection() {
//   return (
//     <motion.section
//       id="hero"

//       className="bg-[#070324] text-white py-16 relative sm:px-19 lg:px-19"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: 'easeOut' }}
//     >

//       <div className="container sm:ml-20  lg:pr-20 sm:pl-10  flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 text-center md:text-left">
//           <motion.h1
//             className="text-4xl md:text-7xl  mb-6 space-y-4"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <p>Driving Sales</p> <p> and Capturing</p> Attention Through <div className="text-yellow-400">Graphic Designs</div>
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl mb-6 sm:ml-8 text-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >

//             <li> On-board the Top 1% Design Talent.</li> <li> Communicate your brand’s story.</li> <li>Impactful Marketing Collateral.</li>
//           </motion.p>
//           <motion.button
//             className="bg-[#1600ea] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             Book a Demo
//           </motion.button>
//         </div>
//         <motion.div
//           className="mt-8 md:mt-28 lg:ml-1 flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <div>
//             {/* Adjusted margin-left to move the image to the right */}
//             <img
//               className="sm:w-[616px] sm:h-[600px] sm:ml-[280px] lg:ml-[200px] sm:mt-10 mr-44"
//               src="/pic-01.png"
//               alt="Hero Image"
//             />

//             <div className="flex items-center gap-2 sm:h-[100px] sm:w-[200px] text-lg sm:ml-[0px]">
//               <img className="sm:h-full  sm:w-full" src="/pic-18.png" />
//             </div>
//           </div>
//         </motion.div>



//       </div>
//     </motion.section>
//   );
// }

// export default HeroSection

import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <motion.section
      id="hero"

      className="bg-[#070324] text-white relative sm:px-19 lg:px-19 lg:mt-[-100px]"
      // style={{ marginTop: '-100px' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >

      <div className="container sm:ml-20  lg:pr-20 sm:pl-7  flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl  mb-6 space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Driving Sales</p> <p> and Capturing</p> Attention Through <div className="text-yellow-400">Graphic Designs</div>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 sm:ml-8 text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

            <li> On-board the Top 1% Design Talent.</li> <li> Communicate your brand’s story.</li> <li>Impactful Marketing Collateral.</li>
          </motion.p>
          <motion.button
            className="bg-[#1600ea] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Book a Demo
          </motion.button>
        </div>
        <motion.div
          className="mt-8 md:mt-28 lg:ml-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div>
            {/* Adjusted margin-left to move the image to the right */}
            <img
              className="sm:w-[605px] sm:h-[500px] sm:ml-[280px] lg:ml-[200px] sm:mt-10 mb-6 mr-46"
              src="/pic-01.png"
              alt="Hero Image"
            />

            <div className="flex items-center  gap-2 sm:h-[100px] sm:w-[200px] text-lg sm:ml-[650px]">
              <img className="sm:h-full  sm:w-full" src="/pic-18.png" />
            </div>
          </div>
        </motion.div>



      </div>
    </motion.section>
  );
}

export default HeroSection





