import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import READMESection from './components/Readme'
import ContributionGraph from './components/ContributionGraph'
import PopularRepos from './components/PopularRepos'

function App() {
  return (
    // 1. Apply the dark background to the outermost wrapper
    <div className="min-h-screen bg-[#0d1117]"> 
      <Navbar/>

      {/* 2. Added 'max-w-screen-xl mx-auto' to center content on large screens like GitHub */}
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">

        {/* LEFT */}
        <Sidebar />

        {/* RIGHT (content area) */}
        {/* 3. Removed whitespace visual by ensuring this sits on the dark background */}
        <div className="flex-1 p-4 md:p-8 text-white">
          <READMESection />
          <ContributionGraph/>
          <PopularRepos/>
        </div>

      </div>
    </div>
  )
}

export default App