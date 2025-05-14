import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { RefObject } from 'react';
import { TextPlugin } from 'gsap/TextPlugin';

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
