const common = {
  delay: 400,
  duration: 1200,
  triggerOnce: true,
}

const basicFade = {
  ...common,
}

const delayedBasicFade = {
  ...common,
  delay: 600,
}

const fadeCascade = {
  ...common,
  duration: 1000,
  damping: 0.15,
  cascade: true,
}
const delayedFadeCascade = {
  ...fadeCascade,
  delay: 600,
}
const fadeLeft = {
  ...common,
  direction: "left",
}

const fadeRight = {
  ...common,
  direction: "right",
}

export {
  fadeCascade,
  delayedFadeCascade,
  basicFade,
  delayedBasicFade,
  fadeLeft,
  fadeRight,
}
