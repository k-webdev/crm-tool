import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';

@Component({
  selector: 'app-edit-adress-details',
  templateUrl: './edit-adress-details.component.html',
  styleUrls: ['./edit-adress-details.component.scss']
})
export class EditAdressDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditAdressDetailsComponent>, private firestore: AngularFirestore) { }

  user: User = new User();
  loading: boolean = false;
  userId: any;

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  save(){
    this.firestore.collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(()=>{
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
