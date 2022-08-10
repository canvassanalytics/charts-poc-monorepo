import Plot from '../plotting';

export default function LineChart(props) {
  return (
    <Plot
      data={[
        {
          type: 'scatter',
          mode: 'lines+points',
          x: [1, 2, 3],
          y: [2, 6, 3],
          marker: { color: 'red' },
        },
        {
          type: 'bar',
          x: [1, 2, 3],
          y: [2, 5, 3],
        },
      ]}
      layout={{
        width: 640,
        height: 480,
        title: 'A Fancy Plot',
      }}
    />
  );
}
