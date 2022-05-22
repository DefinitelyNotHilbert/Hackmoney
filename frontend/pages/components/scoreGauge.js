
  import React from 'react';

//   function HeaderView() {
//     return (
//   const ScoreGauge = React.createClass({
//     propTypes: {
//       value: PropTypes.number,        // value the chart should show
//       valuelabel: PropTypes.string,   // label for the chart
//       size: PropTypes.number,         // diameter of chart
//       strokewidth: PropTypes.number   // width of chart line
//     },
//     getDefaultProps() {
//       return {
//         value:0,
//         valuelabel:'Completed',
//         size:116,
//         strokewidth:26
//       };
//     },
//     render() {
export default function ScoreGauge({val}){
      const props = {   
                value:val,
                valuelabel:'CANDID Score',
                size:120,
                strokewidth:8
              };


      const halfsize = (props.size * 0.5);
      const radius = halfsize - (props.strokewidth * 0.5);
      const circumference = 2 * Math.PI * radius;
      const strokeval = ((props.value * circumference) / 100);
      const dashval = (strokeval + ' ' + circumference);
  
      const trackstyle = {strokeWidth: props.strokewidth};
      const indicatorstyle = {strokeWidth: props.strokewidth, strokeDasharray: dashval}
      const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';
  
      return (
        <svg width={props.size} height={props.size} className="ScoreGauge">
          <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="ScoreGauge-track"/>
          <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="ScoreGauge-indicator"/>
          <text className="ScoreGauge-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
            <tspan className="ScoreGauge-text-val">{props.value}</tspan>
            <tspan className="ScoreGauge-text-percent"></tspan>
            <tspan className="ScoreGauge-text-label" x={halfsize} y={halfsize+10}>{props.valuelabel}</tspan>
          </text>
        </svg>
      );
    }
//   export default ScoreGauge;