const service = require('../service/map.service')

exports.popularity = async (req, res) => {
    const body = req.body
    const serverResponse = await service.popularity(
        body.userid,
        res
    )
}

exports.myLocation = async (req, res) => {
    const body = req.body
    const serverResponse = await service.myLocation(
        body.userid,
        body.latitude,
        body.longitude
    )
    
    res.json(serverResponse)
}

exports.location = async (req, res) => {
    const body = req.body
    const serverResponse = await service.location(
        body.pid
    )
    
    res.json(serverResponse)
}

exports.eta = async (req, res) => {
    const body = req.body
    const serverResponse = await service.eta(   
        body.start_latitude,
        body.start_longitude,
        body.destination_latitude,
        body.destination_longitude
    )
    
    res.json(serverResponse)
}