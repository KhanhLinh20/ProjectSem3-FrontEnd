import React from 'react'
import Find from '../components/Find'
import CreateCV from '../components/CreateCV'
import Customer from '../components/Customer'
import PopularCompany from '../components/PopularCompany'
import Jobnew from './Jobnew'
import Banner from '../components/Banner'
import Job from '../pages/Job'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Find />
     <Job/>
      <CreateCV />
      <Customer />
      <PopularCompany/>
      <Jobnew />
      
   



    </div>
  )
}

export default Home
