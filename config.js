const config = {
    mongoUrl: process.env.MONGO_URI,
    port: process.env.PORT || 3000,
    hots: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    files: process.env.FILES || '/files/'

}

module.exports = config