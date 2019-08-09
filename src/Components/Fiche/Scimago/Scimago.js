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
    columnSelected: 'documents',
    orderDirection: 'asc',
    data: this.props.data.data,
  };

  componentDidMount() {
    this.sortDataState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.columnSelected !== this.state.columnSelected || prevState.orderDirection !== this.state.orderDirection) {
      this.sortDataState();
    }
    if (prevProps.data !== this.props.data) {
      const filteredData = this.props.data.data;
      if (this.state.orderDirection === 'asc') {
        filteredData.sort((a, b) => (b.fields[this.state.columnSelected] - a.fields[this.state.columnSelected]));
      } else {
        filteredData.sort((a, b) => (a.fields[this.state.columnSelected] - b.fields[this.state.columnSelected]));
      }
      this.setState({ data: filteredData });
    }
  }

  sortDataState = () => {
    /* eslint-disable */
    const filteredData = [...this.state.data];
    /* eslint-enable */
    if (this.state.orderDirection === 'asc') {
      filteredData.sort((a, b) => (b.fields[this.state.columnSelected] - a.fields[this.state.columnSelected]));
    } else {
      filteredData.sort((a, b) => (a.fields[this.state.columnSelected] - b.fields[this.state.columnSelected]));
    }
    this.setState({ data: filteredData });
  }

  btnSortClickHandler = (column) => {
    let direction = 'asc';
    if (this.state.columnSelected === column) {
      direction = this.getNewDirection();
    }
    this.setState({ columnSelected: column, orderDirection: direction });
  }

  getNewDirection = () => {
    if (this.state.orderDirection === 'desc') {
      return 'asc';
    }
    return 'desc';
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
                <div className={`col-sm-2 col-form-label ${classes.Title}`}>
                  Année
                </div>
                <div className="col-sm-6">
                  <select
                    id="scimagoYearSelector"
                    className="form-control form-control-sm"
                    onChange={this.props.onYearChangeHandler}
                  >
                    {
                      this.props.data.years.map(year => <option key={`scimago_${year}`}>{year}</option>)
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
              <span
                onClick={() => this.btnSortClickHandler('documents')}
                className={`${classes.BtnSort} ${(this.state.columnSelected === 'documents') ? classes.BtnSortSelected : ''}`}
                onKeyPress={() => this.btnSortClickHandler('documents')}
                tabIndex={0}
                role="button"
              >
                {
                  (this.state.orderDirection === 'asc' && this.state.columnSelected === 'documents') ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />
                }
              </span>
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Citable
              <br />
              documents
              <hr />
              <span
                onClick={() => this.btnSortClickHandler('citable_documents')}
                className={`${classes.BtnSort} ${(this.state.columnSelected === 'citable_documents') ? classes.BtnSortSelected : ''}`}
                onKeyPress={() => this.btnSortClickHandler('citable_documents')}
                tabIndex={0}
                role="button"
              >
                {
                  (this.state.orderDirection === 'asc' && this.state.columnSelected === 'citable_documents') ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />
                }
              </span>
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Nombe de
              <br />
              citations
              <hr />
              <span
                onClick={() => this.btnSortClickHandler('citations')}
                className={`${classes.BtnSort} ${(this.state.columnSelected === 'citations') ? classes.BtnSortSelected : ''}`}
                onKeyPress={() => this.btnSortClickHandler('citations')}
                tabIndex={0}
                role="button"
              >
                {
                  (this.state.orderDirection === 'asc' && this.state.columnSelected === 'citations') ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />
                }
              </span>
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Nombe de
              <br />
              self citations
              <hr />
              <span
                onClick={() => this.btnSortClickHandler('self_citations')}
                className={`${classes.BtnSort} ${(this.state.columnSelected === 'self_citations') ? classes.BtnSortSelected : ''}`}
                onKeyPress={() => this.btnSortClickHandler('self_citations')}
                tabIndex={0}
                role="button"
              >
                {
                  (this.state.orderDirection === 'asc' && this.state.columnSelected === 'self_citations') ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />
                }
              </span>
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              Nombe de
              <br />
              citations/doc
              <hr />
              <span
                onClick={() => this.btnSortClickHandler('citations_per_document')}
                className={`${classes.BtnSort} ${(this.state.columnSelected === 'citations_per_document') ? classes.BtnSortSelected : ''}`}
                onKeyPress={() => this.btnSortClickHandler('citations_per_document')}
                tabIndex={0}
                role="button"
              >
                {
                  (this.state.orderDirection === 'asc' && this.state.columnSelected === 'citations_per_document') ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />
                }
              </span>
            </div>
            <div className={`col ${classes.TableTitle} ${classes.Title}`}>
              &nbsp;
              <br />
              H index
              <hr />
              <span
                onClick={() => this.btnSortClickHandler('h_index')}
                className={`${classes.BtnSort} ${(this.state.columnSelected === 'h_index') ? classes.BtnSortSelected : ''}`}
                onKeyPress={() => this.btnSortClickHandler('h_index')}
                tabIndex={0}
                role="button"
              >
                {
                  (this.state.orderDirection === 'asc' && this.state.columnSelected === 'h_index') ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />
                }
              </span>
            </div>
          </div>
          <div className={classes.Content}>
            {
              this.state.data.map((item, index) => (
                /* eslint-disable-next-line */
                <div className={classes.Row} key={`scimago_${item}_${index}`}>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="row">
                        <div className={`col-2 ${classes.Rank}`}>
                          {/* item.fields.rank */}
                          {index + 1}
                        </div>
                        <div className={`col ${classes.CountryName} ${(item.fields.iso_alpha3.toUpperCase() === this.props.isoAlpha3) ? classes.CountrySelected : null}`}>
                          {
                            (item.fields.iso_alpha3 !== 'NA')
                              ? <img src={`https://restcountries.eu/data/${item.fields.iso_alpha3.toLowerCase()}.svg`} alt="Drapeau du pays" />
                              : null
                          }
                          <span>{(item.fields.pays === 'NA') ? item.fields.country : item.fields.pays}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm text-center">
                      <span className={`${classes.Number} ${(this.state.columnSelected === 'documents') ? classes.NumberSelected : ''}`}>
                        {item.fields.documents.toLocaleString()}
                      </span>
                    </div>
                    <div className="col-sm text-center">
                      <span className={`${classes.Number} ${(this.state.columnSelected === 'citable_documents') ? classes.NumberSelected : ''}`}>
                        {item.fields.citable_documents.toLocaleString()}
                      </span>
                    </div>
                    <div className="col-sm text-center">
                      <span className={`${classes.Number} ${(this.state.columnSelected === 'citations') ? classes.NumberSelected : ''}`}>
                        {item.fields.citations.toLocaleString()}
                      </span>
                    </div>
                    <div className="col-sm text-center">
                      <span className={`${classes.Number} ${(this.state.columnSelected === 'self_citations') ? classes.NumberSelected : ''}`}>
                        {item.fields.self_citations.toLocaleString()}
                      </span>
                    </div>
                    <div className="col-sm text-center">
                      <span className={`${classes.Number} ${(this.state.columnSelected === 'citations_per_document') ? classes.NumberSelected : ''}`}>
                        {item.fields.citations_per_document.toLocaleString()}
                      </span>
                    </div>
                    <div className="col-sm text-center">
                      <span className={`${classes.Number} ${(this.state.columnSelected === 'h_index') ? classes.NumberSelected : ''}`}>
                        {item.fields.h_index.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Scimago;

Scimago.propTypes = {
  // language: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onYearChangeHandler: PropTypes.func.isRequired,
  isoAlpha3: PropTypes.string.isRequired,
};
