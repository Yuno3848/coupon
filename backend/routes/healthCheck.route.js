import express, { Router } from 'express'
import healthCheck from '../controllers/healthCheck.controller.js'

const health = Router()

health.get('/check-database-state', healthCheck)

export default health
