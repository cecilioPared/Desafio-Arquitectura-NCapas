import {
    usuariosDao as usuariosApi    
  } from '../daos/index.js'

class UsuarioService {
      constructor() {}
      async obtenerPorCriterio(query = {}) {
            const user = await usuariosApi.obtenerPorCriterio(query)
            return user;
      }

      async crear(data) {
            const usuario = await usuariosApi.crear(data);
            return usuario;
      }
      async obtenerPorId(idusuario) {
            const usuario = await usuariosApi.obtenerPorId(idusuario)
            return usuario;
      }
      async logginUser(req, res) {
            if (!req.isAuthenticated()) {
                  res.render('login');
            } else {
                  const { user } = req;
                  let data = { user: user.email };
                  res.render('home', data);
            }
      }
      async logoutUser(req, res) {
            const { username } = req.body;
            req.logout((error) => {
                  if (!error) {
                        let data = { user: username };
                        res.render('logout', data);
                  } else {
                        logger.error(
                              `Ruta ${req.originalUrl} metodo POST, ${error.message}`
                        );
                        res.send('Ocurrio un  error', error.message);
                  }
            });
      }
}
export default new UsuarioService();