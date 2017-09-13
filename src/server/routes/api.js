const express = require('express');
const router = express.Router();

const request = require("request");
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require("./../config")[env];

// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;

// Connect
// const connection = (closure) => {
//     return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
//         if (err) return console.log(err);

//         closure(db);
//     });
// };

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/ciarra', (req, res) => {
    response.data = [{
        'a': 'b'
    }]
    res.json(response)
    // connection((db) => {
    //     db.collection('users')
    //         .find()
    //         .toArray()
    //         .then((users) => {
    //             response.data = users;
    //             res.json(response);
    //         })
    //         .catch((err) => {
    //             sendError(err, res);
    //         });
    // });
});

router.get('/riot/getChampions', function(req, res) {
    // If unable to access API...
    // response.data = [{
    //     'a': 'fake champion data'
    // }]
    // res.json(response)

    // Can set header API Key instead of query param
    //  but need the other ones too i think...
    // req.headers['X-Riot-Token'] = config.riot_api_key
    
    // console.log('headers', req.headers)
    request(
        `https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=false&api_key=${config.riot_api_key}`,
        (err, response, body) => {
            if (err) {
                res.send(Error('Not able to find champion data.'));
            }
            res.send(body);
        }
    )
});

router.get('/riot/champion/:id/static', function(req, res) {
    request(
`https://na1.api.riotgames.com/lol/static-data/v3/champions/${req.params.id}?locale=en_US&api_key=${config.riot_api_key}`,
        (err, response, body) => {
            if (err) {
                res.send(Error('Not able to find champion data.'));
            }
            res.send(body);
        }
    )
});

module.exports = router;