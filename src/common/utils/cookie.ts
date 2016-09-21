import {CookieOptions, BaseCookieOptions} from "./base-cookie-options";
import {Injectable, Optional} from '@angular/core';
import {Json, isPresent, isBlank, isString} from '@angular/common/src/facade/lang';
import {CookieOptionsArgs} from "./cookie-options-args.model";
import {Zone} from "zone.js";
/**
 * Created by kuldeepkeshwar on 21/09/16.
 */

export abstract class Cookie{
  abstract get(key: string): string
  abstract put(key: string, value: string, options?: CookieOptionsArgs)
  abstract getAll(): Object
}

@Injectable()
export class CookieBrowser implements Cookie{
  constructor(@Optional() private _defaultOptions: CookieOptions) {
    console.log('CookieBrowser');
  }
  get(key: string): string { return (<any>this._cookieReader())[key]; }
  getObject(key: string): Object {
    let value = this.get(key);
    return value ? Json.parse(value) : value;
  }
  getAll(): Object { return <any>this._cookieReader(); }
  put(key: string, value: string, options?: CookieOptionsArgs) {
    this._cookieWriter()(key, value, options);
  }

  putObject(key: string, value: Object, options?: CookieOptionsArgs) {
    this.put(key, Json.stringify(value), options);
  }
  remove(key: string, options?: CookieOptionsArgs): void {
    this._cookieWriter()(key, undefined, options);
  }

  removeAll(): void {
    let cookies = this.getAll();
    Object.keys(cookies).forEach(key => { this.remove(key); });
  }

  private _cookieReader(): Object {
    let rawDocument = document;
    let lastCookies = {};
    let lastCookieString = '';
    let that = this;

    let cookieArray: string[], cookie: string, i: number, index: number, name: string;
    let currentCookieString = rawDocument.cookie || '';
    if (currentCookieString !== lastCookieString) {
      lastCookieString = currentCookieString;
      cookieArray = lastCookieString.split('; ');
      lastCookies = {};

      for (i = 0; i < cookieArray.length; i++) {
        cookie = cookieArray[i];
        index = cookie.indexOf('=');
        if (index > 0) {  // ignore nameless cookies
          name = that._safeDecodeURIComponent(cookie.substring(0, index));
          if (isBlank((<any>lastCookies)[name])) {
            (<any>lastCookies)[name] = that._safeDecodeURIComponent(cookie.substring(index + 1));
          }
        }
      }
    }
    return lastCookies;
  }

  private _cookieWriter() {
    let that = this;
    var rawDocument = document;

    return function(name: string, value: string, options?: CookieOptionsArgs) {
      rawDocument.cookie = that._buildCookieString(name, value, options);
    };
  }

  private _safeDecodeURIComponent(str: string) {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }

  private _buildCookieString(name: string, value: string, options?: CookieOptionsArgs): string {
    var cookiePath = '/';
    var path: string, expires: any;
    var defaultOpts =
      this._defaultOptions || new CookieOptions(<CookieOptionsArgs>{path: cookiePath});
    var opts: CookieOptions = this._mergeOptions(defaultOpts, options);
    expires = opts.expires;
    if (isBlank(value)) {
      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
      value = '';
    }
    if (isString(expires)) {
      expires = new Date(expires);
    }

    var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    str += opts.path ? ';path=' + opts.path : '';
    str += opts.domain ? ';domain=' + opts.domain : '';
    str += expires ? ';expires=' + expires.toUTCString() : '';
    str += opts.secure ? ';secure' : '';
    var cookieLength = str.length + 1;
    if (cookieLength > 4096) {
      console.log(
        `Cookie \'${name}\' possibly not set or overflowed because it was too large (${cookieLength} > 4096 bytes)!`);
    }

    return str;
  }

  private _mergeOptions(defaultOpts: BaseCookieOptions,
                        providedOpts?: CookieOptionsArgs): CookieOptions {
    let newOpts = defaultOpts;
    if (isPresent(providedOpts)) {
      return newOpts.merge(new CookieOptions(providedOpts));
    }
    return newOpts;
  }
}
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
    return Zone.get('req').cookies;
  }
}
