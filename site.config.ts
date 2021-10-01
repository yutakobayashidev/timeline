export default {
  title: "Yuta Kobayashi",
  description: 'personal website by Yuta Kobayashi.',
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://yutakobayashi.dev'
      : 'http://localhost:3000',
  rssUrlList: [
    'https://variouscolors.net/game/users/yutakobayashi/feed/',
    'https://zenn.dev/yutakobayashi/feed',
    'https://note.com/yuta_kobayashi/rss',
  ],
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};
