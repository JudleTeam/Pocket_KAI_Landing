type AnimationVariant = 'fromLeft' | 'fromRight' | 'fromBottom' | 'fromTop';

export function getBlockAnimation(
  variant: AnimationVariant,
  customDelay: number
) {
  switch (variant) {
    case 'fromLeft':
      return {
        hidden: { opacity: 0, x: -100 },
        visible: () => ({
          y: 0,
          opacity: 1,
          transition: { delay: customDelay * 0.1 },
        }),
      };
  }
}
