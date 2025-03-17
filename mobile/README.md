# Simple Flutter Mobile App

This is a minimalist Flutter mobile application that displays a centered text with a counter that increments when a floating action button is pressed.

## Prerequisites

- [Flutter SDK](https://flutter.dev/docs/get-started/install)
- Android Studio or VS Code with Flutter extension
- For iOS deployment: macOS with Xcode
- For Android deployment: Android SDK

## Setup

1. **Install Flutter SDK**:
   - Follow the [official installation guide](https://flutter.dev/docs/get-started/install) for your operating system
   - Run `flutter doctor` to verify your installation and identify any dependencies you need to install

2. **Clone this repository**:
   ```
   git clone <repository-url>
   cd mobile
   ```

3. **Get dependencies**:
   ```
   flutter pub get
   ```

## Running the App

### Development

Run the app in debug mode:

```
flutter run
```

This will launch the app on a connected device or emulator.

### Building for Production

#### Android

Build an APK:
```
flutter build apk
```

The APK will be available at `build/app/outputs/flutter-apk/app-release.apk`

For an app bundle:
```
flutter build appbundle
```

#### iOS (requires macOS)

Build an iOS app:
```
flutter build ios
```

Then open the Xcode project:
```
open ios/Runner.xcworkspace
```

Use Xcode to archive and distribute your app.

## Deployment

### Android

1. Create a keystore:
   ```
   keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
   ```

2. Reference the keystore in `android/key.properties`

3. Configure signing in `android/app/build.gradle`

4. Build the APK with:
   ```
   flutter build apk --release
   ```
   
5. Upload to Google Play Console: https://play.google.com/console/

### iOS

1. Register an Apple Developer account

2. Configure app signing in Xcode

3. Create an app record on App Store Connect

4. Archive your app in Xcode

5. Upload to App Store Connect using Xcode

6. Submit for review

## App Structure

The app follows a simple structure:
- `lib/main.dart` - Main application code
- `pubspec.yaml` - Project dependencies
- `android/` - Android-specific configuration
- `ios/` - iOS-specific configuration

## Customization

To modify the app:
1. Edit `lib/main.dart` to change functionality
2. Update app icons in `android/app/src/main/res/` and `ios/Runner/Assets.xcassets/`
3. Change app name in `android/app/src/main/AndroidManifest.xml` and `ios/Runner/Info.plist`
