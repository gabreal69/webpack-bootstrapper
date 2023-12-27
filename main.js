(() => {
    let config = {
        wpName : 'webpackJsonp',
        splitter : true,
        open : true,
        //defaultModule : 2000
    }

    let __webpack_modules__ = {};
    let __webpack_cache__ = {};

    function __webpack_require__(moduleId) {
        // Check if module is in cache
        var cachedModule = __webpack_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }

        // Create a new module (and put it into the cache)
        var module = __webpack_cache__[moduleId] = {
            id: moduleId,
            loaded : true,
            exports: {}
        };
	
        // Execute the module function
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

        // Return the exports of the module
        return module.exports;
    }

    Object.assign(__webpack_require__, {
        // Async module
        a: (module, body, hasAwait) => {
            var queue;
            hasAwait && ((queue = []).d = 1);
            var depQueues = new Set();
            var exports = module.exports;
            var currentDeps;
            var outerResolve;
            var reject;
            var promise = new Promise((resolve, rej) => {
                reject = rej;
                outerResolve = resolve;
            });
             promise[webpackExports] = exports;
            promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
            module.exports = promise;
            body((deps) => {
                currentDeps = wrapDeps(deps);
                var fn;
                var getResult = () => (currentDeps.map((d) => {
                    if(d[webpackError]) throw d[webpackError];
                    return d[webpackExports];
                }))
                    var promise = new Promise((resolve) => {
                    fn = () => (resolve(getResult));
                    fn.r = 0;
                    var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
                    currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
                });
                return fn.r ? promise : getResult();
            }, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
            queue && (queue.d = 0);
        },
        // publicPath
        p: "",
        // compatGetDefaultExport
        n : (e) => {
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return __webpack_require__.d(t, {
                a: t
            }),
            t
        },
        // modules
        m : __webpack_modules__,
        // cache
        c : __webpack_cache__,
        // definePropertyGetters
        d : (exports, definition) => {
            for(var key in definition) {
                if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                }
            }
        },
        //makeNamespaceObject
        r : (obj) => {
            Object.defineProperty(obj, Symbol.toStringTag, {
                value: 'Module',
            });
            Object.defineProperty(obj, '__esModule', {
                value: true,
            });
            return obj;
        },
        // createFakeNamespaceObject
        t : () => {},
        // hasOwnProperty
        o: (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop)),
        // nodeModuleDecorator
        nmd: (e) =>(e.paths = [], e.children || (e.children = []), e),
        // instantiateWasm
        v: (exports, wasmModuleId, wasmModuleHash, importsObj) => {
            var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".wasm");
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                return WebAssembly.instantiateStreaming(req, importsObj)
                    .then((res) => (Object.assign(exports, res.instance.exports)));
            }
            return req
                .then((x) => (x.arrayBuffer()))
                .then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
                .then((res) => (Object.assign(exports, res.instance.exports)));
        },

    });

    if (config.open === true) {
        self[config.wpName] = self[config.wpName] || [];
        self[config.wpName].__webpack_require__ = __webpack_require__
    }

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
        __webpack_require__.entryModuleId = config.defaultModule
        __webpack_require__(config.defaultModule)
    }
    
})();
