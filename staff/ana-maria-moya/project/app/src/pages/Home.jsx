
import Carousel from "../components/Carousel"
function Home() {

    console.log('Home render')

    return <div className="flex flex-col h-full p-4  ">
        <main>
            <h1 className=' mt-8 font-bold text-2xl text-center text-green-900'>HOME</h1>
            <Carousel />
            <h2 className=" mt-6 text-center text-green-800 font-black">SÍNDROME DE DANDY-WALKER </h2>
            <div className=" bg-teal-200 rounded-lg p-2 ">
            <p className=" mt-4 mb-10 text-center font-semibold">Manuel es un niño de tres años con una enfermedad rara denominada Síndrome de Dandy -Walker, que consiste en que el cerebelo no está totalmente desarrollado y tiene una estructura diferente. Todo ello conlleva diversas dificultades como pobre coordinación de movimientos, torpeza motora y espasticidad, hipersensibilidad al tacto, alteraciones en el desarrollo del lenguaje, hiperactividad, epilepsia y rasgos dismorficos. Esta enfermedad ha sido posiblemente causada por una mutación del gen RAC 1 que ha hecho que Manuel naciera con una cardiopatia congénita. Y digo posiblemente porque al ser una enfermedad rara y existir muy pocos casos en el mundo, no hay muchas investigaciones sobre ella a  día de hoy. Pero lo que más caracteriza a Manuel no son todas estas patologías o dificultades que presenta, sino su gran sonrisa, su simpatia, su caracter cariñoso, y que como aquí decimos es completo, le gustan y disfruta de todas las fiestas!!</p>
            </div>

        </main>


    </div>
}

export default Home