/* eslint-disable prettier/prettier */
import { ExerciseType, MuscleGroup, ExerciseIntensity } from './ExerciseModel';

/* Base filter for exercises in a workout. */
export interface WorkoutFilter {
  Type             : Array<ExerciseType>; //multi-select
  MuscleFocus      : Array<MuscleGroup>;  //multi-select
  IntensityLevel   : ExerciseIntensity;   //single-select
  numberOfExercises: number;
}
