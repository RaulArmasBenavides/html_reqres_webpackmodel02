$(() => {
    const data = complaintsData.sort((a, b) => b.count - a.count);
    const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);
    let cumulativeCount = 0;
    const dataSource = data.map((item) => {
      cumulativeCount += item.count;
      return {
        descripcion: item.complaint,
        count: item.count,
        cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
      };
    });
  
    $('#chart').dxChart({
      dataSource,
      title: 'Pizza Shop Complaints',
      valueAxis: [{
        name: 'frequency',
        position: 'left',
        tickInterval: 300,
      }, {
        name: 'percentage',
        position: 'right',
        showZero: true,
        label: {
          customizeText(info) {
            return `${info.valueText}%`;
          },
        },
        constantLines: [{
          value: 80,
          color: '#fc3535',
          dashStyle: 'dash',
          width: 2,
          label: { visible: false },
        }],
        tickInterval: 20,
        valueMarginsEnabled: false,
      }],
      commonSeriesSettings: {
        argumentField: 'descripcion',
      },
      series: [{
        type: 'bar',
        valueField: 'count',
        axis: 'frequency',
        name: 'Complaint frequency',
        color: '#fac29a',
      }, {
        type: 'spline',
        valueField: 'cumulativePercentage',
        axis: 'percentage',
        name: 'Porcentaje acumulado',
        color: '#6b71c3',
      }],
      legend: {
        verticalAlignment: 'bottom',
        horizontalAlignment: 'center',
      },
    });
  });