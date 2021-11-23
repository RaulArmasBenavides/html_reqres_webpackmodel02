import { dxChart } from "https://cdn3.devexpress.com/jslib/21.2.3/js/dx.all.js";

const populationData = [{
  arg: 1960,
  val: 3032019978,
}, {
  arg: 1970,
  val: 3683676306,
}, {
  arg: 1980,
  val: 4434021975,
}, {
  arg: 1990,
  val: 5281340078,
}, {
  arg: 2000,
  val: 6115108363,
}, {
  arg: 2010,
  val: 6922947261,
}, {
  arg: 2020,
  val: 7795000000,
}];


let options = {
    dataSource: populationData,
    legend: {
      visible: false,
    },
    series: {
      type: 'bar',
    },
    argumentAxis: {
      tickInterval: 10,
      label: {
        format: {
          type: 'decimal',
        },
      },
    },
    title: 'World Population by Decade',
  };

  new DevExpress.viz.dxChart(document.getElementById('chart'), options);