"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="About us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/our-missions">Our Mission</HoveredLink>
            <HoveredLink href="/our-teams">Our Team</HoveredLink>
            <HoveredLink href="/our-facilities">Our Facilities</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Programs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/beginners-beat">Beginner&apos;s Beat</HoveredLink>
            <HoveredLink href="/harmony-hub-ensemble">
              Harmony Hub Ensemble
            </HoveredLink>
            <HoveredLink href="/rhythm-roots">Rhythm Roots</HoveredLink>
            <HoveredLink href="/melody-masters">Melody Masters</HoveredLink>
            <HoveredLink href="/symphony-sessions">
              Symphony Sessions
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/blogs">Blogs</HoveredLink>
            <HoveredLink href="/library">Library</HoveredLink>
            <HoveredLink href="/faqs">FAQs</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
