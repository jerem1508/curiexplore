import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Composants */
import HomePage from './Components/Homepage/Home-page';
import FocusList from './Components/Focus/FocusList';
import Focus from './Components/Focus/Focus';
import Annuaire from './Components/Annuaire/Annuaire';
import Cartographie from './Components/Cartographie/Cartographie';
import Fiche from './Components/Fiche/Fiche';

/* Pages froides */
import AccessibilityPage from './Components/Other-pages/Accessibility/Accessibility';
import ContactPage from './Components/Other-pages/Contact/Contact';
import GlossaryPage from './Components/Other-pages/Glossary/Glossary';
import LegalNoticePage from './Components/Other-pages/Legal-notice/Legal-notice';
import Ressources from './Components/Other-pages/Ressources/Ressources';
import TeamAndProjectPage from './Components/Other-pages/Team-and-project/Team-and-project';

const App = () => (
  <Router>
    <div>
      <Route
        exact
        path="/"
        component={props => (<HomePage {...props} />)}
      />

      <Route
        path="/Fiche/:id"
        render={props => (<Fiche {...props} />)}
      />

      <Route
        exact
        path="/Annuaire"
        component={props => (<Annuaire {...props} />)}
      />

      <Route
        exact
        path="/Cartographie"
        component={props => (<Cartographie {...props} />)}
      />

      <Route
        exact
        path="/Focus"
        component={props => (<FocusList {...props} />)}
      />

      <Route
        exact
        path="/Focus/:id"
        component={props => (<Focus {...props} />)}
      />

      {/* vvv--------------- other-pages ------------------vvv  */}
      <Route
        exact
        path="/Accessibilite"
        component={props => (<AccessibilityPage {...props} />)}
      />

      <Route
        exact
        path="/Mentions-legales"
        component={props => (<LegalNoticePage {...props} />)}
      />

      <Route
        exact
        path="/L-equipe-et-son-projet"
        component={props => (<TeamAndProjectPage {...props} />)}
      />

      <Route
        path={['/Ressources/:id', '/Ressources']}
        component={props => (<Ressources {...props} />)}
      />

      <Route
        exact
        path="/Contact"
        component={props => (<ContactPage {...props} />)}
      />

      <Route
        exact
        path="/Glossaire"
        component={props => (<GlossaryPage {...props} />)}
      />
    </div>
  </Router>
);

export default App;
