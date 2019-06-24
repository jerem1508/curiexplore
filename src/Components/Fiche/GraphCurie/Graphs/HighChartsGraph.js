import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCAccessibility from 'highcharts/modules/accessibility';
import HCExporting from 'highcharts/modules/exporting';
import HCExportingData from 'highcharts/modules/export-data';
import HCRounded from 'highcharts-rounded-corners';


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
    let series = [];
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

    if (dl === 1) {
      series = [{
        name: 'Population',
        data: allData[0],
        color: this.props.colors[0],
      }];
    } else if (dl === 2) {
      series = [{
        name: 'Population',
        data: allData[0],
        color: this.props.colors[0],
      }, {
        name: 'Test',
        data: allData[1],
        color: this.props.colors[1],
      }];
    } else {
      series = [{
        name: 'Population',
        data: allData[0],
        color: this.props.colors[0],
      }, {
        name: 'Test',
        data: allData[1],
        color: this.props.colors[1],
      }, {
        name: 'Test2',
        data: allData[2],
        color: this.props.colors[2],
      }];
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
        labels: {
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
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
