import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;

  loading: boolean = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {  }

  ngOnInit(): void {
  }

  save(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('User: ', this.user);
    this.loading = true;
    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
      });
  }
  cancel(){
    this.dialogRef.close();
  }

}
