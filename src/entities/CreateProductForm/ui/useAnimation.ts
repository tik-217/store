import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { RefObject } from 'react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin, useGSAP);

export const useAnimation = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      gsap.to('.createTitle', {
        duration: 2,
        text: 'Создание товара',
        ease: 'bounce.inOut',
        padSpace: true,
      });
    },
    { scope: container },
  );
};
