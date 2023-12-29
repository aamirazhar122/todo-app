import TodoList from '@/components/todo/TodoList'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='m-20'>
        <div className='text-center pb-5 pt-5 text-2xl font-semibold'>TODO LIST</div>
      <TodoList/>
      </div>
            </main>
  )
};
