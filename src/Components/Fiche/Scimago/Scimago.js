import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Scimago.scss';

/**
 * Scimago
 * Url : Fiche/ISO_Pays
 * Description : Classement Scimago
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/
class Scimago extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    console.log('componentDidMount()');
  }

  render() {
    return (
      <div className={classes.Scimago}>
        <div className="container">
          <h3>
            Classement Scimago
          </h3>
          <div className="row">
            <div className="col-4">
              <div className="form-group row">
                <label for="scimagoYearSelector" className={`col-sm-2 col-form-label ${classes.Title}`}>
                  Année
                </label>
                <div className="col-sm-10">
                  <select id="scimagoYearSelector" className="form-control form-control-sm">
                    {
                      this.props.data.years.map(year => <option>{year}</option>)
                    }
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <span className={classes.Title}>Rang</span>
                </div>
                <div className="col">
                  <span className={classes.Title}>Pays</span>
                </div>
              </div>
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Nombre de
              <br />
              documents
              <hr />
              BT
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Citable
              <br />
              documents
              <hr />
              BT
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Nombe de
              <br />
              citations
              <hr />
              BT
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Nombe de
              <br />
              self citations
              <hr />
              BT
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Nombe de
              <br />
              citations/doc
              <hr />
              BT
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              &nbsp;
              <br />
              H index
              <hr />
              BT
            </div>
          </div>
          <div className={classes.Content}>
            {
              this.props.data.data.map((item) => {
                if (item.fields.pays !== 'NA') {
                  return (
                    <div className={classes.Row}>
                      <div className="row">
                        <div className="col-4">
                          <div className="row">
                            <div className={`col-2 ${classes.Rank}`}>
                              {item.fields.rank}
                            </div>
                            <div className={`col ${classes.CountryName}`}>
                              {item.fields.pays}
                            </div>
                          </div>
                        </div>
                        <div className={`col ${classes.Number}`}>
                          {item.fields.documents}
                        </div>
                        <div className={`col ${classes.Number}`}>
                          {item.fields.citable_documents}
                        </div>
                        <div className={`col ${classes.Number}`}>
                          {item.fields.citations}
                        </div>
                        <div className={`col ${classes.Number}`}>
                          {item.fields.self_citations}
                        </div>
                        <div className={`col ${classes.Number}`}>
                          {item.fields.citations_per_document}
                        </div>
                        <div className={`col ${classes.Number}`}>
                          {item.fields.h_index}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Scimago;

Scimago.propTypes = {
  language: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
