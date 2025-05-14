import { RefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin, useGSAP);

export const useAnimation = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      gsap.to('.productsTitle', {
        duration: 2,
        text: 'ТОВАРЫ',
        ease: 'bounce.inOut',
      });
    },
    { scope: container },
  );
};
