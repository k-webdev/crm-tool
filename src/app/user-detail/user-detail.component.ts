import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EditAdressDetailsComponent } from '../edit-adress-details/edit-adress-details.component';
import { EditUserDetailsComponent } from '../edit-user-details/edit-user-details.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

userId: any = '';
user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
    });
    this.getUser();
  }

  getUser(){
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any)=>{
      this.user = new User(user);
    });
  }

  editUserDetails(){
    let dialog = this.dialog.open(EditUserDetailsComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editAdressDetails(){
    let dialog = this.dialog.open(EditAdressDetailsComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

}
