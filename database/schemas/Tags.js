module.exports = class Tags{
    constructor(id,title,icon){
        this.id = id
        this.title = title
        this.icon = icon

    }
    static tableName = 'category'
    static fields = `title, icon`
    toInsertDbValues() {
        return `'${this.title}', '${this.icon}'`
    }

    toUpdateDbValues() {
        return `'title=${this.title}',icon='${this.icon}'`
    }
}
