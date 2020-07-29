import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideIndex: number = 0;
  isInitial = true;
  visibleImges: any[] = []
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
    this.visibleImges = [this.data[this.slideIndex]];
  }


  // showSlides(slideIndex);

  plusSlides(n) {

    const index = this.slideIndex += n;
    

    if (this.data[index]) {
      this.visibleImges = [this.data[index]];

    } else {
      if (n === 1) {
        this.visibleImges = [this.data[0]];
        this.slideIndex = 0;
      } else {
        const indexForRepat = this.data.length - 1;
        this.visibleImges = [this.data[indexForRepat]];
        this.slideIndex = indexForRepat;
      }
    }
    return;
    this.visibleImges = this.data;
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName("mySlides");
    console.log(slides);

    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
  }

}