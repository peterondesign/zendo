export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Zendo",
  description: "Block distracting apps. Focus on one task",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "Demo",
    //   href: "/demo",
    // },
    {
      label: "Feedback",
      href: "/feedback",
    },
    
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Demo",
      href: "/",
    },
    {
      label: "Feedback",
      href: "/feedback",
    },
    
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/ptndesign",
    docs: "https://nextui.org",
    discord: "https://discord.gg/cHDBkZFjxM",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
