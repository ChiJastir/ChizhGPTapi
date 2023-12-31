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
        chat_id: Float!
        type: String
        role: String
        text: String!
    }
    
    input GetMessageInput{
        chat_id: Float!
    }
    
    type Query{
        getChats: [Chat]
        getMessages(input: GetMessageInput): [Message]
    }
    
    type Mutation{
        initChat(input: ChatInput): Chat
        addMessage(input: MessageInput): Message
    }
`)

export default schema