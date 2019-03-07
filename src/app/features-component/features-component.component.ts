import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-features-component',
  templateUrl: './features-component.component.html',
  styleUrls: ['./features-component.component.scss'],
  animations: [
    trigger('animateCircle', [
      state('start', style({
        transform: 'scale(1)'
      })),
      state('end', style({
        transform: 'scale(30)'
      })),
      transition('start => end', animate("300ms ease-in-out")),
      transition('end => start', animate("300ms ease-in-out"))
    ]),
    trigger('animateArticle', [
      state('start', style({
        opacity: 0,
        transform: "translateY(20px)"
      })),
      state('end', style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      transition('start => end', animate("300ms ease-in-out")),
      transition('end => start', animate("300ms ease-in-out"))
    ])
  ]
})
export class FeaturesComponentComponent implements OnInit {

  popupActive = false;
  animCircle = 'start';
  animArticle = 'start';

  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      }
  };

  toggleWinAction() : void{
    if(!this.popupActive){
      this.animCircle = 'end';
      setTimeout(() => {
        this.animArticle = 'end';
      }, 300);
    } else {
      this.animArticle = 'start';
      setTimeout(() => {
        this.animCircle = 'start';
      }, 300);
    }
    setTimeout(() => {
      this.popupActive = !this.popupActive;
    }, 600);
  }

  ngOnInit(){
  }

}
