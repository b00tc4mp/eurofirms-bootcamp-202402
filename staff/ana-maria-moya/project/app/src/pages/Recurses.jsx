import CardDefault from '../components/CardDefault'
function Recurses() {
    const recursos = [
        { id: 1, image:'terapia-ocupacional.jpg', title: 'Terapia Ocupacional', description: 'Mejora y regula el nivel sensorial de Manuel, se modulan sus registros tactiles, orales, propioceptivos y vestibulares; mejora su nivel de atención; la intengración bilateral, la motricidad fina y asi mejora el desempeño de su vida diaria.' },
        { id: 2, image:'logopedia.jpg', title: 'Logopedia', description: 'Trabaja la motricidad facial(con la finalidad de conseguir un buen tono muscular y una funcionalidad correcta de los organos implicados en la deglución de alimentos),la deglución(en la cual trabaja el cambio de textura de alimentos y el cambio de temperatura de estos), y en el habla(Manuel tiene un retrato significaivo en la adquisición del habla, y mediante el juego y juegos sociales, se ha conseguido una mejora notable).' },
        { id: 3, image:'haloterapia.jpg',title: 'Haloterapia', description: 'Manuel visita periodicamente unas cuevas de sal donde caen unas microparticulas salinas que llegan a los pulmones  y tienen efecto antiinfamatorio y muculotico para mejorar la respiración, expulsar mocos y prevenir bronquitis.' },
        { id: 4, image:'matronatación.jpg', title: 'Matronatación', description: 'En el contacto con el agua, Manuel trabaja la motricidad, la coordinación de movimientos, progesa en su masa moscular y en el control del equilibrio.' },
        { id: 5, image:'fisioterapia.jpg', title: 'Fisioterapia', description: 'Trabaja el equilibrio y la cordinación, ejercicios bimanueales(como cortar con tijeras y recepción de una pelota); practican tambien actividades de la vida diaria como el vestido y desvestido, entre otras muchas cosas; en sus clases de fisioterapia tambien tabajan su atención para que sea conciente de sue entorno y sus caidas se reduzcan.' },
        { id: 6, image:'neuropsicologia.jpg',title: 'Neuropsicología', description: 'Se trabaja reeducación terapéutica mediante estimulación cognitiva de los procesos crebrales (procesos atencionales, procesos inhibitorios, tiempos de espera, flexibilidad cognitiva, procesos de evocaciónmnésica, y manejo conductual). ' },
       
    ]


    console.log('Home render')

    return <div className=" justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        <h1 className=" mt-14 font-bold text-2xl text-center  text-green-900 ">RECURSOS</h1>
        {recursos.map(recurso => (
            <div className=' object-center p-6'>
                <CardDefault key={recurso.id} image={recurso.image} title={recurso.title} description={recurso.description} />
            </div>
        ))}





    </div>
}

export default Recurses