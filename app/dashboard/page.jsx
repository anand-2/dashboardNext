
'use client'
import React,{useState} from 'react'
import SideBar from "./sideBar"
import MainDash from "./mainDash"
import GraphCard from "./GraphCard"
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Grid, GridCol } from '@mantine/core';


function page() {
  const [buttonShow,setButtonShow] =useState(false)
  const [opened, setOpened] = useState(false);

  return (
    <div style={{backgroundColor:'#F0F2F5',overflow:'hidden'}}>   
    

    <Grid>
      <GridCol span={{ base: 12, xs: 2.5 }} style={{position:'fixed',display:'flex'}}> 
      <SideBar opened={opened} buttonShow={buttonShow} setOpened={setOpened} setButtonShow={setButtonShow}></SideBar>
      </GridCol>
      <GridCol span={{ base: 12 , xs: 9.5 }} ml={{lg:'270px',sm:'70px',md:'270px',xl:'270px',xs:'70px'}}>
      <MainDash opened={opened} setOpened={setOpened} buttonShow={buttonShow}></MainDash>
        <GraphCard></GraphCard>

      </GridCol>

      
      
        </Grid>
   
    </div>
    
   
  )
}

export default page