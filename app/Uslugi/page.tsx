import Image from 'next/image'
import Link from 'next/link'

export default function Uslugi() {
    return(
        <main className="flex flex-col justify-between z-0 font-mono">
    <div className='flex items-center justify-center z-50 mb-10 mt-5'>
        <Link href="about"> <button className="py-2 px-4 ">О нас</button></Link>
        <Link href="Vitrina"> <button className=" py-2 px-4">Витрина</button></Link>
        <Link href="Home"> <button className="py-2 px-4 items-center text-4xl  border-cyan-600 border-4 rounded-3xl ">GREK AUTO</button></Link>
        <Link href="contacts"> <button className="py-2 px-4">Контакты</button></Link>
        <Link href="Uslugi"> <button className=" py-2 px-4">Услуги</button></Link>
    </div>
    
    <div className='flex flex-col justify-between items-center w-4xl z-10 mt-5'>
        <h1 className='text-3xl'>УСЛУГИ</h1>
    </div>

    <div className='flex-col justify-between ml-5 mt-10 z-10'>
        <div className='z-0 h-1/2'>
        <Image
            src="/uslug.png"
            alt="bg"
            height={500}
            width={500}
            className='flex flex-col z-0 absolute right-0 left-auto mr-5 h-4/5 w-auto '
          />
    
        </div>

        <h1 className='text-3xl mb-2 text-sky-700 mt-2'>01 ПРОДАЖА АВТОМОБИЛЕЙ</h1> 
        <span className='text-xl'>
        Мы готовы предложить вам новые автомобили и<br/>
        автомобили с пробегом с проверенной историей<br/>
        </span> 
        <h1 className='text-3xl mb-2 text-sky-700 mt-2'>02 ВЫКУП АВТОМОБИЛЕЙ</h1> 
    <span className='text-xl'>
        Мы готовы предложить вам новые автомобили и<br/>
        автомобили с пробегом с проверенной историей<br/>
        </span> 
    

    
        <h1 className='text-3xl mb-2 mt-2 text-sky-700'>03 КОМИСИОНАЯ ПРОДАЖДА</h1> 
    
    
    <span className='text-xl'>
    Мы с радостью поможем продать ваш автомобиль<br/>
    дорого, быстро и безопасно!<br/>
    Комиссия составит от 3% до 5%<br/>
    после продажи вашего авто.<br/>
        </span> 
    
        <h1 className='text-3xl mb-2 text-sky-700 mt-2'>04 ПОДБОР АВТОМОБИЛЕЙ</h1> 
    
    
    <span className='text-xl'>
    Мы профессионально занимаемся автоподбором.<br/>
    Подбираем только правильные, честные<br/>
    автомобили.<br/>
    Проверяем автомобили не только технически, но<br/> 
    и обязательно юридически!<br/>
    Услуга автоподбора действует на территории<br/> 
    Владимира и Владимирской области, <br/>
        </span> 
    
    </div>
    <div className='flex justify-between w-full z-20 bg-gray-900 mt-10 '>
        <span className='mt-5 ml-5'>
          GREK.AUTO
        </span>
        <span className='mt-5 mr-5'>
          Мы на связи с вами<br/>
          +7-930-967-25-69<br/>
        </span>
      </div>
    </main>
    )
}