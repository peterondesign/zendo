export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Zendo",
  description: "Block distracting apps. Focus on one task",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Demo",
      href: "/demo",
    },
    {
      label: "Pricing",
      href: "/#lifetime-deal",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/cHDBkZFjxM",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
