import { config } from '../../config/index.js'
import mongoose from "mongoose";
import logger from "../../loggers/Log4jsLogger.js"

const init = async () => {
    try {
        mongoose.connect(config.DATABASE.mongo.url, {
            dbName: config.DATABASE.mongo.dbName
        })
        logger.info("🆗 Conectados a MongoDB")
    } catch (error) {
        logger.error("⛔ Error al conectarse a MongoDB")
    }
}

export const MongoDBService = {
    init,
}