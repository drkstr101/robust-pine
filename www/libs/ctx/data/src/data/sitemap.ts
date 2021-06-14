export const sitemap = {
  landings: {
    title: "Company",
    id: "home",
    children: {
      services: {
        groupTitle: "Capabilities",
        pages: [
          {
            title: "BDD/DDD Testing",
            href: "#",
          },
          {
            title: "Cloud-Native DevOps",
            href: "#",
          },
          {
            title: "Fullstack Development",
            href: "#",
          },
          {
            title: "UI/UX Design",
            href: "#",
          },
        ],
      },
      integrations: {
        groupTitle: "Integrations",
        pages: [
          {
            title: "GitLab Auto-DevOps",
            href: "#",
          },
          {
            title: "Eclipse Theia",
            href: "#",
          },
          {
            title: "Harmony (bit)",
            href: "#",
          },
        ],
      },
    },
  },
  pages: {
    title: "Blog",
    id: "blog",
    children: {
      blog: {
        groupTitle: "Company Blog",
        pages: [
          {
            title: "General",
            href: "/blog/category/general/",
          },
          {
            title: "News",
            href: "/blog/category/news/",
          },
          {
            title: "Case Studies",
            href: "/blog/category/case-studies/",
          },
        ],
      },
      help: {
        groupTitle: "Help center",
        pages: [
          {
            title: "Overview",
            href: "/materials/help-center",
          },
          {
            title: "Article",
            href: "/materials/help-center-article",
          },
        ],
      },
      contact: {
        groupTitle: "About",
        pages: [
          {
            title: "About Us",
            href: "/support#sales",
          },
          {
            title: "Legal Terms",
            href: "/terms",
          },
        ],
      },
    },
  },
}
