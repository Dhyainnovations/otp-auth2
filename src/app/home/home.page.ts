import { Component } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sms: SMS) { }


  click() {
    var options: {
      replaveLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }
    this.sms.send('8838373520', 'Hello world!', options).then(() => {
      alert("Message Send");
    }).catch((err) => {
      alert("Error")
    });
  }
}
