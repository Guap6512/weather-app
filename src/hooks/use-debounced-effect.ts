import React, {DependencyList, EffectCallback} from 'react';

export const useDebouncedEffect = (effect: EffectCallback, delay: number, deps: DependencyList) => {
    const callback = React.useCallback(effect, deps);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [callback, delay]);
};
