const Livro = require('../models/Livros')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = {
  // Lista os Livros do mais atual para o mais antigo
  async index(req, res) {
    const { page = 1 } = req.query;
    const livro = await Livro.paginate({}, { page , limit: 5, sort: {createdAt: -1}});
    return res.json(livro)
  },
  
  // async show(req, res) {
  //   const { id } = req.params;
  //   const livro = await Livro.findById(id);
  //   return res.json(livro);
  // },

  // gravar os livros
  async store(req, res) {
    console.warn(req.File);
    const { filename: image} = req.file

    const [name, ext] = image.split('.')
    const fileName = `${name}.jpg`

    await sharp(req.file.path)
      .resize(100)
      .jpeg({ quality: 70})
      .toFile(
        path.resolve(req.file.destination, 
          'resizes', fileName)
      )

    fs.unlinkSync(req.file.path)

    const { autor, nome, pagina ,editora, isbn } = req.body;
    
    if(nome.length <= 0 || autor.length <= 0 || editora.length <= 0 || isbn.length <= 0 || pagina < 0 || pagina > 9999){
      return res.status(400).send();
    }

    console.log(image);
    req.body.image = fileName;
    const livro = await Livro.create(req.body)
    return res.json(livro)
    //req.io.emit('livro', livro)
  },
  
  // Exclui o livro
  async destroy(req, res) {
    const { id } = req.params
    await Livro.findByIdAndRemove(id)
    //await Livro.deleteMany();
    return res.status(204).send()
  },
}

