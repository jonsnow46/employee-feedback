import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { HttpClient } from '@angular/common/http';
import { PerformanceReview } from 'src/app/model/performance-review';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  dataUrl: string = 'http://localhost:3001/admin/employee';
  dataUrl1: string = 'http://localhost:3001/admin/performance';
  constructor(private http: HttpClient) { }

  addEmployee(employeeObj: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.dataUrl, employeeObj);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.dataUrl + '/' + employee._id, employee);
  }

  deleteEmployee(id: String): Observable<Employee> {
    return this.http.delete<Employee>(this.dataUrl + '/' + id);
  }

  addPerformance(performanceObj: PerformanceReview): Observable<PerformanceReview> {
    return this.http.post<PerformanceReview>(this.dataUrl1, performanceObj);
  }

  getEmployeePerformances(employee : Employee): Observable<PerformanceReview[]> {
    return this.http.get<PerformanceReview[]>(this.dataUrl1+'/'+employee.employee_name);
  }

  getAllPerformances(): Observable<PerformanceReview[]> {
    return this.http.get<PerformanceReview[]>(this.dataUrl1);
  }

  updatePerformance(performance: PerformanceReview): Observable<PerformanceReview> {
    return this.http.put<PerformanceReview>(this.dataUrl1 + '/' + performance._id, performance);
  }

  deletePerformance(id: String): Observable<PerformanceReview> {
    return this.http.delete<PerformanceReview>(this.dataUrl1 + '/' + id);
  }

}
