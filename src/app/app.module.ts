import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from "@angular/material/slider";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ConceptsComponent } from './concepts/concepts.component';

@NgModule({
	declarations: [
		AppComponent,
  ConceptsComponent
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
