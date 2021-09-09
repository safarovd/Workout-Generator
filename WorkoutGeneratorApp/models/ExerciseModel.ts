/* eslint-disable prettier/prettier */
/* One set of an exercise, denoted by W x R. */
interface ExerciseSet {
  IntensityLevel: ExerciseIntensity;
  NumberOfSets  : number;
  Weight        : number;
  Reps          : number;
  Unit          : MeasurementSystem;
  IsCompleted   : boolean;
  RestTime?     : number;  //TBD, editable by user for long rest periods?
}

/* Base Exercise model. */
export interface Exercise {
  Name       : string;
  Image?     : unknown; //TBD
  Media?     : unknown; //TBD
  Type       : ExerciseType;
  MuscleFocus: MuscleGroup;
}

/* ExerciseView */
export interface ExerciseView extends Exercise {
  Sets: ReadonlyArray<Omit<ExerciseSet, 'IsCompleted'>>;
}

/* ExerciseGenerate */
export interface ExerciseGenerate extends Exercise {
  Sets: ReadonlyArray<Omit<ExerciseSet, 'IsCompleted'>>;
  IsLocked: boolean;
}

/* ExerciseDo */
export interface ExerciseDo extends Exercise {
  Sets: Array<ExerciseSet>;
}

export enum ExerciseType {
  All          = 'All',
  Barbell      = 'Barbell',
  Dumbbell     = 'Dumbbell',
  Kettlebell   = 'Kettlebell',
  Machine      = 'Machine',
  Cable        = 'Cable',
  MedicineBall = 'Medicine Ball',
  Bands        = 'Bands',
  Bodyweight   = 'Bodyweight',
  Aerobic      = 'Aerobic',
  Core         = 'Core',
}

export enum MuscleGroup {
  All       = 'All',
  FullBody  = 'Full Body',
  UpperBody = 'Upper Body',
  LowerBody = 'Lower Body',
  Legs      = 'Legs',
  Arms      = 'Arms',
  Chest     = 'Chest',
  Back      = 'Back',
  Biceps    = 'Biceps',
  Triceps   = 'Triceps',
  Shoulders = 'Shoulders',
}

export enum ExerciseIntensity {
  Low,
  Medium,
  High,
}

enum MeasurementSystem {
  Standard, //US standard measurement
  Metric,   //Metric System
}
