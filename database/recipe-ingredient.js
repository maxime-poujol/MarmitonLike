const axios = require('axios');

const database = require("./requestDatabase");
const tableName = "recipe-ingredient"

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res) {
    database.selectAll(tableName)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.status(500)
            res.json(error);
        });
}

/**
 *
 * @param req
 * @param res
 */
function selectOneById(req, res) {
    database.selectOneById(tableName, req.query.id)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.status(500)
            res.json(error);
        })
}

/**
 *
 * @param req
 * @param res
 */
function createObj(req, res) {
    database.createObj(tableName, req.body)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}

/**
 *
 * @param req
 * @param res
 */
function updateObj(req, res) {
    database.updateObj(tableName, req.body)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}

/**
 *
 * @param req
 * @param res
 */
function deleteObj(req, res) {
    database.deleteObj(tableName, req.query.id)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}

/**
 *
 * @param req
 * @param res
 */
function selectCompleteRecipe(req, res) {
    axios.get(database.url + tableName + "?q={\"recipe.0\":{\"name\":\"", headers)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}


/**
 *
 * @type {{createObj: ((function(*, *): Promise<void>)|*), selectCompleteRecipe: selectCompleteRecipe, selectAll: ((function(*, *): Promise<void>)|*), deleteObj: ((function(*, *): Promise<void>)|*), selectOneById: ((function(*, *): Promise<void>)|*), updateObj: ((function(*, *): Promise<void>)|*)}}
 */
module.exports = {
    selectAll, selectOneById, createObj, updateObj, deleteObj, selectCompleteRecipe
}







