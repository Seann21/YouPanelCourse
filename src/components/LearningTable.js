import { Space, Table, Tag } from 'antd'
import React from 'react'

function LearningTable(){
    const columns = [
        {
        title: "Course name",
        dataIndex: "courseName",
        key: "courseName",
        },
        {
        title: "Duration",
        dataIndex: "duration",
        key: "duration",
        },
        {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render:(_,text)=><Tag color={text.status === "completed"? "green" : "yellow"}>{text.status}</Tag>,   
        },
        {
            title: "Action",
            key: "action",
            render:()=>(
                <Space size='middle'>
                    <button type="button" class="text-white bg-gradient-to-r from-indigo-600 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View</button>
                    <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                </Space>
            )
        }
];    
    const data = [
        {
            id:"1",
            courseName: "Front end Programming Guide",
            duration: "5 hours",
            level: "Advanced",
            status: "completed"
        },
        {
            id:"2",
            courseName: "Back end Programming Guide",
            duration: "3 hours",
            level: "Beginner",
            status: "pending"
        },
        {
            id:"3",
            courseName: "Astro Js Best Practices",
            duration: "7 hours",
            level: "Advanced",
            status: "pending"
        },
        {
            id:"4",
            courseName: "Next js Typescript",
            duration: "7 hours",
            level: "Advanced",
            status: "completed"
        },
        {
            id:"5",
            courseName: "Machine Learning",
            duration: "10 hours",
            level: "Advanced",
            status: "pending"
        },
        {
            id:"6",
            courseName: "Science in Programming",
            duration: "5 hours",
            level: "Beginner",
            status: "completed"
        },
        {
            id:"7",
            courseName: "Data Structure",
            duration: "2 hours",
            level: "Beginner",
            status: "completed"
        },
    ];
    return <Table className='mt-4' columns={columns} dataSource={data} />
}

export default LearningTable;