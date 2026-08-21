const logger = (req, res, next) => {
    const startTime = Date.now();

    res.on("finish", () => {
        const time = Date.now() - startTime;

        console.log(
            `${req.method} ${req.originalUrl} - ${time}ms`
        );
    });

    next();
};

module.exports = logger;