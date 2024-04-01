import { Card,Autocomplete, Box,Divider } from '@mantine/core'
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
                    <div key={item.name}>                         
                        <Card pos='static' mt='1.5rem' shadow='md' radius='md' w='245px' h='130px'>
                          <div style={{display:'flex',flexDirection:'column'}}>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                              <div>
                                <Box className={classes.cardHover} w='64px' h='64px'  style={{backgroundImage:item.color}}><item.icon className={classes.cardIcon}/></Box>                                
                              </div>
                              <div style={{textAlign:'right'}}>
                                <span style={{ color:'#7B809A',fontSize:'15px',fontWeight:'300'}}>{item.name}</span><br></br>
                                <span style={{ color:'#344767',fontSize:'1.5rem',fontWeight:'700'}}>{item.value}</span>
                              </div>
                            </div>
                             
                            <Divider variant='dashed' my="sm" w='150px' style={{alignSelf:'center'}} color='#EBEDF0'/>
                            {item?.profit && <div className={classes.dashDesc}>
                              <div style={{color:'#6EAF50',fontSize:'13px',fontWeight:'600',paddingLeft:'10px'}}>+{item?.profit}%</div>
                            <span style={{color:'#7B809A',fontSize:'14px',paddingLeft:'7px'}}>than last month</span>
                            </div>}
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