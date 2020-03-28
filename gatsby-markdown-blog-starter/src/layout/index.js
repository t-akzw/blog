import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TopImage from '../components/TopImage'
import config from '../../data/SiteConfig'
import styles from  './index.module.scss'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <TopImage />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    {children}
    <Footer /> 
  </>
)

export default MainLayout