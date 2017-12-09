import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mindfulness',
  templateUrl: 'mindfulness.html'
})
export class MindfulnessPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  breatheAlert(event) {
      let alert = this.alertCtrl.create({
          title: 'Breathe deeply',
          subTitle: 'Meditation revolves around breathing. It\'s a great way to relax and centre yourself\. To begin practising, inhale for 3 seconds and exhale for 3 seconds. As you practice more, increase the amount of seconds\. ',
          buttons: ['x']
      })
      alert.present();
  }

  exerciseAlert(event) {
      let alert = this.alertCtrl.create({
          title: 'Eat well and exercise',
          subTitle: 'Mindful eating involves paying full attention to the experience of eating and drinking, both inside and outside the body. Pay attention to the colors, smells, textures and flavours. Pay attention to the experience of the body.  ',
          buttons: ['x']
      })
      alert.present();
  }

  noticeAlert(event) {
      let alert = this.alertCtrl.create({
          title: 'Notice and listen',
          subTitle: 'Be present in the moment. Allow your mind to let go and simply notice what\'s around you. Listen to what others are saying, attempt to avoid judgements and focus on the content of what they\'re saying ',
          buttons: ['x']
      })
      alert.present();
  }

  gratitudeAlert(event) {
      let alert = this.alertCtrl.create({
          title: 'Practice gratitude',
          subTitle: 'Being grateful is important habit to form. It reminds us to enjoy what we have, rather than desiring what we don\'t. Write down 3 things you\'re grateful for when you wake up and be specific.',
          buttons: ['x']
      })
      alert.present();
  }

}
