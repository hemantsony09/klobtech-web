import { ServiceItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    name: "Mobile Development",
    path: "/mad",
    subItems: [
      { name: "React Development", path: "/mad/react" },
      {
        name: "Flutter Development",
        path: "/mad/flutter",
      },
      {
        name: "Android Development",
        path: "/mad/android",
      },
      {
        name: "iOS Development",
        path: "/mad/ios",
      },
    ],
  },
  {
    name: "Digital Marketing",
    path: "/digitalmarketing",
    // subItems: [
    //   { name: "React Development", path: "/mad/react" },
    //   {
    //     name: "Flutter Development",
    //     path: "/mad/flutter",
    //   },
    //   {
    //     name: "Android Development",
    //     path: "/mad/android",
    //   },
    //   {
    //     name: "iOS Development",
    //     path: "/mad/ios",
    //   },
    // ],
  },
  {
    name: "Web Development",
    path: "/fullStackDevelopment",
    subItems: [
      {
        name: "React JS",
        path: "/fullStackDevelopment/react",
      },
      {
        name: "AI/ML",
        path: "/fullStackDevelopment/aiml",
      },
      {
        name: "Node JS",
        path: "/fullStackDevelopment/node",
      },
      {
        name: "Angular JS",
        path: "/fullStackDevelopment/angular",
      },
      {
        name: "Python",
        path: "/fullStackDevelopment/python",
      },
      {
        name: "PHP",
        path: "/fullStackDevelopment/php",
      },
    ],
  },
  {
    name: "CMS Services",
    path: "/cms",
    subItems: [
      { name: "Shopify", path: "/cms/shopify" },
      { name: "Wordpress", path: "/cms/wordpress" },
    ],
  },
  {
    name: "B2B Services",
    path: "/btbs",
    // subItems: [
    //   { name: "Shopify", path: "/services/cloud-services/aws" },
    //   { name: "Wordpress", path: "/services/cloud-services/aws" },
    // ],
  },
  {
    name: "Recruitment Services",
    path: "/recruitment",
  },
  {
    name: "Ecommerce",
    path: "/ecommerce",
  },
  {
    name: "Education",
    path: "/education",
  },
];
