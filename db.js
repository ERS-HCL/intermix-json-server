var planetsRoute = require('./planets.json');
var expenseReport = require('./data/expense-report.json');
var analyticsReport = require('./data/analytics-report.json');
var ordersByTheDayReport = require('./data/orders-by-the-day.json');
var issuesReport = require('./data/issues-report.json');
var avgLoadTime = require('./data/average-loadtime.json');
var ordersComplete = require('./data/orders-complete.json');
var transportMap = require('./data/transport-map.json');
var scatterPlotReport = require('./data/scatter-plot-report.json');
var sunBurstReport = require('./data/sun-burst-report.json');
var swarnPlotReport = require('./data/swarm-plot-report.json');
var streamReport = require('./data/stream-report.json');
var geoReport = require('./data/geo-report.json');
var areaBumpReport = require('./data/area-bump-report.json');
// and so on

module.exports = function () {
  return {
    planets: planetsRoute,
    'expense-report': expenseReport,
    'analytics-report': analyticsReport,
    'orders-by-the-day': ordersByTheDayReport,
    'issues-report': issuesReport,
    'transport-map': transportMap,
    'average-loadtime': avgLoadTime,
    'orders-complete': ordersComplete,
    'scatter-plot-report': scatterPlotReport,
    'sun-burst-report': sunBurstReport,
    'swarm-plot-report': swarnPlotReport,
    'stream-report': streamReport,
    'geo-report': geoReport,
    'area-bump-report': areaBumpReport,
    // and so on
  };
};
