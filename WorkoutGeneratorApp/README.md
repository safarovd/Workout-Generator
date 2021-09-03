# Workout Generator App
## [Developer Setup](https://reactnative.dev/docs/environment-setup)
#### Android development:
* [Download and Install Android Studio](https://developer.android.com/studio). Make sure `Android SDK`, `Android SDK Platform`, and `Android Virtual Device` are checked.
For optimal performance with virtual devices, see [this article](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html).
* Android Studio installs the latest Android SDK by default, but you can go to `Configure (bottom right) -> SDK manager to install additional SDKs`. **Note: React Native apps need Android 10 and above.**.
  * Make sure your `Android/Sdk` is located on a path that has no whitespaces.
* Configure the ANDROID_HOME **system** environment variable.
  * Search Windows `Edit environment variables for your account` or follow 
  * `Control Panel -> User Accounts -> User Accounts -> Change my environment variables navigate to the Environment Variables window`.
  * Under `User variables for {user}`, click `New...` and set name to `ANDROID_HOME`, value to Android SDK path (typically `%LOCALAPPDATA%\Android\Sdk`).
  * Copy and paste `Get-ChildItem -Path Env:\` into powershell to verify it has been added. If you do not see the path, restart either powershell or your PC.
* In the same window, add platform-tools to Path variable (typically `%LOCALAPPDATA%\Android\Sdk\platform-tools`).
* Android Devices:
  * If using a physical device, plug in with USB cable and follow [these directions](https://reactnative.dev/docs/running-on-device).
  * If using a virtual device, [create a new AVD](https://developer.android.com/studio/run/managing-avds) if you haven't, go into the AVD Manager and run the virtual device. **Note: AVD should be API Level 29+ image.**
* Run the React Native application. In the project folder:
  * Run one terminal with `npx react-native start` for Metro bundler.
  * Run another with `npx react-native run-android` to run the app in the physical or virtual device.
### iOS development:
* TBD
