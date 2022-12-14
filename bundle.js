(function (d3) {
  'use strict';

  function drawCircles(selection, data) {
    selection
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', (d) => d.r)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
    	.attr('fill', (d) => d.fill);
  }

  function drawLines(selection, lineData) {
    selection
      .selectAll('line')
      .data(lineData)
      .join('line')
      .attr('x1', (d) => d.x1)
      .attr('y1', (d) => d.y1)
      .attr('x2', (d) => d.x2)
      .attr('y2', (d) => d.y2)
      .attr('stroke', (d) => d.stroke);
  }

  function makeCircleData(n, t) {
    const data = d3.range(n).map((d) => ({
      x: d * 60 + 50,
      y: 250 + Math.sin(d * 0.5 + t * 5) * 220,
      r: 20 + Math.sin(d * 0.5 + t*4) * 10,
      fill: `rgb(${Math.abs(Math.sin(t))*255}, ${Math.abs(Math.sin(t*d*10))*10}, 150)`
    }));
    return data;
  }

  function makeLineData(data, t) {
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

  const width = window.innerWidth;
  const height = window.innerHeight;

  const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  let t = 0;

  setInterval(() => {
    //const n = 10 + Math.sin(t) * 5;
    const n = 15;
    const circleData = makeCircleData(n, t);
    const lineData = makeLineData(circleData);
    //vizData(svg, data);
    // is equivalent to
    svg.call(drawCircles, circleData);
    svg.call(drawLines, lineData);
    t = t + 0.01;
  }, 1000 / 60);

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInZpekRhdGEuanMiLCJtYWtlRGF0YS5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdCwgcmFuZ2UgfSBmcm9tICdkMyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2lyY2xlcyhzZWxlY3Rpb24sIGRhdGEpIHtcbiAgc2VsZWN0aW9uXG4gICAgLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAuZGF0YShkYXRhKVxuICAgIC5qb2luKCdjaXJjbGUnKVxuICAgIC5hdHRyKCdyJywgKGQpID0+IGQucilcbiAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KVxuICAgIC5hdHRyKCdjeScsIChkKSA9PiBkLnkpXG4gIFx0LmF0dHIoJ2ZpbGwnLCAoZCkgPT4gZC5maWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdMaW5lcyhzZWxlY3Rpb24sIGxpbmVEYXRhKSB7XG4gIHNlbGVjdGlvblxuICAgIC5zZWxlY3RBbGwoJ2xpbmUnKVxuICAgIC5kYXRhKGxpbmVEYXRhKVxuICAgIC5qb2luKCdsaW5lJylcbiAgICAuYXR0cigneDEnLCAoZCkgPT4gZC54MSlcbiAgICAuYXR0cigneTEnLCAoZCkgPT4gZC55MSlcbiAgICAuYXR0cigneDInLCAoZCkgPT4gZC54MilcbiAgICAuYXR0cigneTInLCAoZCkgPT4gZC55MilcbiAgICAuYXR0cignc3Ryb2tlJywgKGQpID0+IGQuc3Ryb2tlKTtcbn1cbiIsImltcG9ydCB7IHNlbGVjdCwgcmFuZ2UgfSBmcm9tICdkMyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2lyY2xlRGF0YShuLCB0KSB7XG4gIGNvbnN0IGRhdGEgPSByYW5nZShuKS5tYXAoKGQpID0+ICh7XG4gICAgeDogZCAqIDYwICsgNTAsXG4gICAgeTogMjUwICsgTWF0aC5zaW4oZCAqIDAuNSArIHQgKiA1KSAqIDIyMCxcbiAgICByOiAyMCArIE1hdGguc2luKGQgKiAwLjUgKyB0KjQpICogMTAsXG4gICAgZmlsbDogYHJnYigke01hdGguYWJzKE1hdGguc2luKHQpKSoyNTV9LCAke01hdGguYWJzKE1hdGguc2luKHQqZCoxMCkpKjEwfSwgMTUwKWBcbiAgfSkpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMaW5lRGF0YShkYXRhLCB0KSB7XG4gIGNvbnN0IGxpbmVEYXRhID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBsaW5lRGF0YS5wdXNoKHtcbiAgICAgIHgxOiBkYXRhW2ldLngsXG4gICAgICB5MTogZGF0YVtpXS55LFxuICAgICAgeDI6IGRhdGFbaSArIDFdLngsXG4gICAgICB5MjogZGF0YVtpICsgMV0ueSxcbiAgICAgIHN0cm9rZTogZGF0YVtpXS5maWxsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGxpbmVEYXRhO1xufSIsImltcG9ydCB7IHNlbGVjdCwgcmFuZ2UgfSBmcm9tICdkMyc7XG5pbXBvcnQge1xuICBkcmF3Q2lyY2xlcyxcbiAgZHJhd0xpbmVzLFxufSBmcm9tICcuL3ZpekRhdGEnO1xuaW1wb3J0IHtcbiAgbWFrZUNpcmNsZURhdGEsXG4gIG1ha2VMaW5lRGF0YSxcbn0gZnJvbSAnLi9tYWtlRGF0YSc7XG5cbmNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbmNvbnN0IHN2ZyA9IHNlbGVjdCgnYm9keScpXG4gIC5hcHBlbmQoJ3N2ZycpXG4gIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxubGV0IHQgPSAwO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIC8vY29uc3QgbiA9IDEwICsgTWF0aC5zaW4odCkgKiA1O1xuICBjb25zdCBuID0gMTU7XG4gIGNvbnN0IGNpcmNsZURhdGEgPSBtYWtlQ2lyY2xlRGF0YShuLCB0KTtcbiAgY29uc3QgbGluZURhdGEgPSBtYWtlTGluZURhdGEoY2lyY2xlRGF0YSwgdCk7XG4gIC8vdml6RGF0YShzdmcsIGRhdGEpO1xuICAvLyBpcyBlcXVpdmFsZW50IHRvXG4gIHN2Zy5jYWxsKGRyYXdDaXJjbGVzLCBjaXJjbGVEYXRhKTtcbiAgc3ZnLmNhbGwoZHJhd0xpbmVzLCBsaW5lRGF0YSk7XG4gIHQgPSB0ICsgMC4wMTtcbn0sIDEwMDAgLyA2MCk7XG4iXSwibmFtZXMiOlsicmFuZ2UiLCJzZWxlY3QiXSwibWFwcGluZ3MiOiI7OztFQUVPLFNBQVMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUU7RUFDN0MsRUFBRSxTQUFTO0VBQ1gsS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDO0VBQ3hCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztFQUNmLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztFQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMxQixLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzQixLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2hDLENBQUM7QUFDRDtFQUNPLFNBQVMsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUU7RUFDL0MsRUFBRSxTQUFTO0VBQ1gsS0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDO0VBQ3RCLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztFQUNuQixLQUFLLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDNUIsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDNUIsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDNUIsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDNUIsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNyQzs7RUNyQk8sU0FBUyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUNyQyxFQUFFLE1BQU0sSUFBSSxHQUFHQSxRQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO0VBQ3BDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtFQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO0VBQzVDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7RUFDeEMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7RUFDcEYsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNOLEVBQUUsT0FBTyxJQUFJLENBQUM7RUFDZCxDQUFDO0FBQ0Q7RUFDTyxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO0VBQ3RDLEVBQUUsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0VBQ3RCLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQzVDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztFQUNsQixNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuQixNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuQixNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkIsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZCLE1BQU0sTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO0VBQzFCLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRztFQUNILEVBQUUsT0FBTyxRQUFRLENBQUM7RUFDbEI7O0VDZEEsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztFQUNoQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ2xDO0VBQ0EsTUFBTSxHQUFHLEdBQUdDLFNBQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUIsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0VBQ2hCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7RUFDdkIsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFCO0VBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1Y7RUFDQSxXQUFXLENBQUMsTUFBTTtFQUNsQjtFQUNBLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0VBQ2YsRUFBRSxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQzFDLEVBQUUsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFVBQWEsQ0FBQyxDQUFDO0VBQy9DO0VBQ0E7RUFDQSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0VBQ3BDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7RUFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztFQUNmLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDOzs7OyJ9