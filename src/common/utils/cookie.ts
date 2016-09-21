import {CookieOptionsArgs} from "./cookie-options-args.model";
/**
 * Created by kuldeepkeshwar on 21/09/16.
 */

export abstract class Cookie{
  abstract get(key: string): string
  abstract put(key: string, value: string, options?: CookieOptionsArgs)
  abstract getAll(): Object
}


