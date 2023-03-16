/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextPage, GetStaticProps } from 'next'
import { MainLayout } from '../layouts'
import { ContainerSections } from '../components/about'
import bg from '../assets/sectionsImg/sections1.jpg'
import bg2 from '../assets/sectionsImg/sections2.jpg' 
import bg3 from '../assets/sectionsImg/sections3.jpg'
import bg4 from '../assets/sectionsImg/sections4.jpg'
import bg5 from '../assets/sectionsImg/sections5.jpg'
import svgAbout from '../assets/icons/users-solid.svg'
import svgObj from '../assets/icons/bullseye-solid.svg'
import svgMis from '../assets/icons/mountain-solid.svg'
import svgVis from '../assets/icons/eye-solid.svg'
import svgSkill from '../assets/icons/code-solid.svg'
import gen1 from "../assets/img/primer-generacion.png"
import gen2 from "../assets/img/segunda-generacion.jpg"
import { type StaticImageData } from "next/legacy/image";
import { Generations } from '../components/about/Generations/Generations'



// ! Mucha deuda técnica, desde el frontend, hasta como se obtienen y pasan datos.


export type TypeSectionData = {
  image         : StaticImageData,
  info          : string[],
  title         : string,
  svg           : StaticImageData,
  sectionTitle  : string
}

export type TypeGenerationData = {
  generationNumber: number,
  initialDate     : string,
  finalDate       : string,
  photo           : StaticImageData 
}

interface Props {
  sectionsInfo    : TypeSectionData[]
  generationsInfo : TypeGenerationData[]
}



const Home: NextPage<Props> = ({ sectionsInfo, generationsInfo }) => {


  return (
    <MainLayout>
      <ContainerSections sectionsInfo={sectionsInfo}/>
      <Generations generationsInfo={generationsInfo}/>
    </MainLayout>
  )
}


export const getStaticProps: GetStaticProps = () => {


  const sectionsInfo = [
    {
      image         : bg2,
      info          : ["Spend most of their time solving unsolvable problems","Thinking why our programs get TLE or WA","Navigating through deep programming"],
      title         : "We're a bunch of nerds that...",
      svg           : svgAbout,
      sectionTitle  :"About Us"
    },
    {
      image : bg,
      info  : ["To be competitive programmers with high logical mathematical reasoning capable of solving problems in","the shortest time possible."],
      title : "Objective",
      svg   : svgObj,
      sectionTitle  :"Objective"
    },
    {
      image : bg3,
      info  : [
                "Work as a team like the pieces of a clock, synchronized and under pressure",
                "Implement anything from an array to Dijkstra's algorithm",
                "Know how to solve problems hacker pro level",
                "Love for spending hours solving problems"
              ],
      title : "Skills",
      svg   : svgSkill,
      sectionTitle  :"Skills"
    },
    {
      image : bg4,
      info  :["To be a club of geeks who are passionate about programming, capable of programming in a short","amount of time and under pressure, who want to compete in national and international competitions."],
      title : "Mission",
      svg   : svgMis,
      sectionTitle  :"Mission"
    },
    {
      image : bg5,
      info  :["Create super nerds with high levels of abstraction and good at programming",'Support to unlock the achievement "I am a competitive programmer" among the interested community'],
      title : "Vision",
      svg   : svgVis,
      sectionTitle  :"Vision"
    }
  ]

  const generationsInfo = [
    {
      generationNumber: 1,
      initialDate     : new Date("01/01/2022").toUTCString(),
      finalDate       : new Date("01/06/2022").toUTCString(),
      photo           : gen1
    },
    {
      generationNumber: 2,
      initialDate     : new Date("01/01/2023").toUTCString(),
      finalDate       : new Date("01/06/2023").toUTCString(),
      photo           : gen2
    }
  ]

  return {
    props: {
      sectionsInfo,
      generationsInfo
    }
  }
}

export default Home
  