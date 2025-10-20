import React from 'react'
import { assets } from '../../assets/assets'

const developers = [
  {
    name: 'Muhammad Abed',
    role: 'Intern',
    image: assets.dev_profile_1,
    description: 'Frontend, Backend, and Database'
  },
  {
    name: 'Shubham Maharjan',
    role: 'Intern',
    image: assets.dev_profile_2,
    description: 'Frontend and Backend'
  },
  {
    name: 'Gilbert Tanoto',
    role: 'Intern',
    image: assets.dev_profile_3,
    description: 'Planning & Product Mapping'
  },
  {
    name: 'Deep Patel',
    role: 'Intern',
    image: assets.dev_profile_4,
    description: 'Wire Framing'
  }
]

const DeveloperCard = ({ developer }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden w-96 m-4 transform hover:scale-105 transition-transform duration-300">
      <div className="bg-white p-4">
        <img src={developer.image} alt={`${developer.name}'s profile`} className="w-full h-96 object-cover rounded-t-lg" />
      </div>
      <div className="p-4 bg-gray-100">
        <h3 className="text-xl font-bold mb-2">{developer.name}</h3>
        <p className="text-gray-600 mb-2">{developer.role}</p>
        <p className="text-gray-700 min-h-16">{developer.description}</p>
      </div>
    </div>
  )
}

const AboutUs = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-700">Meet Our Team</h1>
      <div className="flex flex-wrap justify-center">
        {developers.map((dev, index) => (
          <DeveloperCard key={index} developer={dev} />
        ))}
      </div>
    </div>
  )
}

export default AboutUs