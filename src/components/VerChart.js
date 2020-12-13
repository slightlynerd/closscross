import { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export default function VerChart() {
  const date = Date.now();

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
    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      const value = Math.round(Math.random() * (100 - 1 + 1) + 1);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    const dateAxis = chart.yAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.date = "date";
    dateAxis.renderer.minGridDistance = 150;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.inversed = true;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.opposite = true;

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueX = "value";
    series.dataFields.dateY = "date";
    series.tooltipText = "{value}";
    chart.logo.disabled = true;
  });

  return <div id={`chart-${date}`} className="chart"></div>;
}
