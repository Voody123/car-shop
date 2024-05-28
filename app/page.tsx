import Image from 'next/image'
import Link from 'next/link'



export default function Home() {

  return (
   
    <main className="flex h-full flex-col items-center justify-between z-1 font-mono">
      <div className='flex flex-inline items-center max-w-4xl p-5 justify-between z-50 mb-10'>
        <Link href="about"> <button className="py-2 px-4 ">О нас</button></Link>
        <Link href="Vitrina"> <button className=" py-2 px-4">Витрина</button></Link>
        <Link href="Home"> <button className="py-2 px-4 items-center text-4xl border-cyan-600 border-4 rounded-3xl  ">GREK AUTO</button></Link>
        <Link href="contacts"> <button className="py-2 px-4">Контакты</button></Link>
        <Link href="Uslugi"> <button className=" py-2 px-4">Услуги</button></Link>
    </div>
      <div className='w-full h-full  fixed z-10'>
            <Image
            src="/bg2.png"
            alt="bg"
            priority
            className='z-5 '
            layout='fill'
          />
        </div>


      <div className="flex justify-between w-full z-10 mt-5 ">
          <h1 className="text-3xl ml-40">GREK AUTO - НАШИ ЦЕНЫ,<br />КАК И АВТО - ЛУЧШИЕ</h1>
         <Link href="/about"> <button className="border border-white rounded py-2 px-4 mr-40">О нас</button></Link>
      </div>
      <div className='flex justify-between w-full z-10 mt-5 '>
      <h1 className="text-3xl ml-40">ВСЕ АВТОМОБИЛИ В ПРОДАЖЕ</h1>
      <Link href="Vitrina"> <button className="border border-white rounded py-2 px-4 mr-40">Все автомобили</button></Link>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left z-10 mt-5">
      
        <a
          href="https://www.avito.ru/moskva/avtomobili/bmw_m6_4.4_amt_2012_94_000_km_3485071281"
          className="flex flex-col items-center rounded-lg border border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Image
            src="/BMW.png"
            alt="BMW"
            width={150}
            height={150}
            priority
          />
          <h2 className={`mb-3 text-2xl font-semibold`}>
            BMW M6 2012
          </h2>
          <span className="text-lg">
          3.980.000
          </span>

          <span className="text-lg mt-3">
          4.4 AT 94.000 km
          </span>
        </a>

        <a
          href="https://www.avito.ru/tambov/avtomobili/audi_tt_2.0_amt_2010_220_000_km_3535751616"
          className="flex flex-col items-center rounded-lg ml-4 border border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image
            src="/TT.png"
            alt="AUDI TT"
            width={150}
            height={150}
            priority
          />
          <h2 className={`mb-3 text-2xl font-semibold`}>
          AUDI TT 2010
          </h2>
            <span className="text-lg">
          1.700.000
          </span>

          <span className="text-lg mt-3">
          2.0 AMT 220.000 km
          </span>
          
        </a>

        <a
          href="https://www.avito.ru/moskva/avtomobili/jaguar_f-type_5.0_at_2014_47_000_km_2428070391"
          className="flex flex-col items-center rounded-lg ml-4 border border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Jaga.png"
            alt="Jaguar F-Type"
            width={150}
            height={150}
            priority
          />
          <h2 className={`mb-3 text-1xl font-semibold`}>
           JAGUAR F-TYPE 2014
          </h2>
          <span className="text-lg">
          4.800.000
          </span>

          <span className="text-lg mt-3">
          5.0 AT 47.000 km
          </span>

        </a>

        <a
          href="https://www.avito.ru/moskva/avtomobili/bmw_3_seriya_2.0_at_2006_322_500_km_3635246298"
          className="flex flex-col items-center rounded-lg ml-4 border border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image
            src="/BMW3.png"
            alt="Jaguar F-Type"
            width={150}
            height={150}
            priority
          />
          <h2 className={`mb-3 text-2xl font-semibold`}>
            BMW 3 2006
          </h2>
          <span className="text-lg">
          708.000
          </span>
          <span className="text-lg mt-3">
          2.0 AT 322.500 km
          </span>

        </a>
      </div>
      <div className="flex justify-between w-full z-10 mt-10">
        <h1 className="text-3xl mt-4 ml-40">МЫ МОЖЕМ ВЫКУПИТЬ<br/>ТВОЙ АВТОМОБИЛЬ</h1>
        <Link href="Uslugi"> <button className="border border-white rounded py-2 px-4 p-10 mr-40">Услуги</button></Link>
        </div>
    
      <div className="flex justify-between w-full z-10 mt-5 ">
        <h1 className="text-3xl mt-4 ml-40 mb-5">ЗАИНТРЕСОВАЛО?<br/>СВЯЖИТЕСЬ С НАМИ</h1>
        <Link href="contacts"> <button className="border border-white rounded py-2 px-4 mr-40">Контакты</button></Link>
    
      </div>
      <div className='flex justify-between w-full z-10 bg-gray-950'>
        <span className='mt-2 ml-5'>
          GREK.AUTO
        </span>
        <span className='mt-2 mr-5'>
          Мы на связи с вами<br/>
          +7-930-967-25-69<br/>
        </span>
      </div>
    </main>
  )
}
