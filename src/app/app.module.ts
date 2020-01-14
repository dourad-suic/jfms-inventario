import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BackendService } from './servicos/backend.service';
import { MyDaniloComponent } from './my-danilo/my-danilo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MyDaniloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BackendService]
})
export class AppModule { }
