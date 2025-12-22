import { Routes } from '@angular/router';

const routeConfig: Routes = [
    {
        path: '',
        loadComponent: () =>
        import('./pages/notes/notes.component')
            .then(c => c.NotesComponent),
        title: 'Notes'
    },
    {
        path: 'notepads',
        loadComponent: () =>
        import('./pages/notepads/notepads.component')
            .then(c => c.NotepadsComponent),
        title: 'Notepads'
    }
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