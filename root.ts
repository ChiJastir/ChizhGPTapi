import ChatsController, {ChatInput} from "./controllers/chats.controller";
import MessagesController, {GetMessageInput, MessageInput} from "./controllers/messages.controller";

const root: unknown = {
    getChats: () => {
        return ChatsController.getChats().then(res => {return res})
    },
    initChat: (input: ChatInput) => {
        return ChatsController.initChat(input).then(res => {return res})
    },
    getMessages: (input: GetMessageInput) => {
        return MessagesController.getMessages(input).then(res => {return res})
    },
    addMessage: (input: MessageInput) => {
        return MessagesController.addMessage(input).then(res => {return res})
    },
}

export default root