import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular/module';
import { BComponent } from './b/b';

@NgModule({
	declarations: [AComponent,
    BComponent],
	imports: [
		BrowserModule,
	    IonicModule.forRoot(ComponentsModule)
	],
	exports: [AComponent,
    BComponent]
})
export class ComponentsModule {}
