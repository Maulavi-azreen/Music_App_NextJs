"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";

import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
  >
          <Menu setActive={setActive}>
            <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/basic-music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses/song-writing">Song Writing</HoveredLink>
            <HoveredLink href="/courses/advanced-composition">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses/music-production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <div className="flex flex-col space-y-4 text-sm">
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
        </div>
        <div className="flex flex-col space-y-4 text-sm">
        <Link href={"/login"}>
          <MenuItem setActive={setActive} active={active} item="Get Started">
        </MenuItem>
        </Link>
        </div>
          </Menu>
    </div>
  )
}

export default Navbar
