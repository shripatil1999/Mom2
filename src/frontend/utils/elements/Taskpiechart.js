import React, { Component } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class TaskPieChart extends Component {
  componentDidMount() {
    // Check if the root instance already exists
    if (!this.root) {
      // Create a new root instance
      this.root = am5.Root.new("chartdiv");

      // Set themes
      this.root.setThemes([
        am5themes_Animated.new(this.root)
      ]);

      // Create the pie chart
      var chart = this.root.container.children.push(
        am5percent.PieChart.new(this.root, {
          endAngle: 270
        })
      );

      var series = chart.series.push(
        am5percent.PieSeries.new(this.root, {
          valueField: "value",
          categoryField: "category",
          endAngle: 270
        })
      );

      series.states.create("hidden", {
        endAngle: -90
      });

      series.data.setAll([
        {
          category: "Completed",
          value: 501.9
        },
        {
          category: "Not Started",
          value: 301.9
        },
        {
          category: "In Progress",
          value: 201.1
        },
        {
          category: "Overdue",
          value: 165.8
        },

      ]);
      
      series.appear(1000, 100);
    }
  }

  componentWillUnmount() {
    // Check if the root instance exists before disposing
    if (this.root) {
      this.root.dispose();
      this.root = null; // Set to null to indicate that it's disposed
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "50%", height: "300px" }}></div>
    );
  }
}

export default TaskPieChart;
