import { useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();
        const form = event.target
        emailjs.sendForm(
            import.meta.env.VITE_APP_SERVICE_ID, 
            import.meta.env.VITE_APP_TEMPLATE_ID, 
            form, 
            import.meta.env.VITE_APP_PUBLIC_KEY
        ).then((result) => {
            alert('Message sent successfully...');
            console.log(result.text);
           
            form.reset() // Limpiar los campos del formulario.
        }, (error) => {
            console.error('Error sending email:', error);
        });
    };

    return (
        <div className="flex flex-col height-full mt-10">
            <h1 className="font-bold text-2xl text-center text-green-900">CONTACTO</h1>
            <div className="object-left p-8 my-8">
                <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                name="from_name"
                                id="from_name"
                                type="text"
                                placeholder="Jane"
                               
                            />
                            <p className="text-green-500 text-xs italic">Please fill out this field.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                E-mail
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="from_email"
                                id="from_email"
                                type="email"
                                
                            />
                            <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                                Message
                            </label>
                            <textarea
                                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                name="message"
                                id="message"
                            ></textarea>
                            <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                Enviar
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact