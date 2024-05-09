System.register("chunks:///_virtual/Analyzer.ts", ['cc', './EnumDefine.ts', './define.ts'], function (exports) {
  var cclegacy, GroundTypeEnum, RangeTypeEnum, ResourceBuffName, ModuleName, TResourceType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
      RangeTypeEnum = module.RangeTypeEnum;
    }, function (module) {
      ResourceBuffName = module.ResourceBuffName;
      ModuleName = module.ModuleName;
      TResourceType = module.TResourceType;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "136f9vx4ChG2KkkkOl2zqoW", "Analyzer", undefined);
      // 处理效率 + {ability}（处理额外降低复杂度）
      // 最多叠加{maxBuffLevelCount}层
      var setting = {
        name: ModuleName.ANALYZER,
        groundType: GroundTypeEnum.INSULATION,
        funcs: {},
        consts: {
          effect: {
            range: {
              type: RangeTypeEnum.AROUND,
              range: 1
            },
            resourceSelector: {
              resourceTypeFilter: [TResourceType.COMMON]
            },
            triggerInterval: 20 * 3,
            funcName: ModuleName.ANALYZER
          },
          ability: 2,
          maxBuffLevelCount: 5,
          buildAble: {
            cost: 50
          }
        },
        desc: {}
      };
      function run(register, def) {
        register(setting);
        def(function (fm) {
          return fm.module.effect;
        }, setting.name, function (context, module, resource) {
          var consts = module.setting.consts;
          var buffVar = {
            level: consts.ability
          };
          context.managers.gameLogicUtil.addBuffToResource(resource, ResourceBuffName.ANALYZED, buffVar);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssetVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalContextImpl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, RichText, Component, GlobalContext;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      RichText = module.RichText;
      Component = module.Component;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6586bZ+91RB/bhtproKPyGq", "AssetVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AssetVMgr = exports('AssetVMgr', (_dec = ccclass('AssetVMgr'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AssetVMgr, _Component);
        function AssetVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "infoPrefab", _descriptor, _assertThisInitialized(_this));
          _this.nodes = {};
          return _this;
        }
        var _proto = AssetVMgr.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {
          var logic = GlobalContext.logic;
          var map = {
            "hp": "生命",
            "value": "价值",
            "baseResearch": "科研",
            "energy": "能量"
          };
          if (logic && logic.gameContext) {
            var asset = logic.gameContext.asset;
            for (var key in asset) {
              var _key2;
              var element = asset[key];
              if (!this.nodes[key]) {
                var go = instantiate(this.infoPrefab);
                go.parent = this.node;
                var rt = go.getComponent(RichText);
                this.nodes[key] = rt;
              }
              this.nodes[key].string = (((_key2 = map[key]) != null ? _key2 : key) + ":" + element.cur).padEnd(10, " ");
            }
          }
        };
        return AssetVMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "infoPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BottomMenuVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0fc12Ej/apPj6Ls39iVKSeL", "BottomMenuVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BottomMenuVMgr = exports('BottomMenuVMgr', (_dec = ccclass('BottomMenuVMgr'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BottomMenuVMgr, _Component);
        function BottomMenuVMgr() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BottomMenuVMgr.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return BottomMenuVMgr;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BottomRightMenuVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewGlobal.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodeEventType, Component, UIGlobalContext;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      Component = module.Component;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "366acyqI4pHro5/HPqgT82W", "BottomRightMenuVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 右下角菜单管理器 */
      var BottomRightMenuVMgr = exports('BottomRightMenuVMgr', (_dec = ccclass('BottomRightMenuVMgr'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BottomRightMenuVMgr, _Component);
        function BottomRightMenuVMgr() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BottomRightMenuVMgr.prototype;
        _proto.manageEvent = function manageEvent(add) {
          if (add) {
            this.node.on(NodeEventType.MOUSE_ENTER, this.onMouseEnter, this, true);
            this.node.on(NodeEventType.MOUSE_LEAVE, this.onMouseLeave, this, true);
          } else {
            this.node.off(NodeEventType.MOUSE_ENTER, this.onMouseEnter, this, true);
            this.node.off(NodeEventType.MOUSE_LEAVE, this.onMouseLeave, this, true);
          }
        };
        _proto.start = function start() {
          this.manageEvent(true);
        };
        _proto.onDestroy = function onDestroy() {
          this.onMouseLeave();
          this.manageEvent(false);
        };
        _proto.update = function update(deltaTime) {};
        _proto.onMouseEnter = function onMouseEnter() {
          UIGlobalContext.myInputSystem.mousePointMenu = this.node;
        };
        _proto.onMouseLeave = function onMouseLeave() {
          if (UIGlobalContext.myInputSystem.mousePointMenu === this.node) {
            UIGlobalContext.myInputSystem.mousePointMenu = undefined;
          }
        };
        return BottomRightMenuVMgr;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/buff.ts", ['cc', './EnumDefine.ts', './BuffDefine.ts', './common.ts', './define.ts'], function (exports) {
  var cclegacy, ModuleEffectTypeEnum, ResourceBuff, assert, ResourceBuffName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleEffectTypeEnum = module.ModuleEffectTypeEnum;
    }, function (module) {
      ResourceBuff = module.ResourceBuff;
    }, function (module) {
      assert = module.assert;
    }, function (module) {
      ResourceBuffName = module.ResourceBuffName;
    }],
    execute: function () {
      exports('init', init);
      cclegacy._RF.push({}, "872e1e5uuNJy6/2PXlCWYFp", "buff", undefined);
      var ReasonEnum = ResourceBuff.BuffDestroyReasonEnum;

      /**
       * 按时间降低复杂度  效果:失稳
       * {@link ResourceBuff.IVars.complexity}
       */
      var ReduceComplexityBuff_OnDestroy = {
        name: ResourceBuffName.ReduceComplexity,
        func: function func(c, r, b, reason) {
          assert(!!b.vars.complexity);
          if (reason === ReasonEnum.TIME) {
            // 时间到 减少复杂度
            c.managers.damageManager.applyUnstable(r, {
              effectType: ModuleEffectTypeEnum.UNSTABLE,
              ability: {
                processAbility: b.vars.complexity
              }
            });
          }
        }
      };

      /**
       * 受到更多的伤害
       * {@link ResourceBuff.IVars.level}
       */
      var AnalyzedBuff_BeforeDamaged = {
        name: ResourceBuffName.ANALYZED,
        func: function func(c, buff, info) {
          assert(!!buff.vars.level);
          info.relDamage += buff.vars.level;
          buff.vars.level--;
          if (buff.vars.level <= 0) {
            // 回收buff
            buff.vars.leftTimes = 0;
          }
        }
      };
      var BuffSetting_ReduceComplexity = {
        name: ResourceBuffName.ReduceComplexity,
        func: {
          onDestroy: ReduceComplexityBuff_OnDestroy.name,
          onRepeated: undefined
        },
        consts: {
          maxTime: 5
        }
      };
      var BuffSetting_Analyzed = {
        name: ResourceBuffName.ANALYZED,
        func: {
          beforeDamaged: AnalyzedBuff_BeforeDamaged.name,
          onRepeated: ResourceBuff.RepeatedBuffResolutionEnum.NUM_ADD
        },
        consts: {}
      };
      function init(fm, sdm, context) {
        var onDestroy = [ReduceComplexityBuff_OnDestroy];
        onDestroy.forEach(function (buff) {
          return fm.addFunction(function (it) {
            return it.resource.buff.onDestroy;
          }, buff.name, buff.func);
        });
        var beforeDamaged = [AnalyzedBuff_BeforeDamaged];
        beforeDamaged.forEach(function (buff) {
          return fm.addFunction(function (it) {
            return it.resource.buff.beforeDamaged;
          }, buff.name, buff.func);
        });
        var settings = [BuffSetting_ReduceComplexity, BuffSetting_Analyzed];
        settings.forEach(function (buff) {
          return sdm.addResourceBuff(buff);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuffDefine.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ResourceBuff', void 0);
      cclegacy._RF.push({}, "59d24W4wv9CHIaVX1UJ55KE", "BuffDefine", undefined);
      var ResourceBuff;
      (function (_ResourceBuff) {
        var BuffDestroyReasonEnum = _ResourceBuff.BuffDestroyReasonEnum = {
          TIMES: "TIMES",
          TIME: "TIME",
          RESOURCE_DESTROY: "RESOURCE_DESTROY"
        };
        var RepeatedBuffResolutionEnum = _ResourceBuff.RepeatedBuffResolutionEnum = {
          /** 默认值 直接追加 */
          IGNORE: "IGNORE",
          REPLACE: "REPLACE",
          ABANDON: "ABANDON",
          /**
           * 需要没有生命周期相关参数或相同
           */
          NUM_ADD: "NUM_ADD",
          OTHER: "自定义名称"
        };

        /**
         * {@link BuffDestroyReasonEnum}类型
         */
      })(ResourceBuff || (ResourceBuff = exports('ResourceBuff', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingItemVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewGlobal.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, RichText, NodeEventType, Color, Component, UIGlobalContext, InputMode;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      NodeEventType = module.NodeEventType;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
      InputMode = module.InputMode;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "68daeHYI0BAYpFkbsSUA/xZ", "BuildingItemVMgr", undefined);
      var ccclass = _decorator.ccclass;
      var BuildingItemVMgr = exports('BuildingItemVMgr', (_dec = ccclass('BuildingItemVMgr'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BuildingItemVMgr, _Component);
        function BuildingItemVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.buildingName = void 0;
          _this.text = void 0;
          return _this;
        }
        var _proto = BuildingItemVMgr.prototype;
        _proto.start = function start() {
          this.initRef();
          this.manageEvent(true);
        };
        _proto.initRef = function initRef() {
          !this.text && (this.text = this.getComponent(RichText));
        };
        _proto.manageEvent = function manageEvent(add) {
          if (add) {
            this.node.on(NodeEventType.MOUSE_ENTER, this.onMouseEnter, this);
            this.node.on(NodeEventType.MOUSE_DOWN, this.onMouseClick, this);
            this.node.on(NodeEventType.MOUSE_LEAVE, this.onMouseLeave, this);
          } else {
            this.node.off(NodeEventType.MOUSE_ENTER, this.onMouseEnter, this);
            this.node.off(NodeEventType.MOUSE_DOWN, this.onMouseClick, this);
            this.node.off(NodeEventType.MOUSE_LEAVE, this.onMouseLeave, this);
          }
        };
        _proto.init = function init(buildingName) {
          this.buildingName = buildingName;
          this.initRef();
        };
        _proto.update = function update(deltaTime) {
          if (this.text) {
            this.text.fontColor = UIGlobalContext.myInputSystem.clickedBuildAble === this.buildingName && UIGlobalContext.myInputSystem.inputMode === InputMode.BUILD_MODULE ? Color.BLUE : Color.WHITE;
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.manageEvent(false);
        };
        _proto.onMouseEnter = function onMouseEnter(e) {
          if (!this.buildingName) return;
          UIGlobalContext.myInputSystem.mouseOverBuildAble = this.buildingName;
        };
        _proto.onMouseLeave = function onMouseLeave(e) {
          if (!this.buildingName) return;
          if (UIGlobalContext.myInputSystem.mouseOverBuildAble !== this.buildingName) return;
          UIGlobalContext.myInputSystem.mouseOverBuildAble = undefined;
        };
        _proto.onMouseClick = function onMouseClick(e) {
          if (e.getButton() == 0) {
            UIGlobalContext.myInputSystem.inputMode = InputMode.BUILD_MODULE;
            UIGlobalContext.myInputSystem.clickedBuildAble = this.buildingName;
          }
        };
        return BuildingItemVMgr;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingManager.ts", ['cc', './EnumDefine.ts', './EventDefine.ts'], function (exports) {
  var cclegacy, GroundTypeEnum, AssetName, GameLogicEvent;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
      AssetName = module.AssetName;
    }, function (module) {
      GameLogicEvent = module.GameLogicEvent;
    }],
    execute: function () {
      cclegacy._RF.push({}, "19f71006hNN54H7IYxuTjfI", "BuildingManager", undefined);
      var BuildingManager = exports('BuildingManager', /*#__PURE__*/function () {
        function BuildingManager() {
          this.context = void 0;
          this.settingDataManager = void 0;
          this.functionManager = void 0;
          this.eventBus = void 0;
          this.gameLogicUtils = void 0;
          this.gameEntityManager = void 0;
          /** 用于加载时，防止频繁触发事件 */
          this.lockChangeEvent = true;
          /** 所有可建筑的模块的名称 */
          this.buildAbleModules = {};
          this.lockedModules = {};
        }
        var _proto = BuildingManager.prototype;
        _proto.setContext = function setContext(context) {
          this.context = context;
          this.settingDataManager = context.managers.settingDataManager;
          this.functionManager = context.managers.functionManager;
          this.eventBus = context.managers.eventBus;
          this.gameLogicUtils = context.managers.gameLogicUtil;
          this.gameEntityManager = context.managers.gameEntityManager;
        };
        _proto.afterGameContextFullInit = function afterGameContextFullInit() {
          this.lockChangeEvent = false;
          this.onBuildModuleChange();
        };
        _proto.canBuildAt = function canBuildAt(mapUnit, setting) {
          var sm = this.settingDataManager;
          if (mapUnit.module) {
            return false;
          }
          var settingInfo = typeof setting === typeof "" ? sm.getModule(setting) : setting;
          if (settingInfo.groundType !== GroundTypeEnum.NONE && mapUnit.groundType !== settingInfo.groundType) {
            // 地面类型不符合
            return false;
          }
          return true;
        };
        _proto.getModuleCost = function getModuleCost(setting) {
          var sm = this.settingDataManager;
          var settingInfo = typeof setting === typeof "" ? sm.getModule(setting) : setting;
          var buildAble = settingInfo.consts.buildAble;
          if (!buildAble) return Infinity;
          if (!buildAble.punishment) return buildAble.cost;
          var count = this.gameLogicUtils.countModuleByName(settingInfo.name);
          return buildAble.cost + count * buildAble.punishment;
        };
        _proto.canBuildModule = function canBuildModule(mapUnit, name) {
          var sm = this.settingDataManager;
          var setting = sm.getModule(name);
          if (!this.canBuildAt(mapUnit, setting)) {
            return false;
          }
          var cost = this.getModuleCost(setting);
          if (this.context.asset.value.cur < cost) {
            return false;
          }
          return this.gameLogicUtils.useAsset(AssetName.VALUE, cost);
        };
        _proto.buildModule = function buildModule(mapUnit, name) {
          if (!this.canBuildModule(mapUnit, name)) {
            return;
          }
          var module = this.gameEntityManager.createModule(name);
          this.gameEntityManager.registerModule(module, mapUnit);
          return module;
        };
        _proto.onBuildModuleChange = function onBuildModuleChange() {
          if (this.lockChangeEvent) {
            return;
          }
          var eventData = {
            buildAbleModules: this.getBuildAbleModules()
          };
          this.eventBus.pub(GameLogicEvent.BUILD_ABLE_MODULE_CHANGE, eventData);
        };
        _proto.addBuildAble = function addBuildAble(name) {
          if (this.buildAbleModules[name]) return;
          this.buildAbleModules[name] = true;
          this.onBuildModuleChange();
        };
        _proto.removeBuildAble = function removeBuildAble(name) {
          if (!this.buildAbleModules[name]) return;
          this.buildAbleModules[name] = false;
          this.onBuildModuleChange();
        };
        _proto.getBuildAbleModules = function getBuildAbleModules() {
          var res = [];
          for (var key in this.buildAbleModules) {
            this.buildAbleModules[key] && !this.lockedModules[key] && res.push(key);
          }
          return res;
        };
        _proto.isLocked = function isLocked(module) {
          return this.lockedModules[module];
        };
        _proto.unLockModules = function unLockModules(modules) {
          var _this = this;
          modules.forEach(function (element) {
            delete _this.lockedModules[element];
          });
        };
        _proto.lockModules = function lockModules(modules) {
          var _this2 = this;
          modules.forEach(function (element) {
            _this2.lockedModules[element] = true;
          });
        };
        _proto.lockAllExcept = function lockAllExcept(excepts) {
          var _this3 = this;
          Object.keys(this.buildAbleModules).forEach(function (it) {
            _this3.lockedModules[it] = !excepts.includes(it);
          });
        };
        return BuildingManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalContextImpl.ts', './common.ts', './EnumDefine.ts', './EventDefine.ts', './ViewGlobal.ts', './BuildingItemVMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Input, instantiate, RichText, Component, GlobalContext, differ, TranslateScope, GameLogicEvent, UIGlobalContext, InputMode, BuildingItemVMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Input = module.Input;
      instantiate = module.instantiate;
      RichText = module.RichText;
      Component = module.Component;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }, function (module) {
      differ = module.differ;
    }, function (module) {
      TranslateScope = module.TranslateScope;
    }, function (module) {
      GameLogicEvent = module.GameLogicEvent;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
      InputMode = module.InputMode;
    }, function (module) {
      BuildingItemVMgr = module.BuildingItemVMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1e77b7jtQxMAZIWaSFE+erv", "BuildingVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BuildingVMgr = exports('BuildingVMgr', (_dec = ccclass('BuildingVMgr'), _dec2 = property({
        type: Prefab,
        displayName: "建筑项预制体"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BuildingVMgr, _Component);
        function BuildingVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "selectAblePrefab", _descriptor, _assertThisInitialized(_this));
          _this.buildAbleChanged = true;
          _this.buildAbleModules = void 0;
          /** 缓存上次渲染的,减少渲染次数 */
          _this.lastRenderAbleModules = {};
          return _this;
        }
        var _proto = BuildingVMgr.prototype;
        _proto.onBuildAbleChangeEvent = function onBuildAbleChangeEvent(context, event, data) {
          this.buildAbleChanged = true;
          this.buildAbleModules = data.buildAbleModules;
        }

        /**
         * 需要重新计算模块价格
         */;
        _proto.onBuildModule = function onBuildModule(context, event, data) {
          this.buildAbleChanged = true;
        };
        _proto.onRightClick = function onRightClick(event) {
          if (event.getButton() == 2) {
            // 右键
            UIGlobalContext.myInputSystem.inputMode = InputMode.NONE;
            UIGlobalContext.myInputSystem.clickedBuildAble = undefined;
          }
        };
        _proto.manageEvent = function manageEvent(add) {
          var _event = add ? GlobalContext.context.managers.eventBus.sub : GlobalContext.context.managers.eventBus.remove;
          var _uiEvent = add ? UIGlobalContext.globalUIEvent.sub : UIGlobalContext.globalUIEvent.remove;
          _event(GameLogicEvent.BUILD_ABLE_MODULE_CHANGE, this.onBuildAbleChangeEvent, this);
          _event(GameLogicEvent.NEW_MODULE, this.onBuildModule, this);
          _uiEvent(Input.EventType.MOUSE_DOWN, this.onRightClick, this);
        };
        _proto.start = function start() {
          this.manageEvent(true);
        };
        _proto.onDestroy = function onDestroy() {
          this.manageEvent(false);
        };
        _proto.resetBuildAbleUI = function resetBuildAbleUI() {
          var _this2 = this;
          var context = GlobalContext.context;
          if (!this.buildAbleModules) {
            this.buildAbleModules = context.managers.buildingManager.getBuildAbleModules();
          }
          this.buildAbleChanged = false;
          var buildAbleMap = this.buildAbleModules.reduce(function (p, c) {
            return p[c] = c, p;
          }, {});
          var _differ = differ(this.lastRenderAbleModules, buildAbleMap);
          var trans = context.managers.translateManager;
          var bs = context.managers.buildingManager;
          _differ.add.forEach(function (buildingName) {
            var name = trans.$(TranslateScope.MODULE_NAME, buildingName);
            var itemPrefab = instantiate(_this2.selectAblePrefab);
            itemPrefab.parent = _this2.node;
            var nameText = itemPrefab.getComponent(RichText);
            nameText.string = name + " cost:" + bs.getModuleCost(buildingName);
            var mgr = itemPrefab.getComponent(BuildingItemVMgr);
            mgr.init(buildingName);
            _this2.lastRenderAbleModules[buildingName] = mgr;
          });
          _differ["delete"].forEach(function (mgr) {
            delete _this2.lastRenderAbleModules[mgr.buildingName];
            mgr.node.destroy();
          });
        };
        _proto.update = function update(deltaTime) {
          if (GlobalContext.context && this.buildAbleChanged) {
            this.resetBuildAbleUI();
          }
        };
        _proto.onClickBuildingButton = function onClickBuildingButton() {
          //  TODO
        };
        return BuildingVMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectAblePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameLogic.ts', './GameContextBuilder.ts', './GlobalContextImpl.ts', './Mod2.ts', './ViewGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec2, Component, GameLogic, GameContextBuilder, GlobalContext, Mods, UIGlobalContext;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      GameLogic = module.GameLogic;
    }, function (module) {
      GameContextBuilder = module.GameContextBuilder;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }, function (module) {
      Mods = module.Mods;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "8623flulA5K+4h5udynbbwd", "CameraManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CameraManager = exports('CameraManager', (_dec = ccclass('CameraManager'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraManager, _Component);
        function CameraManager() {
          var _this;
          _this = _Component.call(this) || this;
          // TODO 没有初始化的话 从这里进入
          // test
          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));
          _this.isDragging = false;
          _this.startPos = void 0;
          if (GlobalContext.logic) {
            return _assertThisInitialized(_this);
          }
          Mods.forEach(function (mod) {
            mod.onApplicationLoaded == null || mod.onApplicationLoaded([], [], GlobalContext);
          });
          var bd = new GameContextBuilder();
          GlobalContext.setGameContext(new GameLogic(bd.buildByLevel(GlobalContext.levelManager.getLevels()[0])));
          return _this;
        }
        var _proto = CameraManager.prototype;
        _proto.start = function start() {
          CameraManager.INSTANCE = this;
        };
        _proto.update = function update(deltaTime) {};
        _proto.manageEvent = function manageEvent(add) {
          var $ = UIGlobalContext.globalUIEvent.$(true);
          $(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
          $(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          $(Node.EventType.MOUSE_UP, this.onMouseUp, this);
          $(Node.EventType.MOUSE_LEAVE, this.onMouseUp, this);
        };
        _proto.onLoad = function onLoad() {
          this.manageEvent(true);

          // 标记是否正在拖动
          this.isDragging = false;

          // 记录起始位置
          this.startPos = new Vec2(0, 0);
        };
        _proto.onMouseDown = function onMouseDown(event) {
          if (UIGlobalContext.myInputSystem.mousePointMenu) return;
          // 开始拖动时记录位置
          this.startPos = event.getLocation();
          this.isDragging = true;
        };
        _proto.onMouseMove = function onMouseMove(event) {
          if (this.isDragging && this.camera) {
            // 计算移动的偏移量
            var delta = event.getLocation().subtract(this.startPos);

            // 更新节点位置
            this.camera.position = this.node.position.add3f(-delta.x, -delta.y, 0);

            // 更新起始位置
            this.startPos = event.getLocation();
          }
        };
        _proto.onMouseUp = function onMouseUp() {
          // 停止拖动
          this.isDragging = false;
        };
        _proto.onDestroy = function onDestroy() {
          // 清理事件监听
          this.manageEvent(false);
        };
        return CameraManager;
      }(Component), _class3.INSTANCE = void 0, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CollaborativeProcessor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EnumDefine.ts', './main4.ts', './define.ts'], function (exports) {
  var _extends, cclegacy, ModuleEffectTypeEnum, GroundTypeEnum, RangeTypeEnum, FRAME_RATE, ModuleName, TResourceType;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleEffectTypeEnum = module.ModuleEffectTypeEnum;
      GroundTypeEnum = module.GroundTypeEnum;
      RangeTypeEnum = module.RangeTypeEnum;
    }, function (module) {
      FRAME_RATE = module.FRAME_RATE;
    }, function (module) {
      ModuleName = module.ModuleName;
      TResourceType = module.TResourceType;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "4fb19qflWJCzLnM3xxm4Q/f", "CollaborativeProcessor", undefined);
      //复杂度降低n + {ability}
      //n = 周围模块数量（上下左右）* {increaseAbility}
      var setting = {
        name: ModuleName.COLLABORATIVE_PROCESSOR,
        groundType: GroundTypeEnum.INSULATION,
        funcs: {},
        consts: {
          effect: {
            range: {
              type: RangeTypeEnum.AROUND,
              range: 1
            },
            resourceSelector: {
              resourceTypeFilter: [TResourceType.COMMON]
            },
            triggerInterval: 20 * 3,
            funcName: ModuleName.COLLABORATIVE_PROCESSOR
          },
          ability: 2,
          increaseAbility: 1,
          buildAble: {
            cost: 70
          }
        },
        desc: {}
      };
      function run(register, def) {
        register(setting);
        def(function (fm) {
          return fm.module.effect;
        }, setting.name, function (context, module, resource) {
          // 周围有模块则获得增益
          var consts = module.setting.consts;
          var count = context.managers.gameLogicUtil.getAround4(module.position).filter(function (it) {
            return it == null ? void 0 : it.module;
          }).length;
          var ability = consts.ability + count * consts.increaseAbility;
          context.managers.gameEntityManager.createAndRegisterBullet({
            effectType: ModuleEffectTypeEnum.PROCESS,
            ability: {
              processAbility: ability
            },
            moveSpeed: 2 / FRAME_RATE,
            realPosition: _extends({}, module.position),
            target: resource
          });
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/common.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.js', './EnumDefine.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _inheritsLoose, _wrapNativeSuper, cclegacy, stringify, parse, DirectionTypeEnum;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _inheritsLoose = module.inheritsLoose;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      stringify = module.stringify;
      parse = module.parse;
    }, function (module) {
      DirectionTypeEnum = module.DirectionTypeEnum;
    }],
    execute: function () {
      exports({
        assert: assert,
        bindAll: bindAll,
        differ: differ,
        differObject2: differObject2
      });
      cclegacy._RF.push({}, "2e0ddWnOrtAyYuiNM5hMk0F", "common", undefined);
      var MyPointClass = exports('MyPointClass', /*#__PURE__*/function () {
        /**
         *
         */
        function MyPointClass(x, y) {
          this.x = void 0;
          this.y = void 0;
          this.x = x;
          this.y = y;
        }
        var _proto = MyPointClass.prototype;
        _proto.pointOfDirection = function pointOfDirection(direction) {
          if (direction == DirectionTypeEnum.DOWN) {
            return new MyPointClass(this.x, this.y - 1);
          } else if (direction == DirectionTypeEnum.UP) {
            return new MyPointClass(this.x, this.y + 1);
          } else if (direction == DirectionTypeEnum.LEFT) {
            return new MyPointClass(this.x - 1, this.y);
          } else if (direction == DirectionTypeEnum.RIGHT) {
            return new MyPointClass(this.x + 1, this.y);
          }
          throw new Error("未知方向");
        };
        _proto.equals = function equals(point) {
          return point && point.x == this.x && point.y == this.y;
        };
        MyPointClass.equals = function equals(left, right) {
          return left == right || left == null && right == null || left && right && left.x == right.x && right.y == left.y;
        };
        return MyPointClass;
      }());
      MyPointClass.ZERO_RAW = {
        x: 0,
        y: 0
      };
      function differ(d1, d2) {
        var res = {
          add: [],
          modify: [],
          "delete": []
        };
        for (var key in d1) {
          var e1 = d1[key];
          var e2 = d2[key];
          if (e1 && e2) {
            res.modify.push({
              oldObj: e1,
              newObj: e2
            });
          } else if (e1) {
            res["delete"].push(e1);
          }
        }
        for (var _key in d2) {
          var _e = d1[_key];
          var _e2 = d2[_key];
          if (!_e) {
            res.add.push(_e2);
          }
        }
        return res;
      }
      function differObject2(d1, d2) {
        var res = {
          add: [],
          modify: [],
          "delete": []
        };
        for (var key in d1) {
          var e1 = d1[key];
          var e2 = d2[key];
          if (e1 && e2) {
            res.modify.push({
              key: key,
              oldObj: e1,
              newObj: e2
            });
          } else if (e1) {
            res["delete"].push({
              obj: e1,
              key: key
            });
          }
        }
        for (var _key2 in d2) {
          var _e3 = d1[_key2];
          var _e4 = d2[_key2];
          if (!_e3) {
            res.add.push({
              obj: _e4,
              key: _key2
            });
          }
        }
        return res;
      }
      var Timer = exports('Timer', /*#__PURE__*/function () {
        function Timer() {
          this.time = 0;
        }
        var _proto2 = Timer.prototype;
        _proto2.add = function add(_add) {
          this.time += _add;
        };
        _proto2.wait = function wait(_wait) {
          if (this.time >= _wait) {
            this.time = 0;
            return true;
          }
          return false;
        };
        _proto2.addWait = function addWait(add, wait) {
          this.time += add;
          if (this.time >= wait) {
            this.time = 0;
            return true;
          }
          return false;
        };
        return Timer;
      }());

      /**
       * 绑定所有方法
       */
      function bindAll(obj) {
        for (var _iterator = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(Object.getPrototypeOf(obj))), _step; !(_step = _iterator()).done;) {
          var key = _step.value;
          var method = obj[key];
          if (typeof method === 'function') {
            obj[key] = obj[key].bind(obj);
          }
        }
      }
      var GameOverError = exports('GameOverError', /*#__PURE__*/function (_Error) {
        _inheritsLoose(GameOverError, _Error);
        function GameOverError(success) {
          var _this;
          _this = _Error.call(this, "游戏结束" + success) || this;
          _this.success = void 0;
          _this.success = success;
          return _this;
        }
        return GameOverError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      var JSON = exports('JSON', {
        stringify: stringify,
        parse: parse
      });
      function assert(c, msg) {
        if (!c) {
          debugger;
          console.error("assert error" + (msg != null ? msg : ""));
          throw new Error("assert error" + (msg != null ? msg : ""));
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DamageManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './define.ts', './common.ts', './EnumDefine.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, ResourceBuffName, bindAll, assert, ModuleEffectTypeEnum, AssetName;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ResourceBuffName = module.ResourceBuffName;
    }, function (module) {
      bindAll = module.bindAll;
      assert = module.assert;
    }, function (module) {
      ModuleEffectTypeEnum = module.ModuleEffectTypeEnum;
      AssetName = module.AssetName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "487f2m//X1H4rb9ODmEiOu/", "DamageManager", undefined);
      var DamageManager = exports('DamageManager', /*#__PURE__*/function () {
        function DamageManager() {
          this.context = void 0;
          this.settingDataManager = void 0;
          this.functionManager = void 0;
          this.eventBus = void 0;
          this.gameEntityManager = void 0;
          this.buffManager = void 0;
          this.gameLogicUtils = void 0;
        }
        var _proto = DamageManager.prototype;
        _proto.setContext = function setContext(context) {
          this.context = context;
          this.settingDataManager = context.managers.settingDataManager;
          this.functionManager = context.managers.functionManager;
          this.eventBus = context.managers.eventBus;
          this.gameEntityManager = context.managers.gameEntityManager;
          this.buffManager = context.managers.buildingManager;
          this.gameLogicUtils = context.managers.gameLogicUtil;
          bindAll(this);
        };
        _proto.apply = function apply(target, bullet) {
          switch (bullet.effectType) {
            case ModuleEffectTypeEnum.PROCESS:
              this.applyProcess(target, bullet);
              break;
            case ModuleEffectTypeEnum.BATCH_PROCESS:
              this.applyBatchProcess(target, bullet);
              break;
            case ModuleEffectTypeEnum.ANALYSIS:
              this.applyAnalysis(target, bullet);
              break;
            case ModuleEffectTypeEnum.DEBUG:
              this.applyDebug(target, bullet);
              break;
            case ModuleEffectTypeEnum.FLIP:
              // TODO
              throw new Error("TODO");
            case ModuleEffectTypeEnum.UNSTABLE:
              this.applyUnstable(target, bullet);
              break;
            case ModuleEffectTypeEnum.INTERFERE:
              this.applyInterfere(target, bullet);
              break;
            case ModuleEffectTypeEnum.MERGE:
              this.applyMerge(target, bullet);
              break;
            case ModuleEffectTypeEnum.DECOMPOSE:
              this.applyDecompose(target, bullet);
              break;
            case ModuleEffectTypeEnum.INSPIRE:
              this.applyInspire(target, bullet);
              break;
            case ModuleEffectTypeEnum.CONSUME:
              this.applyConsume(target, bullet);
              break;
          }
        };
        _proto.applyProcess = function applyProcess(target, attacker) {
          var _attacker$ability;
          var ability = (_attacker$ability = attacker.ability) == null ? void 0 : _attacker$ability.processAbility;
          assert(ability && ability >= 0);
          if (target.alive == false) return;
          // buff结算
          var damage = this.applyProcess_CalculateBuff(ability, target, attacker);
          target.vars.complexity -= damage;
          // 检查资源
          if (target.vars.complexity <= 0 || !target.alive) {
            this.gameEntityManager.deRegisterResource(target, attacker);
          }
        };
        _proto.applyBatchProcess = function applyBatchProcess(targets, attacker) {
          var _attacker$ability2;
          var ability = (_attacker$ability2 = attacker.ability) == null ? void 0 : _attacker$ability2.processAbility;
          assert(ability && ability >= 0);
          for (var _iterator = _createForOfIteratorHelperLoose(targets), _step; !(_step = _iterator()).done;) {
            var target = _step.value;
            if (target.alive == false) continue;
            // buff结算
            var damage = this.applyProcess_CalculateBuff(ability, target, attacker);
            target.vars.complexity -= damage;
            // 检查资源
            if (target.vars.complexity <= 0 || !target.alive) {
              this.gameEntityManager.deRegisterResource(target, attacker);
            }
          }
        };
        _proto.applyDebug = function applyDebug(target, attacker) {
          var _attacker$ability3;
          var ability = (_attacker$ability3 = attacker.ability) == null ? void 0 : _attacker$ability3.debugAbility;
          assert(ability && ability >= 0);
          if (target.alive == false) return;

          // buff结算
          var damage = this.applyProcess_CalculateBuff(ability, target, attacker);
          target.vars.complexity -= damage;
          // 检查资源
          if (target.vars.complexity <= 0 || !target.alive) {
            this.gameEntityManager.deRegisterResource(target, attacker);
          }
        };
        _proto.applyAnalysis = function applyAnalysis(target, attacker) {
          if (!attacker.ability.analysisAbility || attacker.ability.analysisAbility <= 0) {
            return;
          }
          var buffVar = {
            level: attacker.ability.analysisAbility
          };
          this.gameLogicUtils.addBuffToResource(target, ResourceBuffName.ANALYZED, buffVar);
        }

        //applyFlip(module: TModuleEntity, targets: TResourceEntity[], bullet: IBullet): void;
        ;

        _proto.applyUnstable = function applyUnstable(target, attacker) {
          var _attacker$ability4;
          var ability = (_attacker$ability4 = attacker.ability) == null ? void 0 : _attacker$ability4.processAbility;
          assert(ability && ability >= 0);
          if (target.alive == false) return;
          var damage = ability;
          target.vars.complexity -= damage;
          // 检查资源
          if (target.vars.complexity <= 0 || !target.alive) {
            this.gameEntityManager.deRegisterResource(target, attacker);
          }
        };
        _proto.applyMerge = function applyMerge(target, attacker) {
          // TODO
        };
        _proto.applyDecompose = function applyDecompose(target, attacker) {
          // TODO
        };
        _proto.applyInterfere = function applyInterfere(target, attacker) {
          // TODO
        };
        _proto.applyInspire = function applyInspire(target, attacker) {
          var setting = target.setting.consts;
          // 增加加价值
          if (setting.addValue) {
            this.gameLogicUtils.addAsset(AssetName.VALUE, setting.addValue);
          }
          // 增加能量
          if (setting.addEnergy) {
            this.gameLogicUtils.addAsset(AssetName.ENERGY, setting.addEnergy);
          }
          // 造成伤害
          if (setting.damage) {
            this.gameLogicUtils.addAsset(AssetName.ENERGY, setting.damage);
          }
        };
        _proto.applyConsume = function applyConsume(target, bullet) {
          var _bullet$ability;
          var ability = (_bullet$ability = bullet.ability) == null ? void 0 : _bullet$ability.processAbility;
          assert(ability && ability >= 0);
          if (target.alive == false) return;
          target.alive = false;
          target.vars.complexity = 0;
          this.gameEntityManager.deRegisterResource(target, bullet);
        };
        _proto.applyProcess_CalculateBuff = function applyProcess_CalculateBuff(complexity, resource, bullet) {
          var _this = this;
          var info = {
            orgDamage: complexity,
            relDamage: complexity,
            target: resource,
            bullet: bullet
          };
          resource.buffs.forEach(function (buff) {
            var bfd = buff.setting.func.beforeDamaged;
            if (!bfd) return;
            var func = _this.functionManager.getFunction(function (it) {
              return it.resource.buff.beforeDamaged;
            }, bfd);
            if (!func) return;
            func(_this.context, buff, info);
          });
          this.gameLogicUtils.checkResourceBuffDestroy(resource);
          return info.relDamage;
        };
        return DamageManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/define.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5a81ew3SrdPMKPM3AgTE6wf", "define", undefined);
      var ModuleName = exports('ModuleName', {
        START: "MN_START",
        END: "MN_END",
        PROCESSOR: "MN_PROCESS",
        INDEPENDENT_PROCESSOR: "MN_INDEPENDENT_PROCESSOR",
        COLLABORATIVE_PROCESSOR: "MN_COLLABORATIVE_PROCESSOR",
        HARMLESS_PROCESSOR: "MN_HARMLESS_PROCESSOR",
        RECYCLE: "MN_RECYCLE",
        FLIP: "MN_FLIP",
        ANALYZER: "MN_ANALYZER",
        /** 强力处理 */
        POWERFUL_PROCESSOR: "MN_POWERFUL_PROCESSOR",
        /** 加固 */
        REINFORCER: "MN_REINFORCER",
        /** 研究 */
        LABORATORY: "MN_LABORATORY",
        /** 运维 */
        OPERATIONS: "MN_OPERATIONS",
        /** 干扰器 */
        JAMMER: "MN_JAMMER",
        /** 维护 */
        MAINTENANCE: "MN_MAINTENANCE",
        /** 电极传输 */
        POLE_TRANSMISSION: "MN_POLE_TRANSMISSION",
        /** 遗忘 */
        FORGET: "MN_FORGET",
        /** 计算 */
        CALCULATOR: "MN_CALCULATOR",
        /** 拦截 */
        INTERCEPTOR: "MN_INTERCEPTOR",
        /** 电极发电 */
        POLE_POWER_STATION: "MN_POLE_POWER_STATION",
        /** 电容 */
        CAPACITANCE: "MN_CAPACITANCE",
        /** 充能的研究 */
        POWERED_LABORATORY: "MN_POWERED_LABORATORY",
        /** 充能的处理 */
        POWERED_PROCESSOR: "MN_POWERED_PROCESSOR",
        /** 充能的翻转 */
        POWERED_FLIP: "MN_POWERED_FLIP",
        /** 重构 */
        REFACTOR: "MN_REFACTOR",
        /** 自杀式处理 */
        SUICIDAL_PROCESS: "MN_SUICIDAL_PROCESS",
        /** 加速处理 */
        PROCESS_ACCELERATOR: "MN_PROCESS_ACCELERATOR"
      });
      var ResourceName = exports('ResourceName', {
        META_DATA: "RT_META_DATA",
        PERSISTENT_DATA: "RT_PERSISTENT_DATA",
        VOLATILE_DATA: "RT_VOLATILE_DATA",
        BACKUP_DATA: "RT_BACKUP_DATA",
        DISTRIBUTED_DATA: "RT_DISTRIBUTED_DATA",
        BUG: "RT_BUG",
        VULNERABILITY: "RT_VULNERABILITY",
        ENERGY: "RT_ENERGY",
        VALUE: "RT_VALUE"
      });
      var TResourceType = exports('TResourceType', {
        COMMON: "TL_COMMON",
        DANGER: "TL_DANGER",
        SPECIAL: "TL_SPECIAL"
      });
      /** {@link TResourceType} */

      var ResourceBuffName = exports('ResourceBuffName', {
        ReduceComplexity: "RBN_ReduceComplexity",
        ANALYZED: "RBN_Analyzed"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/End.ts", ['cc', './EnumDefine.ts', './define.ts'], function (exports) {
  var cclegacy, GroundTypeEnum, RangeTypeEnum, ModuleEffectTypeEnum, ModuleName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
      RangeTypeEnum = module.RangeTypeEnum;
      ModuleEffectTypeEnum = module.ModuleEffectTypeEnum;
    }, function (module) {
      ModuleName = module.ModuleName;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "0dc2eawk+9ITJ0R8JFtOotB", "End", undefined);
      var setting = {
        name: ModuleName.END,
        groundType: GroundTypeEnum.NONE,
        funcs: {},
        consts: {
          effect: {
            range: {
              type: RangeTypeEnum.SELF
            },
            resourceSelector: {},
            triggerInterval: 0,
            funcName: ModuleName.END
          }
        }
      };
      function run(register, def) {
        register(setting);

        /** 资源进家-模块 效果 */
        def(function (it) {
          return it.module.effect;
        }, setting.name, function (context, module, resource) {
          if (!resource) return;
          // 激发资源
          var attacker = {
            effectType: ModuleEffectTypeEnum.INSPIRE,
            ability: {}
          };
          context.managers.damageManager.applyInspire(resource, attacker);
          context.managers.gameEntityManager.deRegisterResource(resource, attacker);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnumDefine.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a43058pmOVBs6YdMBqWoFqm", "EnumDefine", undefined);
      var DirectionTypeEnum = exports('DirectionTypeEnum', {
        UP: "U",
        DOWN: "D",
        LEFT: "L",
        RIGHT: "R"
      });
      /** {@link DirectionTypeEnum} */

      /**
       * 地图地面类型
       */
      var GroundTypeEnum = exports('GroundTypeEnum', {
        NONE: "GT_NONE",
        /** 导线 */
        WIRE: "GT_WIRE",
        /** 板面 */
        INSULATION: "GT_INSULATION",
        /** 电极 */
        POLE: "POLE",
        /** 过孔 */
        HOLE: "HOLE",
        PIN__2: "PIN__2",
        PIN__4: "PIN__4",
        /** 基座 承载主要处理模块 */
        PIN__8: "PIN__8",
        PIN__16: "PIN__16"
      });

      /** {@link GroundTypeEnum} */

      /**
       * 模块效果类型
       */
      var ModuleEffectTypeEnum = exports('ModuleEffectTypeEnum', {
        UNKNOWN: "UNKNOWN",
        /** 处理 */
        PROCESS: "PROCESS",
        /** 批量处理 */
        BATCH_PROCESS: "BATCH_PROCESS",
        /** 分析 */
        ANALYSIS: "ANALYSIS",
        /** 修复 */
        DEBUG: "DEBUG",
        /** 翻转 */
        FLIP: "FLIP",
        /** 失稳 */
        UNSTABLE: "UNSTABLE",
        /** 干扰 降低移速 */
        INTERFERE: "INTERFERE",
        /** 聚合 合并资源 */
        MERGE: "MERGE",
        /** 分解 */
        DECOMPOSE: "DECOMPOSE",
        /** 激发 进家也是这个 */
        INSPIRE: "INSPIRE",
        /** 消费 */
        CONSUME: "CONSUME"
      });

      /**
       * {@link ModuleEffectTypeEnum}类型
       */

      var AssetName = exports('AssetName', {
        VALUE: "value",
        ENERGY: "energy",
        RESEARCH_BASE: "baseResearch"
      });
      var TranslateScope = exports('TranslateScope', {
        /** 游戏内的 */
        MODULE_NAME: "0",
        MODULE_DESC: "1",
        RESOURCE_NAME: "10",
        RESOURCE_DESC: "11",
        BUFF_NAME: "20",
        BUFF_DESC: "21",
        GROUND_NAME: "100",
        /** 全局的 */
        G_LEVEL_NAME: "1000",
        G_LEVEL_DESC: "1001"
      });
      var LangEnum = exports('LangEnum', {
        CN: "cn",
        EN: "en"
      });
      var RangeTypeEnum = exports('RangeTypeEnum', {
        SELF: "0",
        AROUND: "1",
        CIRCULAR: "2"
      });

      /**
       * {@link RangeTypeEnum}类型
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventBus.ts", ['cc', './common.ts'], function (exports) {
  var cclegacy, bindAll;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
    }],
    execute: function () {
      cclegacy._RF.push({}, "03166inDCZOJqLj5vAM11px", "EventBus", undefined);
      var EventBus = exports('EventBus', /*#__PURE__*/function () {
        function EventBus() {
          this.listeners = {};
          this.context = void 0;
          this.settingDataManager = void 0;
          this.functionManager = void 0;
          this.eventBus = void 0;
        }
        var _proto = EventBus.prototype;
        _proto.setContext = function setContext(context) {
          this.context = context;
          this.settingDataManager = context.managers.settingDataManager;
          this.functionManager = context.managers.functionManager;
          this.eventBus = context.managers.eventBus;
          bindAll(this);
        };
        _proto.pub = function pub(event, ext) {
          var _this = this;
          var listeners = this.listeners[event];
          if (listeners && listeners.length) {
            listeners.forEach(function (it) {
              it.listener(_this.context, event, ext);
            });
          }
        };
        _proto.sub = function sub(event, call, $this) {
          if (!this.listeners[event]) this.listeners[event] = [];
          if ($this) call = call.bind($this);
          var obj = this.listeners[event].find(function (it) {
            return it.listener == call && (!$this || it.$this == $this);
          });
          if (!obj) {
            this.listeners[event].push({
              listener: call,
              $this: $this
            });
            return;
          }
          if (obj.$this == $this) {
            return;
          }
          throw new Error("已经注册了该监听,但绑定的this不一致");
        };
        _proto.targetOff = function targetOff($this) {
          if (!$this) return;
          for (var _i = 0, _Object$keys = Object.keys(this.listeners); _i < _Object$keys.length; _i++) {
            var eventName = _Object$keys[_i];
            var listeners = this.listeners[eventName];
            var idx = listeners.findIndex(function (listeners) {
              return listeners.$this == $this;
            });
            if (idx >= 0) {
              this.listeners[eventName] = listeners.filter(function (it) {
                return it.$this == $this;
              });
            }
          }
        };
        _proto.remove = function remove(event, call, $this) {
          if (!this.listeners[event]) return;
          var idx = this.listeners[event].findIndex(function (it) {
            return it.listener == call && (!$this || it.$this == $this);
          });
          var obj = this.listeners[event][idx];
          if (!obj) {
            return;
          }
          if (obj.$this == $this) {
            this.listeners[event] = this.listeners[event].filter(function (it) {
              return it != obj;
            });
          }
          throw new Error("已经注册了该监听,但解除绑定的this没有传");
        };
        _proto.clear = function clear(event) {
          delete this.listeners[event];
        };
        return EventBus;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventDefine.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "574ebvJ6nhCN4KDZQwOAIJo", "EventDefine", undefined);
      /**
       * 游戏逻辑事件
       */
      var GameLogicEvent = exports('GameLogicEvent', {
        /**
         * @type {IDestroyedResourceInfo}
         */
        RESOURCE_DESTROYED: "RESOURCE_DESTROYED",
        GAME_FAIL: "GAME_FAIL",
        GAME_SUCCESS: "GAME_SUCCESS",
        /**
         * @type {Event_AssetAdd}
         */
        ASSET_ADD: "ASSET_ADD",
        /**
        * @type {Event_AssetUse}
        */
        ASSET_USE: "ASSET_USE",
        /**
          * @type {Event_BuildAbleModule_Change}
          */
        BUILD_ABLE_MODULE_CHANGE: "BUILD_ABLE_MODULE_CHANGE",
        /**
        * @type {Event_BuildModule}
        */
        NEW_MODULE: "BUILD_MODULE"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Flip.ts", ['cc', './common.ts', './EnumDefine.ts', './define.ts'], function (exports) {
  var cclegacy, assert, GroundTypeEnum, RangeTypeEnum, ResourceName, ResourceBuffName, ModuleName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      assert = module.assert;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
      RangeTypeEnum = module.RangeTypeEnum;
    }, function (module) {
      ResourceName = module.ResourceName;
      ResourceBuffName = module.ResourceBuffName;
      ModuleName = module.ModuleName;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "00f66LZDrdHQpCL6ATWietQ", "Flip", undefined);
      // 将持久数据和易失数据相互转换
      // 转换为持久数据时，复杂度 * {multiples}, 5t后失效
      // 转换为易失数据时，复杂度 / {multiples}
      var setting = {
        name: ModuleName.FLIP,
        groundType: GroundTypeEnum.INSULATION,
        funcs: {},
        consts: {
          effect: {
            range: {
              type: RangeTypeEnum.AROUND,
              range: 1
            },
            resourceSelector: {
              resourceNameFilter: [ResourceName.PERSISTENT_DATA, ResourceName.VOLATILE_DATA]
            },
            triggerInterval: 20 * 3,
            funcName: ModuleName.FLIP
          },
          multiples: 2,
          recoverTime: 5,
          buildAble: {
            cost: 100
          }
        },
        desc: {}
      };
      function run(register, def) {
        register(setting);
        def(function (fm) {
          return fm.module.effect;
        }, setting.name, function (context, module, resource) {
          var consts = module.setting.consts;
          var gameLogicUtils = context.managers.gameLogicUtil;
          if (resource.name === ResourceName.PERSISTENT_DATA) {
            gameLogicUtils.doMultipleToResource(resource, 1 / consts.multiples);
            gameLogicUtils.changeResourceType(resource, ResourceName.VOLATILE_DATA);
          } else if (resource.name === ResourceName.VOLATILE_DATA) {
            var differ = gameLogicUtils.doMultipleToResource(resource, consts.multiples);
            gameLogicUtils.changeResourceType(resource, ResourceName.PERSISTENT_DATA);
            if (differ > 0) {
              gameLogicUtils.addBuffToResource(resource, ResourceBuffName.ReduceComplexity, {
                leftTime: consts.recoverTime,
                complexity: differ
              });
            }
          } else {
            assert(false, "翻转不能接受该资源类型" + resource.name);
          }
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/funcs.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d37a4bGlO5JN4Q+QNFidpxW", "funcs", undefined); // export type IResourceArriveEndFunction =
      //     (gameContext: IGameContext, resource: TResourceEntity) => void
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FunctionManager.ts", ['cc', './common.ts'], function (exports) {
  var cclegacy, bindAll;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b054eT87TdBJ75tEpDUFERk", "FunctionManager", undefined);
      var FunctionManager = exports('FunctionManager', /*#__PURE__*/function () {
        function FunctionManager() {
          this.context = void 0;
          this.settingDataManager = void 0;
          this.eventBus = void 0;
          this.lifeCycle = void 0;
          this.module = void 0;
          this.resource = void 0;
          this.lifeCycle = {
            afterTicket: {},
            beforeTicket: {}
          };
          this.module = {
            effect: {},
            onTick: {},
            onBuild: {},
            init: {},
            onNewWave: {}
          };
          this.resource = {
            onTick: {},
            onMove: {},
            onDestroy: {},
            init: {},
            selector: {},
            buff: {
              init: {},
              onTick: {},
              onDestroy: {},
              beforeDamaged: {},
              onRepeat: {}
            }
          };
        }
        var _proto = FunctionManager.prototype;
        _proto.setContext = function setContext(context) {
          this.context = context;
          this.settingDataManager = context.managers.settingDataManager;
          this.eventBus = context.managers.eventBus;
          bindAll(this);
        };
        _proto.addFunction = function addFunction(lib, funcName, func) {
          if (!funcName) return undefined;
          var collect = lib(this);
          if (!collect) {
            throw new Error("未知方法 funcName:" + funcName);
          }
          if (collect[funcName]) {
            throw new Error("方法已经存在funcName:" + funcName);
          }
          collect[funcName] = func;
        };
        _proto.getFunction = function getFunction(lib, funcName) {
          if (!funcName) return undefined;
          var collect = lib(this);
          if (!collect) {
            throw new Error("未知方法 funcName:" + funcName);
          }
          var func = collect[funcName];
          if (!func) {
            throw new Error("未知方法 funcName:" + funcName);
          }
          return func;
        };
        return FunctionManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameContextBuilder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './common.ts', './BuildingManager.ts', './DamageManager.ts', './EventBus.ts', './FunctionManager.ts', './GameEntityManager.ts', './GameLogicUtils.ts', './MapUtil.ts', './ResearchManager.ts', './SettingDataManager.ts', './TranslateManager.ts', './EnumDefine.ts', './GameData.ts', './Mod2.ts'], function (exports) {
  var _extends, cclegacy, assert, MyPointClass, BuildingManager, DamageManager, EventBus, FunctionManager, GameEntityManager, GameLogicUtils, MapUtil, ResearchManager, SettingDataManager, TranslateManager, DirectionTypeEnum, GroundTypeEnum, GameMap, Mods;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      assert = module.assert;
      MyPointClass = module.MyPointClass;
    }, function (module) {
      BuildingManager = module.BuildingManager;
    }, function (module) {
      DamageManager = module.DamageManager;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      FunctionManager = module.FunctionManager;
    }, function (module) {
      GameEntityManager = module.GameEntityManager;
    }, function (module) {
      GameLogicUtils = module.GameLogicUtils;
    }, function (module) {
      MapUtil = module.MapUtil;
    }, function (module) {
      ResearchManager = module.ResearchManager;
    }, function (module) {
      SettingDataManager = module.SettingDataManager;
    }, function (module) {
      TranslateManager = module.TranslateManager;
    }, function (module) {
      DirectionTypeEnum = module.DirectionTypeEnum;
      GroundTypeEnum = module.GroundTypeEnum;
    }, function (module) {
      GameMap = module.GameMap;
    }, function (module) {
      Mods = module.Mods;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0e675i0inRPQ7yBCirXImk6", "GameContextBuilder", undefined);
      var GameContextBuilder = exports('GameContextBuilder', /*#__PURE__*/function () {
        function GameContextBuilder() {}
        var _proto = GameContextBuilder.prototype;
        _proto.buildManagers = function buildManagers(context) {
          // 初始化管理器
          context.managers = {
            functionManager: new FunctionManager(),
            eventBus: new EventBus(),
            gameEntityManager: new GameEntityManager(),
            settingDataManager: new SettingDataManager(),
            gameLogicUtil: new GameLogicUtils(),
            buildingManager: new BuildingManager(),
            translateManager: new TranslateManager(),
            researchManager: new ResearchManager(),
            mapUtil: new MapUtil(),
            damageManager: new DamageManager()
          };
          return context.managers;
        };
        _proto.getDirection = function getDirection(p1, p2) {
          if (p1.x == p2.x) {
            if (p2.y - p1.y == 1) {
              return DirectionTypeEnum.DOWN;
            } else if (p2.y - p1.y == -1) {
              return DirectionTypeEnum.UP;
            }
          } else if (p1.y == p2.y) {
            if (p2.x - p1.x == 1) {
              return DirectionTypeEnum.RIGHT;
            } else if (p2.x - p1.x == -1) {
              return DirectionTypeEnum.LEFT;
            }
          }
          throw new Error("未知坐标方向");
        };
        _proto.buildByLevel = function buildByLevel(level) {
          var _this = this;
          // 初始化地图 这里先做一个路径在上方和右方的地图
          var gameMap = this.buildEmptyMap(level);
          // 设置路径点
          var waysMu = [];
          level.wayPoints.forEach(function (way) {
            var wayPoints = [];
            waysMu.push(wayPoints);
            var last = gameMap.getAt(way[0]);
            assert(!!last, "配置的路径超出地图范围" + JSON.stringify(way[0]));
            for (var i = 1; i < way.length; i++) {
              var cur = gameMap.getAt(way[i]);
              assert(!!cur, "配置的路径超出地图范围" + JSON.stringify(way[0]));
              if (last.position.x !== cur.position.x && last.position.y === cur.position.y) {
                // 横向
                var dt = last.position.x > cur.position.x ? -1 : 1;
                for (var m = last.position.x; m < cur.position.x; m += dt) {
                  var mu = gameMap.getAt({
                    x: m,
                    y: cur.position.y
                  });
                  mu.groundType = GroundTypeEnum.WIRE;
                  wayPoints.push(mu);
                }
              } else if (last.position.x === cur.position.x && last.position.y !== cur.position.y) {
                // 纵向
                var _dt = last.position.y > cur.position.y ? -1 : 1;
                for (var _m = last.position.y; _m < cur.position.y; _m += _dt) {
                  var _mu = gameMap.getAt({
                    x: cur.position.x,
                    y: _m
                  });
                  _mu.groundType = GroundTypeEnum.WIRE;
                  wayPoints.push(_mu);
                }
              } else if (last.position.x - cur.position.x !== 0 && Math.abs(last.position.x - cur.position.x) == Math.abs(last.position.y - cur.position.y)) {
                // 斜向
                var dt1 = last.position.x > cur.position.x ? -1 : 1;
                var dt2 = last.position.y > cur.position.y ? -1 : 1;
                for (var _m2 = last.position.x, n = last.position.y; _m2 < cur.position.x; _m2 += dt1, n += dt2) {
                  var _mu2 = gameMap.getAt({
                    x: _m2,
                    y: n
                  });
                  _mu2.groundType = GroundTypeEnum.WIRE;
                  wayPoints.push(_mu2);
                }
              } else {
                assert(false, "不支持该路径方式");
              }
              last = cur;
            }
            // 最后一个
            last.groundType = GroundTypeEnum.WIRE;
            wayPoints.push(last);
          });

          // 设置特殊地面
          level.grounds.forEach(function (g) {
            var mu = gameMap.getAt(g.pos);
            assert(!!mu, "配置的地面类型超出地图范围" + JSON.stringify(g.pos));
            mu.groundType = g.ground;
          });
          var starts = waysMu.map(function (it) {
            return it[0];
          });
          var ends = waysMu.map(function (it) {
            return it[it.length - 1];
          });
          var roads = waysMu.map(function (way, i) {
            var keyPoints = [];
            var dir = _this.getDirection(way[0].position, way[1].position);
            keyPoints.push({
              pos: way[0].position,
              direction: dir
            });
            for (var _i = 1; _i < way.length; _i++) {
              var cur = way[_i];
              var last = way[_i - 1];
              var nDir = _this.getDirection(last.position, cur.position);
              if (nDir !== dir) {
                keyPoints.push({
                  pos: last.position,
                  direction: nDir
                });
              }
              dir = nDir;
            }
            // 如果最后一个点不是关键点,则让其是,方向与前一个方向一致
            if (!MyPointClass.equals(keyPoints[keyPoints.length - 1].pos, way[way.length - 1].position)) {
              keyPoints.push({
                pos: way[way.length - 1].position,
                direction: dir
              });
            }
            var rif = {
              rid: i + 1,
              start: way[0],
              end: way[way.length - 1],
              wayPoints: way,
              keyPoints: keyPoints
            };
            return rif;
          });
          // 设置路径上的下一个关键点的位置
          roads.forEach(function (rd) {
            var idx = 0;
            rd.wayPoints.forEach(function (it) {
              var _rd$keyPoints$idx;
              if (MyPointClass.equals(rd.keyPoints[idx].pos, it.position)) {
                idx++;
              }
              // 最后一个idx会越界
              it.nextWayPoint = (_rd$keyPoints$idx = rd.keyPoints[idx]) == null ? void 0 : _rd$keyPoints$idx.pos;
            });
          });
          var res = _extends({}, this.buildCommonData(), {
            asset: level.asset,
            map: gameMap,
            wavesInfo: {
              nextPtr: 0,
              waves: level.waves
            },
            place: {
              ends: ends,
              starts: starts
            },
            roads: roads
          });
          var _this$buildManagers = this.buildManagers(res),
            gameEntityManager = _this$buildManagers.gameEntityManager,
            buildingManager = _this$buildManagers.buildingManager;
          Object.values(res.managers).forEach(function (mgr) {
            return mgr.setContext(res);
          });

          // TODO mod
          Mods.forEach(function (mod) {
            mod.onGameContextCreated == null || mod.onGameContextCreated(res, [], []);
          });

          // 关卡限制只能建造指定的
          if (level.limitModule) {
            buildingManager.lockAllExcept(level.limitModule);
          }
          Object.values(res.managers).forEach(function (mgr) {
            return mgr.afterGameContextFullInit == null ? void 0 : mgr.afterGameContextFullInit();
          });
          return res;
        };
        _proto.buildEmptyMap = function buildEmptyMap(level) {
          var gameMap = new GameMap();
          gameMap.sizeX = level.width;
          gameMap.sizeY = level.height;
          gameMap.mapUnits = [];
          {
            for (var i = 0; i < gameMap.sizeY; i++) {
              var row = [];
              gameMap.mapUnits.push(row);
              for (var j = 0; j < gameMap.sizeX; j++) {
                var groundType = GroundTypeEnum.INSULATION;
                var mapUnit = {
                  module: undefined,
                  position: {
                    x: j,
                    y: i
                  },
                  groundType: groundType,
                  resources: []
                };
                row.push(mapUnit);
              }
            }
          }
          return gameMap;
        };
        _proto.buildCommonData = function buildCommonData() {
          return {
            eidPtr: 0,
            tick: 0,
            entities: {
              modules: {},
              moduleList: [],
              resources: {},
              /** 资源 已经不存活的资源会在tick结束时回收,需要判断是否存活  */
              resourceList: [],
              bullets: {},
              /** 子弹 已经不存活的资源会在tick结束时回收,需要判断是否存活  */
              bulletList: []
            },
            moduleMapUnits: [],
            alive: true,
            research: {
              unlocked: {}
            },
            cache: {},
            temp: {},
            managers: {}
          };
        };
        return GameContextBuilder;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "97a64W8Nq5L87uPIWLZb9H6", "GameData", undefined);
      var GameMap = exports('GameMap', /*#__PURE__*/function () {
        /**
         *
         */
        function GameMap() {
          this.sizeX = void 0;
          this.sizeY = void 0;
          this.mapUnits = void 0;
          this.sizeX = 50;
          this.sizeY = 50;
          this.mapUnits = [];
        }
        var _proto = GameMap.prototype;
        _proto.filter = function filter(predict) {
          var res = [];
          for (var y = 0; y < this.sizeY; y++) {
            var arr = this.mapUnits[y];
            for (var x = 0; x < this.sizeX; x++) {
              if (predict(arr[x])) {
                res.push(arr[x]);
              }
            }
          }
          return res;
        };
        _proto.getAt = function getAt(point) {
          if (!point) return;
          if (this.mapUnits[point.y][point.x]) {
            return this.mapUnits[point.y][point.x];
          }
        };
        return GameMap;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEntity.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9bb22mgtOFDYLoazN+A6QIc", "GameEntity", undefined);
      /** 出生点的扩展数据 */
      /** 终点的扩展数据 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEntityManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './common.ts', './EnumDefine.ts', './EventDefine.ts'], function (exports) {
  var _extends, cclegacy, bindAll, MyPointClass, GameLogicEvent;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
      MyPointClass = module.MyPointClass;
    }, null, function (module) {
      GameLogicEvent = module.GameLogicEvent;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d5efcOnCFFNYrqF0YdISqq5", "GameEntityManager", undefined);
      var GameEntityManager = exports('GameEntityManager', /*#__PURE__*/function () {
        function GameEntityManager() {
          this.context = void 0;
          this.settingDataManager = void 0;
          this.functionManager = void 0;
          this.eventBus = void 0;
          this.gameLogicUtils = void 0;
        }
        var _proto = GameEntityManager.prototype;
        _proto.setContext = function setContext(context) {
          this.context = context;
          this.settingDataManager = context.managers.settingDataManager;
          this.functionManager = context.managers.functionManager;
          this.eventBus = context.managers.eventBus;
          this.gameLogicUtils = context.managers.gameLogicUtil;
          bindAll(this);
        };
        _proto._buildModule = function _buildModule(eid, setting) {
          var res = {
            eid: eid,
            alive: true,
            position: MyPointClass.ZERO_RAW,
            name: setting.name,
            setting: setting,
            cache: {},
            vars: {
              effect: {
                coldDown: 0
              }
            }
          };
          return res;
        };
        _proto._buildResource = function _buildResource(eid, setting, complexity, params) {
          return {
            eid: eid,
            name: setting.name,
            setting: setting,
            vars: _extends({
              logicPosition: MyPointClass.ZERO_RAW,
              nextWayPoint: MyPointClass.ZERO_RAW,
              realPosition: MyPointClass.ZERO_RAW,
              complexity: complexity
            }, params),
            buffs: [],
            cache: {},
            alive: true
          };
        };
        _proto.createModule = function createModule(name) {
          var setting = this.settingDataManager.getModule(name);
          if (!setting) {
            throw new Error("配置不存在" + name);
          }
          var res = this._buildModule(++this.context.eidPtr, setting);
          var initor = setting == null ? void 0 : setting.funcs.init;
          var func = this.functionManager.getFunction(function (it) {
            return it.module.init;
          }, initor);
          func == null || func(this.context, res);
          return res;
        };
        _proto.registerModule = function registerModule(module, mapUnit) {
          var context = this.context;
          mapUnit.module = module;
          module.position = mapUnit.position;
          context.entities.modules[module.eid] = module;
          context.entities.moduleList.push(module);

          // 发起事件
          var eventData = {
            module: module
          };
          context.managers.eventBus.pub(GameLogicEvent.NEW_MODULE, eventData);
          return module;
        };
        _proto.createResource = function createResource(name, complexity, params) {
          var context = this.context;
          var setting = this.settingDataManager.getResource(name);
          if (!setting) {
            throw new Error("配置不存在" + name);
          }
          var resource = this._buildResource(++context.eidPtr, setting, complexity, params);
          var initor = setting == null ? void 0 : setting.funcs.init;
          var func = this.functionManager.getFunction(function (it) {
            return it.resource.init;
          }, initor);
          func == null || func(context, resource);
          return resource;
        };
        _proto.registerResource = function registerResource(resource, mapUnit) {
          mapUnit.resources.push(resource);
          resource.vars.logicPosition = _extends({}, mapUnit.position);
          resource.vars.nextWayPoint = mapUnit.nextWayPoint;
          this.context.entities.resources[resource.eid] = resource;
          this.context.entities.resourceList.push(resource);
          return resource;
        };
        _proto.deRegisterResource = function deRegisterResource(resource, attacker) {
          if (!this.context.entities.resources[resource.eid]) return;
          resource.alive = false;
          delete this.context.entities.resources[resource.eid];
          var mu = this.context.map.getAt(resource.vars.logicPosition);
          if (!mu) return;
          mu.resources = mu.resources.filter(function (it) {
            return it != resource;
          });
          var event = {
            attacker: attacker,
            resource: resource
          };

          // 结算buf
          this.gameLogicUtils.checkResourceBuffDestroy(resource);

          // 析构函数
          var func = this.functionManager.getFunction(function (it) {
            return it.resource.onDestroy;
          }, resource.setting.funcs.onDestroy);
          func && func(this.context, event);

          // 触发事件
          this.eventBus.pub(GameLogicEvent.RESOURCE_DESTROYED, event);
          return resource;
        };
        _proto.deRegisterModule = function deRegisterModule(module) {
          if (!this.context.entities.modules[module.eid]) return;
          // 从全局移除
          var mu = this.context.map.getAt(module.position);
          if (mu) delete mu.module;
          module.alive = false;
          delete this.context.entities.modules[module.eid];
          return;
        };
        _proto.createAndRegisterBullet = function createAndRegisterBullet(bullet) {
          bullet.eid = ++this.context.eidPtr;
          bullet.alive = true;
          this.context.entities.bullets[bullet.eid] = bullet;
          this.context.entities.bulletList.push(bullet);
          return bullet;
        };
        _proto.deRegisterBullet = function deRegisterBullet(bullet) {
          bullet.alive = false;
          delete this.context.entities.bullets[bullet.eid];
        };
        return GameEntityManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './common.ts', './EventDefine.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _extends, cclegacy, GameOverError, GameLogicEvent;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameOverError = module.GameOverError;
    }, function (module) {
      GameLogicEvent = module.GameLogicEvent;
    }],
    execute: function () {
      cclegacy._RF.push({}, "282660ewJNO3oyeER5uZRTk", "GameLogic", undefined);
      var GameLogic = exports('GameLogic', /*#__PURE__*/function () {
        function GameLogic(gameContext) {
          this.pause = false;
          this.gameSpeed = 1;
          // @ts-check 
          this.gameContext = void 0;
          this.gameContext = gameContext;
        }
        var _proto = GameLogic.prototype;
        _proto.init = function init() {
          //TODO init  gameContext
        };
        _proto.getFunction = function getFunction(lib, funcName) {
          if (!funcName) return undefined;
          return this.gameContext.managers.functionManager.getFunction(lib, funcName);
        };
        _proto.nextTick = function nextTick() {
          if (this.pause) return;
          try {
            if (this.gameContext.alive) {
              this.mainLogic();
              if (!this.gameContext.alive) {
                throw new GameOverError(false);
              }
            }
          } catch (e) {
            if (e instanceof GameOverError) {
              this.gameContext.alive = false;
              var success = e.success;
              if (success) {
                this.gameContext.managers.eventBus.pub(GameLogicEvent.GAME_SUCCESS, undefined);
              } else {
                this.gameContext.managers.eventBus.pub(GameLogicEvent.GAME_FAIL, undefined);
              }
            } else {
              debugger;
              console.log(e);
            }
          }
        };
        _proto.mainLogic = function mainLogic() {
          var context = this.gameContext;
          if (!context.alive) return;

          // 更新临时缓存
          context.temp = {};

          // 帧前逻辑
          this.beforeTickLogic(context);

          // 波次更新
          this.nextWaveLogic(context);

          // 资源 子弹移动
          this.moveNextLogic(context);

          // 帧更新逻辑
          this.onTickLogic();

          // 模块效果判定
          this.moduleEffectLogic(context);

          // 资源存活判定
          this.entityAliveJudgeLogic(context);

          // 后续逻辑
          this.afterTickLogic(context);

          // 更新tick
          context.tick++;
          this.debuggerChecker(context);
        }

        // /**
        //  * 是否满足资源筛选器，能执行模块的作用
        //  */
        // private matchEffect(context: IGameContext, selector: IResourceSelector | undefined, resource: IResourceEntity, wayCur: IMapUnit) {
        //     if (!selector)
        //         return true;
        //     if (selector.func) {
        //         // 直接使用方法
        //         let func = context.managers.functionManager.getFunction(it => it.resource.selector, selector.func)!;
        //         return func(context, resource, wayCur);
        //     } else if (selector.or) {
        //         // 其他
        //         alert("暂时不支持这种筛选器")
        //     } else {
        //         console.warn("指定了筛选器，但是没有指定筛选方式", JSON.stringify(wayCur.module?.setting))
        //     }
        // }
        ;

        _proto.moduleEffectLogic = function moduleEffectLogic(context) {
          context.entities.moduleList.forEach(function (module) {
            if (!module.alive) return;
            if (!module.setting.consts.effect || !module.vars.effect) return;
            var effectVar = module.vars.effect;
            var effectConst = module.setting.consts.effect;
            if (effectVar.coldDown <= 0) {
              // TODO 优化寻敌机制
              // 查找所有范围内的资源,触发效果,如果触发失败,则进行下一次触发
              var resources = context.entities.resourceList.filter(function (it) {
                return it.alive;
              }).filter(function (it) {
                return context.managers.gameLogicUtil.isInRange(it, module);
              }).filter(function (it) {
                return context.managers.gameLogicUtil.isMatchEffect(it, module);
              });
              if (resources.length) {
                var func = context.managers.functionManager.getFunction(function (it) {
                  return it.module.effect;
                }, effectConst.funcName);
                if (func) {
                  for (var i = 0; i < resources.length && effectVar.coldDown <= 0; i++) {
                    var resource = resources[i];
                    var res = func(context, module, resource);
                    if (!(res != null && res.noColdDown)) effectVar.coldDown = effectConst.triggerInterval;
                  }
                }
              }
            }
            effectVar.coldDown = Math.max(0, effectVar.coldDown - 1);
          });
        }

        /** 
         * 生命周期函数 onTick
         * @param gameContext
         * @returns 
         */;
        _proto.onTickLogic = function onTickLogic() {
          var _this = this;
          var gameContext = this.gameContext;
          // 模块
          gameContext.entities.moduleList.forEach(function (module) {
            var _this$getFunction, _module$setting;
            if (!module.alive) return;
            (_this$getFunction = _this.getFunction(function (it) {
              return it.module.onTick;
            }, (_module$setting = module.setting) == null || (_module$setting = _module$setting.funcs) == null ? void 0 : _module$setting.onTicket)) == null || _this$getFunction(_this.gameContext, module);
          });
          // 资源
          gameContext.entities.resourceList.forEach(function (resource) {
            var _this$getFunction2, _resource$setting;
            if (!resource.alive) return;
            // 资源 onTick
            (_this$getFunction2 = _this.getFunction(function (it) {
              return it.resource.onTick;
            }, (_resource$setting = resource.setting) == null || (_resource$setting = _resource$setting.funcs) == null ? void 0 : _resource$setting.onTicket)) == null || _this$getFunction2(gameContext, resource);

            // buff onTick
            resource.buffs.forEach(function (buff) {
              var _this$getFunction3;
              // 执行 buff onTicket
              (_this$getFunction3 = _this.getFunction(function (it) {
                return it.resource.buff.onTick;
              }, buff.setting.func.onTick)) == null || _this$getFunction3(gameContext, resource, buff);
              if (buff.vars.leftTime !== undefined) {
                buff.vars.leftTime--;
              }
            });

            // buff 回收
            gameContext.managers.gameLogicUtil.checkResourceBuffDestroy(resource);
          });
        };
        _proto.beforeTickLogic = function beforeTickLogic(context) {
          Object.values(context.managers.functionManager.lifeCycle.beforeTicket).forEach(function (it) {
            return it == null ? void 0 : it(context);
          });
        };
        _proto.afterTickLogic = function afterTickLogic(context) {
          Object.values(context.managers.functionManager.lifeCycle.afterTicket).forEach(function (it) {
            return it == null ? void 0 : it(context);
          });
        };
        _proto.moveNextLogic = function moveNextLogic(context) {
          // 计算每个资源新的位置和下一个目标

          var mapUtil = context.managers.mapUtil;
          var damageManager = context.managers.damageManager;
          var gameEntityManager = context.managers.gameEntityManager;
          context.roads.forEach(function (road) {
            var _loop = function _loop() {
              var point = road.wayPoints[i];
              point.resources.forEach(function (resource) {
                var next = resource.vars.nextWayPoint;
                var pos = resource.vars.realPosition;
                if (!next) return;
                var newPos = mapUtil.approach(pos, next, resource.setting.consts.moveSpeed);
                if (newPos.arrive) {
                  delete newPos.arrive;
                  resource.vars.realPosition = newPos;
                  resource.vars.nextWayPoint = point.nextWayPoint;
                  resource.vars.logicPosition = _extends({}, point.position);
                } else {
                  resource.vars.realPosition = newPos;
                  resource.vars.logicPosition = {
                    x: Math.floor(newPos.x + 0.5),
                    y: Math.floor(newPos.y + 0.5)
                  };
                }
              });
              point.resources = [];
            };
            for (var i = 0; i < road.wayPoints.length; i++) {
              _loop();
            }
          });
          // 计算资源所在的地图块
          for (var _iterator = _createForOfIteratorHelperLoose(context.entities.resourceList), _step; !(_step = _iterator()).done;) {
            var _context$map$getAt;
            var resource = _step.value;
            if (!resource.alive) return;
            var pos = resource.vars.logicPosition;
            (_context$map$getAt = context.map.getAt(pos)) == null || _context$map$getAt.resources.push(resource);
          }

          // 计算子弹位置
          for (var _iterator2 = _createForOfIteratorHelperLoose(context.entities.bulletList), _step2; !(_step2 = _iterator2()).done;) {
            var bullet = _step2.value;
            if (!bullet.alive) return;
            if (!bullet.target.alive) return;
            var newPos = mapUtil.approach(bullet.realPosition, bullet.target.vars.realPosition, bullet.moveSpeed);
            if (newPos.arrive) {
              damageManager.apply(bullet.target, bullet);
              gameEntityManager.deRegisterBullet(bullet);
            } else {
              bullet.realPosition = newPos;
            }
          }
        };
        _proto.nextWaveLogic = function nextWaveLogic(context, force) {
          if (force === void 0) {
            force = false;
          }
          var wavesInfo = context.wavesInfo;
          var nextWave = wavesInfo.nextPtr < wavesInfo.waves.length ? wavesInfo.waves[wavesInfo.nextPtr] : null;
          if (nextWave && (force || nextWave.ticket <= context.tick)) {
            if (nextWave.info.length != context.place.starts.length) {
              // 波次数据和出生点数量不一致
              throw new Error("波次数据和出生点数量不一致");
            }
            wavesInfo.nextPtr++;
            context.place.starts.forEach(function (mapUnit, i) {
              var module = mapUnit.module;
              var start = module.vars;
              // 队列中已经有了 去除之前的
              if (start.index < start.wave.length) start.wave.splice(0, start.index);else start.wave = [];
              start.index = 0;

              // 初始化资源到队列
              var waveThis = nextWave.info[i]; // 本节点的本波次信息
              for (var _iterator3 = _createForOfIteratorHelperLoose(waveThis), _step3; !(_step3 = _iterator3()).done;) {
                var info = _step3.value;
                if (info.name) {
                  var rc = context.managers.gameEntityManager.createResource(info.name, info.complexity, info.ext);
                  start.wave.push(rc);
                  if (rc) context.entities.resources[rc.eid] = rc;
                } else if (info.__nop__) {
                  for (var _i = 0; _i < info.__nop__; _i++) {
                    start.wave.push(undefined);
                  }
                }
              }
            });
            // 触发事件
            context.entities.moduleList.filter(function (md) {
              return md.alive && md.setting.funcs.onNewWave;
            }).forEach(function (md) {
              var func = context.managers.functionManager.getFunction(function (it) {
                return it.module.onNewWave;
              }, md.setting.funcs.onNewWave);
              func(context, md);
            });
          } else if (!force && !nextWave && this.hasNoResources(context)) {
            throw new GameOverError(true);
          }
        };
        _proto.hasNoResources = function hasNoResources(context) {
          return !context.entities.resourceList.length && context.place.starts.every(function (it) {
            // 全都用完
            var start = it.module.vars;
            return start.index >= start.wave.length;
          });
        };
        _proto.entityAliveJudgeLogic = function entityAliveJudgeLogic(context) {
          context.entities.moduleList = context.entities.moduleList.filter(function (it) {
            return it.alive;
          });
          context.entities.resourceList = context.entities.resourceList.filter(function (it) {
            return it.alive;
          });
          context.entities.bulletList = context.entities.bulletList.filter(function (it) {
            return it.alive;
          });
        };
        _proto.debuggerChecker = function debuggerChecker(context) {
          if (context.asset.hp.cur <= 0 && context.alive) {
            console.warn("context 存活状态异常 ", context.asset.hp.cur, context.alive);
          }
        };
        return GameLogic;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameLogicUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './common.ts', './EnumDefine.ts', './BuffDefine.ts', './EventDefine.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, bindAll, differObject2, JSON, assert, RangeTypeEnum, ResourceBuff, GameLogicEvent;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
      differObject2 = module.differObject2;
      JSON = module.JSON;
      assert = module.assert;
    }, function (module) {
      RangeTypeEnum = module.RangeTypeEnum;
    }, function (module) {
      ResourceBuff = module.ResourceBuff;
    }, function (module) {
      GameLogicEvent = module.GameLogicEvent;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7b66afG9BVCMbGK8oqUpg63", "GameLogicUtils", undefined);
      var GameLogicUtils = exports('GameLogicUtils', /*#__PURE__*/function () {
        function GameLogicUtils() {
          this.context = void 0;
          this.settingDataManager = void 0;
          this.functionManager = void 0;
          this.eventBus = void 0;
          this.gameEntityManager = void 0;
          this.doDamageToResourceOptions = {
            modifyAble: true,
            dieAble: false
          };
          this.direction4 = [{
            x: 0,
            y: -1
          }, {
            x: 1,
            y: 0
          }, {
            x: 0,
            y: 1
          }, {
            x: -1,
            y: 0
          }];
        }
        var _proto = GameLogicUtils.prototype;
        _proto.setContext = function setContext(context) {
          this.context = context;
          this.settingDataManager = context.managers.settingDataManager;
          this.functionManager = context.managers.functionManager;
          this.eventBus = context.managers.eventBus;
          this.gameEntityManager = context.managers.gameEntityManager;
          bindAll(this);
        };
        _proto.addBuffToResource = function addBuffToResource(resource, buffName, vars) {
          var _setting$func$onRepea;
          var setting = this.settingDataManager.getResourceBuff(buffName);
          if (!setting) {
            return;
          }
          var buff = {
            name: setting.name,
            setting: setting,
            vars: vars != null ? vars : {},
            resource: resource
          };
          var curBuffIdx = resource.buffs.findIndex(function (bf) {
            return bf.name === setting.name;
          });
          var ResolutionEnum = ResourceBuff.RepeatedBuffResolutionEnum;
          // 默认ignore,没有重复也走这个
          var funcName = (_setting$func$onRepea = setting.func.onRepeated) != null ? _setting$func$onRepea : ResolutionEnum.REPLACE;
          if (curBuffIdx < 0) funcName = ResolutionEnum.IGNORE;
          var lc = ["leftTime", "leftTimes"];
          // buff覆盖策略 也可以在core中注入，这里比较简单，就直接写了
          if (ResolutionEnum.IGNORE === funcName) {
            resource.buffs.push(buff);
          } else if (ResolutionEnum.REPLACE === funcName) {
            resource.buffs[curBuffIdx] == buff;
          } else if (ResolutionEnum.ABANDON === funcName) ;else if (ResolutionEnum.NUM_ADD === funcName) {
            // 非生命周期数值相加，生命周期相同
            var old = resource.buffs[curBuffIdx];
            var _differ = differObject2(old.vars, buff.vars);
            if (_differ["delete"].length || _differ.add.length) {
              throw new Error("buff 合并失败 " + ResolutionEnum.NUM_ADD + "  " + JSON.stringify(old) + "  " + JSON.stringify(buff) + "  不能和差异数据");
            }
            var relNewBuff = {};
            for (var _iterator = _createForOfIteratorHelperLoose(_differ.modify), _step; !(_step = _iterator()).done;) {
              var _step$value = _step.value,
                key = _step$value.key,
                oldObj = _step$value.oldObj,
                newObj = _step$value.newObj;
              if (lc.includes(key)) {
                if (oldObj === newObj) {
                  relNewBuff[key] = oldObj;
                } else {
                  throw new Error("buff 合并失败 " + ResolutionEnum.NUM_ADD + "  " + JSON.stringify(old) + "  " + JSON.stringify(buff) + "  不能有不同的生命周期参数" + key + " 剩余时间等");
                }
              } else {
                if (typeof oldObj !== typeof newObj || typeof oldObj != "number") {
                  throw new Error("buff 合并失败 " + ResolutionEnum.NUM_ADD + "  " + JSON.stringify(old) + "  " + JSON.stringify(buff) + "  key" + key + " 必须是数字");
                }
                relNewBuff[key] = oldObj + newObj;
              }
            }
            resource.buffs[curBuffIdx].vars = relNewBuff;
          } else {
            var resolutionFunc = this.functionManager.getFunction(function (it) {
              return it.resource.buff.onRepeat;
            }, setting.func.onRepeated);
            if (resolutionFunc) {
              resource.buffs[curBuffIdx] = resolutionFunc(this.context, resource.buffs[curBuffIdx], buff);
            }
          }
        };
        _proto.damageToHome = function damageToHome(hp) {
          assert(hp >= 0);
          if (hp == 0) return;
          var hpInfo = this.context.asset.hp;
          hpInfo.cur -= hp;
          if (hpInfo.cur <= 0) {
            this.context.alive = false;
          }
        };
        _proto.checkResourceBuffDestroy = function checkResourceBuffDestroy(resource) {
          var _this = this;
          resource.buffs = resource.buffs.filter(function (buff) {
            var reason = undefined;
            // 资源被回收
            if (!resource.alive) {
              reason = ResourceBuff.BuffDestroyReasonEnum.RESOURCE_DESTROY;
            }
            // 时间扣减 和失效判定
            if (buff.vars.leftTime !== undefined) {
              if (buff.vars.leftTime <= 0) {
                reason = ResourceBuff.BuffDestroyReasonEnum.TIME;
              }
            }
            // 剩余次数 失效判定
            if (buff.vars.leftTimes !== undefined && buff.vars.leftTimes <= 0) {
              reason = ResourceBuff.BuffDestroyReasonEnum.TIMES;
            }
            if (reason) {
              var _this$functionManager;
              // 触发销毁buff事件
              (_this$functionManager = _this.functionManager.getFunction(function (it) {
                return it.resource.buff.onDestroy;
              }, buff.setting.func.onDestroy)) == null || _this$functionManager(_this.context, buff.resource, buff, reason);
              return false;
            } else {
              return true;
            }
          });
        };
        _proto.doMultipleToResource = function doMultipleToResource(resource, multiples) {
          assert(multiples > 0);
          if (resource.alive == false) return 0;
          var org = resource.vars.complexity;
          var complexity = resource.vars.complexity * multiples;
          // 结果要正数
          complexity = Math.max(Math.floor(complexity), 1);
          resource.vars.complexity = complexity;
          return complexity - org;
        };
        _proto.changeResourceType = function changeResourceType(resource, settingName) {
          var setting = this.settingDataManager.getResource(settingName);
          if (!setting) {
            throw new Error("changeResourceType no setting name:" + settingName);
          }
          // @ts-ignore
          resource.name = setting.name;
          // @ts-ignore
          resource.setting = setting;
        };
        _proto.addAsset = function addAsset(assetName, amount) {
          assert(amount > 0);
          if (amount == 0) return;
          var assetInfo = this.context.asset[assetName];
          var original = assetInfo.cur;
          assetInfo.cur = Math.min(original + amount, assetInfo.max);
          var eventData = {
            original: original,
            current: assetInfo.cur,
            wantAmount: amount
          };
          this.eventBus.pub(GameLogicEvent.ASSET_USE, eventData);
        };
        _proto.canUseAsset = function canUseAsset(assetName, amount) {
          assert(amount > 0);
          if (amount == 0) return true;
          var assetInfo = this.context.asset[assetName];
          var original = assetInfo.cur;
          if (original < amount) {
            return false;
          }
          return true;
        };
        _proto.useAsset = function useAsset(assetName, amount) {
          assert(amount > 0);
          if (amount == 0) return true;
          var assetInfo = this.context.asset[assetName];
          var original = assetInfo.cur;
          if (original < amount) {
            return false;
          }
          assetInfo.cur -= amount;
          var eventData = {
            original: original,
            current: assetInfo.cur,
            wantAmount: amount,
            forceUse: false
          };
          this.eventBus.pub(GameLogicEvent.ASSET_USE, eventData);
          return true;
        };
        _proto.countModuleByName = function countModuleByName(name) {
          return this.context.entities.moduleList.filter(function (md) {
            return md.alive && md.name === name;
          }).length;
        };
        _proto.getAround4 = function getAround4(pos) {
          var map = this.context.map;
          var res = [];
          this.direction4.forEach(function (d) {
            var row = map.mapUnits[pos.y + d.y];
            if (!row) {
              res.push(undefined);
              return;
            }
            res.push(row[pos.x + d.x]);
          });
          return res;
        };
        _proto.healToHome = function healToHome(hp) {
          assert(hp >= 0);
          if (!hp) return;
          var info = this.context.asset.hp;
          info.cur += Math.max(Math.min(hp, info.max - info.cur), 0);
        };
        _proto.isMatchEffect = function isMatchEffect(resource, module) {
          var _module$setting$const, _module$setting$const2;
          var func = this.context.managers.functionManager.getFunction(function (it) {
            return it.resource.selector;
          }, (_module$setting$const = (_module$setting$const2 = module.setting.consts.effect) == null || (_module$setting$const2 = _module$setting$const2.resourceSelector) == null ? void 0 : _module$setting$const2.funcName) != null ? _module$setting$const : "default");
          if (!func) return false;
          return func(this.context, resource, module);
        };
        _proto.isInRange = function isInRange(resource, module) {
          var _module$setting$const3;
          var range = (_module$setting$const3 = module.setting.consts.effect) == null ? void 0 : _module$setting$const3.range;
          if (!range) {
            return false;
          }
          if (range.type === RangeTypeEnum.SELF) {
            return resource.vars.logicPosition.x === module.position.x && resource.vars.logicPosition.y === module.position.y;
          } else if (range.type === RangeTypeEnum.AROUND) {
            return Math.abs(resource.vars.logicPosition.x - module.position.x) + Math.abs(resource.vars.logicPosition.y - module.position.y) <= 1;
          } else if (range.type === RangeTypeEnum.CIRCULAR) {
            var _range$range;
            return Math.pow(resource.vars.realPosition.x - module.position.x, 2) + Math.pow(resource.vars.realPosition.y - module.position.y, 2) <= Math.pow((_range$range = range.range) != null ? _range$range : 1, 2);
          } else {
            return false;
          }
        };
        return GameLogicUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Global.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "94178Nhx+hEb6UYHwHAQo+1", "Global", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalContextImpl.ts", ['cc', './TranslateManager.ts'], function (exports) {
  var cclegacy, TranslateManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TranslateManager = module.TranslateManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e2256zqChxOG7/BBwE9t4A4", "GlobalContextImpl", undefined);
      var LevelManagerImpl = /*#__PURE__*/function () {
        function LevelManagerImpl() {
          this.levels = {};
        }
        var _proto = LevelManagerImpl.prototype;
        _proto.addLevel = function addLevel(level) {
          this.levels[level.name] = level;
        };
        _proto.getLevels = function getLevels() {
          return Object.values(this.levels);
        };
        _proto.getLevel = function getLevel(name) {
          return this.levels[name];
        };
        return LevelManagerImpl;
      }();
      var GlobalContextImpl = /*#__PURE__*/function () {
        function GlobalContextImpl() {
          this.logic = void 0;
          this.context = void 0;
          this.levelManager = new LevelManagerImpl();
          this.translateManager = new TranslateManager();
          this.gameUpdateTimer = void 0;
        }
        var _proto2 = GlobalContextImpl.prototype;
        _proto2.setGameContext = function setGameContext(logic) {
          if (logic) {
            this.logic = logic;
            this.context = logic.gameContext;
            if (this.gameUpdateTimer) {
              clearTimeout(this.gameUpdateTimer);
            }
          } else {
            this.logic = undefined;
            this.context = undefined;
          }
        };
        _proto2.run = function run() {
          var _this = this;
          if (!this.logic) return;
          this.logic.nextTick();
          this.gameUpdateTimer = setTimeout(function () {
            _this.run();
          }, 1000);
        };
        return GlobalContextImpl;
      }();
      var GlobalContext = exports('GlobalContext', new GlobalContextImpl());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalInputEventManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewGlobal.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Input, input, NodeEventType, Component, UIGlobalContext;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Input = module.Input;
      input = module.input;
      NodeEventType = module.NodeEventType;
      Component = module.Component;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bcceeeXtw9MwKkTM7PMBxKX", "GlobalInputEventManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GlobalInputEventManager = exports('GlobalInputEventManager', (_dec = ccclass('GlobalInputEventManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalInputEventManager, _Component);
        function GlobalInputEventManager() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = GlobalInputEventManager.prototype;
        _proto.mouseDown = function mouseDown(event) {
          UIGlobalContext.globalUIEvent.pub(Input.EventType.MOUSE_DOWN, event);
        };
        _proto.mouseUp = function mouseUp(event) {
          UIGlobalContext.globalUIEvent.pub(Input.EventType.MOUSE_UP, event);
        };
        _proto.mouseMove = function mouseMove(event) {
          UIGlobalContext.globalUIEvent.pub(Input.EventType.MOUSE_MOVE, event);
        };
        _proto.manageEvent = function manageEvent(add) {
          // let _event = add ? logic.gameContext.managers.eventBus.sub : logic.gameContext.managers.eventBus.remove;
          var _input = add ? input.on.bind(input) : input.off.bind(input);
          var _input2 = add ? this.node.on.bind(this.node) : this.node.off.bind(this.node);
          _input(Input.EventType.MOUSE_DOWN, this.mouseDown, this);
          _input(Input.EventType.MOUSE_UP, this.mouseUp, this);
          _input(Input.EventType.MOUSE_MOVE, this.mouseMove, this);
          _input2(NodeEventType.MOUSE_DOWN, this.mouseDown, this);
          _input2(NodeEventType.MOUSE_UP, this.mouseUp, this);
          _input2(NodeEventType.MOUSE_MOVE, this.mouseMove, this);
        };
        _proto.start = function start() {
          this.manageEvent(true);
        };
        _proto.onDestroy = function onDestroy() {
          this.manageEvent(false);
        };
        return GlobalInputEventManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HarmlessProcessor.ts", ['cc', './EnumDefine.ts', './main4.ts', './define.ts'], function (exports) {
  var cclegacy, GroundTypeEnum, RangeTypeEnum, CommonResourceSelector, ModuleName, TResourceType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
      RangeTypeEnum = module.RangeTypeEnum;
    }, function (module) {
      CommonResourceSelector = module.CommonResourceSelector;
    }, function (module) {
      ModuleName = module.ModuleName;
      TResourceType = module.TResourceType;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "bcd5e3cdwtPEpG9lBRPiqvs", "HarmlessProcessor", undefined);
      //复杂度降低{ability}
      //如果资源被销毁，则获得{healAbility}生命值
      var setting = {
        name: ModuleName.HARMLESS_PROCESSOR,
        groundType: GroundTypeEnum.INSULATION,
        funcs: {},
        consts: {
          effect: {
            range: {
              type: RangeTypeEnum.AROUND,
              range: 1
            },
            resourceSelector: {
              resourceTypeFilter: [TResourceType.COMMON]
            },
            triggerInterval: 20 * 3,
            funcName: CommonResourceSelector.name
          },
          ability: 2,
          healAbility: 1,
          buildAble: {
            cost: 40
          }
        },
        desc: {}
      };
      function run(register, def) {
        register(setting);
        def(function (fm) {
          return fm.module.effect;
        }, setting.name, function (context, module, resource) {
          var consts = module.setting.consts;
          // TODO
          // context.managers.gameLogicUtil.damageToResource
          //     (resource, consts.ability, ResourceDamageSourceEnum.MODULE_PROCESSOR);
          // if (!resource.alive) {
          //     context.managers.gameLogicUtil.healToHome(consts.healAbility);
          // }
        });
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IndependentProcessor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EnumDefine.ts', './main4.ts', './define.ts'], function (exports) {
  var _extends, cclegacy, ModuleEffectTypeEnum, GroundTypeEnum, RangeTypeEnum, FRAME_RATE, ModuleName, TResourceType;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleEffectTypeEnum = module.ModuleEffectTypeEnum;
      GroundTypeEnum = module.GroundTypeEnum;
      RangeTypeEnum = module.RangeTypeEnum;
    }, function (module) {
      FRAME_RATE = module.FRAME_RATE;
    }, function (module) {
      ModuleName = module.ModuleName;
      TResourceType = module.TResourceType;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "ef1c8qdZW1LSqWz0IGH8y+M", "IndependentProcessor", undefined);
      // 处理 n+ {ability}
      // n = 周围没有模块? {increaseAbility} : 0
      var setting = {
        name: ModuleName.INDEPENDENT_PROCESSOR,
        groundType: GroundTypeEnum.INSULATION,
        funcs: {},
        consts: {
          effect: {
            range: {
              type: RangeTypeEnum.AROUND,
              range: 1
            },
            resourceSelector: {
              resourceTypeFilter: [TResourceType.COMMON]
            },
            triggerInterval: 20 * 3,
            funcName: ModuleName.INDEPENDENT_PROCESSOR
          },
          ability: 1,
          increaseAbility: 2,
          buildAble: {
            cost: 40
          }
        },
        desc: {}
      };
      function run(register, def) {
        register(setting);
        def(function (fm) {
          return fm.module.effect;
        }, setting.name, function (context, module, resource) {
          var consts = module.setting.consts;
          // 周围没有模块则获得增益
          var count = context.managers.gameLogicUtil.getAround4(module.position).filter(function (it) {
            return it == null ? void 0 : it.module;
          }).length;
          var ability = consts.ability + (count ? 0 : consts.increaseAbility);
          context.managers.gameEntityManager.createAndRegisterBullet({
            effectType: ModuleEffectTypeEnum.PROCESS,
            ability: {
              processAbility: ability
            },
            moveSpeed: 2 / FRAME_RATE,
            realPosition: _extends({}, module.position),
            target: resource
          });
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InfoVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalContextImpl.ts', './EnumDefine.ts', './common.ts', './UIUtilities.ts', './ViewGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, RichText, Label, Component, GlobalContext, TranslateScope, Timer, translateSettingString, InputMode, UIGlobalContext;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      RichText = module.RichText;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }, function (module) {
      TranslateScope = module.TranslateScope;
    }, function (module) {
      Timer = module.Timer;
    }, function (module) {
      translateSettingString = module.translateSettingString;
    }, function (module) {
      InputMode = module.InputMode;
      UIGlobalContext = module.UIGlobalContext;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "e5585OMnTFNwJ4Fq1DKaZyw", "InfoVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var InfoVMgr = exports('InfoVMgr', (_dec = ccclass('InfoVMgr'), _dec2 = property({
        type: Node,
        displayName: "地面信息面板"
      }), _dec3 = property({
        type: RichText,
        displayName: "地面信息文本"
      }), _dec4 = property({
        type: Node,
        displayName: "模块信息面板"
      }), _dec5 = property({
        type: RichText,
        displayName: "模块名称文本"
      }), _dec6 = property({
        type: RichText,
        displayName: "模块描述文本"
      }), _dec7 = property({
        type: Node,
        displayName: "资源信息面板"
      }), _dec8 = property({
        type: RichText,
        displayName: "资源名称文本"
      }), _dec9 = property({
        type: RichText,
        displayName: "资源描述文本"
      }), _dec10 = property({
        type: Node,
        displayName: "建筑信息面板"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InfoVMgr, _Component);
        function InfoVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "groundInfoForm", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "groundInfoText", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moduleInfoForm", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moduleNameText", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moduleDescText", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resourceInfoForm", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resourceNameText", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resourceDescText", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingInfoForm", _descriptor9, _assertThisInitialized(_this));
          //
          _this.buildingDescText = void 0;
          _this.fixUpdateTimer = new Timer();
          return _this;
        }
        var _proto = InfoVMgr.prototype;
        _proto.loadRef = function loadRef() {
          var _this$buildingInfoFor;
          !this.buildingDescText && (this.buildingDescText = (_this$buildingInfoFor = this.buildingInfoForm.getChildByName("TextDesc")) == null ? void 0 : _this$buildingInfoFor.getComponent(Label));
        };
        _proto.start = function start() {
          this.loadRef();
        };
        _proto.update = function update(deltaTime) {
          var _myInputSystem$clicke;
          if (!this.fixUpdateTimer.addWait(deltaTime, 0.1)) return;
          var myInputSystem = UIGlobalContext.myInputSystem;
          var context = GlobalContext.context;
          if (!context) return;
          // 先获取点击的, 再获取选中的
          var position = (_myInputSystem$clicke = myInputSystem == null ? void 0 : myInputSystem.clickedPosition) != null ? _myInputSystem$clicke : myInputSystem == null ? void 0 : myInputSystem.position;
          var mapUnit = context.map.getAt(position);
          var $ = context.managers.translateManager.$;
          if (this.groundInfoForm.active = !!mapUnit && myInputSystem.inputMode == InputMode.NONE) {
            var str = "地面类型: " + $(TranslateScope.GROUND_NAME, mapUnit.groundType);
            this.groundInfoText.string = str;
          }

          // TODO 重做buff渲染
          // if (this.resourceInfoForm.active = !!mapUnit?.resources && myInputSystem.inputMode == InputMode.NONE) {
          //     let str = "资源: " + $(TranslateScope.RESOURCE_NAME, mapUnit.resources.name) + "   复杂度:" + mapUnit.resources.complexity;
          //     if (mapUnit.resources.buffs.length) {
          //         str += " buff: [" +
          //             mapUnit.resources.buffs.map(buff =>
          //                 $(TranslateScope.BUFF_NAME, buff.name)
          //                 + (buff.vars.level ? ` 层数 ${buff.vars.level}` : "")
          //                 + (buff.vars.complexity ? ` 复杂度 ${buff.vars.complexity}` : "")
          //             ).join(" || ") + " ]";
          //     }
          //     this.resourceNameText.string = str;
          //     this.resourceDescText.string = "描述: ?";
          // }

          if (this.moduleInfoForm.active = !!(mapUnit != null && mapUnit.module) && myInputSystem.inputMode == InputMode.NONE) {
            this.moduleNameText.string = "模块: " + $(TranslateScope.MODULE_NAME, mapUnit.module.name);
            this.moduleDescText.string = "描述: ?";
          }

          /** 选中要建造的模块的情况 */
          if (myInputSystem.inputMode === InputMode.NONE) {
            if (this.buildingInfoForm.active = !!myInputSystem.mouseOverBuildAble) {
              var setting = context.managers.settingDataManager.getModule(myInputSystem.mouseOverBuildAble);
              this.buildingDescText.string = translateSettingString(context, TranslateScope.MODULE_DESC, setting == null ? void 0 : setting.desc, setting);
            }
          } else if (myInputSystem.inputMode === InputMode.BUILD_MODULE) {
            if (this.buildingInfoForm.active = !!myInputSystem.clickedBuildAble) {
              var _setting = context.managers.settingDataManager.getModule(myInputSystem.clickedBuildAble);
              this.buildingDescText.string = translateSettingString(context, TranslateScope.MODULE_DESC, _setting == null ? void 0 : _setting.desc, _setting);
            }
          } else {
            this.buildingInfoForm.active = false;
          }
        };
        return InfoVMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groundInfoForm", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groundInfoText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moduleInfoForm", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "moduleNameText", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "moduleDescText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "resourceInfoForm", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "resourceNameText", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "resourceDescText", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "buildingInfoForm", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lan.ts", ['cc', './EnumDefine.ts', './define.ts'], function (exports) {
  var cclegacy, LangEnum, TranslateScope, GroundTypeEnum, ModuleName, ResourceName, ResourceBuffName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LangEnum = module.LangEnum;
      TranslateScope = module.TranslateScope;
      GroundTypeEnum = module.GroundTypeEnum;
    }, function (module) {
      ModuleName = module.ModuleName;
      ResourceName = module.ResourceName;
      ResourceBuffName = module.ResourceBuffName;
    }],
    execute: function () {
      exports('init', init);
      cclegacy._RF.push({}, "c27e7ABUqxNeLkH+lXc3Jx2", "lan", undefined);
      function init(trans) {
        var $ = trans.$;
        if (trans.lang !== LangEnum.CN) return;
        $(TranslateScope.MODULE_NAME, ModuleName.END, "基地");
        $(TranslateScope.MODULE_NAME, ModuleName.START, "入口");
        $(TranslateScope.MODULE_NAME, ModuleName.PROCESSOR, "初级处理");
        $(TranslateScope.MODULE_NAME, ModuleName.FLIP, "初级翻转");
        $(TranslateScope.MODULE_NAME, ModuleName.ANALYZER, "初级分析");
        $(TranslateScope.MODULE_NAME, ModuleName.INDEPENDENT_PROCESSOR, "初级独立处理");
        $(TranslateScope.MODULE_NAME, ModuleName.COLLABORATIVE_PROCESSOR, "初级协同处理");
        $(TranslateScope.MODULE_NAME, ModuleName.HARMLESS_PROCESSOR, "初级无害化处理");
        $(TranslateScope.MODULE_NAME, ModuleName.RECYCLE, "初级回收");
        $(TranslateScope.MODULE_NAME, ModuleName.POLE_TRANSMISSION, "电极传输");
        $(TranslateScope.RESOURCE_NAME, ResourceName.META_DATA, "元数据");
        $(TranslateScope.RESOURCE_NAME, ResourceName.PERSISTENT_DATA, "持久数据");
        $(TranslateScope.RESOURCE_NAME, ResourceName.VOLATILE_DATA, "易失数据");
        $(TranslateScope.GROUND_NAME, GroundTypeEnum.INSULATION, "板面");
        $(TranslateScope.GROUND_NAME, GroundTypeEnum.WIRE, "导线");
        $(TranslateScope.GROUND_NAME, GroundTypeEnum.NONE, "未知");
        $(TranslateScope.GROUND_NAME, GroundTypeEnum.POLE, "电极");
        $(TranslateScope.BUFF_NAME, ResourceBuffName.ReduceComplexity, "还原");
        $(TranslateScope.BUFF_NAME, ResourceBuffName.ANALYZED, "被分析");
        $(TranslateScope.MODULE_DESC, ModuleName.PROCESSOR, "每[c.turn]回合 处理:[c.ability]");
        $(TranslateScope.MODULE_DESC, ModuleName.INDEPENDENT_PROCESSOR, "每[c.turn]回合 处理:[c.ability]\n如果四周没有其他模块,则 + [c.increaseAbility]");
        $(TranslateScope.MODULE_DESC, ModuleName.COLLABORATIVE_PROCESSOR, "每[c.turn]回合 处理:[c.ability]\n四周每有一个模块, + [c.increaseAbility]");
        $(TranslateScope.MODULE_DESC, ModuleName.FLIP, "\u6BCF[c.turn]\u56DE\u5408\u7FFB\u8F6C\u6570\u636E\n\u6301\u4E45\u6570\u636E \u590D\u6742\u5EA6\u53D8\u4E3A1/[c.multiples]\n\u6613\u5931\u6570\u636E \u590D\u6742\u5EA6\u53D8\u4E3A[c.multiples]");
        $(TranslateScope.MODULE_DESC, ModuleName.ANALYZER, "\u6BCF[c.turn]\u56DE\u5408\u7ED9\u6570\u636E\u65BD\u52A0[c.ability]\u5C42\u88AB\u5206\u6790\n\u88AB\u5206\u6790:\u88AB\u5904\u7406\u65F6,\u590D\u6742\u5EA6\u989D\u5916\u964D\u4F4En\u70B9,n\u4E3A\u5C42\u6570,\u6BCF\u6B21\u751F\u6548\u51CF\u5C11\u4E00\u5C42");
        $(TranslateScope.MODULE_DESC, ModuleName.HARMLESS_PROCESSOR, "\u6BCF[c.turn]\u56DE\u5408 \u5904\u7406:[c.ability]\n\u5982\u679C\u9500\u6BC1\u8D44\u6E90,\u7136\u540E\u6062\u590D[c.healAbility]");
        $(TranslateScope.MODULE_DESC, ModuleName.RECYCLE, "\u6BCF[c.turn]\u56DE\u5408 \u9500\u6BC1\u590D\u6742\u5EA6<=[c.ability]\u7684\u8D44\u6E90,\u7136\u540E\u6062\u590D[c.healAbility]\u751F\u547D\u503C");
        $(TranslateScope.MODULE_DESC, ModuleName.POLE_TRANSMISSION, "\u6BCF\u65B0\u6CE2\u6B21\u56DE\u5408 \u83B7\u5F97[c.value]\u4EF7\u503C");
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Level.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "41b55t88tRH7ahl264EIlKF", "Level", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelItemVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalContextImpl.ts', './EnumDefine.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, NodeEventType, Component, GlobalContext, TranslateScope;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      NodeEventType = module.NodeEventType;
      Component = module.Component;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }, function (module) {
      TranslateScope = module.TranslateScope;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "00e13zBT/RFwbMKzVydO/2B", "LevelItemVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelItemVMgr = exports('LevelItemVMgr', (_dec = ccclass('LevelItemVMgr'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelItemVMgr, _Component);
        function LevelItemVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nameText", _descriptor, _assertThisInitialized(_this));
          _this.level = void 0;
          _this.onSelected = void 0;
          return _this;
        }
        var _proto = LevelItemVMgr.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _proto.init = function init(level, onSelected) {
          this.level = level;
          this.onSelected = onSelected;
          this.node.on(NodeEventType.MOUSE_DOWN, this.onClick, this);
          this.nameText.string = GlobalContext.translateManager.$(TranslateScope.G_LEVEL_NAME, level.name);
        };
        _proto.onClick = function onClick() {
          this.onSelected(this.level);
        };
        return LevelItemVMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LogicSystem.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d36e32FqAZA5J5L97PP0ESu", "LogicSystem", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./GameLogic.ts', './GameContextBuilder.ts', './BuildingManager.ts', './DamageManager.ts', './EventBus.ts', './FunctionManager.ts', './GameEntityManager.ts', './GameLogicUtils.ts', './MapUtil.ts', './ResearchManager.ts', './SettingDataManager.ts', './TranslateManager.ts', './GlobalContextImpl.ts', './common.ts', './EnumDefine.ts', './BuffDefine.ts', './EventDefine.ts', './GameData.ts', './GameEntity.ts', './Global.ts', './Level.ts', './LogicSystem.ts', './Mod2.ts', './SettingData.ts', './funcs.ts', './buff.ts', './main4.ts', './define.ts', './Analyzer.ts', './CollaborativeProcessor.ts', './End.ts', './Flip.ts', './HarmlessProcessor.ts', './IndependentProcessor.ts', './PolePowerStation.ts', './Processor.ts', './Recycle.ts', './Start.ts', './main3.ts', './main2.ts', './lan.ts', './main.ts', './mod.ts', './research.ts', './BottomMenuVMgr.ts', './CameraManager.ts', './GlobalInputEventManager.ts', './RenderManager.ts', './ResourceVMgr.ts', './UIUtilities.ts', './ViewGlobal.ts', './ModuleVMgr.ts', './MapUnitManager.ts', './AssetVMgr.ts', './BottomRightMenuVMgr.ts', './InfoVMgr.ts', './WaveInfoVMgr.ts', './BuildingItemVMgr.ts', './BuildingVMgr.ts', './LevelItemVMgr.ts', './SelectLevelVMgr.ts', './debug-view-runtime-control.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/main.ts", ['cc', './define.ts'], function (exports) {
  var cclegacy, ModuleName, ResourceName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleName = module.ModuleName;
      ResourceName = module.ResourceName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1777cN0rQ1G05yHHSu+Bl7E", "main", undefined);
      var way = [{
        x: 0,
        y: 0
      }, {
        x: 3 - 1,
        y: 1 - 1
      }, {
        x: 3 - 1,
        y: 4 - 1
      }, {
        x: 6 - 1,
        y: 4 - 1
      }];
      var wd1 = [{
        name: ResourceName.META_DATA,
        complexity: 2
      }, {
        name: ResourceName.META_DATA,
        complexity: 3
      }, {
        __nop__: 3
      }];
      var wd2 = [{
        name: ResourceName.META_DATA,
        complexity: 3
      }, {
        name: ResourceName.META_DATA,
        complexity: 2
      }, {
        __nop__: 3
      }];
      var wave1 = {
        ticket: 5,
        info: [[].concat(wd1, wd2, wd1, wd2, wd1, wd2, wd1, wd2, wd1, wd2, wd1, wd2)]
      };
      var teach_processor_1 = {
        name: "教程-处理",
        desc: "学习基础操作",
        width: 6,
        height: 4,
        waves: [wave1],
        wayPoints: [way],
        asset: {
          hp: {
            cur: 10,
            max: 10
          },
          value: {
            cur: 70,
            max: 70
          },
          energy: {
            cur: 0,
            max: 0
          },
          baseResearch: {
            cur: 0,
            max: 0
          }
        },
        difficulty: 0,
        limitModule: [ModuleName.PROCESSOR, ModuleName.COLLABORATIVE_PROCESSOR, ModuleName.INDEPENDENT_PROCESSOR],
        grounds: []
      };
      var levels = exports('levels', [teach_processor_1]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main2.ts", ['cc', './main4.ts', './define.ts'], function (exports) {
  var cclegacy, FRAME_RATE, ResourceName, TResourceType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      FRAME_RATE = module.FRAME_RATE;
    }, function (module) {
      ResourceName = module.ResourceName;
      TResourceType = module.TResourceType;
    }],
    execute: function () {
      exports('init', init);
      cclegacy._RF.push({}, "2b616+aPHVIxbH6YSzB7pfW", "main", undefined);
      var MetaDataSetting = {
        name: ResourceName.META_DATA,
        resourceType: TResourceType.COMMON,
        funcs: {},
        consts: {
          damage: 2,
          addValue: 5,
          moveSpeed: 1 / 2 / FRAME_RATE
        }
      };
      var PersistentDataSetting = {
        name: ResourceName.PERSISTENT_DATA,
        resourceType: TResourceType.COMMON,
        funcs: {},
        consts: {
          damage: 2,
          addValue: 8,
          moveSpeed: 1 / 2 / FRAME_RATE
        }
      };
      var VolatileDataSetting = {
        name: ResourceName.VOLATILE_DATA,
        resourceType: TResourceType.COMMON,
        funcs: {},
        consts: {
          damage: 2,
          addValue: 2,
          moveSpeed: 1 / 2 / FRAME_RATE
        }
      };
      function init(sdm, bm, context) {
        sdm.addResource(MetaDataSetting);
        sdm.addResource(PersistentDataSetting);
        sdm.addResource(VolatileDataSetting);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main3.ts", ['cc', './Analyzer.ts', './CollaborativeProcessor.ts', './End.ts', './Flip.ts', './HarmlessProcessor.ts', './IndependentProcessor.ts', './PolePowerStation.ts', './Processor.ts', './Recycle.ts', './Start.ts'], function (exports) {
  var cclegacy, run$4, run$2, run$5, run$3, run$6, run$1, run$7, run, run$8, run$9;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      run$4 = module.run;
    }, function (module) {
      run$2 = module.run;
    }, function (module) {
      run$5 = module.run;
    }, function (module) {
      run$3 = module.run;
    }, function (module) {
      run$6 = module.run;
    }, function (module) {
      run$1 = module.run;
    }, function (module) {
      run$7 = module.run;
    }, function (module) {
      run = module.run;
    }, function (module) {
      run$8 = module.run;
    }, function (module) {
      run$9 = module.run;
    }],
    execute: function () {
      exports('init', init);
      cclegacy._RF.push({}, "87cfe1qPBlHHqz+jUokB7kw", "main", undefined);
      function init(sdm, bm, context) {
        var addModule = function addModule(ms) {
          sdm.addModule(ms);
          if (ms.consts.buildAble) {
            bm.addBuildAble(ms.name);
          }
        };
        function def(scope, name, func) {
          context.managers.functionManager.addFunction(scope, name, func);
        }
        var arr = [run, run$1, run$2, run$3, run$4, run$5, run$6, run$7, run$8, run$9];
        arr.forEach(function (it) {
          return it(addModule, def);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main4.ts", ['cc', './EnumDefine.ts'], function (exports) {
  var cclegacy, assert, AssetName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assert = module.assert;
    }, function (module) {
      AssetName = module.AssetName;
    }],
    execute: function () {
      exports('init', init);
      cclegacy._RF.push({}, "59f76bX7fpKzZ6uNJTA9OcJ", "main", undefined);
      /**
       * 通用资源选择器
       */
      var CommonResourceSelector = exports('CommonResourceSelector', {
        name: "CommonResourceSelector",
        func: function func(gameContext, resource, module) {
          assert(!!module.setting.consts.effect);
          var selector = module.setting.consts.effect.resourceSelector;
          var match = true;
          if (match && selector.resourceTypeFilter) {
            match = selector.resourceTypeFilter.includes(resource.setting.resourceType);
          }
          if (match && selector.resourceNameFilter) {
            match = selector.resourceNameFilter.includes(resource.setting.name);
          }
          if (match && selector.maxComplexity) {
            match = resource.vars.complexity <= selector.maxComplexity;
          }
          if (match && selector.minComplexity) {
            match = resource.vars.complexity >= selector.minComplexity;
          }
          return match;
        }
      });
      var AddValuePerWave = exports('AddValuePerWave', {
        name: "AddValuePerWave",
        func: function func(context, module) {
          var settingVar = module.setting.consts;
          context.managers.gameLogicUtil.addAsset(AssetName.VALUE, settingVar.value);
        }
      });
      function init(fm, context) {
        // 资源选择器
        var resourceSelectors = [CommonResourceSelector];
        fm.addFunction(function (it) {
          return it.resource.selector;
        }, "default", CommonResourceSelector.func);
        resourceSelectors.forEach(function (f) {
          fm.addFunction(function (it) {
            return it.resource.selector;
          }, f.name, f.func);
        });

        // 模块 每个波次
        var everyWave = [AddValuePerWave];
        everyWave.forEach(function (f) {
          fm.addFunction(function (it) {
            return it.module.onNewWave;
          }, f.name, f.func);
        });
      }
      var FRAME_RATE = exports('FRAME_RATE', 20);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MapUnitManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalContextImpl.ts', './common.ts', './ViewGlobal.ts', './EnumDefine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Node, Color, assert, Component, GlobalContext, MyPointClass, UIGlobalContext, InputMode, GroundTypeEnum;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      Color = module.Color;
      assert = module.assert;
      Component = module.Component;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }, function (module) {
      MyPointClass = module.MyPointClass;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
      InputMode = module.InputMode;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c45fc6OVdNERImkTY6az4/W", "MapUnitManager", undefined);
      var ccclass = _decorator.ccclass;
      var MapUnitManager = exports('MapUnitManager', (_dec = ccclass('MapUnitManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MapUnitManager, _Component);
        function MapUnitManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.bg = void 0;
          _this.mapUnit = void 0;
          _this.position = void 0;
          return _this;
        }
        var _proto = MapUnitManager.prototype;
        _proto.loadRef = function loadRef() {
          !this.bg && (this.bg = this.getComponent(Sprite));
        };
        _proto.start = function start() {
          this.loadRef();
        };
        _proto.update = function update(deltaTime) {
          if (!this.mapUnit) return;
        };
        _proto.init = function init(mapUnit) {
          this.loadRef();
          this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseOut, this);
          this.node.on(Node.EventType.MOUSE_UP, this.onMouseClick, this);
          this.position = mapUnit.position;
          this.bg.color = mapUnit.groundType == GroundTypeEnum.INSULATION ? new Color(102, 153, 153) : mapUnit.groundType == GroundTypeEnum.POLE ? Color.YELLOW : new Color(187, 140, 68);
          this.mapUnit = mapUnit;
        };
        _proto.onMouseEnter = function onMouseEnter(event) {
          UIGlobalContext.myInputSystem.position = this.position;
        };
        _proto.onMouseOut = function onMouseOut(event) {
          if (this.position && MyPointClass.equals(this.position, UIGlobalContext.myInputSystem.position)) {
            UIGlobalContext.myInputSystem.position = undefined;
          }
        };
        _proto.onMouseClick = function onMouseClick(event) {
          var myInputSystem = UIGlobalContext.myInputSystem;
          if (!GlobalContext.context || !GlobalContext.context.alive) return;
          if (myInputSystem.inputMode == InputMode.BUILD_MODULE && event.getButton() == 0) {
            assert(!!myInputSystem.clickedBuildAble, "建筑模式应该有选择的建筑");
            var mgrs = GlobalContext.context.managers;
            var buildingManager = mgrs.buildingManager;
            var buildRes = buildingManager.buildModule(GlobalContext.context.map.getAt(this.position), myInputSystem.clickedBuildAble);
            myInputSystem.inputMode = InputMode.NONE;
            myInputSystem.clickedBuildAble = undefined;
            console.log("建造完成", JSON.stringify(buildRes));
          } else if (myInputSystem.inputMode == InputMode.NONE && event.getButton() == 0) {
            if (myInputSystem.clickedPosition == this.position) {
              myInputSystem.clickedPosition = undefined;
            } else {
              myInputSystem.clickedPosition = this.position;
            }
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off(Node.EventType.MOUSE_UP, this.onMouseEnter, this);
          this.node.off(Node.EventType.MOUSE_LEAVE, this.onMouseOut, this);
        };
        return MapUnitManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MapUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './common.ts'], function (exports) {
  var _extends, cclegacy, bindAll;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ffa52GU2SxFV7QZQzfXKabu", "MapUtil", undefined);
      var MapUtil = exports('MapUtil', /*#__PURE__*/function () {
        function MapUtil() {
          this.context = void 0;
          this.settingDataManager = void 0;
          this.functionManager = void 0;
          this.eventBus = void 0;
          this.gameEntityManager = void 0;
          this.buffManager = void 0;
          this.gameLogicUtils = void 0;
        }
        var _proto = MapUtil.prototype;
        _proto.setContext = function setContext(context) {
          this.context = context;
          this.settingDataManager = context.managers.settingDataManager;
          this.functionManager = context.managers.functionManager;
          this.eventBus = context.managers.eventBus;
          this.gameEntityManager = context.managers.gameEntityManager;
          this.buffManager = context.managers.buildingManager;
          this.gameLogicUtils = context.managers.gameLogicUtil;
          bindAll(this);
        };
        _proto.inMap = function inMap(map, x, y) {
          return x >= 0 && x < map.sizeX && y >= 0 && y < map.sizeY;
        };
        _proto.distance2 = function distance2(pos, next) {
          return Math.sqrt(Math.pow(next.x - pos.x, 2) + Math.pow(next.y - pos.y, 2));
        };
        _proto.approach = function approach(pos, next, speed) {
          var distance = this.distance2(pos, next);
          if (distance <= speed) {
            return _extends({}, next, {
              arrive: true
            });
          } else {
            var rate = speed / distance;
            var x = pos.x + (next.x - pos.x) * rate;
            var y = pos.y + (next.y - pos.y) * rate;
            return {
              x: x,
              y: y
            };
          }
        };
        return MapUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mod.ts", ['cc', './EnumDefine.ts', './Mod2.ts', './buff.ts', './main4.ts', './define.ts', './main3.ts', './main2.ts', './lan.ts', './main.ts', './research.ts'], function (exports) {
  var cclegacy, GroundTypeEnum, ModInfoClass, init$3, init$4, ModuleName, ResourceName, init$1, init, init$2, levels;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
    }, function (module) {
      ModInfoClass = module.ModInfoClass;
    }, function (module) {
      init$3 = module.init;
    }, function (module) {
      init$4 = module.init;
    }, function (module) {
      ModuleName = module.ModuleName;
      ResourceName = module.ResourceName;
    }, function (module) {
      init$1 = module.init;
    }, function (module) {
      init = module.init;
    }, function (module) {
      init$2 = module.init;
    }, function (module) {
      levels = module.levels;
    }, null],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "f3ceb7gYblEyo11MaQKOPIw", "mod", undefined);
      var ModInfo = exports('ModInfo', ModInfoClass(_class = /*#__PURE__*/function () {
        function ModInfo() {
          this.name = "core";
          this.desc = "";
          this.dependence = [];
          this.conflict = [];
          this.version = "0.0.1";
        }
        var _proto = ModInfo.prototype;
        _proto.onLoad = function onLoad() {
          console.log("core loaded");
        };
        _proto.onApplicationLoaded = function onApplicationLoaded(allMods, loadedMods, globalContext) {
          var size = 8;
          var way = [{
            x: 0,
            y: 0
          }, {
            x: size - 1,
            y: 0
          }, {
            x: size - 1,
            y: size - 1
          }];
          var wave1 = {
            ticket: 5,
            info: [[{
              name: ResourceName.META_DATA,
              complexity: 20
            }
            // , {
            //     __nop__: 5,
            // }, {
            //     name: ResourceName.META_DATA,
            //     complexity: 11,
            // }, {
            //     name: ResourceName.PERSISTENT_DATA,
            //     complexity: 12,
            // }, {
            //     name: ResourceName.VOLATILE_DATA,
            //     complexity: 13,
            // }
            ]]
          };

          var demo = {
            name: "demo",
            desc: "测试地图哦",
            width: size,
            height: size,
            difficulty: 1,
            waves: [wave1],
            wayPoints: [way],
            grounds: [{
              pos: {
                x: 2,
                y: 2
              },
              ground: GroundTypeEnum.POLE
            }],
            asset: {
              hp: {
                cur: 100,
                max: 100
              },
              energy: {
                cur: 100,
                max: 100
              },
              value: {
                cur: 1000,
                max: 1000
              },
              baseResearch: {
                cur: 100,
                max: 100
              }
            }
          };
          globalContext.levelManager.addLevel(demo);
          levels.forEach(function (it) {
            globalContext.levelManager.addLevel(it);
          });
        };
        _proto.onGameContextCreated = function onGameContextCreated(context, allMods, loadedMods) {
          var _context$managers = context.managers,
            gameEntityManager = _context$managers.gameEntityManager,
            translateManager = _context$managers.translateManager,
            functionManager = _context$managers.functionManager,
            settingDataManager = _context$managers.settingDataManager,
            buildingManager = _context$managers.buildingManager,
            map = context.map;
          init(settingDataManager);
          init$1(settingDataManager, buildingManager, context);
          init$2(translateManager);
          init$3(functionManager, settingDataManager);
          init$4(functionManager);

          // 初始化地点信息 TODO
          gameEntityManager.registerModule(gameEntityManager.createModule(ModuleName.START), map.mapUnits[0][0]);
          gameEntityManager.registerModule(gameEntityManager.createModule(ModuleName.END), map.mapUnits[map.sizeY - 1][map.sizeX - 1]);
          context.place.ends = map.filter(function (it) {
            var _it$module;
            return ((_it$module = it.module) == null ? void 0 : _it$module.name) == ModuleName.END;
          });
          context.place.starts = map.filter(function (it) {
            var _it$module2;
            return ((_it$module2 = it.module) == null ? void 0 : _it$module2.name) == ModuleName.START;
          });
        };
        return ModInfo;
      }()) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Mod2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f3452ROgKZGo5l7ggIy4NCF", "Mod", undefined);
      var Mods = exports('Mods', []);
      var ModInfoClass = exports('ModInfoClass', function ModInfoClass(target) {
        var instance = new target();
        var mod = instance;
        Mods.push(mod);
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModuleVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EnumDefine.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RichText, Sprite, Component, TranslateScope;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      TranslateScope = module.TranslateScope;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "0c4809RZZBIxo/PQieuBmnE", "ModuleVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ModuleVMgr = exports('ModuleVMgr', (_dec = ccclass('ModuleVMgr'), _dec2 = property({
        type: RichText
      }), _dec3 = property({
        type: Sprite,
        displayName: "效果进度条"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModuleVMgr, _Component);
        function ModuleVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nameText", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectBar", _descriptor2, _assertThisInitialized(_this));
          _this.entity = void 0;
          _this.mapUnit = void 0;
          return _this;
        }
        var _proto = ModuleVMgr.prototype;
        _proto.start = function start() {};
        _proto.initNew = function initNew(context, mapUnit) {
          var $ = context.managers.translateManager.$;
          var entity = mapUnit.module;
          this.nameText.string = $(TranslateScope.MODULE_NAME, entity.name);
          this.entity = entity;
          this.mapUnit = mapUnit;
        };
        _proto.update = function update(deltaTime) {
          if (!this.entity) return;
          this.renderEffectColdDown();
        };
        _proto.renderEffectColdDown = function renderEffectColdDown() {
          var _this$entity$setting$, _this$entity$vars$eff;
          if (!this.entity.setting.consts.effect) {
            this.effectBar.node.active = false;
            return;
          }
          this.effectBar.node.active = true;
          var max = (_this$entity$setting$ = this.entity.setting.consts.effect) == null ? void 0 : _this$entity$setting$.triggerInterval;
          var cur = (_this$entity$vars$eff = this.entity.vars.effect) == null ? void 0 : _this$entity$vars$eff.coldDown;
          if (max && cur) {
            var progress = (max - cur) / max;
            this.effectBar.fillRange = progress;
          } else {
            this.effectBar.fillRange = 1;
          }
        };
        return ModuleVMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PolePowerStation.ts", ['cc', './EnumDefine.ts', './main4.ts', './define.ts'], function (exports) {
  var cclegacy, GroundTypeEnum, AddValuePerWave, ModuleName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
    }, function (module) {
      AddValuePerWave = module.AddValuePerWave;
    }, function (module) {
      ModuleName = module.ModuleName;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "f73ca9/mJlIkJ51PlGyzYpR", "PolePowerStation", undefined);
      // 每波次开始，产生{value}点价值
      var setting = {
        name: ModuleName.POLE_TRANSMISSION,
        groundType: GroundTypeEnum.POLE,
        funcs: {
          onNewWave: AddValuePerWave.name
        },
        consts: {
          value: 20,
          buildAble: {
            cost: 50
          }
        },
        desc: {
          name: ModuleName.POLE_TRANSMISSION
        }
      };
      function run(register, def) {
        register(setting);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Processor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EnumDefine.ts', './main4.ts', './define.ts'], function (exports) {
  var _extends, cclegacy, ModuleEffectTypeEnum, GroundTypeEnum, RangeTypeEnum, FRAME_RATE, ModuleName, TResourceType;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModuleEffectTypeEnum = module.ModuleEffectTypeEnum;
      GroundTypeEnum = module.GroundTypeEnum;
      RangeTypeEnum = module.RangeTypeEnum;
    }, function (module) {
      FRAME_RATE = module.FRAME_RATE;
    }, function (module) {
      ModuleName = module.ModuleName;
      TResourceType = module.TResourceType;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "a2c7eILobdHhrbeiRyUsdP8", "Processor", undefined);
      // 处理: {ability}
      var setting = {
        name: ModuleName.PROCESSOR,
        groundType: GroundTypeEnum.INSULATION,
        funcs: {},
        consts: {
          effect: {
            range: {
              type: RangeTypeEnum.AROUND,
              range: 1
            },
            resourceSelector: {
              resourceTypeFilter: [TResourceType.COMMON]
            },
            triggerInterval: 20 * 3,
            funcName: ModuleName.PROCESSOR
          },
          buildAble: {
            cost: 30
          },
          ability: 2
        },
        desc: {}
      };
      function run(register, def) {
        register(setting);
        def(function (fm) {
          return fm.module.effect;
        }, setting.name, function (context, module, resource) {
          var consts = module.setting.consts;
          context.managers.gameEntityManager.createAndRegisterBullet({
            effectType: ModuleEffectTypeEnum.PROCESS,
            ability: {
              processAbility: consts.ability
            },
            moveSpeed: 2 / FRAME_RATE,
            realPosition: _extends({}, module.position),
            target: resource
          });
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Recycle.ts", ['cc', './EnumDefine.ts', './define.ts'], function (exports) {
  var cclegacy, GroundTypeEnum, RangeTypeEnum, ModuleName, TResourceType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
      RangeTypeEnum = module.RangeTypeEnum;
    }, function (module) {
      ModuleName = module.ModuleName;
      TResourceType = module.TResourceType;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "329f5gXboFLSI7iQDnGGXsd", "Recycle", undefined);
      // 复杂度<={ability} 回复{healAbility}生命值 并消耗资源  
      var setting = {
        name: ModuleName.RECYCLE,
        groundType: GroundTypeEnum.INSULATION,
        funcs: {},
        consts: {
          effect: {
            range: {
              type: RangeTypeEnum.AROUND,
              range: 1
            },
            resourceSelector: {
              resourceTypeFilter: [TResourceType.COMMON]
            },
            triggerInterval: 20 * 3,
            funcName: ModuleName.RECYCLE
          },
          ability: 6,
          healAbility: 2,
          buildAble: {
            cost: 50
          }
        },
        desc: {
          name: ModuleName.RECYCLE
        }
      };
      function run(register, def) {
        register(setting);
        def(function (fm) {
          return fm.module.effect;
        }, setting.name, function (context, module, resource) {
          var consts = module.setting.consts;
          if (resource.vars.complexity > consts.ability) {
            return {
              noColdDown: true
            };
          }

          // TODO
          // context.managers.gameLogicUtil.forceDestroyResource(resource, ResourceDamageSourceEnum.MODULE_CONSUME);
          // context.managers.gameLogicUtil.healToHome(consts.healAbility);
        });
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RenderManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalContextImpl.ts', './common.ts', './ResourceVMgr.ts', './UIUtilities.ts', './ModuleVMgr.ts', './MapUnitManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, GlobalContext, differ, ResourceVMgr, getViewPositionVec3, ModuleVMgr, MapUnitManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }, function (module) {
      differ = module.differ;
    }, function (module) {
      ResourceVMgr = module.ResourceVMgr;
    }, function (module) {
      getViewPositionVec3 = module.getViewPositionVec3;
    }, function (module) {
      ModuleVMgr = module.ModuleVMgr;
    }, function (module) {
      MapUnitManager = module.MapUnitManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8b898QPN3hLirOHCUF9G9O9", "RenderManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RenderManager = exports('RenderManager', (_dec = ccclass('RenderManager'), _dec2 = property({
        type: Prefab,
        displayName: "模块预制体"
      }), _dec3 = property({
        type: Prefab,
        displayName: "空地图块"
      }), _dec4 = property({
        type: Prefab,
        displayName: "资源预制体"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RenderManager, _Component);
        function RenderManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "modulePrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptyMapPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resourcePrefab", _descriptor3, _assertThisInitialized(_this));
          _this.time = void 0;
          _this.mapViews = void 0;
          _this.resourceViews = {};
          return _this;
        }
        var _proto = RenderManager.prototype;
        _proto.start = function start() {
          this.time = 0;
          this.render();
        };
        _proto.update = function update(deltaTime) {
          if (!GlobalContext.logic) {
            return;
          }
          this.time += deltaTime;
          if (this.time >= 1 / 20 / GlobalContext.logic.gameSpeed) {
            this.time -= 1 / 20 / GlobalContext.logic.gameSpeed;
            GlobalContext.logic.nextTick();
            this.render();
          }
        };
        _proto.createMapView = function createMapView(mapUnit) {
          var emptyMapGO = instantiate(this.emptyMapPrefab);
          emptyMapGO.parent = this.node;
          var viewPos = getViewPositionVec3(mapUnit.position);
          emptyMapGO.position = viewPos;
          var mgr = emptyMapGO.getComponent(MapUnitManager);
          mgr.init(mapUnit);
          return mgr;
        };
        _proto.createModuleView = function createModuleView(context, mapUnit) {
          var node = instantiate(this.modulePrefab);
          var mgr = node.getComponent(ModuleVMgr);
          mgr.initNew(context, mapUnit);
          node.parent = this.node;
          node.position = getViewPositionVec3(mapUnit.position);
          return mgr;
        };
        _proto.render = function render() {
          var _this2 = this;
          var context = GlobalContext.logic.gameContext;
          var _context$map = context.map,
            sizeX = _context$map.sizeX,
            sizeY = _context$map.sizeY,
            mapUnits = _context$map.mapUnits;
          this.initMapViews(sizeY, sizeX, mapUnits);
          this.updateModule(sizeY, sizeX, mapUnits, context);
          var df = differ(this.resourceViews, context.entities.resources);
          df.add.forEach(function (resource) {
            var go = instantiate(_this2.resourcePrefab);
            go.parent = _this2.node;
            go.position = getViewPositionVec3(resource.vars.realPosition);
            var mgr = go.getComponent(ResourceVMgr);
            mgr.init(resource);
            _this2.resourceViews[resource.eid] = mgr;
          });
          df["delete"].forEach(function (it) {
            _this2.resourceViews[it.resource.eid].node.destroy();
            delete _this2.resourceViews[it.resource.eid];
          });
        };
        _proto.initMapViews = function initMapViews(sizeY, sizeX, mapUnits) {
          if (!this.mapViews) {
            this.mapViews = [];
            for (var y = 0; y < sizeY; y++) {
              var row = [];
              this.mapViews.push(row);
              for (var x = 0; x < sizeX; x++) {
                var mapUnit = mapUnits[y][x];
                row.push({
                  mapGroundViewMgr: this.createMapView(mapUnit),
                  mapUnit: mapUnit
                });
              }
            }
          }
        };
        _proto.updateModule = function updateModule(sizeY, sizeX, mapUnits, context) {
          if (!this.mapViews) return;
          for (var y = 0; y < sizeY; y++) {
            var row = this.mapViews[y];
            for (var x = 0; x < sizeX; x++) {
              var viewData = row[x];
              var mapUnit = mapUnits[y][x];
              if (viewData.moduleViewMgr && !mapUnit.module) {
                // 删除  1. 删除模块 
                viewData.moduleViewMgr && viewData.moduleViewMgr.node.destroy();
                row[x].moduleViewMgr = undefined;
              } else if (!viewData.moduleViewMgr && mapUnit.module) {
                // 新增  1.添加模块
                row[x].moduleViewMgr = this.createModuleView(context, mapUnit);
              } else ;
            }
          }
        };
        return RenderManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "modulePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "emptyMapPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resourcePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/research.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('init', init);
      cclegacy._RF.push({}, "6c9b98Q76VHtJ6oylkfxI40", "research", undefined);
      function init(context) {}
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResearchManager.ts", ['cc', './common.ts', './EnumDefine.ts'], function (exports) {
  var cclegacy, bindAll, AssetName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
    }, function (module) {
      AssetName = module.AssetName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1ec1fRqjixAAqq0rapSjbRj", "ResearchManager", undefined);
      var ResearchManager = exports('ResearchManager', /*#__PURE__*/function () {
        function ResearchManager() {
          this.context = void 0;
          this.researches = [];
          this.researchesMap = {};
        }
        var _proto = ResearchManager.prototype;
        _proto.getAll = function getAll() {
          return this.researches;
        };
        _proto.unlock = function unlock(item) {
          var _info$item$unLockModu;
          var info = this.researchesMap[item.name];
          if (!info) {
            this.addResearchAble(item);
            info = this.researchesMap[item.name];
            info.locked = true;
          }
          if (!info.locked) return true;
          if (!this.context.managers.gameLogicUtil.useAsset(AssetName.RESEARCH_BASE, info.item.cost)) return false;
          this.researchesMap[item.name].locked = false;
          // 通知建筑管理器
          this.context.managers.buildingManager.unLockModules((_info$item$unLockModu = info.item.unLockModules) != null ? _info$item$unLockModu : []);
          return true;
        };
        _proto.addResearchAble = function addResearchAble(item) {
          if (this.researchesMap[item.name]) return;
          var info = {
            locked: true,
            item: item
          };
          this.researchesMap[item.name] = info;
          this.researches.push(info);
        };
        _proto.setContext = function setContext(context) {
          this.context = context;
          bindAll(this);
        };
        _proto.afterGameContextFullInit = function afterGameContextFullInit() {
          var locked = new Set(this.researches.flatMap(function (it) {
            return it.item.unLockModules;
          }));
          this.context.managers.buildingManager.lockModules([].concat(locked));
        };
        return ResearchManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIUtilities.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RichText, Sprite, Color, tween, Component, getViewPositionVec3;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      Sprite = module.Sprite;
      Color = module.Color;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      getViewPositionVec3 = module.getViewPositionVec3;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2f81aCXZudNhop8Y3PgzLcA", "ResourceVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ResourceVMgr = exports('ResourceVMgr', (_dec = ccclass('ResourceVMgr'), _dec2 = property({
        type: RichText
      }), _dec3 = property({
        type: Sprite
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResourceVMgr, _Component);
        function ResourceVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "numberText", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgSprite", _descriptor2, _assertThisInitialized(_this));
          _this.resource = void 0;
          _this.lastTween = void 0;
          return _this;
        }
        var _proto = ResourceVMgr.prototype;
        _proto.start = function start() {};
        _proto.init = function init(resource) {
          this.resource = resource;
          this.numberText.string = "" + resource.vars.complexity;
          this.bgSprite.color = Color.RED;
        };
        _proto.update = function update(deltaTime) {
          var _this2 = this;
          if (!this.resource || this.lastTween) {
            return;
          }
          var pos = this.resource.vars.realPosition;
          this.numberText.string = "" + this.resource.vars.complexity;
          pos = {
            x: Math.floor(pos.x * 1000) / 1000,
            y: Math.floor(pos.y * 1000) / 1000
          };
          var rPos = getViewPositionVec3(pos);
          this.lastTween = tween(this.node);
          this.lastTween.to(0, {
            position: rPos
          }).call(function () {
            return _this2.lastTween = undefined;
          }).start();
        };
        return ResourceVMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "numberText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SelectLevelVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameContextBuilder.ts', './GameLogic.ts', './GlobalContextImpl.ts', './EnumDefine.ts', './Mod2.ts', './ViewGlobal.ts', './LevelItemVMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, RichText, Prefab, instantiate, director, Component, GameContextBuilder, GameLogic, GlobalContext, TranslateScope, Mods, UIGlobalContext, LevelItemVMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      RichText = module.RichText;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      GameContextBuilder = module.GameContextBuilder;
    }, function (module) {
      GameLogic = module.GameLogic;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }, function (module) {
      TranslateScope = module.TranslateScope;
    }, function (module) {
      Mods = module.Mods;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
    }, function (module) {
      LevelItemVMgr = module.LevelItemVMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "9682b2hp8pOu5ELftvUKQZ4", "SelectLevelVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SelectLevelVMgr = exports('SelectLevelVMgr', (_dec = ccclass('SelectLevelVMgr'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: RichText
      }), _dec4 = property({
        type: Prefab
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SelectLevelVMgr, _Component);
        function SelectLevelVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "descText", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelItemPrefab", _descriptor3, _assertThisInitialized(_this));
          _this.currentLevel = void 0;
          return _this;
        }
        var _proto = SelectLevelVMgr.prototype;
        _proto.start = function start() {
          var _this2 = this;
          // TODO test 删除
          Mods.forEach(function (mod) {
            mod.onApplicationLoaded == null || mod.onApplicationLoaded([], [], GlobalContext);
          });
          this.levelContainer.children.forEach(function (it) {
            return it.destroy();
          });
          GlobalContext.levelManager.getLevels().forEach(function (level) {
            var levelGO = instantiate(_this2.levelItemPrefab);
            levelGO.parent = _this2.levelContainer;
            var mgr = levelGO.getComponent(LevelItemVMgr);
            mgr.init(level, _this2.onSelected.bind(_this2));
          });
        };
        _proto.onSelected = function onSelected(level) {
          if (level.desc) {
            this.descText.string = GlobalContext.translateManager.$(TranslateScope.G_LEVEL_DESC, level.desc);
            this.currentLevel = level;
          } else {
            this.descText.string = "";
          }
        };
        _proto.update = function update(deltaTime) {};
        _proto.onStartNewGame = function onStartNewGame() {
          if (this.currentLevel) {
            var bd = new GameContextBuilder();
            GlobalContext.setGameContext(new GameLogic(bd.buildByLevel(this.currentLevel)));
            UIGlobalContext.clear();
            director.loadScene("main");
          } else {
            this.descText.string = "please select level";
          }
        };
        return SelectLevelVMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "descText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelItemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2443btoz0pAtpj6Ku66DwXZ", "SettingData", undefined); // 暂时不用
      // export interface IResourceSelector {
      //     readonly func?: string
      //     readonly or?: IResourceSelectorItem[]
      // }
      // export interface IResourceSelectorItem {
      //     readonly and: { type: string, not: boolean, value: string }[]
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingDataManager.ts", ['cc', './common.ts'], function (exports) {
  var cclegacy, bindAll;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ac138Ldgi5AjoO4YC9BJ9z/", "SettingDataManager", undefined);
      var SettingDataManager = exports('SettingDataManager', /*#__PURE__*/function () {
        function SettingDataManager() {
          this.context = void 0;
          this.settingDataManager = void 0;
          this.functionManager = void 0;
          this.eventBus = void 0;
          this.settings = void 0;
          this.settings = {
            module: {},
            resource: {},
            buff: {
              resource: {}
            }
          };
          this.init();
        }
        var _proto = SettingDataManager.prototype;
        _proto.setContext = function setContext(context) {
          this.context = context;
          this.settingDataManager = context.managers.settingDataManager;
          this.functionManager = context.managers.functionManager;
          this.eventBus = context.managers.eventBus;
          bindAll(this);
        };
        _proto.getResourceBuff = function getResourceBuff(name) {
          if (!this.settings.buff.resource[name]) {
            console.warn("没有该buff name" + name);
          }
          return this.settings.buff.resource[name];
        };
        _proto.addResourceBuff = function addResourceBuff(buff) {
          this.settings.buff.resource[buff.name] = buff;
        };
        _proto.addModule = function addModule(setting) {
          this.settings.module[setting.name] = setting;
        };
        _proto.addResource = function addResource(setting) {
          this.settings.resource[setting.name] = setting;
        };
        _proto.getModule = function getModule(name) {
          return this.settings.module[name];
        };
        _proto.getResource = function getResource(name) {
          return this.settings.resource[name];
        };
        _proto.getModuleNames = function getModuleNames() {
          return Object.keys(this.settings.module);
        };
        _proto.init = function init() {};
        return SettingDataManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Start.ts", ['cc', './EnumDefine.ts', './define.ts'], function (exports) {
  var cclegacy, GroundTypeEnum, ModuleName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GroundTypeEnum = module.GroundTypeEnum;
    }, function (module) {
      ModuleName = module.ModuleName;
    }],
    execute: function () {
      exports('run', run);
      cclegacy._RF.push({}, "6eeb7VgYpxLxrSXilIoFLOq", "Start", undefined);
      var setting = {
        name: ModuleName.START,
        groundType: GroundTypeEnum.NONE,
        funcs: {
          init: ModuleName.START,
          onTicket: ModuleName.START
        },
        consts: {}
      };
      function run(register, def) {
        register(setting);
        // 初始化
        def(function (fm) {
          return fm.module.init;
        }, setting.name, function (context, entity) {
          var ext = {
            wave: [],
            index: 0
          };
          entity.vars = ext;
        });

        /** 孵化逻辑 更新事件 */
        def(function (fm) {
          return fm.module.onTick;
        }, setting.name, function (context, module) {
          var start = module;
          var ext = start.vars;
          if (ext.index < ext.wave.length) {
            var currentResource = ext.wave[ext.index];
            ext.index++;
            if (currentResource) {
              context.managers.gameEntityManager.registerResource(currentResource, context.map.getAt(module.position));
            }
          }
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TranslateManager.ts", ['cc', './common.ts', './EnumDefine.ts'], function (exports) {
  var cclegacy, bindAll, LangEnum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
    }, function (module) {
      LangEnum = module.LangEnum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "378e2I6djtBorvOXQ4EL4P0", "TranslateManager", undefined);
      var TranslateManager = exports('TranslateManager', /*#__PURE__*/function () {
        /**
         *
         */
        function TranslateManager() {
          var _this = this;
          this.lang = LangEnum.CN;
          this.lanMap2 = {};
          this.$ = void 0;
          var $ = function $(scope, key, trans) {
            if (trans) {
              _this.setTranslate2(scope, key, trans);
              return;
            }
            return _this.getTranslate2(scope, key);
          };
          this.$ = $;
        }
        var _proto = TranslateManager.prototype;
        _proto.setContext = function setContext(context) {
          bindAll(this);
        };
        _proto.setTranslate2 = function setTranslate2(scope, key, trans) {
          var map = this.lanMap2[scope];
          if (!map) map = this.lanMap2[scope] = {};
          map[key] = trans;
        };
        _proto.getTranslate2 = function getTranslate2(scope, key) {
          var _map$key;
          var map = this.lanMap2[scope];
          if (!map) map = this.lanMap2[scope] = {};
          return (_map$key = map[key]) != null ? _map$key : scope + "::" + key;
        };
        return TranslateManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIUtilities.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewGlobal.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, Vec3, UIGlobalContext;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
    }],
    execute: function () {
      exports({
        getViewPositionVec3: getViewPositionVec3,
        translateSettingString: translateSettingString,
        translateString: translateString
      });
      cclegacy._RF.push({}, "859d4Ljzi9Gq40VKU2yPC5a", "UIUtilities", undefined);
      function translateParams(context, param, data) {
        if (param === "c.turn") {
          return data.c.effectColdDown;
        }
        var path = param.split(".");
        var obj = data;
        if (path[0] == "p") {
          return "<img src='" + path[1] + "'/>";
        }
        for (var _iterator = _createForOfIteratorHelperLoose(path), _step; !(_step = _iterator()).done;) {
          var p = _step.value;
          obj = obj[p];
          if (obj === undefined) {
            return "???? not matched" + param + " ????";
          }
        }
        return obj;
      }

      /** 将复杂文本转换为cocos富文本 */
      function translateString(context, scope, tmp, data) {
        var _tmp$name;
        var str = context.managers.translateManager.$(scope, (_tmp$name = tmp == null ? void 0 : tmp.name) != null ? _tmp$name : data.name);
        var tData = {
          c: data.setting.consts,
          v: data.vars
        };
        var matches = str.match(/\[(.*?)\]/g);
        matches == null || matches.forEach(function (key) {
          str = str.replace(key, translateParams(context, key.slice(1, -1), tData));
        });
        return str;
      }

      /** 将复杂文本转换为cocos富文本 */
      function translateSettingString(context, scope, tmp, data) {
        var _tmp$name2;
        var str = context.managers.translateManager.$(scope, (_tmp$name2 = tmp == null ? void 0 : tmp.name) != null ? _tmp$name2 : data.name);
        var tData = {
          c: data.consts,
          v: {}
        };
        var matches = str.match(/\[(.*?)\]/g);
        matches == null || matches.forEach(function (key) {
          str = str.replace(key, translateParams(context, key.slice(1, -1), tData));
        });
        return str;
      }
      var UseMemo = exports('UseMemo', /*#__PURE__*/function () {
        function UseMemo(pre, callback, $this) {
          this.pre = void 0;
          this.callback = void 0;
          this.pre = pre;
          if ($this) this.callback = callback.bind($this);else this.callback = callback;
        }
        var _proto = UseMemo.prototype;
        _proto.watch = function watch(cur) {
          if (cur !== this.pre) {
            this.callback(cur, this.pre);
          }
          this.pre = cur;
        };
        return UseMemo;
      }());
      function getViewPositionVec3(pos) {
        return new Vec3(UIGlobalContext.globalDiffer.x + UIGlobalContext.mapItemSize.x * pos.x, UIGlobalContext.globalDiffer.y - UIGlobalContext.mapItemSize.y * pos.y);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewGlobal.ts", ['cc', './common.ts'], function (exports) {
  var cclegacy, bindAll;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      bindAll = module.bindAll;
    }],
    execute: function () {
      cclegacy._RF.push({}, "daee0q2Vj5DEqIMV4q8qyWX", "ViewGlobal", undefined);
      var InputMode = exports('InputMode', {
        NONE: "none",
        BUILD_MODULE: "build_module"
      });
      var EventBus = /*#__PURE__*/function () {
        /**
         *
         */
        function EventBus() {
          this.listeners = {};
          this.pub = this.pub.bind(this);
          this.sub = this.sub.bind(this);
        }
        var _proto = EventBus.prototype;
        _proto.pub = function pub(event, ext) {
          var listeners = this.listeners[event];
          if (listeners && listeners.length) {
            listeners.forEach(function (it) {
              it.listener(ext);
            });
          }
        };
        _proto.sub = function sub(event, call, $this) {
          if (!this.listeners[event]) this.listeners[event] = [];
          if ($this) call = call.bind($this);
          var obj = this.listeners[event].find(function (it) {
            return it.listener == call && (!$this || it.$this == $this);
          });
          if (!obj) {
            this.listeners[event].push({
              listener: call,
              $this: $this
            });
            return;
          }
          if (obj.$this == $this) {
            return;
          }
          throw new Error("已经注册了该监听,但绑定的this不一致");
        };
        _proto.remove = function remove(event, call, $this) {
          if (!this.listeners[event]) return;
          var idx = this.listeners[event].findIndex(function (it) {
            return it.listener == call && (!$this || it.$this == $this);
          });
          var obj = this.listeners[event][idx];
          if (!obj) {
            return;
          }
          if (obj.$this == $this) {
            this.listeners[event] = this.listeners[event].filter(function (it) {
              return it != obj;
            });
          }
          throw new Error("已经注册了该监听,但解除绑定的this没有传");
        };
        _proto.$ = function $(add) {
          return add ? this.sub : this.remove;
        };
        _proto.clear = function clear(event) {
          delete this.listeners[event];
        };
        return EventBus;
      }();
      var myInputSystem = {
        inputMode: InputMode.NONE
      };
      var globalUIEvent = new EventBus();
      bindAll(globalUIEvent);
      var UIGlobalContext = exports('UIGlobalContext', {
        myInputSystem: myInputSystem,
        globalUIEvent: globalUIEvent,
        mapItemSize: {
          x: 100,
          y: 100
        },
        globalDiffer: {
          x: 0,
          y: 0
        },
        clear: function clear() {
          UIGlobalContext.myInputSystem = {
            inputMode: InputMode.NONE
          };
          UIGlobalContext.globalUIEvent = new EventBus();
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WaveInfoVMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalContextImpl.ts', './EnumDefine.ts', './ViewGlobal.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodeEventType, RichText, Button, Label, Component, GlobalContext, TranslateScope, UIGlobalContext;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      RichText = module.RichText;
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      GlobalContext = module.GlobalContext;
    }, function (module) {
      TranslateScope = module.TranslateScope;
    }, function (module) {
      UIGlobalContext = module.UIGlobalContext;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f4107h7KcJD44nnzmlP5fDZ", "WaveInfoVMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WaveInfoVMgr = exports('WaveInfoVMgr', (_dec = ccclass('WaveInfoVMgr'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WaveInfoVMgr, _Component);
        function WaveInfoVMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.waveInfoText = void 0;
          _this.btnNext = void 0;
          _this.waveDetailText = void 0;
          _this.pauseGameButton = void 0;
          _this.pauseGameButtonText = void 0;
          _this.speedUpGameButton = void 0;
          _this.speedUpGameButtonText = void 0;
          return _this;
        }
        var _proto = WaveInfoVMgr.prototype;
        _proto.manageEvent = function manageEvent(add) {
          if (add) {
            this.node.on(NodeEventType.MOUSE_ENTER, this.onMouseEnter, this, true);
            this.node.on(NodeEventType.MOUSE_LEAVE, this.onMouseLeave, this, true);
          } else {
            this.node.off(NodeEventType.MOUSE_ENTER, this.onMouseEnter, this, true);
            this.node.off(NodeEventType.MOUSE_LEAVE, this.onMouseLeave, this, true);
          }
        };
        _proto.onMouseEnter = function onMouseEnter() {
          UIGlobalContext.myInputSystem.mousePointMenu = this.node;
        };
        _proto.onMouseLeave = function onMouseLeave() {
          if (UIGlobalContext.myInputSystem.mousePointMenu === this.node) {
            UIGlobalContext.myInputSystem.mousePointMenu = undefined;
          }
        };
        _proto.loadRef = function loadRef() {
          var _this$node$getChildBy,
            _this2 = this;
          !this.waveInfoText && (this.waveInfoText = (_this$node$getChildBy = this.node.getChildByName("TextWave")) == null ? void 0 : _this$node$getChildBy.getComponent(RichText));
          if (!this.btnNext) {
            var _this$node$getChildBy2;
            this.btnNext = (_this$node$getChildBy2 = this.node.getChildByName("BtnNextWave")) == null ? void 0 : _this$node$getChildBy2.getComponent(Button);
            this.btnNext.node.on(NodeEventType.MOUSE_DOWN, this.on_nextWave, this);
            this.btnNext.node.on(NodeEventType.MOUSE_ENTER, this.on_showDetail, this);
            this.btnNext.node.on(NodeEventType.MOUSE_LEAVE, this.on_hideDetail, this);
          }
          if (!this.waveDetailText) {
            var _this$node$getChildBy3;
            this.waveDetailText = (_this$node$getChildBy3 = this.node.getChildByName("TextWaveInfo")) == null ? void 0 : _this$node$getChildBy3.getComponent(RichText);
            this.waveDetailText.node.active = false;
          }
          if (!this.speedUpGameButton) {
            var _this$node$getChildBy4;
            this.speedUpGameButton = (_this$node$getChildBy4 = this.node.getChildByName("SpeedUpGame")) == null ? void 0 : _this$node$getChildBy4.getComponent(Button);
            this.speedUpGameButtonText = this.speedUpGameButton.node.getComponentInChildren(Label);

            // TODO 修改绑定
            this.speedUpGameButtonText.string = "1X";
            this.speedUpGameButton.node.on(NodeEventType.MOUSE_UP, function () {
              var logic = GlobalContext.logic;
              if (!logic) return;
              if (logic.gameSpeed === 1) {
                logic.gameSpeed = 2;
              } else if (logic.gameSpeed === 2) {
                logic.gameSpeed = 0.5;
              } else if (logic.gameSpeed === 0.5) {
                logic.gameSpeed = 1;
              }
              _this2.speedUpGameButtonText.string = logic.gameSpeed + "X";
            });
          }
          if (!this.pauseGameButton) {
            var _this$node$getChildBy5;
            this.pauseGameButton = (_this$node$getChildBy5 = this.node.getChildByName("PauseGame")) == null ? void 0 : _this$node$getChildBy5.getComponent(Button);
            this.pauseGameButtonText = this.pauseGameButton.node.getComponentInChildren(Label);

            // TODO 修改绑定
            this.pauseGameButtonText.string = "暂停";
            this.pauseGameButton.node.on(NodeEventType.MOUSE_UP, function () {
              var logic = GlobalContext.logic;
              if (!logic) return;
              logic.pause = !logic.pause;
              _this2.pauseGameButtonText.string = logic.pause ? "开始" : "暂停";
              _this2.speedUpGameButton.node.active = !logic.pause;
            });
          }
        };
        _proto.start = function start() {
          this.loadRef();
          this.manageEvent(true);
        };
        _proto.onDestroy = function onDestroy() {
          this.manageEvent(false);
        };
        _proto.update = function update(deltaTime) {
          var logic = GlobalContext.logic;
          if (logic && logic.gameContext) {
            if (logic.gameContext.alive) {
              var waveInfo = logic.gameContext.wavesInfo;
              this.waveInfoText.string = "波次:" + waveInfo.nextPtr + "/" + waveInfo.waves.length + "\n时间:" + Math.floor(logic.gameContext.tick / 20);
            } else {
              this.waveInfoText.string = "已结束" + "\n时间:" + Math.floor(logic.gameContext.tick / 20);
            }
            if (this.waveDetailText.node.active) {
              var $ = logic.gameContext.managers.translateManager.$;
              var _waveInfo = logic.gameContext.wavesInfo;
              var next = _waveInfo.waves[_waveInfo.nextPtr];
              if (!next) {
                this.waveDetailText.node.active = false;
                this.waveDetailText.string = "";
                return;
              }
              var str = "时间:" + Math.floor(next.ticket / 20) + "\n";
              next.info.forEach(function (it) {
                it.forEach(function (it) {
                  if (it.name) {
                    str += $(TranslateScope.RESOURCE_NAME, it.name) + ":(复杂度)" + it.complexity + "\n";
                  }
                });
              });
              this.waveDetailText.string = str;
            }
          }
        };
        _proto.on_nextWave = function on_nextWave(e) {
          var logic = GlobalContext.logic;
          if (e.getButton() === 0 && logic && logic.gameContext) {
            logic.nextWaveLogic(logic.gameContext, true);
          }
        };
        _proto.on_showDetail = function on_showDetail(e) {
          this.waveDetailText.string = "";
          this.waveDetailText.node.active = true;
        };
        _proto.on_hideDetail = function on_hideDetail(e) {
          this.waveDetailText.node.active = false;
        };
        return WaveInfoVMgr;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});