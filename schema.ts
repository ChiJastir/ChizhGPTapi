import {GraphQLSchema} from "graphql/type";

const {buildSchema} = require('graphql')

const schema: GraphQLSchema = buildSchema(`
    type Chat{
        id: ID
        chat_id: Float
    }
    
    input ChatInput{
        chat_id: Float!
    }
    
    type Query{
        getChats: [Chat]
    }
    
    type Mutation{
        initChat(input: ChatInput): Chat
    }
`)

export default schema