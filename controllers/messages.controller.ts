import {Chats, Messages} from "../sequelize";
import {Op} from "sequelize";

export interface GetMessageInput{
    input: {
        chat_id: number,
    }
}

export interface MessageInput{
    input: {
        chat_id: number,
        role?: string,
        type?: string,
        text: string
    }
}

class MessagesController{
    async getMessages(input: GetMessageInput){
        let chat_id = await Chats.findAll({attributes: ['id'], where: {chat: input.input.chat_id}, raw: true})
        chat_id = chat_id[0].id
        return await Messages.findAll({where: {chat_id: chat_id}, raw: true})
    }
    async addMessage(input: MessageInput){
        let chat_id = await Chats.findAll({attributes: ['id'], where: {chat: input.input.chat_id}, raw: true})
        chat_id = chat_id[0].id
        let user_messages = await Messages.findAll({attributes: ['id'], where: {chat_id: chat_id}, limit: 3, order: [['id', 'DESC']], raw: true})
        user_messages = user_messages.map((message: any) => {return message.id})
        await Messages.destroy({where: {[Op.and]: {chat_id: chat_id, id: {[Op.not]: user_messages}}}, raw: true})
        return await Messages.create({...input.input, chat_id: chat_id}, {raw: true})
    }
}

export default new MessagesController()