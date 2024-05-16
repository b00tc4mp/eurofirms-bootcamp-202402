import logic from "../logic";

function Careers({ refreshStamp }){

    console.log("refreshStamp", refreshStamp);

    const [careers, setCareers] = useState([]);

    const refreshScreen = () => {

        try{
            logic.retrieveCareers()
                .then(careers => setCareers(careers))
                .catch(error => {

                    console.error(error);
                    alert(error.message);
            })
        }
        catch(error){
    
            console.error(error);
            alert(error.message);
        }
    }
    useEffect(() => {

        refreshScreen();
    }, [refreshStamp])

    const handleDeleteCareer = () => {

        refreshScreen();
    }

    const handleUpdateCareer = () => {

        refreshScreen();
    }

    console.log("Career render");
    
    return (
        <section id="">
            <h2 className="p-10 font-semibold text-3xl">Perfil laboral</h2>

            <div id="">
                { careers.map(career => <Career key={ career.id } career={ career } onCareerDeleted={handleDeleteCareer} onCareerUpdate={handleUpdateCareer}/>)}
            </div>
        </section>
    )
}

export default Careers;