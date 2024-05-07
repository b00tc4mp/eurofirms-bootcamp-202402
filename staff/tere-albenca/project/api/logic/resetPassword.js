import { User } from '../data/index.js'
import { errors, validate } from 'com'

const { DuplicityError, SystemError, MatchError } = errors

async function resetPassword(name, surname, email, newPassword, repeatPassword) {
    // Verificar si las contraseñas coinciden
    validate.name(name)
    validate.surname(surname)
    validate.email(email)
    validate.password(newPassword)
    if (newPassword !== repeatPassword) {
        throw new MatchError('Passwords do not match');
    }

    try {
        // Buscar el usuario por su correo electrónico
        let user = await User.findOne({ email });

        // Si no se encuentra el usuario, lanzar un error de duplicidad
        if (!user) {
            throw new DuplicityError('User not found');
        }

        // Actualizar la contraseña del usuario
        user.password = newPassword;

        // Guardar los cambios en la base de datos
        await user.save();

        // Devolver un mensaje de éxito
        return 'Password reset successfully';
    } catch (error) {
        // Capturar y lanzar cualquier error inesperado
        throw new SystemError(error.message);
    }
}

export default resetPassword