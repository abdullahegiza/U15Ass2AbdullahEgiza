import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Torus } from '@react-three/drei'

const About = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <Torus args={[1, 0.4, 64, 64]} scale={1.5}>
              <meshPhongMaterial
                color="#06b6d4"
                wireframe
              />
            </Torus>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="section-heading">Our Mission & Vision</h1>
            <p className="text-lg text-gray-300 mb-8">
              At Slovenské Vzdelávacie Centrum, we believe in the transformative power of education.
              Our mission is to provide innovative learning opportunities and support to communities
              across Slovakia and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card"
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Leadership Team</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated individuals who drive our mission forward and work tirelessly
              to create positive change through education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4 p-1">
                  <div className="w-full h-full rounded-full bg-black">
                    {/* Avatar placeholder */}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: 'Innovation',
    description: 'Embracing new technologies and methods to enhance learning experiences.',
    icon: (
      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Inclusivity',
    description: 'Creating opportunities for learning that are accessible to everyone.',
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'Striving for the highest standards in educational content and delivery.',
    icon: (
      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'Dr. Jana Kováčová',
    role: 'Executive Director',
  },
  {
    name: 'Ing. Martin Novák',
    role: 'Head of Education',
  },
  {
    name: 'Mgr. Eva Svobodová',
    role: 'Community Outreach',
  },
]

export default About




import { motion } from 'framer-motion'
import { useState } from 'react'

const Donate = () => {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')

  const handleAmountClick = (value) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value)
      setAmount('')
    }
  }

  return (
    <div className="min-h-screen py-16">
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="section-heading mb-6">Support Our Mission</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your donation helps us provide quality education and create opportunities
              for those who need it most. Every contribution makes a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card"
            >
              <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>

              {/* Donation Type */}
              <div className="mb-8">
                <div className="flex gap-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-4 rounded-lg ${donationType === 'one-time' ? 'bg-gradient-to-r from-purple-600 to-cyan-500' : 'bg-white/10'} transition-all duration-300`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-4 rounded-lg ${donationType === 'monthly' ? 'bg-gradient-to-r from-purple-600 to-cyan-500' : 'bg-white/10'} transition-all duration-300`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Select Amount</label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[20, 50, 100].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAmountClick(value)}
                      className={`py-3 px-4 rounded-lg ${amount === value ? 'bg-gradient-to-r from-purple-600 to-cyan-500' : 'bg-white/10'} transition-all duration-300`}
                    >
                      €{value}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">€</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter custom amount"
                    className="w-full bg-white/10 rounded-lg py-3 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <motion.button
                className="w-full button-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Donate Now
              </motion.button>
            </motion.div>

            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {impacts.map((impact, index) => (
                <div key={impact.title} className="card">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      {impact.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                      <p className="text-gray-400">{impact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const impacts = [
  {
    title: 'Educational Resources',
    description: 'Your donation helps us provide textbooks, digital tools, and learning materials to students in need.',
    icon: (
      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Technology Access',
    description: 'We provide computers and internet access to communities that lack digital resources.',
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Scholarship Programs',
    description: 'Support talented students in pursuing their educational dreams through our scholarship initiatives.',
    icon: (
      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
      </svg>
    ),
  },
]

export default Donate




import { motion } from 'framer-motion'
import { useState } from 'react'

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredEvents = events.filter(event => 
    selectedCategory === 'all' ? true : event.category === selectedCategory
  )

  return (
    <div className="min-h-screen py-16">
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="section-heading mb-8">Upcoming Events</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              Join us at our upcoming events and be part of our mission to transform education.
              From workshops to fundraisers, there's something for everyone.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <motion.button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-full ${selectedCategory === category.value ? 'bg-gradient-to-r from-purple-600 to-cyan-500' : 'bg-white/10'} transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {event.icon}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10">
                    {event.date}
                  </span>
                  <span className="text-sm text-gray-400">{event.time}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{event.location}</span>
                  <motion.button
                    className="button-primary text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  { value: 'all', label: 'All Events' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'seminar', label: 'Seminars' },
  { value: 'fundraiser', label: 'Fundraisers' },
]

const events = [
  {
    id: 1,
    title: 'Future of Education Workshop',
    description: 'Join us for an interactive workshop exploring innovative teaching methods and technologies.',
    date: 'Oct 15, 2023',
    time: '14:00 - 17:00',
    location: 'Bratislava Innovation Center',
    category: 'workshop',
    icon: (
      <svg className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Annual Charity Gala',
    description: 'An evening of celebration and fundraising to support our educational initiatives.',
    date: 'Nov 5, 2023',
    time: '19:00 - 23:00',
    location: 'Grand Hotel Košice',
    category: 'fundraiser',
    icon: (
      <svg className="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Digital Learning Seminar',
    description: 'Learn about the latest trends in digital education and e-learning platforms.',
    date: 'Nov 20, 2023',
    time: '10:00 - 13:00',
    location: 'Online Event',
    category: 'seminar',
    icon: (
      <svg className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default Events



import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { useState } from 'react'

const Games = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredGames = games.filter(game =>
    selectedCategory === 'all' ? true : game.category === selectedCategory
  )

  return (
    <div className="min-h-screen py-16">
      <section className="relative overflow-hidden py-20">
        <div className="absolute right-0 top-0 w-1/3 h-96 hidden lg:block">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <Box args={[1, 1, 1]} scale={1.5}>
              <meshPhongMaterial
                color="#6d28d9"
                wireframe
              />
            </Box>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="section-heading mb-6">Educational Games</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our collection of interactive educational games designed to make
              learning engaging and fun for students of all ages.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map(category => (
                <motion.button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-full ${selectedCategory === category.value ? 'bg-gradient-to-r from-purple-600 to-cyan-500' : 'bg-white/10'} transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 relative group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {game.icon}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="button-primary">Play Now</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                  {game.title}
                </h3>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                    {game.category}
                  </span>
                  <span className="text-sm text-gray-400">{game.difficulty}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  { value: 'all', label: 'All Games' },
  { value: 'math', label: 'Mathematics' },
  { value: 'science', label: 'Science' },
  { value: 'language', label: 'Language' },
  { value: 'coding', label: 'Coding' },
]

const games = [
  {
    id: 1,
    title: 'Math Quest',
    description: 'Embark on an adventure solving mathematical puzzles and challenges.',
    category: 'math',
    difficulty: 'Intermediate',
    icon: (
      <svg className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Science Explorer',
    description: 'Discover scientific concepts through interactive experiments and simulations.',
    category: 'science',
    difficulty: 'Beginner',
    icon: (
      <svg className="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Language Master',
    description: 'Learn new languages through fun word games and interactive exercises.',
    category: 'language',
    difficulty: 'All Levels',
    icon: (
      <svg className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Code Adventure',
    description: 'Learn programming concepts through an exciting coding adventure game.',
    category: 'coding',
    difficulty: 'Intermediate',
    icon: (
      <svg className="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Math Puzzles',
    description: 'Challenge yourself with engaging mathematical puzzles and brain teasers.',
    category: 'math',
    difficulty: 'Advanced',
    icon: (
      <svg className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Science Lab',
    description: 'Conduct virtual experiments and learn about scientific phenomena.',
    category: 'science',
    difficulty: 'Intermediate',
    icon: (
      <svg className="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
]

export default Games


import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#4c1d95"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
              />
            </Sphere>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-heading mb-6">
              Empowering Minds,
              <br />
              Building Futures
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Slovenské Vzdelávacie Centrum in our mission to transform education
              and create opportunities for everyone.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="/donate"
                className="button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Cause
              </motion.a>
              <motion.a
                href="/about"
                className="button-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollY > 200 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="card">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
              <p className="text-gray-400">Engage with our cutting-edge educational platforms and resources.</p>
            </div>

            <div className="card">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Events</h3>
              <p className="text-gray-400">Join our vibrant community events and educational workshops.</p>
            </div>

            <div className="card">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Membership Benefits</h3>
              <p className="text-gray-400">Access exclusive resources and support as a member.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home


import { motion } from 'framer-motion'
import { useState } from 'react'

const Membership = () => {
  const [selectedTier, setSelectedTier] = useState(null)

  return (
    <div className="min-h-screen py-16">
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="section-heading mb-6">Join Our Community</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Become a member of Slovenské Vzdelávacie Centrum and gain access to exclusive
              educational resources, events, and a supportive community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card relative ${selectedTier === tier.name ? 'border-purple-500' : ''}`}
                onClick={() => setSelectedTier(tier.name)}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold">€{tier.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-purple-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full ${tier.popular ? 'button-primary' : 'button-secondary'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <h2 className="section-heading text-center mb-12">Membership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const membershipTiers = [
  {
    name: 'Basic',
    price: 9.99,
    description: 'Perfect for individual learners',
    features: [
      'Access to basic educational resources',
      'Join community forums',
      'Monthly newsletter',
      'Basic support',
    ],
  },
  {
    name: 'Pro',
    price: 24.99,
    description: 'Ideal for dedicated students',
    popular: true,
    features: [
      'All Basic features',
      'Priority access to events',
      'Exclusive workshops',
      'Advanced learning materials',
      'Priority support',
    ],
  },
  {
    name: 'Premium',
    price: 49.99,
    description: 'For serious educational enthusiasts',
    features: [
      'All Pro features',
      'One-on-one mentoring',
      'Custom learning path',
      'Certification programs',
      'VIP support',
    ],
  },
]

const benefits = [
  {
    title: 'Exclusive Content',
    description: 'Access premium educational materials and resources not available elsewhere.',
    icon: (
      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    title: 'Community Access',
    description: 'Connect with like-minded individuals and expand your network.',
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Priority Support',
    description: 'Get fast responses and dedicated assistance when you need it.',
    icon: (
      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default Membership



import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Donate from './pages/Donate'
import Games from './pages/Games'
import Membership from './pages/Membership'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-space-grotesk">
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Slovenské Vzdelávacie Centrum
            </Link>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/events">Events</NavLink>
              <NavLink to="/donate">Donate</NavLink>
              <NavLink to="/games">Educational Games</NavLink>
              <NavLink to="/membership">Membership</NavLink>
            </div>
          </div>

          {/* Mobile menu */}
          <motion.div
            className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink to="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
              <MobileNavLink to="/about" setIsOpen={setIsOpen}>About</MobileNavLink>
              <MobileNavLink to="/events" setIsOpen={setIsOpen}>Events</MobileNavLink>
              <MobileNavLink to="/donate" setIsOpen={setIsOpen}>Donate</MobileNavLink>
              <MobileNavLink to="/games" setIsOpen={setIsOpen}>Educational Games</MobileNavLink>
              <MobileNavLink to="/membership" setIsOpen={setIsOpen}>Membership</MobileNavLink>
            </div>
          </motion.div>
        </div>
      </nav>

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/games" element={<Games />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </main>
    </div>
  )
}

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ to, children, setIsOpen }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    onClick={() => setIsOpen(false)}
  >
    {children}
  </Link>
)

export default App


import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
