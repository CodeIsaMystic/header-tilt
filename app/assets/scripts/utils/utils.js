export const updateBodyColor = (color) => {
  // gsap.to('.fill-background', { backgroundColor: color, ease: 'none'});
  document.documentElement.style.setProperty("--bcg-fill-color", color);
};
export const getTextHeight = (textCopy) => {
  return textCopy.clientHeight;
};

export const select = (e) => document.querySelector(e);
export const selectAll = (e) => document.querySelectorAll(e);
