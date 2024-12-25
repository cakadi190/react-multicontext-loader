import React, { ReactNode, FC } from 'react';
interface MultiContextProviderProps {
    contexts: FC<{
        children: ReactNode;
    }>[];
    children: ReactNode;
}
/**
 * A simple React utility for wrapping multiple context providers
 *
 * @param {FC<{ children: ReactNode }>[]} contexts
 *        An array of context providers to wrap the children with.
 * @param {ReactNode} children
 *        The children to be wrapped with the context providers.
 * @returns {ReactElement}
 *          The wrapped children component.
 */
declare const MultiContextProvider: React.FC<MultiContextProviderProps>;
export default MultiContextProvider;
//# sourceMappingURL=index.d.ts.map