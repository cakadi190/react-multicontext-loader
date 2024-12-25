import React, { ReactNode, FC } from 'react';

interface MultiContextProviderProps {
  contexts: FC<{ children: ReactNode }>[];
  children: ReactNode;
}

const MultiContextProvider: React.FC<MultiContextProviderProps> = ({ contexts, children }) => {
  const wrapContexts = (children: ReactNode, contextProviders: FC<{ children: ReactNode }>[]) => {
    return contextProviders.reduceRight((acc, ContextProvider) => {
      return <ContextProvider>{acc}</ContextProvider>;
    }, children);
  };

  return wrapContexts(children, contexts);
};

export default MultiContextProvider;
