const { Router } = require('express')
const multer = require('multer')
const LivroController = require('./controllers/LivroController')
const uploadConfig = require('./config/upload')
const routes = new Router();

const upload = multer(uploadConfig)
routes.post('/', upload.single('image'), LivroController.store)

routes.get('/listalivro', LivroController.index)
//routes.get('/listalivro/:id', LivroController.show)

routes.delete('/listalivro/:id', LivroController.destroy)

module.exports = routes