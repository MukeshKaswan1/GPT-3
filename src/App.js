import React from 'react';

import { Blog, Footer, Possibility, Features, WhatGPT3, Header} from './containers';
import { Brand, CTA, Navbar} from './component';
import './App.css';

const App =() => (
    <div className='App'>
    <div className="gradient_bg">
    <Navbar />
    <Header />
    </div>

    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </div>
  );
export default App;