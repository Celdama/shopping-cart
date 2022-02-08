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
        delay,
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
  delay,
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
        delay,
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

const getEffectFromLeftToRight = () => {
  return {
    hidden: {
      x: -400,
    },
    visible: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };
};

const getEffectFromRightToLeft = (name) => {
  return {
    hidden: {
      x: 0,
    },
    visible: {
      x: name ? -990 : -400,
      transition: {
        type: 'tween',
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };
};

export {
  getContainerBasicMotionEffect,
  getChildrenBasicMotionEffect,
  getTitleProductShopPageEffect,
  getMainImgProductShopPageEffect,
  getEffectFromLeftToRight,
  getEffectFromRightToLeft,
};
