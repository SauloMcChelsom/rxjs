const express = require("express");
const bodyParser = require("body-parser");

export class AppServer{

  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()

    // server css as static
    router.use(express.static(__dirname));

    // get our app to use body parser 
    router.use(bodyParser.urlencoded({ extended: true }))

    router.get("/", (req:any, res:any) => {
      res.sendFile(__dirname + "/app/subscribe.html");
    });
    this.express.use('/', router)
  }
}


const port = process.env.PORT || 3000

export const App = new AppServer().express.listen(port, (err:any) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})