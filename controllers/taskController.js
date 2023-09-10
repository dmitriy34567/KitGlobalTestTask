const {Task} = require('../models/models')
const ApiError = require('../error/ApiError');

class TaskController {
    async create(req, res, next) {
        try {

            const {authorid, projectid, name, description, status } = req.body

            const task = await Task.create({authorid, projectid, name, description, status } )
            return res.json(task)

        } catch (e) {

            next(ApiError.badRequest(e.message))

        }
        
    }

    async getAll(req, res, next) {
        try {

            const task = await Task.findAll()
            return res.json(task)

        } catch (e) {

            next(ApiError.badRequest(e.message))

        }
        
    }

    
    async getOne(req, res, next) {
        try {

            const {id}  = req.params
            const task = await Task.findAll({where:{id:id}})
            return res.json(task)

        } catch (e) {

            next(ApiError.badRequest(e.message))
            
        }
    }

    async getByAuthor(req, res, next) {
        try {

            const {id}  = req.params
            const task = await Task.findAll({where:{authorid:id}})
            return res.json(task)

        } catch (e) {

            next(ApiError.badRequest(e.message))
            
        }
    }

    async editTask(req, res, next) {
        try {
            const { id } = req.params;
            const updatedData = req.body;
        
            const existingTask = await Task.findOne({ where: { id: id } });
        
            if (!existingTask) {
              return res.status(404).json({ message: 'запит не знайдено' });
            }
        
            // Обновляем найденную запись
            await existingTask.update(updatedData);
        
            return res.json(existingTask);
          } catch (e) {
            next(ApiError.badRequest(e.message));
          }
        }

        async deleteTask(req, res, next) {
            try {
                const { id } = req.params;
                
            
                const existingTask = await Task.findOne({ where: { id: id } });
            
                if (!existingTask) {
                  return res.status(404).json({ message: 'запит не знайдено' });
                }
            
                await existingTask.destroy();
            
                return res.json(existingTask);
              } catch (e) {
                next(ApiError.badRequest(e.message));
              }
            }


}

module.exports = new TaskController()

