$(() => {
  $('#chart').dxChart({
    dataSource: populationData,
    legend: {
      visible: false,
    },
    export: {
      enabled: true,
    },
    series: {
      type: 'scatter',
    },
    loadingIndicator: {
      enabled: true,
    },
    argumentAxis: {
      tickInterval: 18,
      label: {
        format: {
          type: 'decimal',
        },
      },
    },
    title: 'World Population by Decade',
  });
});