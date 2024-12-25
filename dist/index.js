import { jsx as _jsx } from "react/jsx-runtime";
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