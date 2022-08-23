import Express from 'express'
import routes from './rotaProdutos.js'

const app = Express()

app.use(routes)

app.listen(6969, () => (console.log('API rodando ok')))