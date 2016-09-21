import {Cookie} from "./cookie";
import {CookieOptionsArgs} from "./cookie-options-args.model";
/**
 * Created by kuldeepkeshwar on 21/09/16.
 */

export class CookieNode implements Cookie{
  private _cache={};
  constructor(){
    this._cache=Zone.current.get('req').cookie;
  }
  getAll(): Object{
    return Zone.current.get('req').cookies;
  }
  get(key: string): string {
    if(this._cache[key]){
      return this._cache[key];
    }
    return Zone.current.get('req').cookies[key];
  }
  put(key: string, value: string, options?: CookieOptionsArgs) {
    this._cache[key]=value;
    Zone.current.get('res').cookie(key,value,options);
  }
  remove(key: string, options?: CookieOptionsArgs): void {
    Zone.current.get('res').cookie(key,undefined);
  }
}
