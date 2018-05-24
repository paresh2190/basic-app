import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import "gsap";
declare var TweenMax;
declare var TimelineMax;
declare var Linear;
declare var Sine;

@Component({
  selector: 'page-congrats',
  templateUrl: 'congrats.html',
})
export class CongratsPage {
  tl: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CongratsPage');
    // randomizer function
    function R(min, max) {
      return min + Math.random() * (max - min)
    };

    function random(min, max) {
      return min + Math.floor(Math.random() * (max - min));
    }

    // set maximum time for falling confetti
    var maxAnimationTime = 200;

    TweenMax.set("#snowContainer", {
      perspective: 600
    })
    TweenMax.set(".dot", {
      xPercent: "-50%",
      yPercent: "-50%"
    })

    var total = 50;
    var warp = document.getElementById("snowContainer"),
      w = '100%',
      h = 220;

    // start snow function

    var snowComposite = function () {
      var i = 0;
      for (i = 0; i < total; i++) {
        var Div = document.createElement('div');
        TweenMax.set(Div, {
          attr: {
            class: 'dot'
          },
          x: R(0, 200),
          y: R(-100, -50),
          z: R(-200, 300)
        });
        warp.appendChild(Div);
        animm(Div);
      }

      function animm(elm) {
        var hue = '#' + ('fffff' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
        //var hue = 'rgb("red")';
        //var colors = ["red", "blue", "green", "purple", "pink", "yellow", "orange"];
        TweenMax.set(elm, {
          backgroundColor: hue
        });
        
        TweenMax.to(elm, R(5, 3), {
          y: h + 45,
          opacity: R(.5, 1),
          scale: R(5, 1.25),
          ease: Linear.easeNone,
          delay:.1,
          
        });
        TweenMax.to(elm, R(1, 3), {
            x: R(20, 300),
            rotation: R(360, -360),
            rotationZ: R(180, -180),
            yoyo: true,
            ease: Linear.easeInOut,
            delay: .1

          }, "-=8.1");
        TweenMax.to(elm, R(1, 2), {
            rotationX: R(-180, 360),
            rotationY: R(360, -180),
            yoyo: true,
            ease: Linear.easeInOut,
            delay: .1
          }, "-=7");
        TweenMax.to(elm, R(1, 1), {
            opacity:0
          });
        
        return TweenMax;
      }
    };

    snowComposite(); //run the function
   

	// ********* / CONFETTI *********
  }

}
