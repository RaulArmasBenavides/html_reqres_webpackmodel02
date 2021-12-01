$(() => {
  $('#chart').dxChart({
    dataSource: populationData,
    legend: {
      visible: false,
    },
    series: {
      type: 'Line',
    },
    argumentAxis: {
      tickInterval: 60,
      label: {
        format: {
          type: 'decimal',
        },
      },
    },
    title: 'World Population by Decade',
  });
});