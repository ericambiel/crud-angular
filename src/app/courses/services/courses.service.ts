import { Injectable } from '@angular/core';
import { ICourse } from '../models/ICourse';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/mocks/courses.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.API).pipe(
      first(), // Take first request from route.
      // take(1), // Take first request from route. (Same bellow)
      delay(1000) // Only to debug, to show spinner
      // tap(courses => console.log(courses)) // Only to debug, to show JSON at console
    );
  }
}
