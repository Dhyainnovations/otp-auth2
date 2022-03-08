import { Component } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sms: SMS) { }

  number: any = "";
  otp: any = "";
  getotp: any = ""
  click() {
    var options: {
      replaveLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }
    this.otp = Math.floor(100000 + Math.random() * 900000);
    this.sms.send(this.number, this.otp + "24Hrs Verification OTP code", options).then(() => {
      alert("Message Send" + this.otp);
    }).catch((err) => {
      alert("Error")
    });
  }
  Verify() {
    if (this.otp == this.getotp) {
      alert("User Verified")
    }
  }



}
