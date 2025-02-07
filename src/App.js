import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { Startpage } from 'components/Startpage'
import { Startpage } from 'Pages/Startpage';
import { LevelOne } from 'components/LevelOne';
import { LevelThree } from 'components/LevelThree';
import { LevelTwo } from 'components/LevelTwo';
import { Endpage } from 'Pages/Endpage';
import { GlobalStyle } from 'globalstyles';

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/levelOne" element={<LevelOne />} />
        <Route path="/levelTwo" element={<LevelTwo />} />
        <Route path="/levelThree" element={<LevelThree />} />
        <Route path="/levelThree" element={<LevelThree />} />
        <Route path="/endpage" element={<Endpage />} />
      </Routes>
    </Router>
  )
};
