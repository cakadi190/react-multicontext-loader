import React, { ReactNode, FC } from 'react';
interface MultiContextProviderProps {
    contexts: FC<{
        children: ReactNode;
    }>[];
    children: ReactNode;
}
declare const MultiContextProvider: React.FC<MultiContextProviderProps>;
export default MultiContextProvider;
//# sourceMappingURL=index.d.ts.map