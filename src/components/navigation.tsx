'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './navigation.module.css'

export default function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded>
      
{/* ****LOGO**** */}
      
        <Navbar.Brand href="/">
            <Image src="/Images/WebPFiles/obcglogo.webp" width={70} height={70} alt="obcg logo"></Image>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">Orchard Beach</span>
        </Navbar.Brand>
      
      
{/* ****AVATAR MENU**** */}
      
        <div className="flex md:order-2">
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
            <Dropdown.Item href='/dashboard'>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Navbar.Link href="/api/auth/signin">Sign In</Navbar.Link></Dropdown.Item>
            <Dropdown.Item><Navbar.Link href="/api/auth/signout">Sign Out</ Navbar.Link></Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>


{/* ****NAVBAR***** */}

      <Navbar.Collapse>
        <Navbar.Link href="/">HOME</Navbar.Link>
        <Navbar.Link href="/about">ABOUT</Navbar.Link>
        <Navbar.Link href="/articles">ARTICLES OF INC.</Navbar.Link>
        <Navbar.Link href="/executive">EXECUTIVE</Navbar.Link>
        <Navbar.Link href="/register">CHECK USAGE</Navbar.Link>
        
        
{/* ****DOCUMENTS DROPDOWN**** */}
        
        <Dropdown
          arrowIcon={true}
          inline
          label={'Documents'}>
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
      

{/* ****CONSUMER CONFIDENCE DROPDOWN**** */}
        
        <Dropdown
          arrowIcon={true}
          inline
          label={'CONSUMER CONFIDENCE'}>
            <p className={styles.dropDown}></p>
            <Dropdown.Item><Link href="#">2022</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2021</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2020</Link></Dropdown.Item>
            <Dropdown.Divider />
        </Dropdown>


{/* ****MINUTES DROPDOWN**** */}
        
        <Dropdown
          arrowIcon={true}
          inline
          label={'MINUTES'}>
            <p className={styles.dropDown}></p>
            <Dropdown.Item><Link href="#">2023 Special</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2023</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2022</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2021</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2020</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2019</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2018</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2017</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2016</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">2015</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">Archive</Link></Dropdown.Item>
            <Dropdown.Divider />
        </Dropdown>


{/* ****COMMUNITY DROPDOWN**** */}
        
        <Dropdown
          arrowIcon={true}
          inline
          label={'COMMUNITY'}
        >
            <p className={styles.dropDown}></p>
            <Dropdown.Item><Link href="#">Whale Watching</Link></Dropdown.Item>
            <Dropdown.Item><Link href="#">Local Parades</Link></Dropdown.Item>
            <Dropdown.Divider />
        </Dropdown>

        
        <Navbar.Link href="/server">Server</Navbar.Link>
        <Navbar.Link href="/client">Client</Navbar.Link>
        <Navbar.Link href="/extra">Extra</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


