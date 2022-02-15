module.exports = class Category{
    constructor(id,title){
        this.id = id
        this.title = this.title
    }
    static tableName = 'category'
    static fields = `title`
    toInsertDbValues() {
        return `'${this.title}'`
    }

    toUpdateDbValues() {
        return `'title=${this.title}'`
    }
}
