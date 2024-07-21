import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { BankOutlined} from "@ant-design/icons"
import { Avatar } from 'antd'

const AppHeader = () => {
  return (
  <Header className='!bg-white border-b border-[#b7e3fa] flex items-center justify-between sticky top-0 z-10'>
    <div className='flex items-center gap-2 '>
        <BankOutlined className='text-3xl' />
        <div className='text-2xl font-semibold bg-gradient-to-r from-red-500 to-indigo-700 bg-clip-text text-transparent'>YouPanel Course</div>
    </div>
    <div className='flex items-center gap-2'>
        <Avatar size={40} src='/avatar.png' />
        <div>Mas Hiro</div> 
        </div>
  </Header>

  );
}

export default AppHeader