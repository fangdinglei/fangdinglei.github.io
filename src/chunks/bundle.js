System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/index.js", [], function (exports) {
  return {
    execute: function () {
      /// <reference types="../types/index.d.ts" />

      // (c) 2020-present Andrea Giammarchi

      var $parse = JSON.parse,
        $stringify = JSON.stringify;
      var keys = Object.keys;
      var Primitive = String; // it could be Number
      var primitive = 'string'; // it could be 'number'

      var ignore = {};
      var object = 'object';
      var noop = function noop(_, value) {
        return value;
      };
      var primitives = function primitives(value) {
        return value instanceof Primitive ? Primitive(value) : value;
      };
      var Primitives = function Primitives(_, value) {
        return typeof value === primitive ? new Primitive(value) : value;
      };
      var revive = function revive(input, parsed, output, $) {
        var lazy = [];
        for (var ke = keys(output), length = ke.length, y = 0; y < length; y++) {
          var k = ke[y];
          var value = output[k];
          if (value instanceof Primitive) {
            var tmp = input[value];
            if (typeof tmp === object && !parsed.has(tmp)) {
              parsed.add(tmp);
              output[k] = ignore;
              lazy.push({
                k: k,
                a: [input, parsed, tmp, $]
              });
            } else output[k] = $.call(output, k, tmp);
          } else if (output[k] !== ignore) output[k] = $.call(output, k, value);
        }
        for (var _length = lazy.length, i = 0; i < _length; i++) {
          var _lazy$i = lazy[i],
            _k = _lazy$i.k,
            a = _lazy$i.a;
          output[_k] = $.call(output, _k, revive.apply(null, a));
        }
        return output;
      };
      var set = function set(known, input, value) {
        var index = Primitive(input.push(value) - 1);
        known.set(value, index);
        return index;
      };

      /**
       * Converts a specialized flatted string into a JS value.
       * @param {string} text
       * @param {(this: any, key: string, value: any) => any} [reviver]
       * @returns {any}
       */
      var parse = exports('parse', function parse(text, reviver) {
        var input = $parse(text, Primitives).map(primitives);
        var value = input[0];
        var $ = reviver || noop;
        var tmp = typeof value === object && value ? revive(input, new Set(), value, $) : value;
        return $.call({
          '': tmp
        }, '', tmp);
      });

      /**
       * Converts a JS value into a specialized flatted string.
       * @param {any} value
       * @param {((this: any, key: string, value: any) => any) | (string | number)[] | null | undefined} [replacer]
       * @param {string | number | undefined} [space]
       * @returns {string}
       */
      var stringify = exports('stringify', function stringify(value, replacer, space) {
        var $ = replacer && typeof replacer === object ? function (k, v) {
          return k === '' || -1 < replacer.indexOf(k) ? v : void 0;
        } : replacer || noop;
        var known = new Map();
        var input = [];
        var output = [];
        var i = +set(known, input, $.call({
          '': value
        }, '', value));
        var firstRun = !i;
        while (i < input.length) {
          firstRun = true;
          output[i] = $stringify(input[i++], replace, space);
        }
        return '[' + output.join(',') + ']';
        function replace(key, value) {
          if (firstRun) {
            firstRun = !firstRun;
            return value;
          }
          var after = $.call(this, key, value);
          switch (typeof after) {
            case object:
              if (after === null) return after;
            case primitive:
              return known.get(after) || set(known, input, after);
          }
          return after;
        }
      });
    }
  };
});

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        arrayLikeToArray: _arrayLikeToArray,
        assertThisInitialized: _assertThisInitialized,
        construct: _construct,
        createForOfIteratorHelperLoose: _createForOfIteratorHelperLoose,
        extends: _extends,
        getPrototypeOf: _getPrototypeOf,
        inheritsLoose: _inheritsLoose,
        initializerDefineProperty: _initializerDefineProperty,
        isNativeFunction: _isNativeFunction,
        isNativeReflectConstruct: _isNativeReflectConstruct,
        setPrototypeOf: _setPrototypeOf,
        unsupportedIterableToArray: _unsupportedIterableToArray,
        wrapNativeSuper: _wrapNativeSuper
      });
      function _extends() {
        _extends = exports('extends', Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        });
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = exports('getPrototypeOf', Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        });
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = exports('construct', Reflect.construct.bind());
        } else {
          _construct = exports('construct', function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
          });
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;
        _wrapNativeSuper = exports('wrapNativeSuper', function _wrapNativeSuper(Class) {
          if (Class === null || !_isNativeFunction(Class)) return Class;
          if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
          }
          function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class);
        });
        return _wrapNativeSuper(Class);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

} }; });