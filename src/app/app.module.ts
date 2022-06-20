import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from "@angular/material/slider";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { YellowBackgroundDirective } from './shared/yellow-background.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
	declarations: [
		AppComponent,
  ConceptsComponent,
  YellowBackgroundDirective,
  HighlightMouseDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		MatSliderModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
