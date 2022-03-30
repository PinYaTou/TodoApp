import { nanoid } from "nanoid"
export const Todos = [
    {
        id:'001',
        name:'吃饭',
        done:false,
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
        Detail:[
            {id:nanoid(),title:'9h Create Design'},
            {id:nanoid(),title:'8h JIRA Ticket '},
            {id:nanoid(),title:'7h Metting'}
        ]
    },
  ]


  

