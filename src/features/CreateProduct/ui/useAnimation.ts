import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { UseAnimationProps } from '@/features/CreateProduct/model/types';

gsap.registerPlugin(useGSAP);

export const useAnimation = ({
  resetForm,
  isSuccess,
  container,
}: UseAnimationProps) => {
  useGSAP(
    () => {
      if (resetForm) {
        gsap.to('.formCreateProduct', {
          opacity: '1',
          display: 'grid',
          duration: 1,
        });
        gsap.to('.newProduct', {
          opacity: '0',
          duration: 1,
          display: 'none',
          x: -640,
          y: 0,
        });
      }
    },
    { dependencies: [resetForm], scope: container },
  );

  useGSAP(
    () => {
      if (isSuccess) {
        gsap.to('.formCreateProduct', {
          opacity: '0',
          display: 'none',
          duration: 1,
        });
      }
    },
    { dependencies: [isSuccess], scope: container },
  );

  useGSAP(
    () => {
      if (isSuccess) {
        gsap.to('.newProduct', {
          opacity: '1',
          duration: 2,
          x: 640,
          y: 0,
        });
      }
    },
    { dependencies: [isSuccess], scope: container },
  );
};
