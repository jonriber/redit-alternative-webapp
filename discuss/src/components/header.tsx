import Link from 'next/link';
import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import HeaderAuth from './header-auth';
import SearchInput from './search-input';

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
          <SearchInput />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}