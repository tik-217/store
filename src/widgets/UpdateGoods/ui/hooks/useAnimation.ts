import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { RefObject } from 'react';

gsap.registerPlugin(TextPlugin, useGSAP);

export const useAnimation = ({
  newTitle,
  container,
}: {
  newTitle: string;
  container: RefObject<null>;
}) => {
  useGSAP(
    () => {
      gsap.to('.createTitle', {
        duration: 2,
        text: {
          value: newTitle,
        },
        ease: 'bounce.inOut',
      });
    },
    { dependencies: [newTitle], scope: container },
  );
};
