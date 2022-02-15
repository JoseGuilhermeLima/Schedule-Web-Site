const ScheduleSchema = require('../database/schemas/Schedule')
const db = require('../database/config')

const table = ScheduleSchema.tableName
const fields = ScheduleSchema.fields

class ScheduleRepository {
    static async list() {
        const query = `select * from ${ScheduleSchema.tableName}`
        return await db.queryValues(query)
    }

    static async create(values) {
        const query = `insert into ${ScheduleSchema.tableName} (${fields}) values (${values})`
        return await db.queryValues(query)
    }

    static async get(id) {
        const condition = `where id = ${id}`
        const query = `select * from ${ScheduleSchema.tableName} ${condition}`
        return await db.queryValues(query)
    }

    static async update(id, values) {
        const condition = `where id = ${id}`
        const query = `update ${ScheduleSchema.tableName} set ${values} ${condition}`
        return await db.queryValues(query)
    }

    static async delete(id) {
        const condition = `where id = ${id}`
        const query = `delete from ${ScheduleSchema.tableName} ${condition}`
        return await db.queryValues(query)
    }
}

module.exports = ScheduleRepository