/* eslint-disable prettier/prettier */
/* One set of an exercise, denoted by W x R. */
interface ExerciseSet {
  readonly Weight: number;
  readonly Reps  : number;
  IsCompleted    : boolean;
  Type           : ExerciseType;
  MuscleFocus    : MuscleGroup;
  IntensityLevel : ExerciseIntensity;
}

/* Base Exercise model. */
export interface Exercise {
  readonly Name  : string;
  readonly Sets  : ReadonlyArray<Omit<ExerciseSet, 'IsCompleted'>>;
  readonly Unit  : MeasurementSystem;
  readonly Image?: unknown; //TBD
  readonly Media?: unknown; //TBD
  RestTime?      : number;  //TBD, editable by user for long rest periods?
}

/* ExerciseGenerate */
export interface ExerciseGenerate extends Exercise {
  IsLocked: boolean;
}

/* ExerciseDo */
export interface ExerciseDo extends Omit<Exercise, 'Sets'> {
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
