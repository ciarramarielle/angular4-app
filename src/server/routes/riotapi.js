//FIXME: Commented out until it works ;(
// module.exports = function(app) {
//     app.get("/api/ritoapi", getChampions);
//
//     function getChampions(req, res) {
//         var riot_api_key = process.env.RIOT_API_KEY;
//         // var options = {
//         //     host: "global.api.pvp.net",
//         //     port: 80,
//         //     path: `/api/lol/static-data/na/v1.2/champion?api_key=${riot_api_key}`,
//         //     method: 'GET'
//         // };
//         request(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${riot_api_key}`,
//           function (err, response, body) {
//             if (err) {
//               res.send("oops");
//             }
//             res.send(body);
//           }
//         )
//     }
// }
//
// module.exports = function(app) {
//
//
//     app.get('/api/riot/getChampions', function(req, res) {
//         request(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${config.riot_api_key}`,
//           function (err, response, body) {
//             if (err) {
//               res.send("oops");
//             }
//             res.send(body);
// 			console.log("body " + body);
//           }
//         )
//     });
// 	// app.use('/api/riot/getChampions', router);
//     app.get("*", function(req, res) {
//         res.render("index.html");
//         // looks inside VIEWS
//     });
// }
