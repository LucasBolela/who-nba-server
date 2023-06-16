import { Router } from 'express'
import { timezoneRoute } from './timezones'
import { authMiddleware } from '../middlewares/authMiddlewares'

export const routes = Router()

routes.use(timezoneRoute)
routes.use(authMiddleware)
