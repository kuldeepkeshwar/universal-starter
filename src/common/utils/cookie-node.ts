import {Cookie} from "./cookie";
import {CookieOptionsArgs} from "./cookie-options-args.model";
/**
 * Created by kuldeepkeshwar on 21/09/16.
 */

export class CookieNode implements Cookie{
  constructor(){
    console.log('CookieNode');

  }

  get(key:string):string{
    return "";
  }

  put(key: string, value: string, options?: CookieOptionsArgs) {

  }
  getAll(): Object{
    return {};//Zone.current.get('req').cookies;
  }
}
