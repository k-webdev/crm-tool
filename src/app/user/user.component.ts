import { Component, OnInit } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();
  allUsers: any = [];

  constructor(public dialog: MatDialog, public firestore: AngularFirestore ) { }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'userId'})
    .subscribe((changes: any)=>{
      console.log('Recived Changes from DB: ', changes);
      this.allUsers = changes;
    });

  }

  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }

}
