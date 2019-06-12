import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeFr from 'react-intl/locale-data/fr';
import localeEn from 'react-intl/locale-data/en';

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

class App extends Component {
  state: {
    language: null,
  }

  componentWillMount() {
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    this.setState({ language: navigator.language.split(/[-_]/)[0] });
  }

  switchLanguage = (lang) => {
    switch (lang) {
      case 'fr':
        this.setState({ language: lang });
        break;
      case 'en':
        this.setState({ language: lang });
        break;
      default:
        this.setDefaultLanguage();
    }
  }

  render() {
    addLocaleData([...localeEn, ...localeFr]);
    return (
      <IntlProvider>
        <Router>
          <div>
            <Route
              exact
              path="/"
              component={props => (
                <HomePage
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              path="/Fiche/:id"
              render={props => (
                <Fiche
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              exact
              path="/Annuaire"
              component={props => (
                <Annuaire
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              exact
              path="/Cartographie"
              component={props => (
                <Cartographie
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              exact
              path="/Focus"
              component={props => (
                <FocusList
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              exact
              path="/Focus/:id"
              component={props => (
                <Focus
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            {/* vvv--------------- other-pages ------------------vvv  */}
            <Route
              exact
              path="/Accessibilite"
              component={props => (
                <AccessibilityPage
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              exact
              path="/Mentions-legales"
              component={props => (
                <LegalNoticePage
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              exact
              path="/L-equipe-et-son-projet"
              component={props => (
                <TeamAndProjectPage
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              path={['/Ressources/:id', '/Ressources']}
              component={props => (
                <Ressources
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              exact
              path="/Contact"
              component={props => (
                <ContactPage
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

            <Route
              exact
              path="/Glossaire"
              component={props => (
                <GlossaryPage
                  {...props}
                  language={this.state.language}
                  switchLanguage={this.switchLanguage}
                />
              )}
            />

          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
