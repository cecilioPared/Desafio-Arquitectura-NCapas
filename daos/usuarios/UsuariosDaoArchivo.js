import ContenedorArchivo from '../../contenedores/ContenedorArchivo.js'

class UsuariosDaoArchivo extends ContenedorArchivo {

    constructor(){
        super('usuarios.txt')
    }
}

export default UsuariosDaoArchivo