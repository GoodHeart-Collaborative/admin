import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideIndex: number = 1;

  // testArr: any[] = [
  //   "assets/images/imagePlaceholder.png",
  //   "assets/images/inspiration.jpg",
  //   "assets/images/user.png",
  // ]

  constructor(
    private $dialogRef: MatDialogRef<SliderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }


  // showSlides(slideIndex);

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName("mySlides");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
  }

}
