const container = document.querySelector(".container");

const throttle = (callback, delay) => {
  let isWaiting = false;
  return (...args) => {
    if (isWaiting) return;
    callback(...args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
};

const handleScroll = () => {
  console.log("scrolled");
};

const throttledScroll = throttle(handleScroll, 500);

container.addEventListener("scroll", throttledScroll);

/**
 * throttling is a techinque used to limit how ofter a function runs over time --
 * even it's being called repeatedly
 * why throttling used==
 * 1) performace optimization - prevent slowdown
 * 2) make animation or scrolling smoother
 * 3) useful in api to prevent spamming or rate limit request
 * 4) 
 */