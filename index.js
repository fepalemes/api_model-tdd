const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const routes = require("./src/routes/index.routes");

const app = express();
const portaExec = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*** Security ***/
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                frameAncestors: ['app://*', 'http://localhost:*'],
            },
        },
        frameguard: false,
    }),
)

// Swagger configs
const swaggerConfig = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "API Model TDD",
            description: "Node JS API model in Docker using Express, Swagger and unit tests in Jest (TDD)",
            contact: {
                email: "fepalemes@gmail.com"
            },
            version: "1.0.0"
        },
        servers: [
            {
                url: `http://localhost:${portaExec}/api`,
                description: "API - Local"
            }
        ],
        externalDocs: {
            description: 'Read more for API Model TDD',
            url: 'https://github.com/fepalemes/api_model-tdd'
        },
    },
    apis: ['./src/routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerConfig)
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.get('/api-doc-json', (req, res) => {
    res.json(swaggerDocs).status(200)
})

app.use(routes)

app.listen(portaExec, () => console.log('========== APLICAÇÃO RODANDO =========='))