'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './navigation.module.css'

export default function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
       
            <Image src="/Images/WebPFiles/obcglogo.webp" width={60} height={60} alt="obcg logo"></Image>
            
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex text-black md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link href="/api/auth/signout">Sign Out</Link></Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/articles">Articles of Inc.</Navbar.Link>
        <Navbar.Link href="/executive">Executive</Navbar.Link>
        <Navbar.Link href="/register">Check Usage</Navbar.Link>
        <Dropdown
          arrowIcon={true}
          inline
          label={'Documents'}
        >
          <p className={styles.dropDown}></p>
          <Dropdown.Item><Link href="#">Water Use Efficiency</Link></Dropdown.Item>
          <Dropdown.Item><Link href="#">Water System Plan</Link></Dropdown.Item>
          <Dropdown.Item><Link href="#">Current Bylaws</Link></Dropdown.Item>
          <Dropdown.Item><Link href="#">Mason County Franchise Permit</Link></Dropdown.Item>
          <Dropdown.Item><Link href="#">FAQs</Link></Dropdown.Item>
          <Dropdown.Item><Link href="#">Misc. Files</Link></Dropdown.Item>
          <Dropdown.Item><Link href="#">Special Meeting 9.17.23</Link></Dropdown.Item>
          <Dropdown.Divider />
          
        </Dropdown>
        <Navbar.Link href="/api/auth/signin">Sign In</Navbar.Link>
        <Navbar.Link href="/server">Server</Navbar.Link>
        <Navbar.Link href="/client">Client</Navbar.Link>
        <Navbar.Link href="/extra">Extra</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      
      </Navbar.Collapse>
    </Navbar>
  )
}


