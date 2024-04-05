import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SinglentonUseModule } from './components/singlenton-use/singlenton-use.module';
import { TrackByUseModule } from './components/track-by-use/track-by-use.module';
import { HeaderModule } from './components/landing/header/header.module';
import { PromiseObservableUseModule } from './components/promise-observable-use/promise-observable-use.module';
import { SliderModule } from './components/slider/slider.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SinglentonUseModule,
    TrackByUseModule,
    HeaderModule,
    PromiseObservableUseModule,
    SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
