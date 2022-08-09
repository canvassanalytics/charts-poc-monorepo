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
    data.push({
      x: currentDate.toISOString(),
      y: (Math.sin(Math.random()) * 10 - (includeNegatives ? Math.random() * 10 : 0)).toFixed(2)
    });
  }

  return data;
}


export function generateScatterplotsData(numberOfPoints = 1000, resolutionInSeconds = 60, includeNegatives = true) {
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
      x: x.toFixed(2),
      y: (Math.sin(Math.random()) * 10 - (includeNegatives ? Math.random() * 10 : 0)).toFixed(2),
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
      x: i.toString(),
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
    data.push({
      x: (i + i + 1) / 2,
      y: (Math.sin(Math.random()) * 10).toFixed(0)
    });
  }

  return data;
}
