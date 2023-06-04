import React from 'react'
import EntertainmenCardSlider from '../components/Entertainment/EntertainmenCard.component'
import Premier from '../components/Premier/Premier.component'

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800">
            The best of Entertainment
        </h1>
        <EntertainmenCardSlider/>
        <Premier/>
      </div>
    </>
  )
}

export default HomePage
