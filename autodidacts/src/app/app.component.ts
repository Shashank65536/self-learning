import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import lottieWeb, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('animationDetails', {static: true}) animationDetails: TemplateRef<any>;
  welcomeAnimation: AnimationItem;
  welcomeContent: string;
  popup: {header:string, content: string, author: string}

  constructor(){}

  ngOnInit(): void {
    this.loadAnimation();
    this.loadText();
    this.loadPopupContent();
  }

  loadAnimation(): void {
    this.welcomeAnimation = lottieWeb.loadAnimation({
      container: document.getElementById('welcome-animation'),
          renderer: 'svg',
          loop: true,
          path: '/assets/animations/welcome-screen.json'
    });

    this.welcomeAnimation.goToAndPlay(2, true)
  }

  loadText() {
    this.welcomeContent = '"Wisdom is not a product of schooling but of the lifelong attempt to acquire it", a qoute from Albert Einstien is something we, Runay and Shanshank are aiming ' + 
    'to inculcate it into our daily routine through this self-learning project. \n We won\'t just learn but make sure to try and implement new things through this project. '+
    'And wherever possible we will even explainly briefly how we achieved whatever we implemented. \n How would we explain ? Start with hovering over Welcome GIF above!'
  }

  loadPopupContent() {
    const content = 'I have used lottie animations to achieve this. We get options like lottie player to integrate but I have installed their \'lottie-web\' package ' +
    'And along that I am displaying this specific WELCOME animation using lottie json (free) provided in their website itself';
    this.popup = {
      header: 'Lottie Animations',
      content: content,
      author: 'By Runay or Shashank'
    }
  }
}
