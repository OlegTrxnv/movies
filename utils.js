const debounce = (callbackFunc, delay = 1000) => {
  let timeoutId;
  // the returning function will take all of the arguments provided to callbackFunc and assign them to a new argument called 'args'
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callbackFunc(...args); // callbackFunc.apply(null, args);
    }, delay);
  };
};

// let timeoutId;
// const onInput = event => {
//   if (timeoutId) {
//     clearTimeout(timeoutId);
//   }
//   timeoutId = setTimeout(() => {
//     fetchData(event.target.value);
//   }, 1000);
// };
