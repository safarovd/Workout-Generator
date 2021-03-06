# Workout-Generator

## Description:

This application is meant to be a simple work generator. When struggling to decide what you want to do in the gym, simply utilize our app and generate a workout custom to your needs and specifications. As of 2021 all development was done using React-Native.

## Requirements ([Version 1](https://www.figma.com/file/JkizWizhH3KTMOHfdbuYz5/Workout-Generator-App-Mock-Up-v1?node-id=0%3A1)):

- Flyout: Options or App Name
  - Quick Filters (previously saved filter fields)
  - Saved Workouts
  - Contact
  - Settings
- Screen: Generate Workout
  - Filter button (Modal?, downward screen slider?) (**impl as own `workout` component**)
  - Generate button
  - Displays workouts and images?
  - Ability to shuffle workout (select prefered exercise and regen the rest)
  - Ability to select Quick Filters
  - Save workout (with preferences)
- Screen: View Workout Screen (**impl as own `WorkoutView` component**)
  - Displays generated workout
  - Start Workout
- Screen: Do Workout Screen 
  - Displays generated workout
  - Indicator for exercise completion
- Screen: Saved Workouts
  - Entire workout can be saved to devices memory
  - Multiple workouts can be saved
  - Select workout (to view workout and do workout)
  - Name workouts
  - Delete workouts
- Screen: Quick Filter
  - Bundles of filter fields saved to memory
  - Use filter/Generate workout with filter
  - Delete filter
  - Modify filter
  - Named prefered filter entry
  - Add new prefered filters entry (Maybe)
  - Flag as prefered muscle group workout (Maybe)

## Requirements (Version 2):

- TBD...
- Screen: Getting Started (user input)
  - Muscle Group
  - Specific Equipment
  - Optional Field: Max number for the big four (Bench, Squat, Deadlift, OHP)
- User Input:
  - Focuses (Mobility, Cardio, Stregth, Aesthetics, etc.)
  - Diffculty?
  - Rest Timer ~ Associate with "Diffculty"
- Potentially link to youtube form videos (Modal?, Popup?)

- Implement Machine Learning

## Setting/Starting up your environment:

**Step 1**: Install NPM version 12 or above (windows)
To redirect to installation page, [click here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

**Step 2**: Install Expo CLI as it simplifies development efforts (removes the necessity to develop for iOS or Android natively).

```cmd
npm i -g expo cli
```

**Step 3**: Install Expo Client on your phone.

**Step 4**: Change directory to you Expo folder structure.

**Step 5**: Start app.

```cmd
npm install
npm start
```

You should see your browser point to the `Metro Bundler`.

## Structural Details:

**Assets Folder**:

> Here we store all audio, images and video files, in short, any asset we want to bundle with our app.

**App.js**

> Basic React-Native component. Must be located at application root (to my knowledge)

~File to be continued...~
