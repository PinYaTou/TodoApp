import { nanoid } from "nanoid"
import userAvatar from './avatar/user.jpg'
export const Todos = [
    {
        id:'001',
        name:'吃饭',
        done:false,
        date:'',
        Detail:[
            {id:nanoid(),title:'3h Create Design'},
            {id:nanoid(),title:'2h JIRA Ticket '},
            {id:nanoid(),title:'1h Metting'}
        ]
    },
    {
        id:'002',
        name:'睡觉',
        done:false,
        date:'',
        Detail:[
            {id:nanoid(),title:'6h Create Design'},
            {id:nanoid(),title:'5h JIRA Ticket '},
            {id:nanoid(),title:'4h Metting'}
        ]
    },
    {
        id:'003',
        name:'打代码',
        done:false,
        date:'',
        Detail:[
            {id:nanoid(),title:'9h Create Design'},
            {id:nanoid(),title:'8h JIRA Ticket '},
            {id:nanoid(),title:'7h Metting'}
        ]
    },
  ]


export const Avatar = [
      {id:nanoid(),avatar:userAvatar},
      {id:nanoid(),avatar:userAvatar},
      {id:nanoid(),avatar:userAvatar}
  ]


export const TYPESDATA = [
    {
        id:nanoid(),
        title:'Todos',
        content:[
            {
                id:'001',
                name:'吃饭',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'3h Create Design'},
                    {id:nanoid(),title:'2h JIRA Ticket '},
                    {id:nanoid(),title:'1h Metting'}
                ]
            },
            {
                id:'002',
                name:'睡觉',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'6h Create Design'},
                    {id:nanoid(),title:'5h JIRA Ticket '},
                    {id:nanoid(),title:'4h Metting'}
                ]
            },
            {
                id:'003',
                name:'打代码',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'9h Create Design'},
                    {id:nanoid(),title:'8h JIRA Ticket '},
                    {id:nanoid(),title:'7h Metting'}
                ]
            },
          ]
    },
    {
        id:nanoid(),
        title:'Hobby',
        content:[
            {
                id:'001',
                name:'吃饭',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'3h Create Design'},
                    {id:nanoid(),title:'2h JIRA Ticket '},
                    {id:nanoid(),title:'1h Metting'}
                ]
            },
            {
                id:'002',
                name:'睡觉',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'6h Create Design'},
                    {id:nanoid(),title:'5h JIRA Ticket '},
                    {id:nanoid(),title:'4h Metting'}
                ]
            },
            {
                id:'003',
                name:'睡大觉',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'9h Create Design'},
                    {id:nanoid(),title:'8h JIRA Ticket '},
                    {id:nanoid(),title:'7h Metting'}
                ]
            },
          ]
    },
    {
        id:nanoid(),
        title:'Study',
        content:[
            {
                id:'001',
                name:'吃饭',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'3h Create Design'},
                    {id:nanoid(),title:'2h JIRA Ticket '},
                    {id:nanoid(),title:'1h Metting'}
                ]
            },
            {
                id:'002',
                name:'睡觉',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'6h Create Design'},
                    {id:nanoid(),title:'5h JIRA Ticket '},
                    {id:nanoid(),title:'4h Metting'}
                ]
            },
            {
                id:'003',
                name:'学习',
                done:false,
                date:'',
                Detail:[
                    {id:nanoid(),title:'9h Create Design'},
                    {id:nanoid(),title:'8h JIRA Ticket '},
                    {id:nanoid(),title:'7h Metting'}
                ]
            },
          ]
    }
]
  
