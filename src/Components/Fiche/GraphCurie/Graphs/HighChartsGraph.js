import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCAccessibility from 'highcharts/modules/accessibility';
import HCExporting from 'highcharts/modules/exporting';
import HCExportingData from 'highcharts/modules/export-data';
import HCRounded from 'highcharts-rounded-corners';

import classes from '../GraphCurie.scss';

HCAccessibility(Highcharts);
HCExporting(Highcharts);
HCExportingData(Highcharts);
HCRounded(Highcharts);

/**
 * HighChartsBar
 * Url : <br/>
 * Description : Composant HighCharts qui rend les barres horizontales <br/>
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
    this.state = {
      options: null,
    };
    this.exportChartPdf = this.exportChartPdf.bind(this);
    this.exportChartPng = this.exportChartPng.bind(this);
    this.exportChartCsv = this.exportChartCsv.bind(this);
  }

  componentDidMount() {
    const allData = [];
    const dl = this.data.length;
    const series = [];
    let name = '';
    try {
      name = this.data[0].data[0].label_long;
    } catch (error) {
      name = '';
    }
    for (let i = 0; i < dl; i += 1) {
      const data = [];
      this.data[i].data.sort((a, b) => (a.year - b.year));
      for (let j = 0; j < this.data[i].data.length; j += 1) {
        const tmp = [];
        tmp.push(this.data[i].data[j].year);
        tmp.push(this.data[i].data[j].value);
        data.push(tmp);
      }
      allData.push(data);
    }

    for (let i = 0; i < dl; i += 1) {
      series.push({ name: this.data[i].data[0].country_label, data: allData[i], color: this.props.colors[i] });
    }

    const options = {
      chart: {
        type: this.type,
      },
      title: {
        text: '',
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
        min: 0,
        title: {
          text: name,
        },
        labels: {
          formatter() {
            if (this.value >= 1E9) {
              // alert('toto');
              return `${(this.value / 1E12)} Md`;
            } if (this.value >= 1E6) {
              return `${(this.value / 1E6)} M`;
            }
            return this.value;
          },
        },
      },
      tooltip: {
        formatter() {
          if (this.y >= 1E9) {
            return `${this.x}<br />${this.series.name}<br />${(this.y / 1E12).toFixed(1)} Md`;
          } if (this.y >= 1E6) {
            return `${this.x}<br />${this.series.name}<br />${(this.y / 1E6).toFixed(1)} M`;
          }
          return this.y.toFixed(1);
        },
      },
      legend: {
        enabled: false,
      },
      // tooltip: {
      //   enabled: true,
      // },
      series,
      exporting: {
        buttons: {
          contextButton: {
            enabled: false,
          },
        },
      },
      credits: {
        enabled: false,
      },
    };
    this.setState({ options });
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
    const ShareComponent = () => (
      <div style={{ overflow: 'hidden', paddingLeft: '2%' }}>
        <hr />
        <div style={{ float: 'left' }}>
          <p>Partager</p>
          <i className="fas fa-share-alt-square fa-lg" />
          <p>Intégrer le code</p>
          <i className="fas fa-code fa-lg" />
        </div>
        <div style={{ float: 'right' }}>
          <p><b>Télécharger</b></p>
          <button type="button" onClick={this.exportChartPng}><i className="fas fa-image fa-lg" /></button>
          <p>.png</p>
          <button type="button" onClick={this.exportChartCsv}><i className="fas fa-table fa-lg" /></button>
          <p>.csv</p>
        </div>
      </div>
    );
    return (
      <div>
        {
          this.state.options !== null
            ? (
              <div>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={this.state.options}
                  ref={this.chart}
                />
                <ShareComponent />
              </div>
            )
            : <div>Loading...</div>
        }
      </div>
    );
  }
}

HighChartsBar.propTypes = {
  colors: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};
