module.exports = class Schedule {
    constructor(id, title, description, create_date,end_date,upload_date, published_date, email, website, phone, address,category_id, location_name) {
        this.id = id
        this.title = title
        this.description = description
        this.create_date = create_date
        this.end_date = end_date
        this.upload_date = upload_date
        this.published_date = published_date
        this.email = email
        this.website = website
        this.phone = phone
        this.address = address
        this.category_id = category_id
        this.location_name = location_name
    }
}