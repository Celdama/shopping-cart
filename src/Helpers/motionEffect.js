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

const getTitleProductShopPageEffect = () => ({
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
});

const getMainImgProductShopPageEffect = () => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
});

const getEffectFromLeftToRight = () => ({
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
});

const getEffectFromRightToLeft = (name) => ({
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
});

const getContainerInstaEffect = () => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
    },
  },
});

const getChildrenInstaEffect = () => ({
  hidden: {
    y: 15,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
});

const getChildrenItemListEffect = () => ({
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 5,
    opacity: 1,
    transition: {
      transition: 'backInOut',
      duration: 1,
    },
  },
});

const getVerticalDividerEffect = () => ({
  hidden: {
    height: '0%',
    opacity: 0,
  },
  visible: {
    height: '100%',
    opacity: 1,
    transition: {
      delay: 0.6,
      transition: 'ease',
      duration: 0.7,
    },
  },
});

const getHorizontalDividerEffect = () => ({
  hidden: {
    width: '0%',
  },
  visible: {
    width: '100%',
    transition: {
      transition: 'ease',
      duration: 1.3,
    },
  },
});

const getContainerMarketingEffect = () => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.2,
    },
  },
});

const getSubContainerMarketingEffect = () => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.2,
    },
  },
});

const getChildrenMarketingEffect = () => ({
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 5,
    opacity: 1,
  },
});

const getContainerQuestionEffect = () => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
    },
  },
});

const getChildrenQuestionEffect = () => ({
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 5,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
});

const getAnswersEffect = () => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      ease: 'easeIn',
      duration: 1,
    },
  },
});

const getContainerTitleSpaceEffect = () => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
});

const getContainerParaSpaceEffect = () => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.2,
    },
  },
});

const getTextSpaceEffect = () => ({
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 5,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
});

const getDividerEffect = () => ({
  hidden: {
    width: '0%',
  },
  visible: {
    width: '100%',
    transition: {
      delay: 0.5,
      transition: 'backInOut',
      duration: 1.3,
    },
  },
});

const getDividerTitleEffect = () => ({
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      transition: 'ease',
      duration: 1,
    },
  },
});

export {
  getContainerBasicMotionEffect,
  getChildrenBasicMotionEffect,
  getTitleProductShopPageEffect,
  getMainImgProductShopPageEffect,
  getEffectFromLeftToRight,
  getEffectFromRightToLeft,
  getContainerInstaEffect,
  getChildrenInstaEffect,
  getChildrenItemListEffect,
  getVerticalDividerEffect,
  getHorizontalDividerEffect,
  getContainerMarketingEffect,
  getSubContainerMarketingEffect,
  getChildrenMarketingEffect,
  getContainerQuestionEffect,
  getChildrenQuestionEffect,
  getAnswersEffect,
  getContainerTitleSpaceEffect,
  getContainerParaSpaceEffect,
  getTextSpaceEffect,
  getDividerEffect,
  getDividerTitleEffect,
};
