import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SinglentonUseModule } from './components/singlenton-use/singlenton-use.module';
import { TrackByUseComponent } from './components/track-by-use/track-by-use.component';

@NgModule({
  declarations: [AppComponent, TrackByUseComponent],
  imports: [BrowserModule, SinglentonUseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
