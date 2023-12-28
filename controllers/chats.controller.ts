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
        return await Chats.create(input.input, {raw: true})
    }
    async getChats(){
        return await Chats.findAll({raw: true})
    }
}
export default new ChatsController()