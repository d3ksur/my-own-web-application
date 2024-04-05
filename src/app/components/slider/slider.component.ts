import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  public $!: any;

  public ngAfterViewInit() {
    // Coloca el código jQuery aquí después de que la vista se haya inicializado
    this.$('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });

    this.$('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      focusOnSelect: true,
    });

    this.$('a[data-slide]').click((e: any) => {
      e.preventDefault();
      let slideno: any = this.$(e.target).data('slide');
      this.$('.slider-nav').slick('slickGoTo', slideno - 1);
    });
  }
}
