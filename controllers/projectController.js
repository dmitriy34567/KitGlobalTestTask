const {Project} = require('../models/models')
const ApiError = require('../error/ApiError');

class ProjectController {
    async create(req, res, next) {
        try {
            const {authorid, name, description } = req.body
            const project = await Project.create( {authorid, name, description })
            return res.json(project)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res, next) {
        try {

            const project = await Project.findAll()
            return res.json(project)

        } catch (e) {

            next(ApiError.badRequest(e.message))

        }
        
    }

    
    async getOne(req, res, next) {
        try {

            const {id}  = req.params
            const project = await Project.findAll({where:{id:id}})
            return res.json(project)

        } catch (e) {

            next(ApiError.badRequest(e.message))
            
        }
    }

    async getByAuthor(req, res, next) {
        try {

            const {id}  = req.params
            const project = await Project.findAll({where:{authorid:id}})
            return res.json(project)

        } catch (e) {

            next(ApiError.badRequest(e.message))
            
        }
    }

    async editProject(req, res, next) {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const existingProject = await Project.findOne({ where: { id: id } });
        
            if (!existingProject) {
              return res.status(404).json({ message: 'Запит не знайдено' });
            }
            await existingProject.update(updatedData);
        
            return res.json(existingProject);
          } catch (e) {
            next(ApiError.badRequest(e.message));
          }
        }

        async deleteProject(req, res, next) {
            try {
                const { id } = req.params;
                
            
                const existingProject = await Project.findOne({ where: { id: id } });
            
                if (!existingProject) {
                  return res.status(404).json({ message: 'запит не знайдено' });
                }
            
                await existingProject.destroy();
            
                return res.json(existingProject);
              } catch (e) {
                next(ApiError.badRequest(e.message));
              }
            }


}

module.exports = new ProjectController()

