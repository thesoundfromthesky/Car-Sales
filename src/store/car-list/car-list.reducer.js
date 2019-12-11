import { ADD_FEATURE, REMOVE_FEATURE } from "./car-list.actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export function carListReducer(state = initialState, action) {
  const { car, additionalPrice, additionalFeatures } = state;
  const { type, payload } = action;

  switch (type) {
    case ADD_FEATURE:
      if (car.features.findIndex(feature => feature.id === payload.id) === -1) {
        return {
          ...state,
          additionalPrice: additionalPrice + payload.price,
          car: {
            ...car,
            features: [...car.features, payload].sort((a, b) =>
              a.id > b.id ? 1 : -1
            )
          },
          additionalFeatures: additionalFeatures.filter(
            feature => feature.id !== payload.id
          )
        };
      }
      return state;
    case REMOVE_FEATURE:
      if (car.features.findIndex(feature => feature.id === payload.id) !== -1) {
        return {
          ...state,
          additionalPrice: additionalPrice - payload.price,
          car: {
            ...car,
            features: car.features.filter(feature => feature.id !== payload.id)
          },
          additionalFeatures: [...additionalFeatures, payload].sort((a, b) =>
            a.id > b.id ? 1 : -1
          )
        };
      }
      return state;
    default:
      return state;
  }
}
