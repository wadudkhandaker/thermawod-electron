import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AppointmentComponent} from './modules/appointment/components/appointment.component';
import{QuoteComponent} from './modules/quote/components/quote/quote.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/quote',
        pathMatch: 'full',
    },
    {
        path: 'appointment',
        // loadChildren: 'modules/appointment/appointment.module#AppointmentModule',
        component: AppointmentComponent
    },
    {
        path: 'quote',
        // loadChildren: './modules/quote/quote.module#QuoteModule'
        component:QuoteComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
