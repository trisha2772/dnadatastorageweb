import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: 'right',
    chartData: {},
    title: "Data"
  }

  render(){
    return (
      <div>
      <Line
          height = {35}
          width = {50}
          data={this.props.chartData}
          options={{
            maintainAspectRatio: true,
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 25,
            fontColor: "#B4CBE7"},

              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              },

              scales: {
        xAxes: [ {
         display: true,
         gridLines: {color: "#B4CBE7" },
         ticks: {
                  fontColor: "#B4CBE7"},
          scaleLabel: {
            display: true,
            labelString: 'DNA Strand length',
            fontSize: 18,
            fontColor: '#B4CBE7'
          }
        } ],
        yAxes: [ {
          display: true,
          gridLines: {color: "#B4CBE7" },
          ticks: {
                   fontColor: "#B4CBE7"},
          scaleLabel: {
            display: true,
            labelString: 'GC Content',
            fontSize: 18,
            fontColor: '#B4CBE7'

          }
        } ]
      }}}/>
      </div>
    )
  }





}

export default Chart;
