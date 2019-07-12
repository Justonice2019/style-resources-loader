import {loadResources, isFunction, throwError, throwImpossibleError} from './utils';

import {Loader, LoaderCallback} from '.';

/* eslint-disable no-invalid-this */
const loader: Loader = function(source) {
    this.cacheable && this.cacheable();

    const callback = this.async();

    if (!isFunction<LoaderCallback>(callback)) {
        throwError('Synchronous compilation is not supported.');

        return;
    }

    /* istanbul ignore if: not possible to test */
    if (typeof source !== 'string') {
        throwImpossibleError();

        return;
    }

    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    loadResources(this, source, callback);
};
/* eslint-enable no-invalid-this */

export default loader;
