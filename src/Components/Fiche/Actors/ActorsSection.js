import React from 'react';
import propTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';

import Title from '../Title/Title';

import ActorsMenuCard from './ActorsMenuCard';
import LeafletMap from '../../Shared/Map/LeafletMap';

import classes from '../Fiche.scss';

const ActorsSection = (props) => {
  // return (
  //   <section>
  //     actors section
  //   </section>
  // );
  const mapProps = {
    center: [48, 3], // France
    zoom: 4,
  };

  return (
    <section className="container" id="actors">
      <Title
        label="Les acteurs de l'ESRI"
        icon="fas fa-city"
      />
      <div className={classes.Actors}>
        <div className="row">
          <div className={`col ${classes.ActorsMap}`}>
            <LeafletMap
              height="300px"
              show
              className={classes.Map}
            />
          </div>
        </div>
        <div className={classes.gridActors}>
          <div className="row">
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'strategie')}
              icon="fas fa-thumbtack fa-2x"
              label="acteurs stratégiques"
              bgColor={classes.magentaColor}
            />
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'finance')}
              icon="fas fa-money-bill-wave fa-2x"
              label="acteurs de financement"
              bgColor={classes.ocdeColor}
            />
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'evaluation')}
              icon="fas fa-star fa-2x"
              label="acteurs évaluations"
              bgColor={classes.mondeColor}
            />
          </div>
          <div className="row">
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'mobilite')}
              icon="fas fa-exchange-alt fa-2x"
              label="acteurs mobilités"
              bgColor={classes.orangeColor}
            />
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'acteursES')}
              icon="fas fa-microscope fa-2x"
              label="acteurs ES"
              bgColor={classes.sixPalliersColor3}
            />
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'acteursRI')}
              icon="fas fa-lightbulb fa-2x"
              label="acteurs RI"
              bgColor={classes.sixPalliersColor2}
            />
          </div>
          <div className="row">
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'analyses')}
              icon="fas fa-square-root-alt fa-2x"
              label="acteurs analyse"
              bgColor={classes.sixPalliersColor4}
            />
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'acteursFrES')}
              icon="fas fa-money-bill-wave fa-2x"
              label="acteurs français ES sur place"
              bgColor={classes.hommeColor}
            />
            <ActorsMenuCard
              data={props.data.find(item => item.id === 'acteursFrRI')}
              icon="fas fa-star fa-2x"
              label="acteurs français RI sur place"
              bgColor={classes.sixPalliersColor6}
            />
          </div>
        </div>
        { /* /gridActors */ }

        {
          // props.data.map(((actor) => {
          //   if (actor.data.length > 0) {
          //     return (
          //       <div
          //         className={classes.ActorsList}
          //         id={actor.id}
          //         key={actor.id}
          //       >
          //         <SubTitleActors
          //           count={actor.data.length}
          //           icon="fas fa-thumbtack"
          //           label={actor.label}
          //         />
          //         <div className={classes.gridActors}>
          //           <div className="row">
          //             {
          //               actor.data.map(item => (
          //                 <InstitutionCard
          //                   key={`${item.nominstitutionfr}_${item.nominstitution}`}
          //                   nomFr={(item.nominstitutionfr || null)}
          //                   nom={(item.nominstitution || null)}
          //                   sigleFr={(item.sigleInstitutionfr || null)}
          //                   sigle={(item.sigleinstitution || null)}
          //                   description={(item.descriptioninstitutionclean || '')}
          //                   webSite={(item.siteinstitution || null)}
          //                 />
          //               ))
          //             }
          //           </div>
          //         </div>
          //       </div>
          //     );
          //   }
          //   return null;
          // }))
        }
      </div>
      { /* /Actors */ }
    </section>
  );
};

export default ActorsSection;

ActorsSection.propTypes = {
  data: propTypes.array.isRequired,
  iso: propTypes.string.isRequired,
};
