import { createAction, props } from "@ngrx/store";
 

export const SearchCity = createAction(
  '[Fetch Cities Weather] Search ',
    props<{ city: string }>()
)

export const Success = createAction(
  '[Fetch Cities Weather] Search Success',
    props<{ payload : any }>()
);

export const Error = createAction(
  '[Fetch Cities Weather] Search Error',
    props<{ error: any }>()
);

 