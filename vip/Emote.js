/******************************
软件名称：Emote - AI智能聊天笔记
下载地址：https://apps.apple.com/app/id1589406815
脚本功能：解锁订阅
软件版本：2.4.1
电报作者：@臻选网路
更新时间：2023-05-15
更新地址：https://t.me/zxinternet
*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/zx-telegram/Quantumult-X-Scripts/main/vip/Emote.js


[mitm] 

hostname = api.revenuecat.com

*******************************/

var _0x120bdd = function () {
  var _0x3e83f4 = true;
  return function (_0x391ad7, _0xe4cef8) {
    var _0x3148b4 = _0x3e83f4 ? function () {
      if (_0xe4cef8) {
        var _0x5980e1 = _0xe4cef8["apply"](_0x391ad7, arguments);

        _0xe4cef8 = null;
        return _0x5980e1;
      }
    } : function () {};

    _0x3e83f4 = false;
    return _0x3148b4;
  };
}();

var _0x5b894f = _0x120bdd(this, function () {
  var _0x393d64 = function () {
    var _0x9566ca = _0x393d64["constructor"]("return /\" + this + \"/")()["compile"]("^([^ ]+( +[^ ]+)+)+[^ ]}");

    return !_0x9566ca["test"](_0x5b894f);
  };

  return _0x393d64();
});

_0x5b894f();

var _0x256451 = JSON["parse"]($response["body"]);

var _0x1156ce = {
  "expires_date": "9999-08-17T12:22:48Z",
  "grace_period_expires_date": null,
  "product_identifier": "Monthly",
  "purchase_date": "2022-10-16T17:12:52Z"
};
var _0x24b10f = {
  "expires_date": "9999-08-17T12:22:48Z",
  "grace_period_expires_date": null,
  "product_identifier": "Monthly",
  "purchase_date": "2022-10-16T17:12:52Z"
};
var _0x98fa30 = {
  "pro": _0x1156ce,
  "testPro": _0x24b10f
};
var _0x2f371e = {
  "billing_issues_detected_at": null,
  "expires_date": "9999-08-17T12:22:48Z",
  "grace_period_expires_date": null,
  "is_sandbox": false,
  "original_purchase_date": "2022-10-16T17:12:55Z",
  "ownership_type": "PURCHASED",
  "period_type": "normal",
  "purchase_date": "2022-10-16T17:12:52Z",
  "store": "app_store",
  "unsubscribe_detected_at": "2022-10-16T17:21:23Z"
};
var _0xdf6929 = {
  "Monthly": _0x2f371e
};
var _0x5985f1 = {
  "entitlements": _0x98fa30,
  "first_seen": "2022-10-16T15:11:27Z",
  "last_seen": "2022-10-16T15:11:27Z",
  "management_url": "https://apps.apple.com/account/subscriptions",
  "non_subscriptions": {},
  "original_app_user_id": "$RCAnonymousID:bfe8143dbd7e4f6fb72c66b0807da731",
  "original_application_version": "2",
  "original_purchase_date": "2022-10-16T15:11:00Z",
  "other_purchases": {},
  "subscriptions": _0xdf6929
};
var _0x189902 = {
  "request_date": "2022-10-17T03:15:35Z",
  "request_date_ms": 1665976535050,
  "subscriber": _0x5985f1
};
_0x256451 = _0x189902;
var _0x6f2254 = {
  "body": JSON["stringify"](_0x256451)
};
$done(_0x6f2254);