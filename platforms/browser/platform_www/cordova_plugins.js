cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
        "id": "cordova-plugin-browsertab.BrowserTab",
        "pluginId": "cordova-plugin-browsertab",
        "clobbers": [
            "cordova.plugins.browsertab"
        ]
    },
    {
        "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
        "id": "cordova-plugin-buildinfo.BuildInfo",
        "pluginId": "cordova-plugin-buildinfo",
        "clobbers": [
            "BuildInfo"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "id": "cordova-plugin-globalization.GlobalizationError",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "id": "cordova-plugin-globalization.globalization",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/browser/moment.js",
        "id": "cordova-plugin-globalization.moment",
        "pluginId": "cordova-plugin-globalization",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-globalization/src/browser/GlobalizationProxy.js",
        "id": "cordova-plugin-globalization.GlobalizationProxy",
        "pluginId": "cordova-plugin-globalization",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
        "id": "cordova-universal-links-plugin.universalLinks",
        "pluginId": "cordova-universal-links-plugin",
        "clobbers": [
            "universalLinks"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-buildinfo": "2.0.2",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-customurlscheme": "4.3.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-globalization": "1.11.0",
    "cordova-plugin-inappbrowser": "3.0.0",
    "cordova-plugin-network-information": "2.0.1",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-universal-links-plugin": "1.2.1"
}
// BOTTOM OF METADATA
});