const CategorySchema = require('../database/schemas/Category')
const db = require('../database/config')

const table = CategorySchema.tableName
const fields = CategorySchema.fields

class CategoryRepository{
    static async list(){
        const query = `select * from ${CategorySchema.tableName}`
        return await db.queryValues(query)
    }
    static async get(id) {
        const condition = `where id = ${id}`
        const query = `select * from ${CategorySchema.tableName} ${condition}`
        return await db.queryValues(query)
    }

    static async update(id, values) {
        const condition = `where id = ${id}`
        const query = `update ${CategorySchema.tableName} set ${values} ${condition}`
        return await db.queryValues(query)
    }

    static async delete(id) {
        const condition = `where id = ${id}`
        const query = `delete from ${CategorySchema.tableName} ${condition}`
        return await db.queryValues(query)
    }
}

module.exports = CategoryRepository