import type { NextPage } from 'next'
import { Fragment } from 'react'
import Banner from '../components/Home/Banner'
import Contact from '../components/Home/Contact'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import Service from '../components/Home/Service'

const ComponentPage: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Service />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default ComponentPage
