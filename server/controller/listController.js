const {WatchListId} = require('../models/index')
class ListController {
    static async addWatchList(req, res, next) {
        try {
        const {WatchList, MovieId} = req.body

        const newWatch = await WatchListId.create({
            WatchListId: WatchList,
            MovieId
        })

        res.status(201).json({
            wathclist: newWatch.WatchListId,
            Movie: newWatch.MovieId
        })
        } catch (error) {
            next(error)
        }
    }
}

export default ListController