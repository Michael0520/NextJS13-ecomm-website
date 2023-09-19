"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative mx-auto flex h-[50vh] w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          {/* SVG Animate */}
          <motion.div
            className="flex h-[100px] w-[100px] items-center"
            initial={{ opacity: 0.7 }}
            animate={{
              scale: [1, 1.05, 1.1, 1.05, 1],
              rotateY: [0, 7.5, 15, 7.5, 0],
              rotateX: [0, 5, 10, 5, 0],
              y: [-5, 0, 10, 0, -5],
              opacity: [0.7, 0.8, 0.9, 0.8, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 283 64"
              className=" fill-black dark:fill-white "
            >
              <path d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z" />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Next.js 13 Ecomm Website
          </motion.h1>

          {/* SubTitle */}
          <motion.span
            className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A modern e-commerce website example built with Next.js 13.
          </motion.span>

          {/* CTA Button */}
          <Link href="/products">
            <motion.div
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Order Now
            </motion.div>
          </Link>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}

export default HeroSection
