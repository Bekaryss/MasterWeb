import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        const departments = [
            {
                id: 1,
                title: 'Finance',
                projects: [
                    {
                        id:1,
                        title: 'WebMaster 1'
                    },
                    {
                        id:2,
                        title: 'WebMaster 2'
                    },
                    {
                        id:3,
                        title: 'WebMaster 3'
                    }
                ]
            },
            {
                id: 2,
                title: 'Management',
                 projects: [
                    {
                        id:1,
                        title: 'DxD Master 1'
                    },
                    {
                        id:2,
                        title: 'DxD Master 2'
                    },
                    {
                        id:3,
                        title: 'DxD Master 3'
                    }
                ]
            },
            {
                id: 3,
                title: 'Advertisement',
                projects: null
            },
            {
                id: 4,
                title: 'Information System',
                projects: null
            }
        ];
        const tasks = [
            {
                id: 1,
                title: 'angular 2',
                description: 'Specify the template file for the component (line 9).'
            },
            {
                id: 2,
                title: 'angular 3',
                description: 'Declare the number of directives were used in component html file (line 11). Is the directive was not declare here, it will not be redered in roles.html file and angular will consider its tag (<page-action/>, <grid />) as html tag'
            },
            {
                id: 3,
                title: 'angular 4',
                description: 'Declare new Roles class inherit  from BasePage.'
            }
        ];
        const customers = [
            {
                id: 1,
                firstName: 'Bekarys',
                lastName: 'Kuralbay',
                email: 'bekarys.kuralbai@gmail.com'
            },
            {
                id: 2,
                firstName: 'Bekarys 1',
                lastName: 'Kuralbay',
                email: 'bekarys.kuralbai@gmail.com'
            },
            {
                id: 3,
                firstName: 'Bekarys 2',
                lastName: 'Kuralbay',
                email: 'bekarys.kuralbai@gmail.com'
            },
            
        ];
        return { departments, tasks, customers };
    }
}