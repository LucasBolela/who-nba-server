#!/usr/bin/env node

import 'dotenv/config'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { Config } from './config'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { ExceptionHandler } from './middlewares/exceptionHandler'

const app = express()

const nodePath = resolve(process.argv[1])
const modulePath = resolve(fileURLToPath(import.meta.url))
const isCLI = nodePath === modulePath

export default function main(port: number = Config.port) {
  // body-parser
  app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  app.use(
    cors({
      origin: ['*'],
    }),
  )

  app.use('/', routes)

  app.use((req, res) => {
    res.status(404).send('Page not Found')
  })

  app.use(ExceptionHandler)

  if (isCLI) {
    app.listen(port, () =>
      // eslint-disable-next-line no-console
      console.log(`🚀 Server running on: http://localhost:${port}`),
    )
  }

  return app
}

if (isCLI) {
  main()
}
