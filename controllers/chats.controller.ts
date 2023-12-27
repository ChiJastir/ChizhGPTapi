import pool from '../db'

class ChatsController{
    async initChat(input: number){
        return await pool.query(`INSERT INTO chats (chat_id) VALUES (${input}) RETURNING id, chat_id`)
    }
    async getChats(){
        return await pool.query(`SELECT * FROM "public"."chats";`)
    }
}
export default new ChatsController()