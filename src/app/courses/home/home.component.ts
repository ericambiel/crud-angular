import { Component, OnInit } from '@angular/core';
import { ICourse } from '../models/ICourse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses: ICourse[] = [{ id: '1', name: 'Angular', category: 'Front-end' }];
  // Columns will be displayed, need to be the same of html matColumnDef.
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
