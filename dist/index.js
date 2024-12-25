import { jsx as _jsx } from "react/jsx-runtime";
/**
 * MultiContextProvider adalah komponen React yang memungkinkan penggunaan beberapa
 * context providers secara bersamaan. Komponen ini menerima daftar context providers
 * dan children yang akan dibungkus oleh context providers tersebut.
 *
 * @component
 * @param {Object} props - Props untuk komponen MultiContextProvider.
 * @param {FC<{ children: ReactNode }>[] } props.contexts - Array dari context providers
 * yang akan digunakan untuk membungkus children. Setiap context provider harus
 * merupakan komponen fungsional yang menerima props `children`.
 * @param {ReactNode} props.children - Elemen React yang akan dibungkus oleh context
 * providers. Ini bisa berupa komponen, elemen JSX, atau elemen lainnya yang valid
 * dalam React.
 *
 * @returns {ReactNode} - Elemen React yang merupakan hasil dari membungkus children
 * dengan semua context providers yang diberikan.
 *
 * @example
 * import React from 'react';
 * import { UserProvider } from './User Context';
 * import { ThemeProvider } from './ThemeContext';
 * import MultiContextProvider from './MultiContextProvider';
 *
 * const App = () => {
 *   return (
 *     <MultiContextProvider contexts={[User Provider, ThemeProvider]}>
 *       <YourComponent />
 *     </MultiContextProvider>
 *   );
 * };
 */
const MultiContextProvider = ({ contexts, children }) => {
    const wrapContexts = (children, contextProviders) => {
        return contextProviders.reduceRight((acc, ContextProvider) => {
            return _jsx(ContextProvider, { children: acc });
        }, children);
    };
    return wrapContexts(children, contexts);
};
export default MultiContextProvider;
//# sourceMappingURL=index.js.map