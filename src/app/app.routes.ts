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
        path: 'notes',
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
    },
    {
        path: 'note',
        loadComponent: () =>
        import('./pages/one.note/one.note.component')
            .then(c => c.OneNoteComponent),
        title: 'Create new notepad'
    },
    {
        path: 'note/:id',
        loadComponent: () =>
        import('./pages/one.note/one.note.component')
            .then(c => c.OneNoteComponent),
        title: 'Create new notepad'
    },
    {
        path: 'notepad',
        loadComponent: () =>
        import('./pages/one.notepad/one.notepad.component')
            .then(c => c.OneNotepadComponent),
        title: 'Note'
    },
    {
        path: 'notepad/:id',
        loadComponent: () =>
        import('./pages/one.notepad/one.notepad.component')
            .then(c => c.OneNotepadComponent),
        title: 'Notepad'
    },
    {
        path: 'new_notepad',
        loadComponent: () =>
        import('./pages/new.notepad/new.notepad.component')
            .then(c => c.NewNotepadComponent),
        title: 'Create new notepad'
    },
    {
        path: 'new_note',
        loadComponent: () =>
        import('./pages/new.note/new.note.component')
            .then(c => c.NewNoteComponent),
        title: 'Create new note'
    }
];

export default routeConfig;