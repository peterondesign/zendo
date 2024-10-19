"use client";

import React, { useEffect } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

import supabase from "@/utils/supabase/supabaseConfig";

import { Avatar, Chip } from "@nextui-org/react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";

export const Navbar = () => {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  interface NavItem {
    label: string;
    href: string;
  }

  const [filteredNavItems, setFilteredNavItems] = React.useState<NavItem[]>([]);
  const [filteredNavMenuItems, setFilteredNavMenuItems] = React.useState<NavItem[]>([]);

  const [premiumStatus, setPremiumStatus] = React.useState(false);


  useEffect(() => {
    const insertUserToSupabase = async () => {
      if (user) {
        const { name, email, sub } = user;
        const { data, error } = await supabase
          .from('users')
          .upsert({ id: sub, name, email }, { onConflict: 'id' });

        if (error) {
          console.error("Error inserting user into Supabase:", error.message);
        } else {
          // console.log("User successfully inserted/updated in Supabase:", data);
        }
      }
    };

    if (user) {
      insertUserToSupabase();
    }

    const fetchPremiumStatus = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from('users')
            .select('premium')
            .eq('id', user.sub)
            .single();

          if (error) {
            console.error("Error fetching premium status:", error.message);
          } else if (data) {
            setPremiumStatus(data.premium); // Store premium status in state
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error("Error during Supabase query:", error.message);
          } else {
            console.error("Unknown error:", error);
          }
        }
      }
    }; if (user) {
      insertUserToSupabase(); // Insert or update user
      fetchPremiumStatus();    // Fetch premium status from Supabase
    }

    // Filter nav items based on user's premium status
    const filterNavItems = (items: NavItem[]) =>
      items.filter(item => !(premiumStatus && item.label === "Pricing")); // Use premiumStatus from state

    setFilteredNavItems(filterNavItems(siteConfig.navItems));
    setFilteredNavMenuItems(filterNavItems(siteConfig.navMenuItems));

  }, [user, premiumStatus]); // Run when user or premiumStatus changes

  const UserHeader = user ? (
    <Dropdown className='w-fit'>
      <DropdownTrigger>
        <Avatar
          className="cursor-pointer"
          src={user.picture ?? undefined}
          size="md"
        >
          {user.name?.[0]?.toUpperCase()}
        </Avatar>
      </DropdownTrigger>

      <DropdownMenu aria-label="User menu">
        <DropdownItem isDisabled={true} className="opacity-50">
          {premiumStatus ? (
            <Chip variant="dot" color="success" size="md" className="mr-2">
              Premium
            </Chip>
          ) : (
            <></>
          )}
        </DropdownItem>
        <DropdownItem key="logout" href="/api/auth/logout">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Button as="a" href="/api/auth/login" variant="flat">
      Login
    </Button>
  );

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-gradient-radial-gray bg-gradient-noise" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Zendo</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {filteredNavItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          {UserHeader}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {UserHeader}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {filteredNavMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
              >
                <p onClick={() => setIsMenuOpen(false)} // Use onClick instead of onPress
                >{item.label}</p>
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

    </NextUINavbar>
  );
};