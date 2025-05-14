import { useState } from 'react';
import { CalendarSearch } from "lucide-react";

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {GraduationCap} from 'lucide-react';
export default function Navbar() {
  // State for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full  border-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
            <GraduationCap/> <span className="text-2xl font-bold p-2 "> CHEN ED </span>  
            </a>
          </div>

          {/* Desktop Navigation */}
         

          {/* CTA Button */}
          <div className="flex">
            <NavigationMenu>
              <NavigationMenuList>
                
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/testimonials" className={navigationMenuTriggerStyle()}>
                    Testimonials
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="outline" className='bg-amber-400 text-white'><CalendarSearch/>Book a Session</Button>
          </div>

         
        </div>
      </div>
    </header>
  );
}