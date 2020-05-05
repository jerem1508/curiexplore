import React from 'react';
import PropTypes from 'prop-types';

import ButtonToPage from '../Ui/Buttons/ButtonToPage';
import FocusCard from '../Ui/FocusCard/FocusCard';

/* SCSS */
import classes from './LastFocus.scss';

const LastFocus = props => (
  <section className={classes.LastFocus}>
    <div className="container">
      <div className="row">
        <div className={`col-lg-10 ${classes.Title}`}>
          Titre
        </div>
        <div className={`col-lg-2 ${classes.Button}`}>
          <ButtonToPage
            className={classes.MarginTop}
            url="/focus"
          >
            Tous
          </ButtonToPage>
        </div>
      </div>

      <div className="row">
        {
          props.focusList.map(oneFocus => (
            <div className="col-lg-4" key={oneFocus.title}>
              <FocusCard
                schema={oneFocus.schema}
                tags={oneFocus.tags}
                title={oneFocus.title}
                type={oneFocus.type}
                url={oneFocus.url}
              />
            </div>
          ))
        }
      </div>
    </div>
  </section>
);

export default LastFocus;

LastFocus.propTypes = {
  focusList: PropTypes.array,
};
LastFocus.defaultProps = {
  focusList: [
    {
      tags: ['#tag1', '#tag2', '#tag3'],
      title: 'La carte des poles de compétitivité en France',
      type: 'map',
      url: '/focus/carte-poles-compet-france-2019',
      schema: 'entity',
    },
    {
      tags: ['#tag1', '#tag2', '#tag3'],
      title: 'La carte des projets financés par l\'ANR',
      type: 'donut',
      url: '',
      schema: 'project',
    },
    {
      tags: ['#tag1', '#tag2', '#tag3'],
      title: 'Japan Prize: Qui sont les lauréats français ?',
      type: 'histoTop',
      url: '/focus/poles-compet-france-2019',
      schema: 'entity',
    },
    {
      tags: ['#tag1', '#tag2', '#tag3'],
      title: 'Dépots de brevets : Evolution des dernières années en France',
      type: 'bubbleTop',
      url: '',
      schema: 'publication',
    },
    {
      tags: ['#tag1', '#tag2', '#tag3'],
      title: 'Présence sur le web: état des lieux des laboratoires français',
      type: 'treemap',
      url: '',
      schema: 'person',
    },
    {
      tags: ['#tag1', '#tag2', '#tag3'],
      title: 'Quels sont les thèmes majeurs des thèses en France aujourd\'hui',
      type: 'bubble',
      url: '',
      schema: 'entity',
    },
  ],
};
