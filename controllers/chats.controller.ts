import {Chats} from "../sequelize";

export interface ChatInput{
    input: {
        chat: number,
        first_name: string,
        last_name?: string,
        user_name?: string
    }
}

class ChatsController{
    async initChat(input: ChatInput){
        const searchExistsChat = await Chats.findAll({where: {chat: input.input.chat}, raw: true})
        if (!searchExistsChat[0]){
            return await Chats.create(input.input, {raw: true})
        } else {
            return await Chats.update(input.input, {where: {chat: input.input.chat}, raw: true})
        }
    }
    async getChats(){
        return await Chats.findAll({raw: true})
    }
}
export default new ChatsController()