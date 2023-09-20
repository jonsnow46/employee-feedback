import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { HttpClient } from '@angular/common/http';
import { PerformanceReview } from 'src/app/model/performance-review';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  dataUrl: string = 'http://localhost:3001/employee/employee';
  dataUrl1: string = 'http://localhost:3001/employee/performance';
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3001/admin/employee');
  }

  getAllEmployeeDetails(employee_name: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl + '/' + employee_name);
  }
  getPendingPerformance(reviewer_name: string): Observable<PerformanceReview[]> {
    return this.http.get<PerformanceReview[]>(this.dataUrl1 + '/' + reviewer_name+'?param1=pending');
  }
  getEmployeePerformances(employee_name: string): Observable<PerformanceReview[]> {
    return this.http.get<PerformanceReview[]>(this.dataUrl1 + '/' + employee_name);
  }

  updatePerformance(performance: PerformanceReview): Observable<PerformanceReview> {
    return this.http.put<PerformanceReview>(this.dataUrl1 + '/' + performance._id, performance);
  }
}
