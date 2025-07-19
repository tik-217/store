import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { RefObject } from 'react';

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
