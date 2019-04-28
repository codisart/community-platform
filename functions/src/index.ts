// node module imports
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as functions from 'firebase-functions'

// custom module imports
import * as DHSite from './DaveHakkensNL/dataMigrate'
import { migrateAvatar } from './DaveHakkensNL/avatarMigrate'
// import * as AnalyticsFunctions from './Analytics/analytics'
// import { syncCommentsCount } from './Analytics/comments'

console.log('functions init')

/************ GET and POST requests ************************************************
Redirect requests so that if a custom endpoint function exists we can call them
at /api/[endpoint]
As most functions are called from triggers the api is mostly just used for testing
************************************************************************************/
const app = express()
// use bodyparse to create json object from body
app.use(
  bodyParser.json({
    limit: '1mb',
  }),
)
// use cors
const corsOptions: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: true,
  preflightContinue: false,
}
// configure app to use cors by default
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.all('*', async (req, res, next) => {
  // get the endpoint based on the request path
  const endpoint = req.path.split('/')[1]
  // *** NOTE currently all request types handled the same, i.e. GET/POST
  // will likely change behaviour in future when required
  switch (endpoint) {
    case 'import-user-avatar':
      console.log('import user avatar', req.query)
      const user = req.query.user
      const url = req.query.url
      const meta = await migrateAvatar(url, user)
      res.send(meta)
      break
    default:
      res.send('invalid api endpoint')
  }
})
exports.api = functions.https.onRequest(app)

/************ Cloud Firestore Triggers ******************************************************
 Functions called in response to changes in Cloud Firestore database
 ************************************************************************************/
// exports.syncCommentsCount = functions.firestore
//   .document('discussions/{discussionId}/comments/{commentId}')
//   .onWrite(async (change, context) => {
//     await syncCommentsCount(context)
//   })

/************ Cron tasks ***********************************************************
Use pubsub to automatically subscribe to messages sent from cron.
Add/change schedule from `./functions-cron/appengine/cron.yaml`
************************************************************************************/

exports.weeklyTasks = functions.pubsub
  .topic('weekly-tick')
  .onPublish(async (message, context) => {
    console.log('weekly tick', message, context)
    // await BackupDatabase()
    console.log('backup complete')
  })

exports.dailyTasks = functions.pubsub
  .topic('daily-tick')
  .onPublish(async (message, context) => {
    console.log('daily tick', message, context)
    await DHSite.updateDHUserIds()
  })

/************ Storage Triggers ******************************************************
Functions called in response to changes to firebase storage objects
************************************************************************************/

// exports.imageResize = functions.storage.object().onFinalize(async object => {
// if (object.metadata && (object.metadata.resized || object.metadata.original))
//   return Promise.resolve()
// return ImageConverter.resizeStorageImage(object)
// })

/************ Callable *************************************************************
These can be called from directly within the app (passing additional auth info)
https://firebase.google.com/docs/functions/callable
Any functions added here should have a custom url rewrite specified in root firebase.json
to handle CORS preflight requests correctly
************************************************************************************/

// use service agent to gain access credentials for gcp with  given access scopes
// exports.getAccessToken = functions.https.onCall(
//   async (data: getAccessTokenData) => {
//     const token = await UtilsFunctions.getAccessToken(data.accessScopes)
//     return token
//   },
// )
// interface getAccessTokenData {
//   accessScopes: string[]
// }

// exports.getAnalytics = functions.https.onCall(
//   async (data: getAnalyticsData) => {
//     console.log('get analytics request received', data)
//     await AnalyticsFunctions.getAnalyticsReport(data.viewId, data.token)
//   },
// )
// interface getAnalyticsData {
//   viewId: string
//   token: string
// }
// exports.syncCommentsCount = functions.https.onCall(async () => {
//   console.log('sync comments count called')
// })

exports.DHSite_getUser = functions.https.onCall(
  async (mention_name: string) => {
    console.log('getting DH user profile', mention_name)
    try {
      const profile = await DHSite.getDHUserProfile(mention_name)
      return profile
    } catch (error) {
      throw new functions.https.HttpsError('not-found', error.message)
    }
  },
)
