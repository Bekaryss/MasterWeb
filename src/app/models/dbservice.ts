import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        const departments = [
            {
                id: 1,
                title: 'Finance',
                description: 'The part of an organization that manages its money. The business functions of a finance department typically include planning, organizing, auditing, accounting for and controlling its companys financial statements.'
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
                description: 'Operations management refers to the administration of business practices to create the highest level of efficiency possible within an organization. It is concerned with converting materials and labor into goods and services as efficiently as possible to maximize the profit of an organization.'

            },
            {
                id: 3,
                title: 'Advertisement',
                description: 'Advertising is an audio or visual form of marketing communication that employs an openly ...... A televisions denotative meaning might be that it is high definition. The connotative ..... Department of Revenue, Washington State. Retrieved'
            },
            {
                id: 4,
                title: 'Information System',
                description: 'A computer information system is a system composed of people and computers that processes or interprets information.'
            }
        ];
        const tasks = [
            {
                id: 1,
                title: 'Sub tasks',
                description: 'Achieve more by breaking big tasks into smaller sub-tasks (multi-level).',
                departmentId: 1,
                projectId: 1
            },
            {
                id: 2,
                title: 'Sub projects',
                description: 'Manage complexity by breaking big projects into smaller sub-projects (multi-level)',
                departmentId: 1,
                projectId: 2
            },
            {
                id: 3,
                title: 'Share and collaborate',
                description: 'Share projects, delegate tasks and discuss details - on any device or platform!',
                departmentId: 2,
                projectId: 1
            },
            {
                id: 4,
                title: 'Notifications',
                description: 'Get notified when important changes happen via emails or push notifications.',
                departmentId: 2,
                projectId: 2
            },
            {
                id: 5,
                title: 'Intuitive dates',
                description: 'Share projects, delegate tasks and discuss details - on any device or platform!',
                departmentId: 3,
                projectId: 1
            },
            {
                id: 6,
                title: 'Powerful recurring dates',
                description: 'Create repeating due dates naturally like typing “every friday at 8am”.',
                departmentId: 3,
                projectId: 1
            },
            {
                id: 7,
                title: 'Real-time data synchronization',
                description: 'Never think about syncing, we do it for you in real-time across all devices and platforms.',
                departmentId: 4,
                projectId: 1
            },
            {
                id: 8,
                title: 'Multiple priorities',
                description: 'Focus on whats important using Todoists color-coded priority levels.',
                departmentId: 4,
                projectId: 2
            },
        ];
        const projects = [
            {
                id: 1,
                title: 'Develop a new/best method for resource management.',
                description: 'Ive worked as a PM at BAE System, Lockheed Martin and as a PM consultant for 7+ years.',
                departmentId: 1
            },
            {
                id: 2,
                title: 'Agile outside software.',
                description: 'Declare the number of directives were used in component html file (line 11). Is the directive was not declare here, it will not be redered in roles.html file and angular will consider its tag (<page-action/>, <grid />) as html tag',
                departmentId: 1
            },
            {
                id: 1,
                title: 'Why some projects succeed.',
                description: 'Declare new Roles class inherit  from BasePage.',
                departmentId: 2
            },
            {
                id: 2,
                title: 'Cultural challenges to common PM framework. ',
                description: 'example- You may study how stakeholder analysis in a particular  project is successful in one country and in not in other country.  ',
                departmentId: 2
            },
            {
                id: 1,
                title: 'The Apportionment Problem. ',
                description: 'This problem is concerned with assigning an appropriate number of seats in an organization or a legislative body.',
                departmentId: 3
            },
            {
                id: 2,
                title: 'Scheduling problems. ',
                description: 'Scheduling problems require assigning tasks subject to constraints such as deadlines, capacity, task priorities, etc',
                departmentId: 3
            },
            {
                id: 1,
                title: 'Bin packing.',
                description: 'This is exactly what it says it is – the question is how to fit some number of objects of different volumes into some number of bins in a way that minimizes the number of bins. ',
                departmentId: 4
            },
            {
                id: 2,
                title: 'Angular 4',
                description: 'Declare new Roles class inherit  from BasePage.',
                departmentId: 4
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