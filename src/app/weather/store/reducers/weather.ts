import { Weather } from "src/app/model/weather";

export interface State {
  cities: Weather[],
}

const cities: State = {
  cities: []
}

export const reducers = (state= cities, action:any) => {
  switch(action.type) {
    case '[Fetch Cities Weather] Search Success': {

      return { cities: [...state.cities, action.payload]}
      
    }
    default: {
      return state
    }
  }
}
