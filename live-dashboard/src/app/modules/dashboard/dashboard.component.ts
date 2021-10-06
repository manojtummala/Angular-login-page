import { Component, OnInit } from '@angular/core';

interface Floor {
  value: string;
  viewValue: string;
}
interface Section {
  value: string;
  viewValue: string;
}
interface View {
  value: string;
  viewValue: string;
}
interface Meter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  floors: Floor[] = [
    {value: 'floor-1', viewValue: 'FLOOR-1'},
    {value: 'floor-2', viewValue: 'FLOOR-2'},
    {value: 'floor-3', viewValue: 'FLOOR-3'}
  ];
  sections: Section[] = [
    {value: 'section-1', viewValue: 'Section-1'},
    {value: 'section-2', viewValue: 'Section-2'},
    {value: 'section-3', viewValue: 'Section-3'}
  ];
  views: View[] = [
    {value: 'views-1', viewValue: 'View-1'},
    {value: 'views-2', viewValue: 'View-2'},
    {value: 'views-3', viewValue: 'View-3'}
  ];
  meters: Meter[] = [
    {value: 'meters-1', viewValue: 'Meter-1'},
    {value: 'meters-2', viewValue: 'Meter-2'},
    {value: 'meters-3', viewValue: 'Meter-3'},
    {value: 'meters-4', viewValue: 'Meter-4'},
    {value: 'meters-5', viewValue: 'Meter-5'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

