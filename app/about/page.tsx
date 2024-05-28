import Image from 'next/image'
import Link from 'next/link'


export default function about() {
    return(
        <main className="flex flex-col items-center justify-between z-4 font-mono ">
            <div className='w-full h-full  fixed z-10'>
            <Image
            src="/bg2.png"
            alt="bg"
            priority
            className='z-5 '
            layout='fill'
          />
        </div>
        <div className='flex flex-inline items-center max-w-4xl p-5 justify-between z-50 mb-10'>
        <Link href="about"> <button className="py-2 px-4 ">О нас</button></Link>
        <Link href="Vitrina"> <button className=" py-2 px-4">Витрина</button></Link>
        <Link href="Home"> <button className="py-2 px-4 items-center text-4xl border-cyan-600 border-4 rounded-3xl  ">GREK AUTO</button></Link>
        <Link href="contacts"> <button className="py-2 px-4">Контакты</button></Link>
        <Link href="Uslugi"> <button className=" py-2 px-4">Услуги</button></Link>
    </div>
    <div className='w-full items-left z-10 p-4'>
        <h1 className="text-5xl ">О НАС</h1>
        <div className="text-3xl mt-4">
            <span>
                Автосалон GREK AUTO во<br/>
                Владимире - предлагает своим<br/>
                клиентам только честные и проверенные<br/>
                автомобили, а также выгодные условия по выкупу<br/>
                и комиссионной продаже.В нашем автосалоне<br/> 
                продаются автомобили с проверенной историей,<br/> 
                также мы готовы выкупить или взять на комиссию<br/>
                ваш автомобиль по самым выгодным условиям!</span>
        </div>
    </div>
    <div className='flex flex-col w-full mb-5 z-10 '>
        <h1 className='text-5xl flex flex-col justify-between items-center w-4xl mt-4'>ОТЗЫВЫ</h1>
    </div>
   
    <div className='flex mb-3 z-10'>
    <form name='myForm'  className="rounded-lg shadow-xl flex flex-col px-4 py-4 bg-white dark:bg-blue-500 justify-between">
      <label className="text-gray-500 font-light mt-4 dark:text-gray-50">Оставьте свой отзыв</label>
      <input type='text' name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></input>
      <div className="flex flex-row justify-start">
        <button className="px-10 mt-6 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
            Оставить отзыв 
        </button>
      </div>
      
    </form>
    </div>
    
    <div className='flex justify-between w-full p-4 z-20 bg-gray-900 '>
        <span className='ml-5'>
          GREK.AUTO
        </span>
        <span className='mr-5'>
          Мы на связи с вами<br/>
          +7-930-967-25-69<br/>
        </span>
      </div>
    </main>
    )

}