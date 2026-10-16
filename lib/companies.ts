export interface Company {
  name: string;
  tagline: string;
  description: string;
  color: string;
  url?: string;
  year: string;
  milestone: string;
  logo?: string;
  flag?: string;
}

export const companies: Company[] = [
  {
    name: "Atomic Marketing",
    tagline: "Sales & activations agency",
    description:
      "The original spark. Since 2005 Atomic Marketing has been the boots on the ground: in-store activations, merchandising and field marketing that put brands in front of shoppers.",
    color: "#ED1C24",
    url: "https://atomicmarketing.co.za",
    logo: "/logos/atomic-marketing.png",
    year: "2005",
    milestone: "Atomic Marketing is born. The spark that starts it all.",
  },
  {
    name: "iRam",
    tagline: "Innovative retail account management",
    description:
      "Where retail meets detail. iRam manages the supplier and retailer relationship so brands have the right range on the right shelf at the right time.",
    color: "#8DC63F",
    url: "https://iram.co.za",
    logo: "/logos/iram.png",
    year: "2011",
    milestone: "iRam enters the scene. Precision meets purpose.",
  },
  {
    name: "OuterJoin",
    tagline: "Retail data & analytics",
    description:
      "Connecting the dots. OuterJoin turns raw retail data into dashboards, store reports and automated reporting that help brands make better calls, faster.",
    color: "#F15A29",
    url: "https://outerjoin.co.za",
    logo: "/logos/outerjoin.png",
    year: "2017",
    milestone: "OuterJoin launches. Ideas and data finally sync.",
  },
  {
    name: "Atomic Digital",
    tagline: "Communication & sales agency",
    description:
      "The digital arm. Atomic Digital takes brands online with digital marketing, social media, e-commerce support and content that turns browsers into buyers.",
    color: "#29ABE2",
    url: "https://atomicdigital.co.za",
    logo: "/logos/atomic-digital.png",
    year: "2020",
    milestone: "Atomic Digital goes live. Creativity meets the cloud.",
  },
  {
    name: "Catalyst Sell-Out",
    tagline: "Energy. Change. Acceleration.",
    description:
      "Turning spark into surge. Catalyst drives sell-out performance by pulling the strengths of every COLAB business into focused, results-driven campaigns.",
    color: "#7B2D8E",
    logo: "/logos/catalyst-sell-out.png",
    year: "2022",
    milestone: "Catalyst ignites. Spark becomes surge.",
  },
  {
    name: "Field Goose",
    tagline: "Real-time field tracking",
    description:
      "Know where your field team is and what they are doing. GPS time and attendance, store photos, custom tasks and forms, with reports and dashboards built in. The next chapter of the Perigee app.",
    color: "#F05A2B",
    url: "https://www.fieldgoose.com/",
    year: "2026",
    milestone: "Field Goose takes flight. Perigee grows into its own business.",
    logo: "/logos/field-goose-icon.png",
    flag: "Launching soon",
  },
];

export const brandDots = [
  { color: "#ED1C24" },
  { color: "currentColor", dash: true },
  { color: "#8DC63F" },
  { color: "#F15A29" },
  { color: "#29ABE2" },
];
