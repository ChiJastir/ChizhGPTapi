import ChatsController, {ChatInput} from "./controllers/chats.controller";
import MessagesController, {MessageInput} from "./controllers/messages.controller";

const root: unknown = {
    getChats: () => {
        return ChatsController.getChats().then(res => {return res})
    },
    initChat: (input: ChatInput) => {
        return ChatsController.initChat(input).then(res => {return res})
    },
    getMessages: () => {
        return MessagesController.getMessages().then(res => {return res})
    },
    addMessage: (input: MessageInput) => {
        return MessagesController.addMessage(input).then(res => {return res})
    },
}

export default root