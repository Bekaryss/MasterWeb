import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        const departments = [
            {
                id: 1,
                title: 'Finance',
                description: 'Description 1'
                // projects: [
                //     {
                //         id:1,
                //         title: 'WebMaster 1'
                //     },
                //     {
                //         id:2,
                //         title: 'WebMaster 2'
                //     },
                //     {
                //         id:3,
                //         title: 'WebMaster 3'
                //     }
                // ]
            },
            {
                id: 2,
                title: 'Management',
                description: 'Description 1'
                 
            },
            {
                id: 3,
                title: 'Advertisement',
                description: 'Description 1'
            },
            {
                id: 4,
                title: 'Information System',
                description: 'Description 1'
            }
        ];
        const tasks = [
            {
                id: 1,
                title: 'angular 2',
                description: 'Specify the template file for the component (line 9).',
                departmentId: 1,
                projectId: 1
            },  
            {
                id: 2,
                title: 'angular 3',
                description: 'Declare the number of directives were used in component html file (line 11). Is the directive was not declare here, it will not be redered in roles.html file and angular will consider its tag (<page-action/>, <grid />) as html tag',
                departmentId: 1,
                projectId: 1
        },
            {
                id: 3,
                title: 'angular 4',
                description: 'Declare new Roles class inherit  from BasePage.',
                departmentId: 1,
                projectId: 1
        }
        ];
        const projects = [
            {
                id: 1,
                title: 'angular 2',
                description: 'Specify the template file for the component (line 9).',
                departmentId: 1
            },
            {
                id: 2,
                title: 'angular 3',
                description: 'Declare the number of directives were used in component html file (line 11). Is the directive was not declare here, it will not be redered in roles.html file and angular will consider its tag (<page-action/>, <grid />) as html tag',
                departmentId: 1
        },
            {
                id: 3,
                title: 'angular 4',
                description: 'Declare new Roles class inherit  from BasePage.',
                departmentId: 2
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
        return { departments, tasks, customers, projects };
    }
}