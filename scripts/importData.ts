import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '75fe0b7u',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-03-26',
})

const galleryData = [
  {
    title: "A Bronx Tale",
    description: "Dir. Billy Surges",
    category: "Theater",
  },
  {
    title: "Along the Banks",
    description: "Dir. Brigid Reilly",
    category: "Theater",
  },
  {
    title: "Butterflies are Free",
    description: "Dir. Joey Rizzolo, Photo by John Seyfried",
    category: "Theater",
  },
  {
    title: "Dave, Who is Not Dave",
    description: "Dir. Kylie Gutierrez",
    category: "Theater",
  },
  {
    title: "La Ronde",
    description: "Dir. Ramona Rotten",
    category: "Theater",
  },
  {
    title: "Measure for Measure",
    description: "Dir. Paul Moser, Photo by John Seyfried",
    category: "Theater",
  },
  {
    title: "The Distrikt of Lake Michigun",
    description: "Dir. Seth Wilson",
    category: "Theater",
  },
  {
    title: "The Ill-Conceived, Poorly Executed House Warming Party of Amy & Jaime",
    description: "Dir. Ray Morgan",
    category: "Theater",
  },
  {
    title: "Three Sisters",
    description: "Dir. Audrey Napoli, Photo by Joe Mazza",
    category: "Theater",
  },
]

const blogPosts = [
  {
    title: "Building Modern Web Applications",
    date: "2024-03-20T00:00:00Z",
    excerpt: "Exploring the latest trends and best practices in web development, from React Server Components to edge computing.",
    content: "Full blog post content here...",
    slug: {current: "building-modern-web-applications"},
  },
  {
    title: "The Art of Clean Code",
    date: "2024-03-15T00:00:00Z",
    excerpt: "Thoughts on writing maintainable, readable code that stands the test of time.",
    content: "Full blog post content here...",
    slug: {current: "art-of-clean-code"},
  },
  {
    title: "Design Systems at Scale",
    date: "2024-03-10T00:00:00Z",
    excerpt: "How to build and maintain design systems that work across multiple products and teams.",
    content: "Full blog post content here...",
    slug: {current: "design-systems-at-scale"},
  },
]

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    period: "2020 - Present",
    description: "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and driving technical decisions.",
    order: 1,
  },
  {
    title: "Software Engineer",
    company: "Startup Co.",
    period: "2018 - 2020",
    description: "Built full-stack features for SaaS platform. Collaborated with design and product teams to deliver user-centric solutions.",
    order: 2,
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2016 - 2018",
    description: "Developed responsive websites and web applications for various clients. Gained experience in modern web technologies.",
    order: 3,
  },
]

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    year: "2016",
  },
]

const siteSettings = {
  profileName: "Connor O. Locklin",
  bio: "Chicago based Actor, Writer, Singer, and Improvisor",
  title: "Software Engineer & Designer",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Git",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
  ],
  contactEmail: "Connorolocklin@gmail.com",
  contactPhone: "(860) 990-7996",
  instagram: "Instagram",
  agentName: "Actors Talent Group Inc.",
  agentBuilding: "Fine Arts Building",
  agentAddress: "410 South Michigan Av., Suite 733",
  agentCity: "Chicago",
  agentState: "IL",
  agentZip: "60605",
  agentCountry: "USA",
  agentPhone: "(312) 588-1309",
  agentFax: "(312) 588-1579",
}

async function importData() {
  try {
    console.log('Starting data import...')

    console.log('Importing gallery items...')
    for (const item of galleryData) {
      await client.create({
        _type: 'galleryItem',
        ...item,
      })
    }
    console.log(`✓ Imported ${galleryData.length} gallery items`)

    console.log('Importing blog posts...')
    for (const post of blogPosts) {
      await client.create({
        _type: 'blogPost',
        ...post,
      })
    }
    console.log(`✓ Imported ${blogPosts.length} blog posts`)

    console.log('Importing experience entries...')
    for (const exp of experienceData) {
      await client.create({
        _type: 'experience',
        ...exp,
      })
    }
    console.log(`✓ Imported ${experienceData.length} experience entries`)

    console.log('Importing education entries...')
    for (const edu of educationData) {
      await client.create({
        _type: 'education',
        ...edu,
      })
    }
    console.log(`✓ Imported ${educationData.length} education entries`)

    console.log('Importing site settings...')
    await client.create({
      _type: 'siteSettings',
      _id: 'siteSettings',
      ...siteSettings,
    })
    console.log('✓ Imported site settings')

    console.log('\n✅ All data imported successfully!')
  } catch (error) {
    console.error('Error importing data:', error)
    process.exit(1)
  }
}

importData()
