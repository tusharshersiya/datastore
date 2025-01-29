import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Gallery from '../components/Gallery'

function Layout({ children }) {
  console.log("children is", children)
  return (
    <>
      <Header />
      <div >
        {(!children) ? <Gallery /> : children}
      </div>
      <Footer />
    </>
  )
}

export default Layout