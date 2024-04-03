
'use client'
import React,{useState} from 'react'
import SideBar from "./sideBar"
import MainDash from "./mainDash"
import GraphCard from "./GraphCard"
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Grid, GridCol } from '@mantine/core';


function page() {
  const [buttonShow,setButtonShow] =useState(false)
  return (
    <div style={{backgroundColor:'#F0F2F5',overflow:'hidden'}}>   
    

    <Grid>
      <GridCol span={{ base: 12, xs: 2.5 }} style={{position:'fixed',display:'flex'}}> 
      <SideBar setButtonShow={setButtonShow}></SideBar>
      </GridCol>
      <GridCol span={{ base: 12 , xs: 9.5 }} style={{marginLeft:!buttonShow ? '270px' : '0px' }}>
      <MainDash buttonShow={buttonShow}></MainDash>
        <GraphCard></GraphCard>

      </GridCol>

      
      
        </Grid>
   
    </div>
    
   
  )
}

export default page