import ApiResponse from '../utils/ApiResponse.js'
import asyncHandler from '../utils/asyncHandler.js'

const healthCheck = asyncHandler(async (req, res) => {
  console.log('Database health check')
  return res.status(200).json(new ApiResponse(200, 'server is connected'))
})

export default healthCheck
