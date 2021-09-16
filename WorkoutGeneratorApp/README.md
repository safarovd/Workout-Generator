# Workout Generator App

Follow the [React Native Developer Setup](https://reactnative.dev/docs/environment-setup) guide.

## Android Development

- [Download and Install Android Studio](https://developer.android.com/studio). Make sure `Android SDK`, `Android SDK Platform`, and `Android Virtual Device` are checked.
  For optimal performance with virtual devices, see [this article](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html).

- Android Studio installs the latest Android SDK by default, but you can go to `Configure (bottom right) -> SDK manager to install additional SDKs`.

  **Note: React Native apps need Android 10 and above.**.

  - Make sure your `Android/Sdk` is located on a path that has no whitespaces.

- Configure the Android Studio environment variables.

  - Windows:
    - Search Windows `Edit environment variables for your account` or follow
    - `Control Panel -> User Accounts -> User Accounts -> Change my environment variables navigate to the Environment Variables window`.
    - Under `User variables for {user}`, click `New...` and set name to `ANDROID_HOME`, value to Android SDK path (typically `%LOCALAPPDATA%\Android\Sdk`).
    - Copy and paste `Get-ChildItem -Path Env:\` into powershell to verify it has been added. If you do not see the path, restart either powershell or your PC.
    - In the same window, add platform-tools to Path variable (typically `%LOCALAPPDATA%\Android\Sdk\platform-tools`).
  - MacOS:
    - Add this to your `~/.bash_profile`:
      ```bash
      # ANDROID_HOME env variable for Android Studio:
      export ANDROID_HOME=$HOME/Library/Android/sdk
      export PATH=$PATH:$ANDROID_HOME/emulator
      export PATH=$PATH:$ANDROID_HOME/tools
      export PATH=$PATH:$ANDROID_HOME/tools/bin
      export PATH=$PATH:$ANDROID_HOME/platform-tools
      ```

- Configure the Java 8 JDK environment variable

  - MacOS:

    - Run this command to list all of your Java JDKs:

      ```bash
      /usr/libexec/java_home -V
      ```

      The output should be similar to this:

      ```bash
      22:48 $ /usr/libexec/java_home -V
      Matching Java Virtual Machines (2):
          1.8.231.11 (x86_64) "Oracle Corporation" - "Java" /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
          1.8.0_201 (x86_64) "Oracle Corporation" - "Java SE 8" /Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home
      /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
      ```

    - Set the `JAVA_HOME` environment variable to the Java path from the above output that has `jdk` in it. This is what I would put in my `~/.bash_profile` from the example above:
      ```bash
      # Set JAVA_HOME
      export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home
      ```

- Setting up Android Device for Testing:

  - If using a physical device, plug in with USB cable and follow [these directions](https://reactnative.dev/docs/running-on-device).
  - If using a virtual device, [create a new AVD](https://developer.android.com/studio/run/managing-avds) if you haven't, go into the AVD Manager and run the virtual device. **Note: AVD should be API Level 29+ image.**

- Run the React Native application. In the project folder:
  - Run `npm install` to install all the required Node packages if you haven't done it already.
  - Run one terminal with `npx react-native start` for Metro bundler.
  - Run another terminal with `npx react-native run-android` to run the app in the physical or virtual device.

### Troubleshooting

- If you ever experience this error: `error listen EADDRINUSE: address already in use :::8081.` - run the below commands
  ```cmd
  netstat -ano|findstr "PID :8081"
  taskkill /pid <PID> /f
  ```
- For using `react-navigation` a ton of dependencies needed to be install. Run npm install and pray ti works, if not run these then run npm install again:
  ```cmd
  delete node_modules and package-lock.json
  npm install
  react-native start --reset-cache
  ```

## iOS Development

- Follow the **React Native Developer Setup** guide above.

- After installing CocoaPods, navigate to the `ios` directory in the project folder and install dependencies by running this command:

  ```
  pod install
  ```

- Run the React Native application. In the project folder:
  - Run `npm install` to install all the required Node packages if you haven't done it already.
  - Run one terminal with `npx react-native start` for Metro bundler.
  - Run another terminal with `npx react-native run-ios` to run the app in the physical or virtual device.
