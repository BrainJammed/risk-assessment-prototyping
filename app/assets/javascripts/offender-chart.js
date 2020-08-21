var lines = ['rosha', 'ogres', 'ogp']

function filterEventList (legends) {
  $('.eventItem').show();

  // first hide classes
  if (!legends[0]) {
    $('.' + lines[0]).slideUp();
  }
  if (!legends[1]) {
    $('.' + lines[1]).slideUp();
  }
  if (!legends[2]) {
    $('.' + lines[2]).slideUp();
  }

  // then show classes (in case a div has both classes)
  if (legends[0]) {
    $('.' + lines[0]).show();
  }
  if (legends[1]) {
    $('.' + lines[1]).show();
  }
  if (legends[2]) {
    $('.' + lines[2]).show();
  }
}

function showOnlySeries(seriesToShow){
  $('.eventItem').show();
  $('.eventItem').not('.' + lines[seriesToShow]).slideUp();

  $('.' + seriesToShow).show();
}

function scrollToAnchor(aid){
  console.log('scrolling scrolling')
  var aTag = $("a[id='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function renderChart () {
  var container = document.getElementById('chart-area')
  var data = {
    categories: ['Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020', 'Q3 2020'],
    series: [
      {
        name: 'ROSHA',
        data: [35, '', 38, 34, 42, '', '', '', 22, '', 22, 21]
      },
      {
        name: 'OGRES',
        data: [3.8, '', 7.0, '', 12.4, 45.3, '', '', '', 10.6, 6.4, '']
      },
      {
        name: 'OGP',
        data: [22.1, 22.0, '', 18.3, '', 32.8, 21.8, 13.0, '', 17.6, '', 16.2]
      },
    ]
  }
  var options = {
    chart: {
      width: 960,
      height: 300,
      title: 'Risk change overview'
    },
    yAxis: {
      title: 'Risk score',
    },
    xAxis: {
      title: 'Date',
      pointOnColumn: true,
      dateFormat: 'MMM',
      tickInterval: 'auto'
    },
    series: {
      showDot: true,
      zoomable: false
    },
    tooltip: {
      suffix: ''
    },
    plot: {
      bands: [
        {
          range: ['03/01/2016', '05/01/2016'],
          color: 'gray',
          opacity: 0.1
        }
      ],
      lines: [
        {
          value: '03/01/2016',
          color: '#fa2828'
        }
      ]
    }
  }
  var theme = {
    series: {
      colors: [
        '#58508d',
        '#bc5090',
        '#ff6361',
        '#ffa600',
        '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
        '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
      ]
    }
  }
  // Apply theme
  tui.chart.registerTheme('myTheme', theme)
  options.theme = 'myTheme'
  var chart = tui.chart.lineChart(container, data, options)

  chart.on('selectSeries', function (info) {
    console.log(info) // {chartType: String, legend: String, legendIndex: Number, index: number}
    console.log('clicked on data point:' + info.index)

    scrollToAnchor('point_8');
  })
  chart.on('selectLegend', function (info) {
    console.log(info) // {chartType: String, legend: String, legendIndex: Number, index: number}
    console.log('clicked on legend:' + info.index)
    showOnlySeries(info.index)
  })
  chart.on('changeCheckedLegends', function (info) {
    console.log(info) // {chartType: String, legend: String, legendIndex: Number, index: number}
    console.log('changeCheckedLegends:' + info.line)
    filterEventList(info.line)
  })

}

window.onload = renderChart
