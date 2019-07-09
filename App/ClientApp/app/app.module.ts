import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';

// Components
import { AppComponent } from './components/app/app.component';
import { GridComponent } from './components/common/grid.component';
import { AddPatientsComponent } from './components/common/add.component';

const routes: Routes = [
    { path: '', component: GridComponent, pathMatch: 'full' },
    { path: 'add', component: AddPatientsComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        DatePickerModule,
        IntlModule,
        BrowserAnimationsModule,
        GridModule
    ],
    declarations: [
        AppComponent,
        GridComponent,
        AddPatientsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }