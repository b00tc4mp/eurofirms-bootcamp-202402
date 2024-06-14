function Donate() {

  console.log('Home render')

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="mt-10 font-bold text-2xl text-center text-green-900 ">DONACIONES</h1>
      <h2 className=" p-4 font-bold text-center text-lg md:text-xl lg:text-2xl max-w-md px-4 lg:px-0">
        Ayudemos a Manuel para que la investigación del Síndrome Dandy-Walker siga creciendo.
        Un pequeño donativo puede mejorar el futuro de Manuel. Si tienes alguna duda, solo tienes que contactarme en el link de WhatsApp.
      <h3>❤MUCHAS GRACIAS❤</h3>
      </h2>
      <div className="mt-4 lg:mt-12">
        <img src="bizum-img.jpg" className="mx-auto h-auto md:max-w-xs lg:max-w-lg xl:max-w-xl" alt="Bizum" />
      </div>
    </div>
  );
}

export default Donate