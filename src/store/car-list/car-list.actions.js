export const ADD_FEATURE = "[Car List] Add Feature";
export const REMOVE_FEATURE = "[Car List] Remove Feature";

export const AddFeature = feature => ({ type: ADD_FEATURE, payload: feature });
export const RemoveFeature = feature => ({ type: REMOVE_FEATURE, payload: feature });
