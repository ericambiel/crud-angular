import { Component, OnInit } from '@angular/core';
import { ICourse } from '../models/ICourse';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses: ICourse[] = [];
  // Columns will be displayed, need to be the same of html matColumnDef.
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }
}
