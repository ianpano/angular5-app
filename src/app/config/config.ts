import {Injectable} from '@angular/core';
import { settings } from 'cluster';
@Injectable()

//This is where we can set all the values we will use in different 
//places in our code. e.g. URL of the API
    //usage eg. this.config.setting['PathAPI']
export class AppConfig{

    private _config: { [key: string]: string };

    constructor() {

        this._config = { 

            PathAPI: 'http://localhost:50498/api/'

        };

    }
    //

    get setting():{ [key: string]: string } {

        return this._config;

    }
    
    get(key: any) {

        return this._config[key];

    }
};