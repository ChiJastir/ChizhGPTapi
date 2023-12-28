import {GraphQLSchema} from "graphql/type";

const {buildSchema} = require('graphql')

const schema: GraphQLSchema = buildSchema(`
    type Chat{
        id: ID
        chat: Float
        first_name: String
        last_name: String
        user_name: String
    }
    
    input ChatInput{
        chat: Float!
        first_name: String!
        last_name: String
        user_name: String
    }
    
    type Message{
        id: ID
        chat_id: Int
        type: String
        role: String
        text: String
    }
    
    input MessageInput{
        chat_id: Int!
        type: String
        role: String
        text: String!
    }
    
    type Query{
        getChats: [Chat]
        getMessages: [Message]
    }
    
    type Mutation{
        initChat(input: ChatInput): Chat
        addMessage(input: MessageInput): Message
    }
`)

export default schema