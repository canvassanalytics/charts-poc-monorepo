export function generateTimeseriesData(numberOfPoints = 1000, resolutionInSeconds = 60, includeNegatives = true) {
  /*
    data = [
      {x: "2020-01-01T12:00:00Z", y: 5.23},
      {x: "2020-01-01T12:00:00Z", y: 2.43},
      ...
    ]
  */
  let currentDate = new Date("2020-01-01T12:00:00Z");
  const data = [];

  for (let i = 0; i < numberOfPoints; i++) {
    currentDate = new Date(currentDate.getTime() + resolutionInSeconds*1000);
    const y = ((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5).toFixed(2)
    data.push({
      x: currentDate.toISOString(),
      y: includeNegatives ? y : Math.abs(y)
    });
  }

  return data;
}

export function generateTimeseriesDataAxisSeparately(numberOfPoints = 1000, resolutionInSeconds = 60, includeNegatives = true, double = false) {
  // let currentDate = new Date("2020-01-01T12:00:00Z");
  let currentDate = Date.UTC(2010,0,1)/1000;
  const xAxis = [];
  const yAxis = [];
  const yAxis2 = []; 

  for (let i = 0; i < numberOfPoints; i++) {
    currentDate += 3600 * 24;
    // currentDate = new Date(currentDate.getTime() + resolutionInSeconds*1000);
    const y = ((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5).toFixed(2)
    const y2 = ((Math.sin(i / 18) * (i / 5 - 10) + i / 9) * 5).toFixed(2)
    xAxis.push(currentDate);
    yAxis.push(includeNegatives ? y : Math.abs(y))
    yAxis2.push(includeNegatives ? y2 : Math.abs(y2))
  }
  if(double) return [xAxis, yAxis, yAxis2]
  return [xAxis, yAxis];
}


export function generateScatterplotsData(numberOfPoints = 1000, resolutionInSeconds = 60) {
  /*
    data = [
      {timestamp: "2020-01-01T12:00:00Z", x: 12.23, y: 5.23},
      {timestamp: "2020-01-01T12:00:00Z", x: 13.22, y: 2.43},
      ...
    ]
  */
  let currentDate = new Date("2020-01-01T12:00:00Z");
  let x = 0;
  const data = [];

  for (let i = 0; i < numberOfPoints; i++) {
    currentDate = new Date(currentDate.getTime() + resolutionInSeconds*1000);
    x = x + (x > 50 ? -Math.random(): Math.random()) * 10;
    data.push({
      x: (Math.random(i) * numberOfPoints).toFixed(2),
      y: (Math.sin(0.2*i) * 10).toFixed(2),
      timestamp: currentDate.toISOString()
    });
  }

  return data;
}


export function generateBarData(numberOfBars = 5) {
  /*
    data = [
      {x: "1", y: 5},
      {x: "2", y: 10},
      ...
    ]
  */
  const data = [];

  for (let i = 0; i < numberOfBars; i++) {
    data.push({
      x: "Category " + i,
      y: (Math.sin(Math.random()) * 10).toFixed(0)
    });
  }

  return data;
}


export function generateHistogramData(numberOfBins = 100) {
  /*
    data = [
      {x: 0.5, y: 5},
      {x: 1.5, y: 10},
      {x: 2.5, y: 2},
      ...
    ]
  */
  const data = [];

  for (let i = 0; i < numberOfBins; i++) {
    const start = i;
    const end = i + 1;
    data.push({
      x: (start + end) / 2,
      y: Math.abs(((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5).toFixed(0))
    });
  }

  return data;
}
