
import React from 'react'
import SideBar from "./sideBar"
import MainDash from "./mainDash"
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Grid, GridCol } from '@mantine/core';


function page() {
  return (
    <div style={{backgroundColor:'#F0F2F5'}}>   
    

    <Grid>
      <GridCol span={{ base: 12, xs: 2.5 }}> 
      <SideBar></SideBar>
      </GridCol>
      <GridCol span={{ base: 12 , xs: 9.5 }}>
      <MainDash></MainDash>

      </GridCol>
      
        </Grid>
   
    </div>
    
   
  )
}

export default page