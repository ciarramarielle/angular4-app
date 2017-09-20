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
router.get('/riot/getSummoner/:summonerName', (req, res) => {
    response.data = {
        "profileIconId": 1382,
        "name": "Dyrus",
        "summonerLevel": 30,
        "accountId": 201137580,
        "id": 5908,
        "revisionDate": 1505718454000
    }
    res.json(response)

    // FROM HERE
    // request(
    //     `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.summonerName}&api_key=${config.riot_api_key}`,
    //     (err, response, body) => {
    //         if (err) {
    //             res.send(Error('Not able to find champion data.'));
    //         }
    //         res.send(body);
    //     });
});

router.get('/riot/getCurrentMatch/:summonerId', (req, res) => {
    response.data = {
		"gameId": 2602045772,
		"gameStartTime": 1505861132694,
		"platformId": "NA1",
		"gameMode": "CLASSIC",
		"mapId": 11,
		"gameType": "MATCHED_GAME",
		"gameQueueConfigId": 420,
		"observers": {
			"encryptionKey": "dJWJ0yk6CdyDO8cp30Wh0SUaITFG2V5U"
		},
		"participants": [
			{
				"profileIconId": 1633,
				"championId": 498,
				"summonerName": "Nikola Senpai",
				"runes": [
					{
						"count": 9,
						"runeId": 5245
					},
					{
						"count": 9,
						"runeId": 5277
					},
					{
						"count": 9,
						"runeId": 5317
					},
					{
						"count": 3,
						"runeId": 5337
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6111,
						"rank": 5
					},
					{
						"masteryId": 6122,
						"rank": 1
					},
					{
						"masteryId": 6134,
						"rank": 5
					},
					{
						"masteryId": 6143,
						"rank": 1
					},
					{
						"masteryId": 6151,
						"rank": 5
					},
					{
						"masteryId": 6161,
						"rank": 1
					},
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6223,
						"rank": 1
					},
					{
						"masteryId": 6232,
						"rank": 5
					},
					{
						"masteryId": 6241,
						"rank": 1
					}
				],
				"spell2Id": 7,
				"teamId": 100,
				"spell1Id": 4,
				"summonerId": 89609151
			},
			{
				"profileIconId": 3022,
				"championId": 421,
				"summonerName": "HuangJintAo",
				"runes": [
					{
						"count": 9,
						"runeId": 5245
					},
					{
						"count": 9,
						"runeId": 5290
					},
					{
						"count": 6,
						"runeId": 5316
					},
					{
						"count": 3,
						"runeId": 5317
					},
					{
						"count": 3,
						"runeId": 5337
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6111,
						"rank": 5
					},
					{
						"masteryId": 6121,
						"rank": 1
					},
					{
						"masteryId": 6134,
						"rank": 5
					},
					{
						"masteryId": 6142,
						"rank": 1
					},
					{
						"masteryId": 6151,
						"rank": 5
					},
					{
						"masteryId": 6162,
						"rank": 1
					},
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6223,
						"rank": 1
					},
					{
						"masteryId": 6232,
						"rank": 5
					},
					{
						"masteryId": 6243,
						"rank": 1
					}
				],
				"spell2Id": 4,
				"teamId": 100,
				"spell1Id": 11,
				"summonerId": 47842921
			},
			{
				"profileIconId": 3078,
				"championId": 90,
				"summonerName": "Doubtfull",
				"runes": [
					{
						"count": 9,
						"runeId": 5273
					},
					{
						"count": 3,
						"runeId": 5289
					},
					{
						"count": 6,
						"runeId": 5296
					},
					{
						"count": 9,
						"runeId": 5316
					},
					{
						"count": 3,
						"runeId": 5365
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6114,
						"rank": 5
					},
					{
						"masteryId": 6122,
						"rank": 1
					},
					{
						"masteryId": 6134,
						"rank": 5
					},
					{
						"masteryId": 6143,
						"rank": 1
					},
					{
						"masteryId": 6154,
						"rank": 5
					},
					{
						"masteryId": 6164,
						"rank": 1
					},
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6223,
						"rank": 1
					},
					{
						"masteryId": 6232,
						"rank": 5
					},
					{
						"masteryId": 6241,
						"rank": 1
					}
				],
				"spell2Id": 12,
				"teamId": 100,
				"spell1Id": 4,
				"summonerId": 50877721
			},
			{
				"profileIconId": 1387,
				"championId": 432,
				"summonerName": "Liquid Lourlo",
				"runes": [
					{
						"count": 9,
						"runeId": 5247
					},
					{
						"count": 9,
						"runeId": 5297
					},
					{
						"count": 9,
						"runeId": 5316
					},
					{
						"count": 3,
						"runeId": 5347
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6221,
						"rank": 1
					},
					{
						"masteryId": 6232,
						"rank": 5
					},
					{
						"masteryId": 6241,
						"rank": 1
					},
					{
						"masteryId": 6251,
						"rank": 5
					},
					{
						"masteryId": 6263,
						"rank": 1
					},
					{
						"masteryId": 6312,
						"rank": 5
					},
					{
						"masteryId": 6322,
						"rank": 1
					},
					{
						"masteryId": 6332,
						"rank": 5
					},
					{
						"masteryId": 6342,
						"rank": 1
					}
				],
				"spell2Id": 4,
				"teamId": 100,
				"spell1Id": 14,
				"summonerId": 19061980
			},
			{
				"profileIconId": 3025,
				"championId": 58,
				"summonerName": "Dyrus",
				"runes": [
					{
						"count": 9,
						"runeId": 5245
					},
					{
						"count": 9,
						"runeId": 5295
					},
					{
						"count": 9,
						"runeId": 5317
					},
					{
						"count": 2,
						"runeId": 5335
					},
					{
						"count": 1,
						"runeId": 5355
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6111,
						"rank": 5
					},
					{
						"masteryId": 6121,
						"rank": 1
					},
					{
						"masteryId": 6131,
						"rank": 1
					},
					{
						"masteryId": 6134,
						"rank": 4
					},
					{
						"masteryId": 6143,
						"rank": 1
					},
					{
						"masteryId": 6151,
						"rank": 5
					},
					{
						"masteryId": 6162,
						"rank": 1
					},
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6223,
						"rank": 1
					},
					{
						"masteryId": 6231,
						"rank": 5
					},
					{
						"masteryId": 6243,
						"rank": 1
					}
				],
				"spell2Id": 4,
				"teamId": 100,
				"spell1Id": 12,
				"summonerId": 5908
			},
			{
				"profileIconId": 4,
				"championId": 429,
				"summonerName": "watercold",
				"runes": [
					{
						"count": 7,
						"runeId": 5245
					},
					{
						"count": 2,
						"runeId": 5247
					},
					{
						"count": 6,
						"runeId": 5277
					},
					{
						"count": 3,
						"runeId": 5289
					},
					{
						"count": 9,
						"runeId": 5317
					},
					{
						"count": 3,
						"runeId": 5337
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6111,
						"rank": 5
					},
					{
						"masteryId": 6121,
						"rank": 1
					},
					{
						"masteryId": 6134,
						"rank": 5
					},
					{
						"masteryId": 6142,
						"rank": 1
					},
					{
						"masteryId": 6151,
						"rank": 5
					},
					{
						"masteryId": 6162,
						"rank": 1
					},
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6223,
						"rank": 1
					},
					{
						"masteryId": 6232,
						"rank": 5
					},
					{
						"masteryId": 6243,
						"rank": 1
					}
				],
				"spell2Id": 7,
				"teamId": 200,
				"spell1Id": 4,
				"summonerId": 79029093
			},
			{
				"profileIconId": 3015,
				"championId": 79,
				"summonerName": "MRTONERBONER",
				"runes": [
					{
						"count": 9,
						"runeId": 5247
					},
					{
						"count": 6,
						"runeId": 5295
					},
					{
						"count": 3,
						"runeId": 5297
					},
					{
						"count": 6,
						"runeId": 5316
					},
					{
						"count": 3,
						"runeId": 5317
					},
					{
						"count": 1,
						"runeId": 5347
					},
					{
						"count": 2,
						"runeId": 5357
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6114,
						"rank": 5
					},
					{
						"masteryId": 6123,
						"rank": 1
					},
					{
						"masteryId": 6134,
						"rank": 5
					},
					{
						"masteryId": 6142,
						"rank": 1
					},
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6223,
						"rank": 1
					},
					{
						"masteryId": 6231,
						"rank": 5
					},
					{
						"masteryId": 6241,
						"rank": 1
					},
					{
						"masteryId": 6251,
						"rank": 5
					},
					{
						"masteryId": 6262,
						"rank": 1
					}
				],
				"spell2Id": 4,
				"teamId": 200,
				"spell1Id": 11,
				"summonerId": 47836799
			},
			{
				"profileIconId": 8,
				"championId": 26,
				"summonerName": "ppmdtechskill",
				"runes": [
					{
						"count": 9,
						"runeId": 5247
					},
					{
						"count": 9,
						"runeId": 5297
					},
					{
						"count": 9,
						"runeId": 5315
					},
					{
						"count": 3,
						"runeId": 5347
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6221,
						"rank": 1
					},
					{
						"masteryId": 6232,
						"rank": 5
					},
					{
						"masteryId": 6241,
						"rank": 1
					},
					{
						"masteryId": 6251,
						"rank": 5
					},
					{
						"masteryId": 6263,
						"rank": 1
					},
					{
						"masteryId": 6311,
						"rank": 5
					},
					{
						"masteryId": 6322,
						"rank": 1
					},
					{
						"masteryId": 6332,
						"rank": 5
					},
					{
						"masteryId": 6342,
						"rank": 1
					}
				],
				"spell2Id": 3,
				"teamId": 200,
				"spell1Id": 4,
				"summonerId": 19451735
			},
			{
				"profileIconId": 3081,
				"championId": 39,
				"summonerName": "Imaokai",
				"runes": [
					{
						"count": 6,
						"runeId": 5245
					},
					{
						"count": 3,
						"runeId": 5247
					},
					{
						"count": 9,
						"runeId": 5289
					},
					{
						"count": 9,
						"runeId": 5317
					},
					{
						"count": 3,
						"runeId": 5337
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6111,
						"rank": 5
					},
					{
						"masteryId": 6121,
						"rank": 1
					},
					{
						"masteryId": 6134,
						"rank": 5
					},
					{
						"masteryId": 6141,
						"rank": 1
					},
					{
						"masteryId": 6151,
						"rank": 5
					},
					{
						"masteryId": 6162,
						"rank": 1
					},
					{
						"masteryId": 6211,
						"rank": 5
					},
					{
						"masteryId": 6223,
						"rank": 1
					},
					{
						"masteryId": 6232,
						"rank": 5
					},
					{
						"masteryId": 6241,
						"rank": 1
					}
				],
				"spell2Id": 4,
				"teamId": 200,
				"spell1Id": 12,
				"summonerId": 52372786
			},
			{
				"profileIconId": 2087,
				"championId": 61,
				"summonerName": "RyuShoryu",
				"runes": [
					{
						"count": 9,
						"runeId": 5273
					},
					{
						"count": 9,
						"runeId": 5296
					},
					{
						"count": 9,
						"runeId": 5316
					},
					{
						"count": 3,
						"runeId": 5357
					}
				],
				"bot": false,
				"masteries": [
					{
						"masteryId": 6114,
						"rank": 5
					},
					{
						"masteryId": 6122,
						"rank": 1
					},
					{
						"masteryId": 6134,
						"rank": 5
					},
					{
						"masteryId": 6142,
						"rank": 1
					},
					{
						"masteryId": 6312,
						"rank": 5
					},
					{
						"masteryId": 6322,
						"rank": 1
					},
					{
						"masteryId": 6331,
						"rank": 5
					},
					{
						"masteryId": 6343,
						"rank": 1
					},
					{
						"masteryId": 6351,
						"rank": 5
					},
					{
						"masteryId": 6362,
						"rank": 1
					}
				],
				"spell2Id": 4,
				"teamId": 200,
				"spell1Id": 7,
				"summonerId": 38911162
			}
		],
		"gameLength": 359,
		"bannedChampions": [
			{
				"teamId": 100,
				"championId": 92,
				"pickTurn": 1
			},
			{
				"teamId": 100,
				"championId": 18,
				"pickTurn": 2
			},
			{
				"teamId": 100,
				"championId": 117,
				"pickTurn": 3
			},
			{
				"teamId": 100,
				"championId": 69,
				"pickTurn": 4
			},
			{
				"teamId": 100,
				"championId": 59,
				"pickTurn": 5
			},
			{
				"teamId": 200,
				"championId": 412,
				"pickTurn": 6
			},
			{
				"teamId": 200,
				"championId": 40,
				"pickTurn": 7
			},
			{
				"teamId": 200,
				"championId": 69,
				"pickTurn": 8
			},
			{
				"teamId": 200,
				"championId": 117,
				"pickTurn": 9
			},
			{
				"teamId": 200,
				"championId": 12,
				"pickTurn": 10
			}
		]
	}
    res.json(response)

    // FROM HERE
    // request(
    //     `https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${req.params.summonerId}&api_key=${config.riot_api_key}`,
    //     (err, response, body) => {
    //         if (err) {
    //             res.send(Error('Not able to find champion data.'));
    //         }
    //         res.send(body);
    //     });
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
    
    // FROM HERE
    // request(
    //     `https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=false&api_key=${config.riot_api_key}`,
    //     (err, response, body) => {
    //         if (err) {
    //             res.send(Error('Not able to find champion data.'));
    //         }
    //         res.send(body);

            // FIXME: Send mock data for now
            res.send({
                "champions": [
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": false,
                        "botMmEnabled": false,
                        "active": true,
                        "freeToPlay": true,
                        "id": 34
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": true,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 9
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": true,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 3
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": false,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 222
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": false,
                        "botMmEnabled": false,
                        "active": true,
                        "freeToPlay": true,
                        "id": 121
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": false,
                        "botMmEnabled": false,
                        "active": true,
                        "freeToPlay": true,
                        "id": 203
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": false,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 117
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": true,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 62
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": true,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 25
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": false,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 516
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": true,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 13
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": false,
                        "botMmEnabled": false,
                        "active": true,
                        "freeToPlay": true,
                        "id": 91
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": false,
                        "botMmEnabled": false,
                        "active": true,
                        "freeToPlay": true,
                        "id": 161
                    },
                    {
                        "rankedPlayEnabled": true,
                        "botEnabled": true,
                        "botMmEnabled": true,
                        "active": true,
                        "freeToPlay": true,
                        "id": 115
                    }
                ]
            })
    //     }
    // )
});
// router.get('/riot/champion/:id/static', (req, res) => {
    
router.get('/riot/champions/static', (req, res) => {
    res.send({
        "type": "champion",
        "version": "7.18.1",
        "data": {
            "MonkeyKing": {
                "image": {
                    "full": "MonkeyKing.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 48
                },
                "title": "the Monkey King",
                "id": 62,
                "key": "MonkeyKing",
                "name": "Wukong"
            },
            "Jax": {
                "image": {
                    "full": "Jax.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 144
                },
                "title": "Grandmaster at Arms",
                "id": 24,
                "key": "Jax",
                "name": "Jax"
            },
            "Fiddlesticks": {
                "image": {
                    "full": "Fiddlesticks.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 336
                },
                "title": "the Harbinger of Doom",
                "id": 9,
                "key": "Fiddlesticks",
                "name": "Fiddlesticks"
            },
            "Shaco": {
                "image": {
                    "full": "Shaco.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 240
                },
                "title": "the Demon Jester",
                "id": 35,
                "key": "Shaco",
                "name": "Shaco"
            },
            "Warwick": {
                "image": {
                    "full": "Warwick.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 336
                },
                "title": "the Uncaged Wrath of Zaun",
                "id": 19,
                "key": "Warwick",
                "name": "Warwick"
            },
            "Xayah": {
                "image": {
                    "full": "Xayah.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 384
                },
                "title": "the Rebel",
                "id": 498,
                "key": "Xayah",
                "name": "Xayah"
            },
            "Nidalee": {
                "image": {
                    "full": "Nidalee.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 336
                },
                "title": "the Bestial Huntress",
                "id": 76,
                "key": "Nidalee",
                "name": "Nidalee"
            },
            "Zyra": {
                "image": {
                    "full": "Zyra.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 336
                },
                "title": "Rise of the Thorns",
                "id": 143,
                "key": "Zyra",
                "name": "Zyra"
            },
            "Kled": {
                "image": {
                    "full": "Kled.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 336
                },
                "title": "the Cantankerous Cavalier",
                "id": 240,
                "key": "Kled",
                "name": "Kled"
            },
            "Brand": {
                "image": {
                    "full": "Brand.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 96
                },
                "title": "the Burning Vengeance",
                "id": 63,
                "key": "Brand",
                "name": "Brand"
            },
            "Rammus": {
                "image": {
                    "full": "Rammus.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 336
                },
                "title": "the Armordillo",
                "id": 33,
                "key": "Rammus",
                "name": "Rammus"
            },
            "Illaoi": {
                "image": {
                    "full": "Illaoi.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 384
                },
                "title": "the Kraken Priestess",
                "id": 420,
                "key": "Illaoi",
                "name": "Illaoi"
            },
            "Corki": {
                "image": {
                    "full": "Corki.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 384
                },
                "title": "the Daring Bombardier",
                "id": 42,
                "key": "Corki",
                "name": "Corki"
            },
            "Braum": {
                "image": {
                    "full": "Braum.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 144
                },
                "title": "the Heart of the Freljord",
                "id": 201,
                "key": "Braum",
                "name": "Braum"
            },
            "Darius": {
                "image": {
                    "full": "Darius.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 432
                },
                "title": "the Hand of Noxus",
                "id": 122,
                "key": "Darius",
                "name": "Darius"
            },
            "Tryndamere": {
                "image": {
                    "full": "Tryndamere.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 192
                },
                "title": "the Barbarian King",
                "id": 23,
                "key": "Tryndamere",
                "name": "Tryndamere"
            },
            "MissFortune": {
                "image": {
                    "full": "MissFortune.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 0
                },
                "title": "the Bounty Hunter",
                "id": 21,
                "key": "MissFortune",
                "name": "Miss Fortune"
            },
            "Yorick": {
                "image": {
                    "full": "Yorick.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 96
                },
                "title": "Shepherd of Souls",
                "id": 83,
                "key": "Yorick",
                "name": "Yorick"
            },
            "Xerath": {
                "image": {
                    "full": "Xerath.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 432
                },
                "title": "the Magus Ascendant",
                "id": 101,
                "key": "Xerath",
                "name": "Xerath"
            },
            "Sivir": {
                "image": {
                    "full": "Sivir.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 0
                },
                "title": "the Battle Mistress",
                "id": 15,
                "key": "Sivir",
                "name": "Sivir"
            },
            "Riven": {
                "image": {
                    "full": "Riven.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 48
                },
                "title": "the Exile",
                "id": 92,
                "key": "Riven",
                "name": "Riven"
            },
            "Orianna": {
                "image": {
                    "full": "Orianna.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 48
                },
                "title": "the Lady of Clockwork",
                "id": 61,
                "key": "Orianna",
                "name": "Orianna"
            },
            "Gangplank": {
                "image": {
                    "full": "Gangplank.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 48
                },
                "title": "the Saltwater Scourge",
                "id": 41,
                "key": "Gangplank",
                "name": "Gangplank"
            },
            "Malphite": {
                "image": {
                    "full": "Malphite.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 288
                },
                "title": "Shard of the Monolith",
                "id": 54,
                "key": "Malphite",
                "name": "Malphite"
            },
            "Poppy": {
                "image": {
                    "full": "Poppy.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 192
                },
                "title": "Keeper of the Hammer",
                "id": 78,
                "key": "Poppy",
                "name": "Poppy"
            },
            "Karthus": {
                "image": {
                    "full": "Karthus.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 432
                },
                "title": "the Deathsinger",
                "id": 30,
                "key": "Karthus",
                "name": "Karthus"
            },
            "Jayce": {
                "image": {
                    "full": "Jayce.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 192
                },
                "title": "the Defender of Tomorrow",
                "id": 126,
                "key": "Jayce",
                "name": "Jayce"
            },
            "Nunu": {
                "image": {
                    "full": "Nunu.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 432
                },
                "title": "the Yeti Rider",
                "id": 20,
                "key": "Nunu",
                "name": "Nunu"
            },
            "Trundle": {
                "image": {
                    "full": "Trundle.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 144
                },
                "title": "the Troll King",
                "id": 48,
                "key": "Trundle",
                "name": "Trundle"
            },
            "Graves": {
                "image": {
                    "full": "Graves.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 240
                },
                "title": "the Outlaw",
                "id": 104,
                "key": "Graves",
                "name": "Graves"
            },
            "Morgana": {
                "image": {
                    "full": "Morgana.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 144
                },
                "title": "Fallen Angel",
                "id": 25,
                "key": "Morgana",
                "name": "Morgana"
            },
            "Gnar": {
                "image": {
                    "full": "Gnar.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 144
                },
                "title": "the Missing Link",
                "id": 150,
                "key": "Gnar",
                "name": "Gnar"
            },
            "Lux": {
                "image": {
                    "full": "Lux.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 240
                },
                "title": "the Lady of Luminosity",
                "id": 99,
                "key": "Lux",
                "name": "Lux"
            },
            "Shyvana": {
                "image": {
                    "full": "Shyvana.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 336
                },
                "title": "the Half-Dragon",
                "id": 102,
                "key": "Shyvana",
                "name": "Shyvana"
            },
            "Renekton": {
                "image": {
                    "full": "Renekton.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 432
                },
                "title": "the Butcher of the Sands",
                "id": 58,
                "key": "Renekton",
                "name": "Renekton"
            },
            "Fiora": {
                "image": {
                    "full": "Fiora.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 384
                },
                "title": "the Grand Duelist",
                "id": 114,
                "key": "Fiora",
                "name": "Fiora"
            },
            "Jinx": {
                "image": {
                    "full": "Jinx.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 288
                },
                "title": "the Loose Cannon",
                "id": 222,
                "key": "Jinx",
                "name": "Jinx"
            },
            "Kalista": {
                "image": {
                    "full": "Kalista.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 336
                },
                "title": "the Spear of Vengeance",
                "id": 429,
                "key": "Kalista",
                "name": "Kalista"
            },
            "Fizz": {
                "image": {
                    "full": "Fizz.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 432
                },
                "title": "the Tidal Trickster",
                "id": 105,
                "key": "Fizz",
                "name": "Fizz"
            },
            "Kassadin": {
                "image": {
                    "full": "Kassadin.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 0
                },
                "title": "the Void Walker",
                "id": 38,
                "key": "Kassadin",
                "name": "Kassadin"
            },
            "Sona": {
                "image": {
                    "full": "Sona.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 96
                },
                "title": "Maven of the Strings",
                "id": 37,
                "key": "Sona",
                "name": "Sona"
            },
            "Irelia": {
                "image": {
                    "full": "Irelia.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 432
                },
                "title": "the Will of the Blades",
                "id": 39,
                "key": "Irelia",
                "name": "Irelia"
            },
            "Viktor": {
                "image": {
                    "full": "Viktor.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 192
                },
                "title": "the Machine Herald",
                "id": 112,
                "key": "Viktor",
                "name": "Viktor"
            },
            "Rakan": {
                "image": {
                    "full": "Rakan.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 288
                },
                "title": "The Charmer",
                "id": 497,
                "key": "Rakan",
                "name": "Rakan"
            },
            "Kindred": {
                "image": {
                    "full": "Kindred.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 288
                },
                "title": "The Eternal Hunters",
                "id": 203,
                "key": "Kindred",
                "name": "Kindred"
            },
            "Cassiopeia": {
                "image": {
                    "full": "Cassiopeia.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 288
                },
                "title": "the Serpent's Embrace",
                "id": 69,
                "key": "Cassiopeia",
                "name": "Cassiopeia"
            },
            "Maokai": {
                "image": {
                    "full": "Maokai.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 384
                },
                "title": "the Twisted Treant",
                "id": 57,
                "key": "Maokai",
                "name": "Maokai"
            },
            "Ornn": {
                "image": {
                    "full": "Ornn.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 96
                },
                "title": "The Fire below the Mountain",
                "id": 516,
                "key": "Ornn",
                "name": "Ornn"
            },
            "Thresh": {
                "image": {
                    "full": "Thresh.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 48
                },
                "title": "the Chain Warden",
                "id": 412,
                "key": "Thresh",
                "name": "Thresh"
            },
            "Kayle": {
                "image": {
                    "full": "Kayle.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 96
                },
                "title": "The Judicator",
                "id": 10,
                "key": "Kayle",
                "name": "Kayle"
            },
            "Hecarim": {
                "image": {
                    "full": "Hecarim.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 288
                },
                "title": "the Shadow of War",
                "id": 120,
                "key": "Hecarim",
                "name": "Hecarim"
            },
            "Khazix": {
                "image": {
                    "full": "Khazix.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 240
                },
                "title": "the Voidreaver",
                "id": 121,
                "key": "Khazix",
                "name": "Kha'Zix"
            },
            "Olaf": {
                "image": {
                    "full": "Olaf.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 0
                },
                "title": "the Berserker",
                "id": 2,
                "key": "Olaf",
                "name": "Olaf"
            },
            "Ziggs": {
                "image": {
                    "full": "Ziggs.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 240
                },
                "title": "the Hexplosives Expert",
                "id": 115,
                "key": "Ziggs",
                "name": "Ziggs"
            },
            "Syndra": {
                "image": {
                    "full": "Syndra.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 240
                },
                "title": "the Dark Sovereign",
                "id": 134,
                "key": "Syndra",
                "name": "Syndra"
            },
            "DrMundo": {
                "image": {
                    "full": "DrMundo.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 96
                },
                "title": "the Madman of Zaun",
                "id": 36,
                "key": "DrMundo",
                "name": "Dr. Mundo"
            },
            "Karma": {
                "image": {
                    "full": "Karma.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 384
                },
                "title": "the Enlightened One",
                "id": 43,
                "key": "Karma",
                "name": "Karma"
            },
            "Annie": {
                "image": {
                    "full": "Annie.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 288
                },
                "title": "the Dark Child",
                "id": 1,
                "key": "Annie",
                "name": "Annie"
            },
            "Akali": {
                "image": {
                    "full": "Akali.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 96
                },
                "title": "the Fist of Shadow",
                "id": 84,
                "key": "Akali",
                "name": "Akali"
            },
            "Volibear": {
                "image": {
                    "full": "Volibear.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 288
                },
                "title": "the Thunder's Roar",
                "id": 106,
                "key": "Volibear",
                "name": "Volibear"
            },
            "Yasuo": {
                "image": {
                    "full": "Yasuo.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 48
                },
                "title": "the Unforgiven",
                "id": 157,
                "key": "Yasuo",
                "name": "Yasuo"
            },
            "Kennen": {
                "image": {
                    "full": "Kennen.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 192
                },
                "title": "the Heart of the Tempest",
                "id": 85,
                "key": "Kennen",
                "name": "Kennen"
            },
            "Rengar": {
                "image": {
                    "full": "Rengar.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 0
                },
                "title": "the Pridestalker",
                "id": 107,
                "key": "Rengar",
                "name": "Rengar"
            },
            "Ryze": {
                "image": {
                    "full": "Ryze.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 144
                },
                "title": "the Rune Mage",
                "id": 13,
                "key": "Ryze",
                "name": "Ryze"
            },
            "Shen": {
                "image": {
                    "full": "Shen.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 288
                },
                "title": "the Eye of Twilight",
                "id": 98,
                "key": "Shen",
                "name": "Shen"
            },
            "Zac": {
                "image": {
                    "full": "Zac.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 144
                },
                "title": "the Secret Weapon",
                "id": 154,
                "key": "Zac",
                "name": "Zac"
            },
            "Talon": {
                "image": {
                    "full": "Talon.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 384
                },
                "title": "the Blade's Shadow",
                "id": 91,
                "key": "Talon",
                "name": "Talon"
            },
            "Swain": {
                "image": {
                    "full": "Swain.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 192
                },
                "title": "the Master Tactician",
                "id": 50,
                "key": "Swain",
                "name": "Swain"
            },
            "Bard": {
                "image": {
                    "full": "Bard.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 0
                },
                "title": "the Wandering Caretaker",
                "id": 432,
                "key": "Bard",
                "name": "Bard"
            },
            "Sion": {
                "image": {
                    "full": "Sion.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 432
                },
                "title": "The Undead Juggernaut",
                "id": 14,
                "key": "Sion",
                "name": "Sion"
            },
            "Vayne": {
                "image": {
                    "full": "Vayne.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 0
                },
                "title": "the Night Hunter",
                "id": 67,
                "key": "Vayne",
                "name": "Vayne"
            },
            "Nasus": {
                "image": {
                    "full": "Nasus.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 240
                },
                "title": "the Curator of the Sands",
                "id": 75,
                "key": "Nasus",
                "name": "Nasus"
            },
            "Kayn": {
                "image": {
                    "full": "Kayn.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 144
                },
                "title": "the Shadow Reaper",
                "id": 141,
                "key": "Kayn",
                "name": "Kayn"
            },
            "TwistedFate": {
                "image": {
                    "full": "TwistedFate.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 240
                },
                "title": "the Card Master",
                "id": 4,
                "key": "TwistedFate",
                "name": "Twisted Fate"
            },
            "Chogath": {
                "image": {
                    "full": "Chogath.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 336
                },
                "title": "the Terror of the Void",
                "id": 31,
                "key": "Chogath",
                "name": "Cho'Gath"
            },
            "Udyr": {
                "image": {
                    "full": "Udyr.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 336
                },
                "title": "the Spirit Walker",
                "id": 77,
                "key": "Udyr",
                "name": "Udyr"
            },
            "Lucian": {
                "image": {
                    "full": "Lucian.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 144
                },
                "title": "the Purifier",
                "id": 236,
                "key": "Lucian",
                "name": "Lucian"
            },
            "Ivern": {
                "image": {
                    "full": "Ivern.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 0
                },
                "title": "the Green Father",
                "id": 427,
                "key": "Ivern",
                "name": "Ivern"
            },
            "Leona": {
                "image": {
                    "full": "Leona.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 48
                },
                "title": "the Radiant Dawn",
                "id": 89,
                "key": "Leona",
                "name": "Leona"
            },
            "Caitlyn": {
                "image": {
                    "full": "Caitlyn.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 192
                },
                "title": "the Sheriff of Piltover",
                "id": 51,
                "key": "Caitlyn",
                "name": "Caitlyn"
            },
            "Sejuani": {
                "image": {
                    "full": "Sejuani.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 192
                },
                "title": "Fury of the North",
                "id": 113,
                "key": "Sejuani",
                "name": "Sejuani"
            },
            "Nocturne": {
                "image": {
                    "full": "Nocturne.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 384
                },
                "title": "the Eternal Nightmare",
                "id": 56,
                "key": "Nocturne",
                "name": "Nocturne"
            },
            "Zilean": {
                "image": {
                    "full": "Zilean.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 288
                },
                "title": "the Chronokeeper",
                "id": 26,
                "key": "Zilean",
                "name": "Zilean"
            },
            "Azir": {
                "image": {
                    "full": "Azir.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 432
                },
                "title": "the Emperor of the Sands",
                "id": 268,
                "key": "Azir",
                "name": "Azir"
            },
            "Rumble": {
                "image": {
                    "full": "Rumble.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 96
                },
                "title": "the Mechanized Menace",
                "id": 68,
                "key": "Rumble",
                "name": "Rumble"
            },
            "Taliyah": {
                "image": {
                    "full": "Taliyah.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 336
                },
                "title": "the Stoneweaver",
                "id": 163,
                "key": "Taliyah",
                "name": "Taliyah"
            },
            "Teemo": {
                "image": {
                    "full": "Teemo.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 0
                },
                "title": "the Swift Scout",
                "id": 17,
                "key": "Teemo",
                "name": "Teemo"
            },
            "Urgot": {
                "image": {
                    "full": "Urgot.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 384
                },
                "title": "the Dreadnought",
                "id": 6,
                "key": "Urgot",
                "name": "Urgot"
            },
            "Amumu": {
                "image": {
                    "full": "Amumu.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 192
                },
                "title": "the Sad Mummy",
                "id": 32,
                "key": "Amumu",
                "name": "Amumu"
            },
            "Galio": {
                "image": {
                    "full": "Galio.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 0
                },
                "title": "the Colossus",
                "id": 3,
                "key": "Galio",
                "name": "Galio"
            },
            "Heimerdinger": {
                "image": {
                    "full": "Heimerdinger.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 336
                },
                "title": "the Revered Inventor",
                "id": 74,
                "key": "Heimerdinger",
                "name": "Heimerdinger"
            },
            "Anivia": {
                "image": {
                    "full": "Anivia.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 240
                },
                "title": "the Cryophoenix",
                "id": 34,
                "key": "Anivia",
                "name": "Anivia"
            },
            "Ashe": {
                "image": {
                    "full": "Ashe.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 336
                },
                "title": "the Frost Archer",
                "id": 22,
                "key": "Ashe",
                "name": "Ashe"
            },
            "Velkoz": {
                "image": {
                    "full": "Velkoz.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 96
                },
                "title": "the Eye of the Void",
                "id": 161,
                "key": "Velkoz",
                "name": "Vel'Koz"
            },
            "Singed": {
                "image": {
                    "full": "Singed.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 384
                },
                "title": "the Mad Chemist",
                "id": 27,
                "key": "Singed",
                "name": "Singed"
            },
            "Skarner": {
                "image": {
                    "full": "Skarner.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 48
                },
                "title": "the Crystal Vanguard",
                "id": 72,
                "key": "Skarner",
                "name": "Skarner"
            },
            "Varus": {
                "image": {
                    "full": "Varus.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 432
                },
                "title": "the Arrow of Retribution",
                "id": 110,
                "key": "Varus",
                "name": "Varus"
            },
            "Twitch": {
                "image": {
                    "full": "Twitch.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 288
                },
                "title": "the Plague Rat",
                "id": 29,
                "key": "Twitch",
                "name": "Twitch"
            },
            "Garen": {
                "image": {
                    "full": "Garen.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 96
                },
                "title": "The Might of Demacia",
                "id": 86,
                "key": "Garen",
                "name": "Garen"
            },
            "Blitzcrank": {
                "image": {
                    "full": "Blitzcrank.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 48
                },
                "title": "the Great Steam Golem",
                "id": 53,
                "key": "Blitzcrank",
                "name": "Blitzcrank"
            },
            "MasterYi": {
                "image": {
                    "full": "MasterYi.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 432
                },
                "title": "the Wuju Bladesman",
                "id": 11,
                "key": "MasterYi",
                "name": "Master Yi"
            },
            "Elise": {
                "image": {
                    "full": "Elise.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 192
                },
                "title": "the Spider Queen",
                "id": 60,
                "key": "Elise",
                "name": "Elise"
            },
            "Alistar": {
                "image": {
                    "full": "Alistar.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 144
                },
                "title": "the Minotaur",
                "id": 12,
                "key": "Alistar",
                "name": "Alistar"
            },
            "Katarina": {
                "image": {
                    "full": "Katarina.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 48
                },
                "title": "the Sinister Blade",
                "id": 55,
                "key": "Katarina",
                "name": "Katarina"
            },
            "Ekko": {
                "image": {
                    "full": "Ekko.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 144
                },
                "title": "the Boy Who Shattered Time",
                "id": 245,
                "key": "Ekko",
                "name": "Ekko"
            },
            "Mordekaiser": {
                "image": {
                    "full": "Mordekaiser.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 96
                },
                "title": "the Iron Revenant",
                "id": 82,
                "key": "Mordekaiser",
                "name": "Mordekaiser"
            },
            "Lulu": {
                "image": {
                    "full": "Lulu.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 192
                },
                "title": "the Fae Sorceress",
                "id": 117,
                "key": "Lulu",
                "name": "Lulu"
            },
            "Camille": {
                "image": {
                    "full": "Camille.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 240
                },
                "title": "the Steel Shadow",
                "id": 164,
                "key": "Camille",
                "name": "Camille"
            },
            "Aatrox": {
                "image": {
                    "full": "Aatrox.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 0
                },
                "title": "the Darkin Blade",
                "id": 266,
                "key": "Aatrox",
                "name": "Aatrox"
            },
            "Draven": {
                "image": {
                    "full": "Draven.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 48
                },
                "title": "the Glorious Executioner",
                "id": 119,
                "key": "Draven",
                "name": "Draven"
            },
            "TahmKench": {
                "image": {
                    "full": "TahmKench.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 288
                },
                "title": "the River King",
                "id": 223,
                "key": "TahmKench",
                "name": "Tahm Kench"
            },
            "Pantheon": {
                "image": {
                    "full": "Pantheon.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 144
                },
                "title": "the Artisan of War",
                "id": 80,
                "key": "Pantheon",
                "name": "Pantheon"
            },
            "XinZhao": {
                "image": {
                    "full": "XinZhao.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 0
                },
                "title": "the Seneschal of Demacia",
                "id": 5,
                "key": "XinZhao",
                "name": "Xin Zhao"
            },
            "AurelionSol": {
                "image": {
                    "full": "AurelionSol.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 384
                },
                "title": "The Star Forger",
                "id": 136,
                "key": "AurelionSol",
                "name": "Aurelion Sol"
            },
            "LeeSin": {
                "image": {
                    "full": "LeeSin.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 0
                },
                "title": "the Blind Monk",
                "id": 64,
                "key": "LeeSin",
                "name": "Lee Sin"
            },
            "Taric": {
                "image": {
                    "full": "Taric.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 432
                },
                "title": "the Shield of Valoran",
                "id": 44,
                "key": "Taric",
                "name": "Taric"
            },
            "Malzahar": {
                "image": {
                    "full": "Malzahar.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 336
                },
                "title": "the Prophet of the Void",
                "id": 90,
                "key": "Malzahar",
                "name": "Malzahar"
            },
            "Lissandra": {
                "image": {
                    "full": "Lissandra.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 96
                },
                "title": "the Ice Witch",
                "id": 127,
                "key": "Lissandra",
                "name": "Lissandra"
            },
            "Diana": {
                "image": {
                    "full": "Diana.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 0
                },
                "title": "Scorn of the Moon",
                "id": 131,
                "key": "Diana",
                "name": "Diana"
            },
            "Tristana": {
                "image": {
                    "full": "Tristana.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 96
                },
                "title": "the Yordle Gunner",
                "id": 18,
                "key": "Tristana",
                "name": "Tristana"
            },
            "RekSai": {
                "image": {
                    "full": "RekSai.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 384
                },
                "title": "the Void Burrower",
                "id": 421,
                "key": "RekSai",
                "name": "Rek'Sai"
            },
            "Vladimir": {
                "image": {
                    "full": "Vladimir.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 240
                },
                "title": "the Crimson Reaper",
                "id": 8,
                "key": "Vladimir",
                "name": "Vladimir"
            },
            "JarvanIV": {
                "image": {
                    "full": "JarvanIV.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 96
                },
                "title": "the Exemplar of Demacia",
                "id": 59,
                "key": "JarvanIV",
                "name": "Jarvan IV"
            },
            "Nami": {
                "image": {
                    "full": "Nami.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 192
                },
                "title": "the Tidecaller",
                "id": 267,
                "key": "Nami",
                "name": "Nami"
            },
            "Jhin": {
                "image": {
                    "full": "Jhin.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 240
                },
                "title": "the Virtuoso",
                "id": 202,
                "key": "Jhin",
                "name": "Jhin"
            },
            "Soraka": {
                "image": {
                    "full": "Soraka.png",
                    "group": "champion",
                    "sprite": "champion3.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 144
                },
                "title": "the Starchild",
                "id": 16,
                "key": "Soraka",
                "name": "Soraka"
            },
            "Veigar": {
                "image": {
                    "full": "Veigar.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 48
                },
                "title": "the Tiny Master of Evil",
                "id": 45,
                "key": "Veigar",
                "name": "Veigar"
            },
            "Janna": {
                "image": {
                    "full": "Janna.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 48
                },
                "title": "the Storm's Fury",
                "id": 40,
                "key": "Janna",
                "name": "Janna"
            },
            "Nautilus": {
                "image": {
                    "full": "Nautilus.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 288
                },
                "title": "the Titan of the Depths",
                "id": 111,
                "key": "Nautilus",
                "name": "Nautilus"
            },
            "Evelynn": {
                "image": {
                    "full": "Evelynn.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 240
                },
                "title": "the Widowmaker",
                "id": 28,
                "key": "Evelynn",
                "name": "Evelynn"
            },
            "Gragas": {
                "image": {
                    "full": "Gragas.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 192
                },
                "title": "the Rabble Rouser",
                "id": 79,
                "key": "Gragas",
                "name": "Gragas"
            },
            "Zed": {
                "image": {
                    "full": "Zed.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 192
                },
                "title": "the Master of Shadows",
                "id": 238,
                "key": "Zed",
                "name": "Zed"
            },
            "Vi": {
                "image": {
                    "full": "Vi.png",
                    "group": "champion",
                    "sprite": "champion4.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 144
                },
                "title": "the Piltover Enforcer",
                "id": 254,
                "key": "Vi",
                "name": "Vi"
            },
            "KogMaw": {
                "image": {
                    "full": "KogMaw.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 384
                },
                "title": "the Mouth of the Abyss",
                "id": 96,
                "key": "KogMaw",
                "name": "Kog'Maw"
            },
            "Ahri": {
                "image": {
                    "full": "Ahri.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 48
                },
                "title": "the Nine-Tailed Fox",
                "id": 103,
                "key": "Ahri",
                "name": "Ahri"
            },
            "Quinn": {
                "image": {
                    "full": "Quinn.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 240
                },
                "title": "Demacia's Wings",
                "id": 133,
                "key": "Quinn",
                "name": "Quinn"
            },
            "Leblanc": {
                "image": {
                    "full": "Leblanc.png",
                    "group": "champion",
                    "sprite": "champion1.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 432
                },
                "title": "the Deceiver",
                "id": 7,
                "key": "Leblanc",
                "name": "LeBlanc"
            },
            "Ezreal": {
                "image": {
                    "full": "Ezreal.png",
                    "group": "champion",
                    "sprite": "champion0.png",
                    "h": 48,
                    "w": 48,
                    "y": 96,
                    "x": 288
                },
                "title": "the Prodigal Explorer",
                "id": 81,
                "key": "Ezreal",
                "name": "Ezreal"
            }
        }
    })
});
    // res.send({
    //     id: 1
    // })
//     request(
// `https://na1.api.riotgames.com/lol/static-data/v3/champions/${req.params.id}?locale=en_US&api_key=${config.riot_api_key}`,
//         (err, response, body) => {
//             if (err) {
//                 res.send(Error('Not able to find champion data.'));
//             }
//             res.send(body);
//         }
//     )
// });

module.exports = router;