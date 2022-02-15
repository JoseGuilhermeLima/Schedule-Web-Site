const ScheduleRepository = require('../repositories/schedule')
const ScheduleModel = require('../models/Schedule')
const ScheduleSchema = require('../database/schemas/Schedule')
module.exports = {
    list: async () => {
        try {
            const data = await ScheduleRepository.list()
            const parsed = []

            data.forEach(schedule => {
                parsed.push(new ScheduleModel(
                schedule.id,
                schedule.title,
                schedule.description,
                schedule.create_date,
                schedule.end_date,
                schedule.upload_date,
                schedule.published_date,
                schedule.email,
                schedule.website,
                schedule.phone,
                schedule.address,
                schedule.location_name,
                category.id,
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
        try {
            const schedule = new ScheduleSchema(null, data.title, data.description, data.date)
            await ScheduleRepository.create(schedule.toInsertDbValues())
            return { status: 201, data: 'Success creating' }
        } catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    get: async id => {
        try {
            const schedule = (await ScheduleRepository.get(id))[0]
            if (!schedule)
                return { status: 404, data: 'Not found' }

            const parsed = new ScheduleModel(
                schedule.id,
                schedule.title,
                schedule.description,
                schedule.create_date,
                schedule.end_date,
                schedule.upload_date,
                schedule.published_date,
                schedule.email,
                schedule.website,
                schedule.phone,
                schedule.address,
                schedule.location_name,
                category.id,
            )

            return { status: 200, data: parsed }
        }
        catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    update: async data => {
        try {
            const schedule = new ScheduleSchema(data.id, data.title, data.description, data.date)
            await ScheduleRepository.update(schedule.id, schedule.toUpdateDbValues())
            return { status: 200, data: 'Success updating' }
        } catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    },
    delete: async id => {
        try {
            await Repository.delete(id)
            return { status: 200, data: 'Success deleting' }
        } catch (e) {
            console.log(e);
            return { status: 500, data: e }
        }
    }
}