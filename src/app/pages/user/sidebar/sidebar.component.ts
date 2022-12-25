import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../services/category.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: any;
  user: any;

  constructor( private _cat:CategoryService, private _snack:MatSnackBar, public login:LoginService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any) =>
      {
        this.categories = data;
      },
      (erro) => 
      {
        this._snack.open("Error in loading subjects", "Ok", {
          duration: 3000,
        });
      }
    );

    this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.user=user;
      },
      (error)=>{
        alert("error");
      },
    )
  }

}
