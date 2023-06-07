/******************************
软件名称：Chat AI: Ask Chatbot Assistant
下载地址：https://apps.apple.com/app/id1661016696
脚本功能：首次启动前挂载，点击「恢复」，永久解锁订阅，可无限使用 ChatGPT-4 模型
软件版本：2.9
电报作者：@臻选网路
更新时间：2023-06-07
更新地址：https://t.me/zxinternet
*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/zx-telegram/Quantumult-X-Scripts/main/vip/ChatAI.js


[mitm] 

hostname = api.revenuecat.com

*******************************/

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('y b = $s["b"];y l = 8["o"](b);l["v"]["e"] = {    "7": {        "f": "5-2-6:2:1",        "q": "c.n.h.z",        "r": "4-0-3:2:1"    }};l["v"]["w"] = {    "c.n.h.z": {        "a": k,        "f": "5-2-6:2:1",        "i": g,        "m": "4-0-3:2:1",        "p": "j",        "r": "4-0-3:2:1",        "t": "9",        "x": k    }};b = 8["u"](l);$d({ "b": b });',62,36,'04|04Z|05|09T05|2022|2029|26T05|Advanced|JSON|app_store|billing_issues_detected_at|body|com|done|entitlements|expires_date|false|gpt3|is_sandbox|normal|null|obj|original_purchase_date|palligroup|parse|period_type|product_identifier|purchase_date|response|store|stringify|subscriber|subscriptions|unsubscribe_detected_at|var|yearlyyy'.split('|'),0,{}))