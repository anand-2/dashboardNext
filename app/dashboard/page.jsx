
import React from 'react'
import SideBar from "./sideBar"
import MainDash from "./mainDash"
import GraphCard from "./GraphCard"
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Grid, GridCol } from '@mantine/core';


function page() {
  return (
    <div style={{backgroundColor:'#F0F2F5',overflow:'hidden'}}>   
    

    <Grid>
      <GridCol span={{ base: 12, xs: 2.5 }} style={{position:'fixed',display:'flex'}}> 
      <SideBar></SideBar>
      </GridCol>
      <GridCol span={{ base: 12 , xs: 9.5 }} style={{marginLeft:'270px'}}>
      <MainDash></MainDash>
        <GraphCard></GraphCard>

      </GridCol>

      
      
        </Grid>
   
    </div>
    
   
  )
}

export default page