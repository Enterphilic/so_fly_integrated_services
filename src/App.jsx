import { useState } from 'react'
import './index.css'
import CoverPage from './components/CoverPage';
import TableOfContents from './components/TableOfContents';
import ExecutiveSummary from './components/ExecutiveSummary';
import SolutionsOverview from './components/SolutionsOverview';

import Timeline from './components/Timeline';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {

  return (
    <div className="proposal-container">
      <CoverPage />
      <TableOfContents />
      <ExecutiveSummary />
      <SolutionsOverview />

      <Timeline />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default App
