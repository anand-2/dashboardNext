import { Card,Autocomplete, Box } from '@mantine/core'
import React,{useState} from 'react'
import classes from "./dashboard.module.css"
import {IconHomeFilled,IconSearch,IconSettingsFilled,IconUserFilled,IconBellFilled} from "@tabler/icons-react"
import {data,DataItem} from "./data"


function mainDash() {

  // const [cardInfo,setCardINfo] = useState({})
  return (
    <div style={{padding:'2rem 1rem 1rem 1rem'}} className={classes.mainDash}>        
    <Card className={classes.dashCard}>
      <div style={{flexDirection:'column',display:'flex'}}>
        <div  style={{flexDirection:'row',display:'flex',gap:'10px'}}>
          <IconHomeFilled color='#9FA8B7' size='17px' /> <span style={{fontSize:'14px',fontFamily:'monospace',color:'#9FA8B7'}}>/</span>
         <div style={{color:'#344767',fontSize:'14px',fontFamily:'monospace'}}> Dashboard</div>
          </div>
        <div  style={{color:'#344767',fontSize:'17px',fontWeight:'bold'}}>Dashboard</div>
      </div>

      <div style={{flexDirection:'row',display:'flex',alignItems:'center',gap:'1rem'}}>
      <Autocomplete
            placeholder="Search here"
            styles={{
              input: {
                '--input-bg': 'transparent', // Set the --input-bg variable to transparent
                
              },
            }}
            // leftSection={<IconSearch style={{ width: 'rem(16)', height: '20px' }} stroke={1.5} />}
           
            visibleFrom="xs"
            size='sm'
            />
            <IconUserFilled color='#9FA8B7' size='22px'/>
            <IconSettingsFilled color='#9FA8B7' size='22px'/>
            <IconBellFilled color='#9FA8B7' size='22px'/>

            
      </div>      
    </Card>
    <div style={{display:'flex',flexDirection:'row' ,gap:'1rem'}}>
    {data?.map((item: DataItem) => {
                return (
                    <div key={item.name} >                         
                        <Card shadow='sm' radius='lg' w='245px' h='130px'>
                          <div style={{display:'flex',flexDirection:'column'}}>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                              <div>
                                <Box w='64px' h='64px' style={{backgroundImage:item.color,justifyContent:'center',display:'flex',alignItems:'center',borderRadius:'10px'}}><item.icon className={classes.cardIcon}/></Box>                                
                              </div>
                              <div style={{textAlign:'right'}}>
                                <span style={{ color:'#7B809A',fontSize:'15px',fontWeight:'300'}}>{item.name}</span><br></br>
                                <span style={{ color:'#344767',fontSize:'1.5rem',fontWeight:'700'}}>{item.value}</span>
                              </div>
                            </div>
                             
                              <hr color='black' style={{width :'50px'}}></hr>  
                              <div>f</div>
                          </div>
                        </Card>
                    </div>
                );
            })}
    </div>
    </div>
  )
}

export default mainDash