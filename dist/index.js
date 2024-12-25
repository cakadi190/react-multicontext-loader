import { jsx as _jsx } from "react/jsx-runtime";
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