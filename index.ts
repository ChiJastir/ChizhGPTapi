import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import schema from './schema'
import root from './root'
const cors = require('cors')

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => {

})