export interface Note {
    id: number,
    notepadId?: number,
    header: string;
    notes: string;
    created: string;
    updated?: string;
}