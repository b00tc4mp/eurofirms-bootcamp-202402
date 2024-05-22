
import Carousel from "../components/Carousel"
function Home() {

    console.log('Home render')

    return <div className="flex flex-col h-full   ">
        <main>
            <h1 className=' mt-10 font-bold text-2xl text-center text-green-900'>HOME</h1>
            <Carousel />
            <h2 className=" mt-6 text-center text-green-800">SÍNDROME DE DANDY-WALKER </h2>
            <p className=" mt-4 text-center">El síndrome de Dandy –Walker es una condición de anomalías cerebrales, en el que el cerebelo, la parte del cerebro responsable de la coordinación de movimientos esta malformada.

                Normalmente la parte central del cerebelo, llamado vermis esta ausente o no se desarrollo completamente.</p>


        </main>


    </div>
}

export default Home