// react-hearts.d.ts

declare module 'react-heart' {
  import { ReactNode, CSSProperties } from 'react';

  interface HeartProps {
    isActive: boolean;
    onClick?: () => void;
    style?: CSSProperties;
  }

  export const Heart: (props: HeartProps) => ReactNode;
}