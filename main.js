(() => {
    let config = {
        wpName : 'webpackJsonp',
        splitter : true,
        //defaultModule : 2000
    }

    let __webpack_modules__ = {};
    let __webpack_cache__ = {};
    function __webpack_require__(moduleID) {
        if (typeof __webpack_cache__[moduleID] !== 'undefined') {
            return __webpack_cache__[moduleID].exports;
        }
        var module = (__webpack_cache__[moduleID] = __webpack_require__.moduleFactory({
            id: moduleID,
            loaded: false,
            exports: {},
        }));
        __webpack_modules__[moduleID](module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }

    __webpack_require__.modules = __webpack_modules__;
    __webpack_require__.cache = __webpack_cache__;
    __webpack_require__.moduleFactory = (obj) => {
        Object.defineProperty(obj, Symbol.toStringTag, {
            value: 'Module',
        });
        Object.defineProperty(obj, '__esModule', {
            value: true,
        });
        return obj;
    };

    if (config.splitter === true) {
        self[config.wpName] = self[config.wpName] || [];
        let originalPush = self[config.wpName].push;
        self[config.wpName].push = function (entry) {
            let chunkIds = entry[0];
            let modules = entry[1];
            if (entry[2]) {
                entry[2](require)
            }

            let existingEntry = self[config.wpName].find(([existingChunkIds]) => {
                return existingChunkIds.every((chunkId) => chunkIds.includes(chunkId));
            });

            if (existingEntry) {
                let [existingChunkIds, existingModules] = existingEntry;
                existingModules = Object.assign(existingModules, modules);
                Object.assign(__webpack_modules__, modules);
            } else {
                originalPush.call(self[config.wpName], entry);
                Object.assign(__webpack_modules__, modules);
            }
        };
    }

    if(config.defaultModule) {
        __webpack_require__(config.defaultModule)
    }
})();
