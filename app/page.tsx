
'use client'
import Image from 'next/image'
import {motion} from "framer-motion"
import { useState } from 'react'
import apple from "../public/apple.png"
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';


export default function Home() {
  const [rotate,setRotate] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Helloo suiii </h1>
      </main>
  )
}
