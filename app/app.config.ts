export default defineAppConfig({
  title: 'AKA',
  website: 'https://cfstcyr.com',
  // email: 'sink.cool@miantiao.me',
  // github: 'https://github.com/cfstcyr',
  // twitter: 'https://sink.cool/kai',
  // telegram: 'https://sink.cool/telegram',
  // mastodon: 'https://sink.cool/mastodon',
  // blog: 'https://sink.cool/blog',
  description: 'A simple, private and secure pastebin service.',
  image: 'https://cfsc.cc/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
