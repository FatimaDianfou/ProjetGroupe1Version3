import { Component } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-sidebar', // Assurez-vous que ce sélecteur correspond à votre HTML
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  Chart:any
  constructor(){}
  ngOnInit() {
    this.createBarChart();
    this.createPieChart1();
    this.createPieChart2();
  }

  createBarChart() {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createPieChart1() {
    new Chart('pieChart1', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['red', 'blue', 'yellow'],
            borderColor: 'white',
            borderWidth: 1
          }
        ]
      }
    });
  }

  createPieChart2() {
    new Chart('pieChart2', {
      type: 'pie',
      data: {
        labels: ['Green', 'Orange', 'Purple'],
        datasets: [
          {
            data: [200, 150, 250],
            backgroundColor: ['green', 'orange', 'purple'],
            borderColor: 'white',
            borderWidth: 1
          }
        ]
      }
    });
  }
 }
