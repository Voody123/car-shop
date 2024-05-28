import Image from 'next/image'
import Link from 'next/link'

export default function contacts() {
    return(
    <main className="flex h-full flex-col items-center justify-between z-1 font-mono">
   <div className='flex flex-inline items-center max-w-4xl p-5 justify-between z-50 mb-5'>
        <Link href="about"> <button className="py-2 px-4 ">О нас</button></Link>
        <Link href="Vitrina"> <button className=" py-2 px-4">Витрина</button></Link>
        <Link href="Home"> <button className="py-2 px-4 items-center text-4xl border-cyan-600 border-4 rounded-3xl  ">GREK AUTO</button></Link>
        <Link href="contacts"> <button className="py-2 px-4">Контакты</button></Link>
        <Link href="Uslugi"> <button className=" py-2 px-4">Услуги</button></Link>
    </div>
    <div className='flex justify-between w-3xl items-center z-10 mt-1 mb-2'>
        <h1 className="text-5xl">КАК НАС НАЙТИ?</h1>
    </div>
   
    <a href="https://yandex.ru/maps/?um=constructor%3A532e5f2b48aababb04150638335d76477f8c52350ec7149b1cf3a5bde037b708&amp;
    source=constructorStatic" target="_blank">
        <img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A532e5f2b48aababb04150638335d76477f8c52350ec7149b1cf3a5bde037b708&amp;
        width=500&amp;
        height=400&amp;
        lang=ru_RU" alt="" 
        className="border: 0;" />
    </a>
    <div className='flex justify-between w-3xl items-center z-10 mt-5'>
        <h1 className="text-5xl">КОНТАКТЫ</h1>
        
    </div>
    <div className='flex  justify-between w-2/5 text-3xl mt-7  '>
        <h1>Телефон:</h1>
        <h1 className='flex mr-'>+7-930-967-25-69</h1>
    </div>

    <div className='flex  justify-between w-2/5 text-3xl mt-2 '>
        <h1>Адрес:</h1>
        <h1>ул.2-й Почаевский проезд  д.2</h1>
    </div>

    <div className='flex  justify-between w-2/5 text-3xl mt-2 '>
        <h1>Почта:</h1>
        <h1>grekauto.official@gmail.com</h1>
    </div>
    <div className='flex justify-between w-full p-4 z-20 bg-gray-900 mt-5 '>
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