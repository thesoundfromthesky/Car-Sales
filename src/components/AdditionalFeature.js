import React from "react";
import { useDispatch } from "react-redux";
import { AddFeature } from "../store";

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        type="button"
        onClick={() => {
          dispatch(AddFeature(props.feature));
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
