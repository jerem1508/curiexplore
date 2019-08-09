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
      year = this.data[0].data[0].year;
      this.filename = name;
    } catch (error) {
      name = '';
    }
    for (let i = 0; i < dl; i += 1) {
      const data = [];
      this.data[i].data.sort((a, b) => (a.year - b.year));
      try {
        year = this.data[0].data[0].year;
      } catch (error) {
        name = '';
      }
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
          // if (this.data[0].data[0].label_long === 'Population active, total')
          //   console.log(year+j);
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
        // Penser à ajouter un country_label pour l'UE, l'OCDE et le Monde afin d'enlever cette forêt de if
        if (this.data[i].data.length > 0 && this.data[i].data[0].country_label != null) {
          ctryName = this.data[i].data[0].country_label;
        } else if (this.data[i].data.length > 0 && this.data[i].data[0].country_code != null) {
          if (this.data[i].data[0].country_code === 'EUU') {
            ctryName = 'Union européenne';
          } else if (this.data[i].data[0].country_code === 'WLD') {
            ctryName = 'Monde';
          } else if (this.data[i].data[0].country_code === 'OED') {
            ctryName = 'OCDE';
          }
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
      legend: {
        enabled: false,
      },
      // title: {
      //   text: this.filename,
      // },
      // legend: {
      //   enabled: true,
      // },
      // subtitle: {
      //   text: this.props.sourceStr,
      // },
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

        // formatter() {
        //   const points = this.points;
        //   const len = points.length;
        //   const tooltipMarkup = [];
        //
        //   tooltipMarkup.push(`${points[0].x}<br />`);
        //   for (let i = 0; i < len; i += 1) {
        //     const labelValue = points[i].y;
        //     let value = Math.abs(Number(labelValue)) >= 1.0e+9
        //     ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
        //     // Six Zeroes for Millions
        //     : Math.abs(Number(labelValue)) >= 1.0e+6
        //     ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
        //     // Three Zeroes for Thousands
        //     : Math.abs(Number(labelValue)) >= 1.0e+3
        //     ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"
        //     : Math.abs(Number(labelValue));
        //     tooltipMarkup.push(`<br />${points[i].series.name} : ${labelValue}`);
        //   }
        //   return tooltipMarkup;
        // },
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
