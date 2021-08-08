import ReactGA from "react-ga";

export const trackGA = (category, action) => {
  ReactGA.event({
    category,
    action,
  });
};
