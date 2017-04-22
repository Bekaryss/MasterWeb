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
         title: 'Department', 
         order: 1, 
         link: 'department', 
         children:[
             {
                 id: 2,
                 title: 'Finance',
                 order: 1,
                 link: 'finance',
                 children: null
             }
         ],
    },
    {
        id: 3, 
        title: 'Table', 
        order: 3, 
        link: '', 
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