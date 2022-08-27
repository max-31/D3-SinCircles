import { select, range } from 'd3';
import {
  drawCircles,
  drawLines,
} from './vizData';
import {
  makeCircleData,
  makeLineData,
} from './makeData';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

let t = 0;

setInterval(() => {
  //const n = 10 + Math.sin(t) * 5;
  const n = 15;
  const circleData = makeCircleData(n, t);
  const lineData = makeLineData(circleData, t);
  //vizData(svg, data);
  // is equivalent to
  svg.call(drawCircles, circleData);
  svg.call(drawLines, lineData);
  t = t + 0.01;
}, 1000 / 60);
