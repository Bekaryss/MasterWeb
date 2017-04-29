export class LMItem{
    id: number;
    title: string;
    order: number;
    link: string;
    children: LMItem[];
}

export const LMItems: LMItem[]=[
    {
         id: 1, 
         title: 'Dashboard', 
         order: 1, 
         link: '', 
         children: null
    },
    {
         id: 1, 
         title: 'Department', 
         order: 1, 
         link: 'department', 
         children: null
    },
    {
        id: 3, 
        title: 'Projects', 
        order: 3, 
        link: 'projects', 
        children: null
    },
    {
        id: 4, 
        title: 'Tasks', 
        order: 4, 
        link: 'tasks', 
        children: null
    },
];