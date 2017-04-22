export class menuItem{
    id: number;
    title: string;
    order: number;
    link: string;
    icon: string;
}

export const MenuItems: menuItem[] = [
    { id: 1, title: 'Manage', order: 1, link: '', icon: 'apps' },
    { id: 2, title: 'Customer', order: 2, link: 'customers', icon: 'people' },
    { id: 3, title: 'User', order: 3, link: 'settings', icon: 'brightness_high' }
] 
