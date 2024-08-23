import Link from 'next/link';
import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
} from '@nextui-org/react'
import HeaderAuth from './header-auth';

export default function Header(){
  
  return(
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Home Page
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}