const TagsModel = require('../models/Tags')
const TagsSchema = require('../database/schemas/Tags')
const TagsRepository = require('../repositories/tags')
module.exports = {
    ev: async()=>{
        try{
            const data = await TagsRepository.list()
            const parsed = []
            data.forEach(tags =>{
                parsed.push(new TagsModel(
                    tags.id,
                    tags.title,
                    tags.icon,
                ))
            })
            return { status: 200, data: parsed }
        }
        catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    create: async data => {
        try{
            const tags = new TagsRepository(null, data.title)
            await TagsRepository.create(tags.toInsertDBValues())
            return{ status: 201, data: 'Success creating'}
        }catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    get: async id => {
        try{
            const Tags = (await TagsRepository.get(id))[0]
            if(!tags)
            return{status: 404, data: 'Not found'}

            const parsed = new TagsModel(
                tags.id,
                tags.tile,
                tags.icon,
            )
            return { status: 200, data: parsed }
        }
        catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    update: async data =>{
        try{
            const tags= new TagsSchema(data.id,data.title)
            await TagsRepository.update(tags.id, tags.toUpdateDbValues())
            return { status: 200, data: 'Success updating' }

        }catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    delete: async id => {
        try {
            await TagsRepository.delete(id)
            return { status: 200, data: 'Success deleting' }
        } catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    }
}