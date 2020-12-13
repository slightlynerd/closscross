import { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export default function HorChart() {
  const date = Date.now();
  console.log(date);

  const am4themesTradingTheme = (target) => {
    if (target instanceof am4core.ColorSet) {
      target.list = [
        am4core.color("#9ac802"),
        am4core.color("#9ac802"),
        am4core.color("#9ac802"),
      ];
    }
  };
  am4core.useTheme(am4themesTradingTheme);

  useEffect(() => {
    const chart = am4core.create(`chart-${date}`, am4charts.XYChart);

    const data = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      const value = Math.round(Math.random() * (100 - 1 + 1) + 1);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 150;
    dateAxis.renderer.labels.template.disabled = true;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.opposite = true;

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;
    chart.logo.disabled = true;

    return function cleanUp() {
      chart.dispose();
    };
  });

  return <div id={`chart-${date}`} className="chart"></div>;
}
