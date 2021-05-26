import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import ShadedBackground from './components/ShadedBackground';

function App() {
  return (
    <>
      <ShadedBackground />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
