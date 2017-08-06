let express = require( 'express' );
let scrapeIt = require( 'scrape-it' );
const { json } = require( 'body-parser' );
let app = express();

app.use( json() );
app.use(function(req, res, next) { res.header('Access-Control-Allow-Origin', "*"); res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); res.header('Access-Control-Allow-Headers', 'Content-Type'); next();
})

app.get( '/api/data', ( req, res ) => {
    return scrapeIt("http://www.ksl.com/auto/#findCar-newest", {
    title: ".listing-group div",
    desc: ".header h2",
    avatar: {
        selector: ".header img",
        attr: "src"
    }
}).then(page => {
    console.log( 'passing data', page );
    return res.status( 200 ).json( page );
});
} );

app.listen( 3000, () => {
    console.log( 'app running on port 3000' );
} );