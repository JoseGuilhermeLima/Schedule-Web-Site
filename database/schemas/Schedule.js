module.exports = class Schedule {
    constructor(id, title, description, date) {
        this.id = id
        this.title = title
        this.description = description
        this.date = date
    }

    static tableName = 'Schedule'
    static fields = `title, description, date`

    toInsertDbValues() {
        return `'${this.title}', '${this.description}', '${this.date}'`
    }

    toUpdateDbValues() {
        return `title='${this.title}', description='${this.description}', date='${this.date}'`
    }
}