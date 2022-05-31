import { Component } from '@angular/core';
import { ICourse } from '../models/ICourse';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  courses$: Observable<ICourse[]>;
  // Columns will be displayed, need to be the same of html matColumnDef.
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService
      .list()
      // catchError, error handle for error requests.
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.onError(error.message);
          return of<ICourse[]>([]);
        })
      ); // of, returns an observable. Avoid spinner run forever.
  }

  /**
   * Open dialog box with error
   * @param errorMsg Message error to be injected on dialog box
   */
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, { data: errorMsg });
  }
}
