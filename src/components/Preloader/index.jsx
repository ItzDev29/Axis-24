'use client';
import styles from './style.module.scss';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

// const words = ["Dev", "Anil Raj Arora", "Aniket", "Vedaang", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Index() {
    const videoRef = useRef(null);
    // const [index, setIndex] = useState(0);
    // const [dimension, setDimension] = useState({width: 0, height:0});

    // useEffect( () => {
    //     setDimension({width: window.innerWidth, height: window.innerHeight})
    // }, [])

    // useEffect( () => {
    //     if(index == words.length - 1) return;
    //     setTimeout( () => {
    //         setIndex(index + 1)
    //     }, index == 0 ? 1000 : 150)
    // }, [index])

    // const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    // const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    // const curve = {
    //     initial: {
    //         d: initialPath,
    //         transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    //     },
    //     exit: {
    //         d: targetPath,
    //         transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
    //     }
    // }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>/

            {/* {dimension.width > 0 && 
            <>
                <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>

            </>
            } */}
              <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: 'cover', width: '100vw', height: '100vh' }}
      >
        <source src="/video/Load.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </motion.div>
    )
}
