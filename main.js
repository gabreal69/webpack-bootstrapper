(()=> {
    let __webpack_modules__ = {
        'yeah' : (module, exports, require) => {
            module.exports = () => {
                console.log('hi')
            }
        }
    }
    let __webpack_cache__ = {}
    function require(moduleID) {
        if (typeof __webpack_cache__[moduleID] !== 'undefined')  {
            return __webpack_cache__[moduleID]
        }
        var module = __webpack_cache__[moduleID] = require.moduleFactory({
            id : moduleID,
            loaded : true,
            exports: {}
        })
        __webpack_modules__[moduleID](module, module.exports, require)
        return module
    }
    require.modules = __webpack_modules__
    require.cache = __webpack_cache__
    require.moduleFactory = (obj) => {
        Object.defineProperty(obj, Symbol.toStringTag, {
            value: "Module"
        })
        Object.defineProperty(obj, "__esModule", {
            value: true
        })
        return obj
    }

    require('yeah').exports()
})()
