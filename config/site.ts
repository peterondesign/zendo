export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Zendo",
  description: "Prioritise your to-do list with the Eisenhower Matrix, and break tasks down. Focus on one task",
  navItems: [
    {
      label: "Home",
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
  navMenuItems: [
    {
      label: "Home",
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
    {
      label: "Twitter",
      href: "/https://twitter.com/ptndesign",
    },
    {
      label: "Discord",
      href: "/https://discord.gg/cHDBkZFjxM",
    }
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/ptndesign",
    docs: "https://nextui.org",
    discord: "https://discord.gg/cHDBkZFjxM",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
