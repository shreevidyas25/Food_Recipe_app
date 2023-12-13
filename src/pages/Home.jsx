import Veggies from "../components/Veggies";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
import React from 'react'

function Home() {
  return (
    <motion.div>
        <Veggies/>
        <Popular/>
    </motion.div>
  )
}

export default Home