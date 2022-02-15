const CategoryModel = require('../models/Category')
const CategorySchema = require('../database/schemas/Category')
const CategoryRepository = require('../repositories/category')
module.exports = {
    ev: async()=>{
        try{
            const data = await CategoryRepository.list()
            const parsed = []
            data.forEach(category =>{
                parsed.push(new CategoryModel(
                    category.id,
                    category.title,
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
            const category = new CategoryRepository(null, data.title)
            await CategoryRepository.create(category.toInsertDBValues())
            return{ status: 201, data: 'Success creating'}
        }catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    get: async id => {
        try{
            const category = (await CategoryRepository.get(id))[0]
            if(!category)
            return{status: 404, data: 'Not found'}

            const parsed = new CategoryModel(
                category.id,
                category.tile,
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
            const category = new CategorySchema(data.id,data.title)
            await CategoryRepository.update(category.id, category.toUpdateDbValues())
            return { status: 200, data: 'Success updating' }

        }catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    delete: async id => {
        try {
            await CategoryRepository.delete(id)
            return { status: 200, data: 'Success deleting' }
        } catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    }
}