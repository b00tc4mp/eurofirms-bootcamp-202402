import CardDefault from '../components/CardDefault'
function Recurses() {
    const recursos = [
        { id: 1, title: 'Recurso 1', description: 'Descripción del recurso 1' },
        { id: 2, title: 'Recurso 2', description: 'Descripción del recurso 2' },
        { id: 3, title: 'Recurso 3', description: 'Descripción del recurso 3' },
        // Agrega más recursos si es necesario
    ]


    console.log('Home render')

    return <div className=" justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        <h1 className=" mt-14 font-bold text-2xl text-center  text-green-900 ">RECURSOS</h1>
        {recursos.map(recurso => (
            <div className=' object-center p-6'>
                <CardDefault key={recurso.id} title={recurso.title} description={recurso.description} />
            </div>
        ))}





    </div>
}

export default Recurses