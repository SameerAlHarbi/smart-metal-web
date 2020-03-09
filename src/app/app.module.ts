import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MetalInspectComponent } from './metal-inspect/metal-inspect.component';
import { MetalInspectResultComponent } from './metal-inspect/metal-inspect-result/metal-inspect-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MetalInspectComponent,
    MetalInspectResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
