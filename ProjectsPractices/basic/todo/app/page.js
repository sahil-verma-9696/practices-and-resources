"use client"

import React, { useState } from 'react'

const page = () => {

  const [title, setTitile] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  let renderTask = <h1>no task available  </h1>

  const submitHandler = (event) => {
    event.preventDefault()
    setDesc(""); setTitile("");
    setMainTask([...mainTask, { title, desc }])
    console.log(mainTask)
  }

  const deleteHandler = (index)=>{
    let copyTask = [...mainTask];
    let deletedTask = copyTask.splice(index,1);
    setMainTask(copyTask);
    console.log(index)
  }

  if (mainTask.length > 0) {
    renderTask = mainTask.map((data, index) => {

      console.log(data + " : " + index);

      return (
        <li key={index} className='flex items-center justify-between'>
          <div className='flex justify-evenly mb-5 w-2/3 '>
            task : <h1 className='font-bold'>{data.title}</h1>
            description : <h2>{data.desc}</h2>
          </div>
          <button 
          onClick={
            (index)=>{
              deleteHandler(index)
            }
          }
          className='bg-black text-white font-extrabold rounded p-2'>❌ Delete ❌</button>
        </li>
      )

    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Kaju todo</h1>

      <form onSubmit={submitHandler}>

        <input type="text"
          placeholder='Enter the task'
          className="bg-white text-2xl border-black-800 border-4 m-8 px-4 py-2"
          value={title}
          onChange={(event) => {
            setTitile(event.target.value)
          }}
        />

        <input type="text"
          placeholder='Enter the description'
          className="bg-white text-2xl border-black-800 border-4 m-8 px-4 py-2"
          value={desc}
          onChange={(event) => {
            setDesc(event.target.value)
          }}
        />

        <button
          className='
        bg-black text-white px-3 py-3 text-2xl rounded-2xl
        '
        >😊 Add 😊</button>
      </form>

      <hr />

      <div
        className='bg-purple p-8'
      >

        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
