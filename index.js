const METHOD_COLORS = {
    GET: '\x1b[32m',   // Green
    POST: '\x1b[34m',  // Blue
    PUT: '\x1b[35m',   // Magenta
    PATCH: '\x1b[35m', // Magenta
    DELETE: '\x1b[31m' // Red
};

const STATUS_COLORS = {
    success: '\x1b[32m',  // 2xx - Green
    redirect: '\x1b[33m', // 3xx - Amarelo
    error: '\x1b[31m'     // 4xx e 5xx - Red
};

const logger = (req, res, next) => {
    const start = performance.now();
    const { method, url } = req;

    const methodColor = METHOD_COLORS[method] || '';
    console.log(`[${methodColor}${method}\x1b[0m] ${url}`);

    res.on('finish', () => {
        const elapsed = (performance.now() - start).toFixed(2);
        const statusCode = res.statusCode;

        const statusColor = 
            statusCode < 300 ? STATUS_COLORS.success : 
            statusCode < 400 ? STATUS_COLORS.redirect : 
            STATUS_COLORS.error;

        console.log(`[${methodColor}${method}\x1b[0m] ${url} ${statusColor}${statusCode}\x1b[0m - ${elapsed}ms`);
    });

    next();
};

module.exports = logger;
