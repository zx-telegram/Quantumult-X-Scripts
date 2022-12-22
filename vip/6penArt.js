/******************************
软件名称：6pen Art - AI生成艺术作品
下载地址：https://apps.apple.com/app/id1628711546
脚本功能：解锁下载功能
软件版本：2.4
电报作者：@臻选网路
更新时间：2022-12-23
更新地址：https://t.me/zxinternet
*******************************

[rewrite_local]

^https:\/\/api\.6pen\.art url script-response-body https://raw.githubusercontent.com/zx-telegram/Quantumult-X-Scripts/main/vip/6penArt.js

[mitm] 

hostname = api.6pen.art

*******************************/

var _0x19db=["\x74\x72\x75\x65","\x72\x65\x70\x6C\x61\x63\x65","\x72\x65\x6D\x61\x69\x6E\x73\x22\x3A\x39\x39\x39\x39","\x6E\x61\x6D\x65\x22\x3A\x22\x54\x65\x6C\x65\x67\x72\x61\x6D\uFF1A\x40\u81FB\u9009\u7F51\u8DEF\x22","\x65\x78\x70\x69\x72\x65\x64\x5F\x61\x74\x22\x3A\x22\x39\x39\x39\x39\x2D\x31\x31\x2D\x31\x39\x20\x31\x36\x3A\x31\x38\x3A\x32\x35\x22","\x76\x69\x70\x22\x3A\x31","\x62\x6F\x64\x79"];var body=$response[_0x19db[6]][_0x19db[1]](/vip":\d/g,_0x19db[5])[_0x19db[1]](/expired_at":null/g,_0x19db[4])[_0x19db[1]](/name":".*?"/g,_0x19db[3])[_0x19db[1]](/remains":\d/g,_0x19db[2])[_0x19db[1]](/false/g,_0x19db[0]);$done({"\x62\x6F\x64\x79":body})