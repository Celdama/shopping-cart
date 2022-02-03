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

const getTitleProductShopPageEffect = () => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        transition: 'ease',
        duration: 0.4,
      },
    },
  };
};

const getMainImgProductShopPageEffect = () => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
};

export {
  getContainerBasicMotionEffect,
  getChildrenBasicMotionEffect,
  getTitleProductShopPageEffect,
  getMainImgProductShopPageEffect,
};
