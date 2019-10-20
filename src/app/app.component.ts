import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codegenerator';
  date = new Date();
  codeGenerated = ''; // for 10 digit code
  inputcodeGenerated = ''; // for any digit code
  randomString() {
 const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
 const stringLength = 10;
 let randomstring = '';
 for (let i = 0; i < stringLength; i++) {
 const rnum = Math.floor(Math.random() * chars.length);
 randomstring += chars.substring(rnum, rnum + 1);
}
 this.codeGenerated = randomstring;
 return 0;
}
randominputString(maxValue: number) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  let randominputstring = '';
  for (let i = 0; i < maxValue; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randominputstring += chars.substring(rnum, rnum + 1);
  }
  this.inputcodeGenerated = randominputstring;
  return 0;
}
}
