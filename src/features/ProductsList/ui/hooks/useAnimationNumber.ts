import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import { UseAnimationProps } from '../../model';

gsap.registerPlugin(TextPlugin, useGSAP);

export const useAnimationNumber = ({
  container,
  finalNumber,
  animationName,
  isSuccess,
}: UseAnimationProps) => {
  useGSAP(
    () => {
      if (isSuccess) {
        gsap.to(`[data-animate="${animationName}"]`, {
          textContent: finalNumber,
          snap: 'textContent',
          duration: 2,
        });
      }
    },
    {
      dependencies: [isSuccess, finalNumber, animationName],
      scope: container,
    },
  );
};
