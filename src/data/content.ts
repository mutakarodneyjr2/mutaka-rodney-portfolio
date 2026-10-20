/** All portfolio data and public-facing content live here. */
export const profile = {
  name: 'Mutaka Rodney',
  location: 'Kampala, Uganda',
  title: 'Software developer & AI creative',
  contactEmail: 'mutakarodney2@gmail.com',
  whatsapp: '256700207433',
  social: {
    linkedin: 'https://www.linkedin.com/in/mutaka-rodney-5415ba1b6',
    tiktok: 'https://www.tiktok.com/@thewebgrowthpartner',
    github: '',
  },
};

export const selectedArtworks = [
  { id: 'stat-independence', title: 'Uganda Independence Day', client: 'Stat Solutions Research Network Limited', group: 'Corporate campaigns', image: '/media/stat-independence.webp', aspect: 'poster' },
  { id: 'stat-customer', title: 'Customer Service Month', client: 'Stat Solutions Research Network Limited', group: 'Corporate campaigns', image: '/media/stat-customer.webp', aspect: 'poster' },
  { id: 'birthday-julian', title: 'Birthday portrait: Julian', client: 'Private client', group: 'Portrait & occasion', image: '/media/birthday-julian.webp', aspect: 'square' },
  { id: 'birthday-dansan', title: 'Birthday portrait: Dansan', client: 'Private client', group: 'Portrait & occasion', image: '/media/birthday-dansan.webp', aspect: 'square' },
  { id: 'yesu-tours', title: 'Car hire & tours', client: 'Yesu Akyusa Ventures', group: 'Commercial advertising', image: '/media/yesu-tours.webp', aspect: 'poster' },
  { id: 'yesu-services', title: 'Services promotion', client: 'Yesu Akyusa Ventures', group: 'Commercial advertising', image: '/media/yesu-services.webp', aspect: 'poster' },
  { id: 'yesu-logo', title: 'Brand signature', client: 'Yesu Akyusa Ventures', group: 'Commercial advertising', image: '/media/yesu-logo.webp', aspect: 'wide' },
] as const;

export const motionPieces = [
  {
    number: '01',
    title: 'Digital reach',
    subtitle: 'Websites and wider markets',
    category: 'Business storytelling',
    description: 'Creator-led short-form editing about digital reach, business growth and reaching customers beyond local markets.',
    duration: '00:56',
    poster: '/media/digital-reach-cover.webp',
    src: '/media/digital-reach.mp4',
  },
  {
    number: '02',
    title: 'Be found',
    subtitle: 'Visibility matters',
    category: 'Search & discovery',
    description: 'Short-form business education using direct-to-camera delivery, supporting footage and on-screen captions.',
    duration: '00:55',
    poster: '/media/visibility-search-cover.webp',
    src: '/media/visibility-search.mp4',
  },
  {
    number: '03',
    title: 'From views to value',
    subtitle: 'Attention into action',
    category: 'Social platforms',
    description: 'An edited piece exploring the path from social attention to enquiries, conversations and business.',
    duration: '01:08',
    poster: '/media/social-conversion-cover.webp',
    src: '/media/social-conversion.mp4',
  },
] as const;

export const budiniScreens = [
  { title: 'Sign in', image: '/media/budini-signin.webp', number: '01' },
  { title: 'Community home', image: '/media/budini-home.webp', number: '02' },
  { title: 'Share a memory', image: '/media/budini-memory.webp', number: '03' },
  { title: 'People directory', image: '/media/budini-people.webp', number: '04' },
  { title: 'Member profile', image: '/media/budini-profile.webp', number: '05' },
] as const;
