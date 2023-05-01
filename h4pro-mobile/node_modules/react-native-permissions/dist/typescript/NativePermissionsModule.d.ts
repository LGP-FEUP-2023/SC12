import { TurboModule } from 'react-native';
type NotificationsResponse = {
    status: Object;
    settings: Object;
};
export interface Spec extends TurboModule {
    checkNotifications(): Promise<NotificationsResponse>;
    openSettings(): Promise<void>;
    checkMultiplePermissions(permissions: string[]): Promise<Object>;
    checkPermission(permission: string): Promise<string>;
    requestMultiplePermissions(permissions: string[]): Promise<Object>;
    requestPermission(permission: string): Promise<string>;
    shouldShowRequestPermissionRationale(permission: string): Promise<boolean>;
    check(permission: string): Promise<string>;
    checkLocationAccuracy(): Promise<string>;
    getConstants(): {
        available?: string[];
    };
    openLimitedPhotoLibraryPicker(): Promise<boolean>;
    request(permission: string): Promise<string>;
    requestLocationAccuracy(purposeKey: string): Promise<string>;
    requestNotifications(options: string[]): Promise<NotificationsResponse>;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativePermissionsModule.d.ts.map