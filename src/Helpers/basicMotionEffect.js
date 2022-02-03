const getContainerBasicMotionEffect = (
  opacityFrom,
  opacityTo,
  delay,
  delayChildren,
  staggerChildren
) => {
  return {
    hidden: { opacity: opacityFrom },
    visible: {
      opacity: opacityTo,
      transition: {
        delay: delay,
        delayChildren,
        staggerChildren,
      },
    },
  };
};

const getChildrenBasicMotionEffect = (
  yFrom,
  opacityFrom,
  yTo,
  opacityTo,
  transition,
  duration
) => {
  return {
    hidden: {
      y: yFrom,
      opacity: opacityFrom,
    },
    visible: {
      y: yTo,
      opacity: opacityTo,
      transition: {
        transition,
        duration,
      },
    },
  };
};

export { getContainerBasicMotionEffect, getChildrenBasicMotionEffect };
