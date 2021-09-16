/* eslint-disable prettier/prettier */
import { Exercise, ExerciseDo, ExerciseGenerate } from './ExerciseModel';

/* Base Workout model. */
export interface Workout {
  Name     : string;
  Exercises: Array<Exercise | ExerciseGenerate | ExerciseDo>;
}
