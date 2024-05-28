import Image from 'next/image'
import Link from 'next/link'

export default function contacts() {
    return(
    <main className="flex h-full flex-col items-center justify-between z-1 font-mono">
   <div className='flex flex-inline items-center max-w-4xl p-5 justify-between z-50 mb-5'>
        <Link href="Home"> <button className="py-2 px-4 items-center text-4xl border-cyan-600 border-4 rounded-3xl  ">GREK AUTO</button></Link>
    </div>
    <div className='flex justify-between w-3xl items-center z-10 mt-1 mb-2'>
        <h1 className="text-5xl">Запись на осмотр</h1>
    </div>
    <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
      <h1 className="text-2xl font-bold dark:text-gray-50">Заполните данные</h1>

      <label for="fullname" class="text-gray-500 font-light mt-8 dark:text-gray-50">ФИО<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label for="email" class="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label for="subject" class="text-gray-500 font-light mt-4 dark:text-gray-50">Номер телефона<span className="text-red-500">*</span></label>
      <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label for="message" class="text-gray-500 font-light mt-4 dark:text-gray-50">Машина для осмотра<span className="text-red-500">*</span></label>
      <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Записаться
        </button>
      </div>
    </form>
    </main>
    )
}