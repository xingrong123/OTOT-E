import Redis from 'redis'
import { ormGetAllUsers } from './model/orm.js'

const redisClient = Redis.createClient()
await redisClient.connect()

const DEFAULT_EXPIRATION = 600



export async function getAllUsers(req, res) {
    try {
        let dataJson = {}
        let data = await redisClient.get('data')
        
        if (data === null) {
            dataJson = await ormGetAllUsers();
            await redisClient.setEx('data', DEFAULT_EXPIRATION, JSON.stringify(dataJson))
        } else {
            dataJson = JSON.parse(data)
        }
        
        return res.status(200).json({message: `Queried all users successfully!`, data: dataJson});
    } catch (err) {
        return res.status(500).json({message: 'Server error!'})
    }
}