const itemsVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

export default itemsVariants;
