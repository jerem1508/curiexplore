import React, { Component } from 'react';
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
    this.state = {
      options: null,
    };
    this.exportChartPdf = this.exportChartPdf.bind(this);
    this.exportChartPng = this.exportChartPng.bind(this);
    this.exportChartCsv = this.exportChartCsv.bind(this);
  }

  componentDidMount() {
    const allData = [];
    let series = [];
    let name = '';

    // for (let i = 0; i < this.data.length * 2; i += 1) {
    //   for (let j = 0; j < this.data.length; j += 1) {
    //     if (this.data[j].data.length === 0) {
    //       // push l'index dans color array ?
    //       this.data.splice(j, 1);
    //     }
    //   }
    // }

    const dl = this.data.length;
    let j = 0;
    let year = 0;
    let max = 0;
    // alert(dl);
    try {
      name = this.data[0].data[0].label_long;
      year = this.data[0].data[0].year
    } catch (error) {
      name = '';
    }
    for (let i = 0; i < dl; i += 1) {
      const data = [];
      this.data[i].data.sort((a, b) => (a.year - b.year));
      for (j = 0; j < this.data[i].data.length; j += 1) {
        const tmp = [];
        tmp.push(this.data[i].data[j].year);
        tmp.push(this.data[i].data[j].value);
        data.push(tmp);
      }
      if (j > 0) {
        max = j;
        allData.push(data);
      } else {
        for (j = 0; j < max; j += 1) {
          const tmp = [];
          tmp.push(year + j);
          tmp.push(0);
          data.push(tmp);
        }
        allData.push(data);
      }
    }

    try {
      for (let i = 0; i < dl; i += 1) {
        let ctryName = '';
        if (this.data[i].data.length > 0 && this.data[i].data[0].country_label != null) {
          ctryName = this.data[i].data[0].country_label;
        } else if (this.data[i].data.length > 0 && this.data[i].data[0].country_code != null) {
          ctryName = this.data[i].data[0].country_code;
        } else {
          ctryName = 'Pas de données disponibles';
        }
        series.push({ name: ctryName, data: allData[i], color: this.props.colors[i] });
      }
    } catch (error) {
      series = [];
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
        title: {
          text: name,
        },
        // labels: {
        //   formatter() {
        //     if (this.value >= 1E9) {
        //       // alert('toto');
        //       return `${(this.value / 1E12)} Md`;
        //     } if (this.value >= 1E6) {
        //       return `${(this.value / 1E6)} M`;
        //     }
        //     return this.value;
        //   },
        // },
      },
      tooltip: {
        shared: true,
        crosshairs: true,
        // formatter() {
        //   const points = this.points;
        //   const len = points.length;
        //   const tooltipMarkup = [];
        //
        //   tooltipMarkup.push(`${points[0].x}<br />`);
        //   for (let i = 0; i < len; i += 1) {
        //     // if (this.y >= 1E9) {
        //     //   tooltipMarkup.push(`<br />${points[i].series.name} : ${(points[i].y / 1E12).toFixed(1)} Md`);
        //     // } else if (this.y >= 1E6) {
        //     //   tooltipMarkup.push(`<br />${points[i].series.name} : ${(points[i].y / 1E6).toFixed(1)} M`);
        //     // }
        //     tooltipMarkup.push(`<br />${points[i].series.name} : ${(points[i].y / 1E6).toFixed(1)}`);
        //   }
        //   return tooltipMarkup;
        // },
        // formatter() {
        //   if (this.y >= 1E9) {
        //     return `${this.x}<br />${this.series.name}<br />${(this.y / 1E12).toFixed(1)} Md`;
        //   } if (this.y >= 1E6) {
        //     return `${this.x}<br />${this.series.name}<br />${(this.y / 1E6).toFixed(1)} M`;
        //   }
        //   return this.y.toFixed(1);
        // },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        line: {
          marker: {
            symbol: 'circle',
          },
        },
        // series: {
        //   stacking: 'normal',
        // },
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
            text: 'Titre test',
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
  source: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};
