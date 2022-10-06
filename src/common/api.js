/*
 * @Author: tandon
 * @QQ: 673829275
 * @email: tanie@foxmail.com
 * @Date: 2021-11-11 09:07:19
 * @LastEditors: tandon
 * @LastEditTime: 2021-11-25 14:27:48
 * @FilePath: \zbxcool\src\common\api.js
 */
import {get,post }from './http'


const api = {

    getList(name,params){
        return get(`/json/${name}List.json`, params);
    },   
    getWebList(params){
        return get(`/json/webList.json`, params);
    },
    getSiteList(params){
        return get(`/json/siteList.json`, params);
    },
    getSoftList(params){
        return get(`/json/softList.json`, params);
    },    

    
}

export default api;