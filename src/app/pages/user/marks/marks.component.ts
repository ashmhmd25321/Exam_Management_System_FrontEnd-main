import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MarksService } from '../../services/marks.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  stdName: any;
  marks: any;

  constructor(public login:LoginService, private _marks:MarksService, private _route:ActivatedRoute,) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.stdName = params['username'];

      if(this.stdName==0) {
        console.log("Load All the Quiz");
  
        this._marks.getMarksOfUser(this.stdName).subscribe(
          (data:any) => {
            this.marks = data;
            console.log(this.marks);
          },
          (error) => {
            console.log(error);
            alert("Error loading");
          }
        )
  
      } else {
        // console.log("Load quiz with the id");
        
        this._marks.getMarksOfUser(this.stdName).subscribe(
          (data)=>
          {
            this.marks=data;
          },
          (error)=> {
            alert("error in loading exam paper");
          }
        )
      }

    })
  }

}
