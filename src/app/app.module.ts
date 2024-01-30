import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SinglentonUseModule } from './components/singlenton-use/singlenton-use.module';
import { TrackByUseModule } from './components/track-by-use/track-by-use.module';
import { HeaderComponent } from './components/landing/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, SinglentonUseModule, TrackByUseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
