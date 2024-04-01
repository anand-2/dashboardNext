'use client'
import { useState } from 'react';
import { Group, Code,Divider } from '@mantine/core';
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

 function SideBar() {
  const [active, setActive] = useState('Dashboard');

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

  return (
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
  );
}


export default SideBar