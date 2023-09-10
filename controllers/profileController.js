const {UserProfile} = require('../models/models')
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path');
const jwt = require('jsonwebtoken')

class ProfileController {
    async create(req, res, next) {
  try {
    const { userid, name, description } = req.body;
    

    const profileData = {
      userid,
      name,
      description
    };

    const profile = await UserProfile.create(profileData);
    return res.json(profile);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
}

    async getAll(req, res, next) {
        try {

            const profiles = await UserProfile.findAll()
            return res.json(profiles)

        } catch (e) {

            next(ApiError.badRequest(e.message))
            
        }
        
    }

    async getOne(req, res, next) {
        try {

            const {id}  = req.params
            const profile = await UserProfile.findAll({where:{userid:id}})
            return res.json(profile)

        } catch (e) {

            next(ApiError.badRequest(e.message))
            
        }
    }

    async editProfile(req, res, next) {
      try {
        const { id } = req.params;
        let updatedData = req.body; 
    
        try {
          const {  name, description } = req.body;
          let fileName = null;

          const existingProfile = await UserProfile.findOne({ where: { userid: id } });
          if (!existingProfile) {
            return res.status(404).json({ message: 'Профиль не найден' });
          }
    
          await existingProfile.update(updatedData);
    
          return res.json(existingProfile);
        } catch (e) {
          next(ApiError.badRequest(e.message));
        }
      } catch (e) {
        next(e);
      }
    }

}


module.exports = new ProfileController()
