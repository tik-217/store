import { RefObject } from 'react';

export interface UseAnimationProps {
  container: RefObject<HTMLDivElement | null>;
  finalNumber: number | null;
  animationName: string;
  isSuccess: boolean;
}
