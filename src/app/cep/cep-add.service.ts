import { Injectable } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class CepAddService {

  constructor(private snackBar:MatSnackBar) { }

  showMsg(msg:string): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
}
