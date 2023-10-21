import Link from "next/link"
import styles from './NavBar.module.css'
import LogoImage from './LogoImage'
import Image from "next/image"


export default function Navbar() {
    return (
        <nav className="bg-blue-800 z-50 mdp-4">
            <Link href="/"> 
            <Image src="/Images/WebPFiles/obcglogo.webp" width={60} height={60} alt="obcg logo"></Image>
            </Link>
            <ul className="flex justify-evenly text-2xl font-bold">
                
            

                
                <li><Link href="/">Home</Link></li>
                <li><Link href="/api/auth/signin">Sign In</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
                <li><Link href="/server">Server</Link></li>
                <li><Link href="/client">Client</Link></li>
                <li><Link href="/extra">Extra</Link></li>
            </ul>
        </nav>
    )
}

