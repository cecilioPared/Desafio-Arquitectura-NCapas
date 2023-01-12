let usuariosDao

switch (process.env.PERSISTENCIA) {
    case 'json':        
        const { default: UsuarioDaoArchivo } = await import('./usuarios/UsuariosDaoArchivo.js')        
        usuariosDao = new UsuarioDaoArchivo()
        break    
    case 'mongodb':        
        const { default: UsuariosDaoMongoDb } = await import('./usuarios/UsuariosDaoMongoDb.js')
        usuariosDao = new UsuariosDaoMongoDb()
        break
        
    default:        
        const { default: UsuariosDaoMem } = await import('./usuarios/UsuariosDaoMem.js')        
        usuariosDao = new UsuariosDaoMem()
}

export { usuariosDao }