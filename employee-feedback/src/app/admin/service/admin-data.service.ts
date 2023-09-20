import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  dataUrl: string = 'http://localhost:3001/admin/employee';
  constructor(private http: HttpClient) { }

  addEmployee(employeeObj: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.dataUrl, employeeObj);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.dataUrl+'/'+employee._id, employee);
  }

  deleteEmployee(id: String): Observable<Employee> {
    return this.http.delete<Employee>(this.dataUrl+'/'+id);
  }

}
