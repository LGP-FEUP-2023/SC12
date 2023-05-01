"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _reactNative = require("react-native");
var _NativePermissionsModule = _interopRequireDefault(require("./NativePermissionsModule"));
var _unsupportedPlatformMethods = require("./unsupportedPlatformMethods");
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TIRAMISU_VERSION_CODE = 33;
async function openSettings() {
  await _NativePermissionsModule.default.openSettings();
}
function check(permission) {
  return _NativePermissionsModule.default.checkPermission(permission);
}
async function request(permission, rationale) {
  if (rationale) {
    const shouldShowRationale = await _NativePermissionsModule.default.shouldShowRequestPermissionRationale(permission);
    if (shouldShowRationale) {
      const {
        title,
        message,
        buttonPositive,
        buttonNegative,
        buttonNeutral
      } = rationale;
      return new Promise(resolve => {
        const buttons = [];
        if (buttonNegative) {
          const onPress = () => resolve(_NativePermissionsModule.default.checkPermission(permission));
          buttonNeutral && buttons.push({
            text: buttonNeutral,
            onPress
          });
          buttons.push({
            text: buttonNegative,
            onPress
          });
        }
        buttons.push({
          text: buttonPositive,
          onPress: () => resolve(_NativePermissionsModule.default.requestPermission(permission))
        });
        _reactNative.Alert.alert(title, message, buttons, {
          cancelable: false
        });
      });
    }
  }
  return _NativePermissionsModule.default.requestPermission(permission);
}
async function checkNotifications() {
  if (_utils.platformVersion < TIRAMISU_VERSION_CODE) {
    return _NativePermissionsModule.default.checkNotifications();
  }
  const status = await check('android.permission.POST_NOTIFICATIONS');
  return {
    status,
    settings: {}
  };
}
async function requestNotifications() {
  if (_utils.platformVersion < TIRAMISU_VERSION_CODE) {
    return _NativePermissionsModule.default.checkNotifications();
  }
  const status = await request('android.permission.POST_NOTIFICATIONS');
  return {
    status,
    settings: {}
  };
}
function checkMultiple(permissions) {
  const dedup = (0, _utils.uniq)(permissions);
  return _NativePermissionsModule.default.checkMultiplePermissions(dedup);
}
function requestMultiple(permissions) {
  const dedup = (0, _utils.uniq)(permissions);
  return _NativePermissionsModule.default.requestMultiplePermissions(dedup);
}
const methods = {
  check,
  checkLocationAccuracy: _unsupportedPlatformMethods.checkLocationAccuracy,
  checkMultiple,
  checkNotifications,
  openLimitedPhotoLibraryPicker: _unsupportedPlatformMethods.openLimitedPhotoLibraryPicker,
  openSettings,
  request,
  requestLocationAccuracy: _unsupportedPlatformMethods.requestLocationAccuracy,
  requestMultiple,
  requestNotifications
};
exports.methods = methods;
//# sourceMappingURL=methods.android.js.map