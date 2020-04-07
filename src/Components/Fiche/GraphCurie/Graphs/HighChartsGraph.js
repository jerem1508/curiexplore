import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCAccessibility from 'highcharts/modules/accessibility';
import HCExporting from 'highcharts/modules/exporting';
import HCExportingData from 'highcharts/modules/export-data';
import HCRounded from 'highcharts-rounded-corners';

import classes from './HighChartsGraph.scss';

HCAccessibility(Highcharts);
HCExporting(Highcharts);
HCExportingData(Highcharts);
HCRounded(Highcharts);

/**
 * HighChartsGraphs
 * Url : <br/>
 * Description : Composant HighCharts qui rend les graphs (barres verticales + lignes) <br/>
 * Responsive : . <br/>
 * Accessible : . <br/>
 * Tests unitaires : . <br/>.
*/

export default class HighChartsBar extends Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.data = this.props.data;
    this.type = this.props.type;
    this.filename = '';
    this.sourceStr = this.props.sourceStr;
    this.state = {
      options: null,
    };
    this.exportChartPdf = this.exportChartPdf.bind(this);
    this.exportChartPng = this.exportChartPng.bind(this);
    this.exportChartCsv = this.exportChartCsv.bind(this);
  }

  componentDidMount() {
    const allData = [];
    const series = [];
    let name = '';

    try {
      name = this.data[0][0].fields.label_long;
      this.filename = name;
    } catch (error) {
      name = '';
    }

    this.props.data.forEach((country) => {
      const data = [];

      // Tri
      country.sort((a, b) => a.fields.year - b.fields.year);

      country.forEach((dataByYear) => {
        data.push([dataByYear.fields.year, dataByYear.fields.value]);
      });

      allData.push(data);
    });

    // Ajout de chaque pays à l'objet SERIES
    this.props.data.forEach((country, i) => {
      if (allData[i].length > 0) {
        let ctryName = '';
        if (country[0].fields.country_label != null) {
          ctryName = country[0].fields.country_label;
        } else if (country[0].fields.country_code != null) {
          if (country[0].fields.country_code === 'EUU') {
            ctryName = 'Union européenne';
          } else if (country[0].fields.country_code === 'WLD') {
            ctryName = 'Monde';
          } else if (country[0].fields.country_code === 'OED') {
            ctryName = 'OCDE';
          }
        } else {
          ctryName = 'Pas de données disponibles';
        }

        // Ajout à la serie
        series.push({ name: ctryName, data: allData[i], color: this.props.colors[i] });
      }
    });

    const options = {
      chart: {
        type: this.type,
      },
      title: {
        text: '',
      },
      legend: {
        enabled: false,
      },
      buttons: {
        contextButton: {
          enabled: false,
        },
      },
      xAxis: {
        type: 'category',
        lineWidth: 3,
        lineColor: classes.darkBlueColor,
        labels: {
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
            color: classes.darkBlueColor,
            fontWeight: 'bold',
          },
        },
      },
      yAxis: {
        title: {
          text: name,
        },
      },
      tooltip: {
        shared: true,
        crosshairs: true,
      },
      plotOptions: {
        line: {
          marker: {
            symbol: 'circle',
          },
        },
      },
      series,
      exporting: {
        buttons: {
          contextButton: {
            enabled: false,
          },
        },
        chartOptions: {
          legend: {
            enabled: true,
          },
          title: {
            text: this.filename,
          },
          subtitle: {
            text: this.sourceStr,
          },
        },
        filename: `${this.filename} - ${this.sourceStr.split(':')[1]}`,
      },
      credits: {
        enabled: false,
      },
    };
    this.setState({ options }, () => {
      if (!this.props.full) {
        this.props.setRef(this.chart.current.chart);
      }
    });
  }

  exportChartPdf() {
    this.chart.current.chart.exportChart({
      type: 'application/pdf',
    });
  }

  exportChartPng() {
    this.chart.current.chart.exportChart({
      type: 'image/png',
    });
  }

  exportChartCsv() {
    this.chart.current.chart.downloadCSV();
  }

  render() {
    const CompleteShare = () => (
      <div className={classes.exportBtn}>
        <span>Partager</span>
        <button className={classes.dot} type="button"><i className="fas fa-share-alt" /></button>
        <span>Intégrer le code</span>
        <button className={classes.dot} type="button"><i className="fas fa-code" /></button>
        <span>Télécharger</span>
        <button className={classes.dot} type="button" onClick={this.exportChartPng}><i className="fas fa-image" /></button>
        <span>.png</span>
        <button className={classes.dot} type="button" onClick={this.exportChartCsv}><i className="fas fa-table" /></button>
        <span>.csv</span>
        <span className={classes.src}>{this.props.source}</span>
      </div>
    );
    const SimpleShare = () => (
      <div className={classes.exportBtn}>
        <button className={classes.dot} type="button"><i className="fas fa-share-alt" /></button>
        <button className={classes.dot} type="button"><i className="fas fa-code" /></button>
        <button className={classes.dot} type="button" onClick={this.exportChartPng}><i className="fas fa-image" /></button>
        <button className={classes.dot} type="button" onClick={this.exportChartCsv}><i className="fas fa-table" /></button>
        <span className={classes.src}>{this.props.source}</span>
      </div>
    );
    const ShareComponent = () => {
      if (this.props.full) {
        return <CompleteShare />;
      }
      return <SimpleShare />;
    };
    // console.log(this.chart.current);
    return (
      <div>
        {
          this.state.options !== null
            ? (
              <Fragment>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={this.state.options}
                  ref={this.chart}
                />
                <ShareComponent />
              </Fragment>
            )
            : <div>Loading...</div>
        }
      </div>
    );
  }
}

HighChartsBar.propTypes = {
  colors: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  full: PropTypes.bool.isRequired,
  setRef: PropTypes.func,
  source: PropTypes.object.isRequired,
  sourceStr: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
