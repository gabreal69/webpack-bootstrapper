# webpack but browser thing
```
// Example modules
webpackJsonp.push([[0], {
    123: (module, exports, require) => {
        module.exports = 'real';
    },
}]);

webpackJsonp.push([[0], {
    46: (module, exports, require) => {
        module.exports = 'hi';
    },
}]);

// require hook
webpackJsonp.push([
    [Symbol()], {}, (r) => window.require = r
]);
```
