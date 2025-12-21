import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main/main.component';

const routeConfig: Routes = [
    {
        path: '',
        component: MainPageComponent, // The component to render for the path
        title: 'Main page'
    },
    // You can add more routes here, for example:
    /*
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    },
    */
];

export default routeConfig;