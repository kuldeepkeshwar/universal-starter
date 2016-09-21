// /**
//  * Created by kuldeepkeshwar on 21/09/16.
//  */
//
//
// import 'angular2-universal/polyfills';
// import { enableProdMode } from '@angular/core';
// // Angular 2 Universal
// import { createEngine } from 'angular2-express-engine';
//
// import * as path from 'path';
// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import * as  compression from 'compression';
// import * as  cookieParser from 'cookie-parser';
// import * as helmet from 'helmet';
//
// import {sessionMiddleware} from "./server/middleware/session";
// import {loggingMiddleware} from "./server/middleware/logger";
// import {globalErrorHandler} from "./server/middleware/error";
// import {CustomValidators} from "./server/middleware/custom-validators";
// import {api} from "./server/routes/api";
// import {pages} from "./server/routes/pages";
//
// export class Server {
//
//   private static _instance:Server;
//   private app:express.Express;
//   private ROOT:string;
//
//   constructor() {
//
//     //For Singleton class
//     if(Server._instance){
//       throw new Error("Error: 'Server is already initialized.'");
//     }
//
//     enableProdMode();
//     this.app = express();
//     this.app.use(sessionMiddleware);
//     this.ROOT = path.join(path.resolve(__dirname, '..'));
//     this.config();
//     this.routes();
//     this.app.listen(3000, () => {
//       console.log('Listening on: http://localhost:3000');
//     });
//   }
//   public static bootstrap():Server {
//     Server._instance = new Server();
//     return Server._instance;
//   }
//
//   private config():void {
//     this.app.use(loggingMiddleware);
//     this.app.use(cookieParser());
//     this.app.use(helmet());
//     this.app.use(compression());
//     this.app.engine('.html',  createEngine({}));
//     this.app.set('views', __dirname);
//     this.app.set('view engine', 'html');
//     this.app.use(bodyParser.json());
//     this.app.use(CustomValidators);
//     this.app.use(express.static(this.ROOT, {index: false}));
//   }
//   private initApi():void{
//     this.app.use('/api',api);
//   }
//   private initPages(){
//     pages(this.app);
//
//   }
//   private routes():void{
//     this.initApi();
//     this.initPages();
//     this.app.use(globalErrorHandler);
//   }
// }
