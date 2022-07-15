import path from 'path'
import express from 'express'

/**
 * Settings
 * - ssrBuild (string) - client app build absolute path
 */
export const serveAppStatic = settings => (req, res, next) =>
    res.sendFile(path.join(settings.root, settings.build, 'index.html'))


/**
 * Settings
 * - build (string) - client app build absolute path
 */
export const serveBuild = settings =>
    express.static(path.join(settings.root, settings.build))

export const createRouter = (receivedSettings = {}) => {
    const router = express.Router()

    const defaultSettings = {
        root: process.cwd(),
        src: 'src',
        build: 'node_build/app',
        buildSrc: 'node_build/src',
        buildSsr: 'node_build/ssr',
        entryPoint: 'index.ssr.js',
        port: '8080',
        disableJs: 'no',
        renderTimeout: 5000,
        renderLimit: 10,
        embedExt: '.png,.jpg,jpeg,.gif,svg',
        embedLimit: 10000,
        useCache: 'yes',
        sendHtml: 'yes',
    }

    const settings = {
        ...defaultSettings,
        ...receivedSettings,
    }

    // Default routes handling
    router.get('/', serveAppStatic(settings))
    router.use(serveBuild(settings))
    router.get('*', serveAppStatic(settings))

    return router
}

export default createRouter
