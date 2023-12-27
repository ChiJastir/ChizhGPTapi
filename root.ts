import ChatsController from "./controllers/chats.controller";

interface IChats{
    id: string,
    chat_id: number
}

interface ChatInput{
    input: {
        chat_id: number
    }
}

const root: unknown = {
    getChats: () => {
        return ChatsController.getChats().then(res => {return res.rows})
    },
    initChat: ({input}: ChatInput) => {
        return ChatsController.initChat(input.chat_id).then(res => {return res.rows[0]})
    }
}

export default root