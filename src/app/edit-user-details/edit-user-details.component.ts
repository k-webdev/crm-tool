import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { EditAdressDetailsComponent } from '../edit-adress-details/edit-adress-details.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.scss']
})
export class EditUserDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditAdressDetailsComponent>, private firestore: AngularFirestore) { }

  loading: boolean = false;
  user: User = new User();
  userId: any;
  birthDate = Date;

  ngOnInit(): void {
  }

  save(){
    this.loading = true;
    this.firestore.collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(()=>{
      this.loading = false;
      this.dialogRef.close();
    });
  }
  cancel(){
    this.dialogRef.close();
  }

}
