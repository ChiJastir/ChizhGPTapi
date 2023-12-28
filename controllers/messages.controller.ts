import {Chats, Messages} from "../sequelize";

export interface MessageInput{
    input: {
        chat_id: number,
        role?: string,
        type?: string,
        text: string
    }
}

class MessagesController{
    async getMessages(){
        return await Messages.findAll({raw: true})
    }
    async addMessage(input: MessageInput){
        let chat_id = await Chats.findAll({attributes: ['id'], where: {chat: input.input.chat_id}, raw: true})
        chat_id = chat_id[0].id
        return await Messages.create({...input.input, chat_id: chat_id}, {raw: true})
    }
}

export default new MessagesController()