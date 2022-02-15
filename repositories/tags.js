const TagsSchema = require('../database/schemas/Tags')
const db = require('../database/config')

const table = TagsSchema.tableName
const fields = TagsSchema.fields

class TagsRepository{
    static async list(){
        const query = `select * from ${TagsSchema.tableName}`
        return await db.queryValues(query)
    }
    static async get(id) {
        const condition = `where id = ${id}`
        const query = `select * from ${TagsSchema.tableName} ${condition}`
        return await db.queryValues(query)
    }

    static async update(id, values) {
        const condition = `where id = ${id}`
        const query = `update ${TagsSchema.tableName} set ${values} ${condition}`
        return await db.queryValues(query)
    }

    static async delete(id) {
        const condition = `where id = ${id}`
        const query = `delete from ${TagsSchema.tableName} ${condition}`
        return await db.queryValues(query)
    }
}

module.exports = TagsRepository