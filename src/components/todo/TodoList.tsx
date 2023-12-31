'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'

type Props = {}

export default function TodoList({}: Props) {
    const [todoItem, setTodoItem] = useState('')
    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodoItem(e.currentTarget.value)
    }
    const handleAddTodo = async ()=>{
        const response = await fetch("/api/todo",{
            method: 'POST',
            body : JSON.stringify({todoItem}),
        });
        const res = await response.json()
            console.log(res);
    };
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[60%] bg-gray-200 shadow-md rounded-md p-7'>
           <div className='flex justify-center items-end gap-6'>
           <div className='w-[70%]'>
               
                <Input placeholder='Enter Todo Here' 
                value={todoItem} 
                onChange={(e)=>handleChangeInput(e)}/>
            </div>
            <div className='flex'>
            <Button onClick={handleAddTodo}>
                <PlusIcon size={18} />
                Add Todo
            </Button>
            </div>
           </div>

        </div>
    </div>
  )
}