import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageStyles } from './PageStyles';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects';

export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <PageStyles>
        <Switch>
          <Route path="/projects" children={<Projects />} />
          <Route path="/contact" children={<Contact />} />
          <Route path="/about" children={<About />} />
          <Route path="/" children={<Home />} />
        </Switch>
      </PageStyles>
    </BrowserRouter>
  );
}
