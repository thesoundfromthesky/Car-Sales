import React from "react";

import { useDispatch } from "react-redux";
import { RemoveFeature } from "../store";

const AddedFeature = props => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        type="button"
        onClick={() => {
          dispatch(RemoveFeature(props.feature));
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
