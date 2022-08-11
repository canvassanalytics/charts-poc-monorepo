# Plotly app

## Custom webpack configuration
Due to changes in webpack 5 some custom webpack configuration options are required in order to use Plotly.js dependency.
Check `custom-webpack.config.js` for changes, [Nx - Customizing Webpack Config](https://nx.dev/guides/customize-webpack) for documentation.


## Package
Using [`plotly.js-strict-dist-min`](https://github.com/plotly/plotly.js/blob/master/dist/README.md#plotlyjs-strict) package that has an option to use WebGL for rendering some of the charts.
