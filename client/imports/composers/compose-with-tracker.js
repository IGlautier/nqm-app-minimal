import {compose} from "react-komposer";
import {Tracker} from "meteor/tracker";
import {_} from "meteor/underscore";

function getTrackerLoader(loaderFunc) {
  return (props, onData, env) => {
  
    let trackerCleanup = () => null;
  
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // Store clean-up function if provided.
        trackerCleanup = loaderFunc(props, onData, env) || (() => null);
      });
    });

    return () => {
      trackerCleanup();
      return handler.stop();
    };
  };
}

function composeWithTracker(loadInfo) {
  let loadFunction;
  let loadOptions;
  if (typeof loadInfo === "function") {
    loadFunction = loadInfo;
    loadOptions = {};
  } else {
    loadFunction = loadInfo.loader;
    loadOptions = {
      shouldSubscribe: (props,next) => !_.isEqual(props,next),
      propsToWatch: loadInfo.propsToWatch
    };
  } 
  return function(component) {
    return compose(getTrackerLoader(loadFunction), loadOptions)(component);
  };
}

export default composeWithTracker;
