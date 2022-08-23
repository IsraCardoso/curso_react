import { Router } from "express";

const routes = Router()

routes.get('/', (req, res, next)=> {
  return(res.status(200).json({testMessage:'asd'}))
})

routes.post('/createproduct', (req, res, next)=> {
  const name = req.body.name
  const price = req.body.price
  
  console.log(name, price)
  res.status(200).json({ message: `Produto ${name} criado com sucesso` })
})

export default routes