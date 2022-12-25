import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private _http:HttpClient) { }

  public marks() {
    return this._http.get(`${baseUrl}/marks/`);
  }

   //add marks
   public addMarks(marks:any) {
    return this._http.post(`${baseUrl}/marks/`, marks);
  }

  //delete marks
  public deleteMarks(markId: any) {
    return this._http.delete(`${baseUrl}/marks/${markId}`)
  }

  //get marks by user name
  public getMarksOfUser(stdName:any) {
    return this._http.get(`${baseUrl}/marks/std/${stdName}`);
  }
}
