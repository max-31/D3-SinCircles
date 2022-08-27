import { select, range } from 'd3';

export function makeCircleData(n, t) {
  const data = range(n).map((d) => ({
    x: d * 60 + 50,
    y: 250 + Math.sin(d * 0.5 + t * 5) * 220,
    r: 20 + Math.sin(d * 0.5 + t*4) * 10,
    fill: `rgb(${Math.abs(Math.sin(t))*255}, ${Math.abs(Math.sin(t*d*10))*10}, 150)`
  }));
  return data;
}

export function makeLineData(data, t) {
  const lineData = [];
  for (let i = 0; i < data.length - 1; i++) {
    lineData.push({
      x1: data[i].x,
      y1: data[i].y,
      x2: data[i + 1].x,
      y2: data[i + 1].y,
      stroke: data[i].fill
    });
  }
  return lineData;
}