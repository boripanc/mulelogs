const pgp = require('pg-promise')({
    // Initialization Options
});

// Preparing the connection details:
//const cn = 'postgresql://boripan.c:OKi3pW1IXHwA@ep-lucky-band-136364.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
//const cn = 'postgres://postgres:W9UUpbfIhKcqCh87yik2K0kTO8ZeuA4k3NH5dcBjEZArLXr99oBy3BQIfKOgQFIJ@e4k4okwkc4w4co0s4so48go4:5432/postgres';
const cn = 'postgres://postgres:quzRXrrMpqkdRKu5iK7dPXECbCf1IM8uxogQjmTWG48aFgbqlHWxEUUr97ev8bd3@xksog8ogc8g40cos0wccwk4g.teddybiere.info:5433/postgres';
// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;