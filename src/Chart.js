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
    title: "Data",
    yAxis: "GC Content"
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
            fontColor: "#45423c"},

              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              },

              scales: {
        xAxes: [ {
         display: true,
         gridLines: {color: "#45423c" },
         ticks: {
                  fontColor: "#B4CBE7"},
          scaleLabel: {
            display: true,
            labelString: 'DNA Strand length',
            fontSize: 18,
            fontColor: '#45423c'
          }
        } ],
        yAxes: [ {
          display: true,
          gridLines: {color: "#45423c" },
          ticks: {
                   fontColor: "#45423c"},
          scaleLabel: {
            display: true,
            labelString: this.props.yAxis,
            fontSize: 18,
            fontColor: '#45423c'

          }
        } ]
      }}}/>
      </div>
    )
  }





}

export default Chart;
