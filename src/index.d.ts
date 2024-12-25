import { ReactNode, FC } from 'react';

export interface MultiContextProviderProps {
  contexts: FC<{ children: ReactNode }>[];
  children: ReactNode;
}

declare const MultiContextProvider: FC<MultiContextProviderProps>;

export default MultiContextProvider;
