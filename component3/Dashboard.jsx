import React from 'react'
import DropFileInput from './drop_file_input/DropFileInput'


export default function Dashboard() {

  const onFileChange = (files)=>{
      console.log(files);
  }

  return (
    <div className='dashboard p-5 mt-5'>
      <div className="box w-100 ">
        <h2 className='header'>删除文件输入</h2>
        <DropFileInput onFileChange={(files)=>onFileChange(files)} />
      </div>
      </div>
  )
}
