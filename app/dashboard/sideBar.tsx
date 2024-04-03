'use client'
import { useState,useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Group, Code,Divider, DrawerBody } from '@mantine/core';
import { Drawer, Button } from '@mantine/core';

import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLayoutDashboardFilled,
  IconLogout,
  IconCalculatorFilled
} from '@tabler/icons-react';
import classes from './dashboard.module.css';
import Image from 'next/image';

const data = [
  { link: '', label: 'Dashboard', icon: IconDatabaseImport },
  { link: '', label: 'Tables', icon: IconCalculatorFilled },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Notification', icon: IconBellRinging },
  { link: '', label: 'Profile', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

type Props = {
  setButtonShow: any;
  opened : boolean;
  setOpened : any;
  buttonShow : boolean;
}

 function SideBar(props: Props) {
  const [active, setActive] = useState('Dashboard');
  const [isSmallScreen, setIsSmallScreen] = useState(props.opened);


  const links = data.map((item) => (
    <a
      className={classes.link}
      style={{backgroundColor : active === item.label ? '#5CB360' : ''}}      
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon}  stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const handleClose = () => {
    props.setOpened(false);
  };


  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth <= 992;
      setIsSmallScreen(isSmall);
      
      if (!isSmall && !props.opened) {
        props.setOpened(true);    
        props.setButtonShow(false)    
      }
      
      if (isSmall && props.opened && !props.buttonShow) {
        props.setOpened(false);
        props.setButtonShow(true)   
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [props.opened]);

  return (
  
 <>
    <Drawer
    opened={props.opened}
    size='16rem'            
    closeOnEscape={false}
    lockScroll={false}
    onClose={handleClose}
      padding="0px"
    withCloseButton={false} 
    withOverlay={false}
    closeOnClickOutside={true}
 >
    <nav className={classes.navbar}>
    <div className={classes.navbarMain}>
      <Group className={classes.header} >
      <IconLayoutDashboardFilled className={classes.headerIcon} />
      <h1 style={{color:'white'}}>Dashboard</h1>                 
      </Group>
      <Divider my="xs" mb='1rem' />

      {links}
      <div  className={classes.footer}>
             <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
        <IconLogout className={classes.linkIcon} stroke={1.5} />
        <span>Logout</span>
      </a>
    </div>
    </div>

  
  </nav>
  </Drawer>
    </>
    
  );
}


export default SideBar