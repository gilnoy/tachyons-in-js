(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.tachyonsinjs = {})));
}(this, (function (exports) { 'use strict';

    var aspectRatios = {
        'aspect-ratio': {
            height: 0,
            position: 'relative'
        },
        'aspect-ratio--16x9': { paddingBottom: '56.25%' },
        'aspect-ratio--9x16': { paddingBottom: '177.77%' },
        'aspect-ratio--4x3': { paddingBottom: '75%' },
        'aspect-ratio--3x4': { paddingBottom: '133.33%' },
        'aspect-ratio--6x4': { paddingBottom: '66.6%' },
        'aspect-ratio--4x6': { paddingBottom: '150%' },
        'aspect-ratio--8x5': { paddingBottom: '62.5%' },
        'aspect-ratio--5x8': { paddingBottom: '160%' },
        'aspect-ratio--7x5': { paddingBottom: '71.42%' },
        'aspect-ratio--5x7': { paddingBottom: '140%' },
        'aspect-ratio--1x1': { paddingBottom: '100%' },
        'aspect-ratio--object': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: '100'
        }
    };

    var backgroundPosition = {
      'bg-center': {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      },
      'bg-top': {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center'
      },
      'bg-right': {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right'
      },
      'bg-bottom': {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center'
      },
      'bg-left': {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center left'
      }
    };

    var backgroundSize = {
      cover: { backgroundSize: 'cover!important' },
      contain: { backgroundSize: 'contain!important' }
    };

    var v = {
        'sansSerif': '-apple-system, BlinkMacSystemFont, \'avenir next\', avenir, helvetica, \'helvetica neue\', ubuntu, roboto, noto, \'segoe ui\', arial, sans-serif',
        'serif': 'georgia, serif',
        'fontSizeHeadline': '6rem',
        'fontSizeSubheadline': '5rem',
        'fontSize1': '3rem',
        'fontSize2': '2.25rem',
        'fontSize3': '1.5rem',
        'fontSize4': '1.25rem',
        'fontSize5': '1rem',
        'fontSize6': '.875rem',
        'fontSize7': '.75rem',
        'lineHeightSolid': '1',
        'lineHeightTitle': '1.25',
        'lineHeightCopy': '1.5',
        'measure': '30em',
        'measureNarrow': '20em',
        'measureWide': '34em',
        'spacingNone': '0',
        'spacingExtraSmall': '.25rem',
        'spacingSmall': '.5rem',
        'spacingMedium': '1rem',
        'spacingLarge': '2rem',
        'spacingExtraLarge': '4rem',
        'spacingExtraExtraLarge': '8rem',
        'spacingExtraExtraExtraLarge': '16rem',
        'spacingCopySeparator': '1.5em',
        'height1': '1rem',
        'height2': '2rem',
        'height3': '4rem',
        'height4': '8rem',
        'height5': '16rem',
        'width1': '1rem',
        'width2': '2rem',
        'width3': '4rem',
        'width4': '8rem',
        'width5': '16rem',
        'maxWidth1': '1rem',
        'maxWidth2': '2rem',
        'maxWidth3': '4rem',
        'maxWidth4': '8rem',
        'maxWidth5': '16rem',
        'maxWidth6': '32rem',
        'maxWidth7': '48rem',
        'maxWidth8': '64rem',
        'maxWidth9': '96rem',
        'borderRadiusNone': '0',
        'borderRadius1': '.125rem',
        'borderRadius2': '.25rem',
        'borderRadius3': '.5rem',
        'borderRadius4': '1rem',
        'borderRadiusCircle': '100%',
        'borderRadiusPill': '9999px',
        'borderWidthNone': '0',
        'borderWidth1': '.125rem',
        'borderWidth2': '.25rem',
        'borderWidth3': '.5rem',
        'borderWidth4': '1rem',
        'borderWidth5': '2rem',
        'boxShadow1': '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
        'boxShadow2': '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )',
        'boxShadow3': '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
        'boxShadow4': '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )',
        'boxShadow5': '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
    };

    var borderRadius = {
        br0: { borderRadius: v.borderRadiusNone },
        br1: { borderRadius: v.borderRadius1 },
        br2: { borderRadius: v.borderRadius2 },
        br3: { borderRadius: v.borderRadius3 },
        br4: { borderRadius: v.borderRadius4 },
        'br-100': { borderRadius: v.borderRadiusCircle },
        'br-pill': { borderRadius: v.borderRadiusPill },
        'br--bottom': {
            borderTopLeftRadius: v.borderRadiusNone,
            borderTopRightRadius: v.borderRadiusNone
        },
        'br--top': {
            borderBottomLeftRadius: v.borderRadiusNone,
            borderBottomRightRadius: v.borderRadiusNone
        },
        'br--right': {
            borderTopLeftRadius: v.borderRadiusNone,
            borderBottomLeftRadius: v.borderRadiusNone
        },
        'br--left': {
            borderTopRightRadius: v.borderRadiusNone,
            borderBottomRightRadius: v.borderRadiusNone
        }
    };

    var borderStyle = {
      'b--dotted': { borderStyle: 'dotted' },
      'b--dashed': { borderStyle: 'dashed' },
      'b--solid': { borderStyle: 'solid' },
      'b--none': { borderStyle: 'none' }
    };

    var borderWidths = {
      bw0: { borderWidth: v.borderWidthNone },
      bw1: { borderWidth: v.borderWidth1 },
      bw2: { borderWidth: v.borderWidth2 },
      bw3: { borderWidth: v.borderWidth3 },
      bw4: { borderWidth: v.borderWidth4 },
      bw5: { borderWidth: v.borderWidth5 },
      bt_0: { borderTopWidth: v.borderTopWidth },
      br_0: { borderRightWidth: v.borderRightWidth },
      bb_0: { borderBottomWidth: v.borderBottomWidth },
      bl_0: { borderLeftWidth: v.borderLeftWidth }
    };

    var borders = {
      ba: { borderStyle: 'solid', borderWidth: '1px' },
      bt: { borderTopStyle: 'solid', borderTopWidth: '1px' },
      br: { borderRightStyle: 'solid', borderRightWidth: '1px' },
      bb: { borderBottomStyle: 'solid', borderBottomWidth: '1px' },
      bl: { borderLeftStyle: 'solid', borderLeftWidth: '1px' },
      bn: { borderStyle: 'none', borderWidth: 0 }
    };

    var boxShadow = {
      'shadow-1': { boxShadow: v.boxShadow1 },
      'shadow-2': { boxShadow: v.boxShadow2 },
      'shadow-3': { boxShadow: v.boxShadow3 },
      'shadow-4': { boxShadow: v.boxShadow4 },
      'shadow-5': { boxShadow: v.boxShadow5 }
    };

    var boxSizing = {
      'border-box': { boxSizing: 'border-box' }
    };

    var defineProperty = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    var slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();

    var config = {
      pseudo: "&"
    };

    var tachyonsConfig = (function (params) {
      if (params) {
        config = _extends({}, config, params);
      }

      return config;
    });

    var _cf;
    var config$1 = tachyonsConfig();

    var clears = {
      cf: (_cf = {}, defineProperty(_cf, config$1.pseudo + ':before', {
        content: '',
        display: 'table'
      }), defineProperty(_cf, config$1.pseudo + ':after', {
        content: '',
        display: 'table',
        clear: 'both'
      }), _cf),
      cl: { clear: 'left' },
      cr: { clear: 'right' },
      cb: { clear: 'both' },
      cn: { clear: 'none' }
    };

    var code = {
      pre: { overflowX: 'auto', overflowY: 'hidden', overflow: 'scroll' }
    };

    var coordinates = {
      'top-0': { top: 0 },
      'right-0': { right: 0 },
      'bottom-0': { bottom: 0 },
      'left-0': { left: 0 },
      'top-1': { top: '1rem' },
      'right-1': { right: '1rem' },
      'bottom-1': { bottom: '1rem' },
      'left-1': { left: '1rem' },
      'top-2': { top: '2rem' },
      'right-2': { right: '2rem' },
      'bottom-2': { bottom: '2rem' },
      'left-2': { left: '2rem' },
      'top--1': { top: '-1rem' },
      'right--1': { right: '-1rem' },
      'bottom--1': { bottom: '-1rem' },
      'left--1': { left: '-1rem' },
      'top--2': { top: '-2rem' },
      'right--2': { right: '-2rem' },
      'bottom--2': { bottom: '-2rem' },
      'left--2': { left: '-2rem' },
      'absolute--fill': { top: 0, right: 0, bottom: 0, left: 0 }
    };

    var debugChildren = {
      debug: {
        '*': { outline: '1px solid gold' }
      },
      'debug-white': {
        '*': { outline: '1px solid white' }
      },
      'debug-black': {
        '*': { outline: '1px solid black' }
      }
    };

    var debugGrid = {
      'debug-grid': {
        background: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII=) repeat top left'
      },
      'debug-grid-16': {
        background: 'transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII=) repeat top left'
      },
      'debug-grid-8_solid': {
        background: 'white url(data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw==) repeat top left'
      },
      'debug-grid-16_solid': {
        background: 'white url(data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7) repeat top left'
      }
    };

    var display = {
      'dn': { display: 'none' },
      'di': { display: 'inline' },
      'db': { display: 'block' },
      'dib': { display: 'inline-block' },
      'dit': { display: 'inline-table' },
      'dt': { display: 'table' },
      'dtc': { display: 'table-cell' },
      'dt-row': { display: 'table-row' },
      'dt-row-group': { display: 'table-row-group' },
      'dt-column': { display: 'table-column' },
      'dt-column-group': { display: 'table-column-group' },
      'dt--fixed': {
        tableLayout: 'fixed',
        width: '100%'
      }
    };

    var flexbox = {
      'flex': { display: 'flex' },
      'inline-flex': { display: 'inline-flex' },
      /* 1' Fix for Chrome 44 bug'
       * https://code'google'com/p/chromium/issues/detail?id=506893 */
      'flex-auto': {
        flex: '1 1 auto',
        minWidth: 0, /* 1 */
        minHeight: 0 /* 1 */
      },
      'flex-none': { flex: 'none' },
      'flex-column': { flexDirection: 'column' },
      'flex-row': { flexDirection: 'row' },
      'flex-wrap': { flexWrap: 'wrap' },
      'flex-nowrap': { flexWrap: 'nowrap' },
      'flex-wrap-reverse': { flexWrap: 'wrap-reverse' },
      'flex-column-reverse': { flexDirection: 'column-reverse' },
      'flex-row-reverse': { flexDirection: 'row-reverse' },
      'items-start': { alignItems: 'flex-start' },
      'items-end': { alignItems: 'flex-end' },
      'items-center': { alignItems: 'center' },
      'items-baseline': { alignItems: 'baseline' },
      'items-stretch': { alignItems: 'stretch' },
      'self-start': { alignSelf: 'flex-start' },
      'self-end': { alignSelf: 'flex-end' },
      'self-center': { alignSelf: 'center' },
      'self-baseline': { alignSelf: 'baseline' },
      'self-stretch': { alignSelf: 'stretch' },
      'justify-start': { justifyContent: 'flex-start' },
      'justify-end': { justifyContent: 'flex-end' },
      'justify-center': { justifyContent: 'center' },
      'justify-between': { justifyContent: 'space-between' },
      'justify-around': { justifyContent: 'space-around' },
      'content-start': { alignContent: 'flex-start' },
      'content-end': { alignContent: 'flex-end' },
      'content-center': { alignContent: 'center' },
      'content-between': { alignContent: 'space-between' },
      'content-around': { alignContent: 'space-around' },
      'content-stretch': { alignContent: 'stretch' },
      'order-0': { order: 0 },
      'order-1': { order: 1 },
      'order-2': { order: 2 },
      'order-3': { order: 3 },
      'order-4': { order: 4 },
      'order-5': { order: 5 },
      'order-6': { order: 6 },
      'order-7': { order: 7 },
      'order-8': { order: 8 },
      'order-last': { order: 99999 },
      'flex-grow-0': { flexGrow: 0 },
      'flex-grow-1': { flexGrow: 1 },
      'flex-shrink-0': { flexShrink: 0 },
      'flex-shrink-1': { flexShrink: 1 }
    };

    var floats = {
      fl: { float: 'left' },
      fr: { float: 'right' },
      fn: { float: 'none' }
    };

    var fontFamily = {
      'sans-serif': {
        fontFamily: v.sansSerif
      },
      serif: {
        fontFamily: v.serif
      },
      'system-sans-serif': {
        fontFamily: 'sans-serif'
      },
      'system-serif': {
        fontFamily: 'serif'
      },
      code: {
        fontFamily: 'Consolas, monaco, monospace'
      },
      courier: {
        fontFamily: '"Courier Next", courier, monospace'
      },
      helvetica: {
        fontFamily: "'helvetica neue', helvetica, sans-serif"
      },
      avenir: {
        fontFamily: '"avenir next", avenir, sans-serif'
      },
      athelas: {
        fontFamily: 'athelas, georgia, serif'
      },
      georgia: {
        fontFamily: 'georgia, serif'
      },
      times: {
        fontFamily: 'times, serif'
      },
      bodoni: {
        fontFamily: '"Bodoni MT", serif'
      },
      calisto: {
        fontFamily: '"Calisto MT", serif'
      },
      garamond: {
        fontFamily: 'garamond, serif'
      },
      baskerville: {
        fontFamily: 'baskerville, serif'
      }
    };

    var fontStyle = {
      i: { fontStyle: 'italic' },
      'fs-normal': { fontStyle: 'normal' }
    };

    var fontWeight = {
      normal: { fontWeight: 'normal' },
      b: { fontWeight: 'bold' },
      fw1: { fontWeight: 100 },
      fw2: { fontWeight: 200 },
      fw3: { fontWeight: 300 },
      fw4: { fontWeight: 400 },
      fw5: { fontWeight: 500 },
      fw6: { fontWeight: 600 },
      fw7: { fontWeight: 700 },
      fw8: { fontWeight: 800 },
      fw9: { fontWeight: 900 }
    };

    var forms = {
      'input-reset': {
        WebkitAppearance: 'none',
        MozAppearance: 'none'
      }

      // .button-reset::-moz-focus-inner,
      // .input-reset::-moz-focus-inner {
      //   border: 0;
      //   padding: 0;
      // }

    };

    var heights = {
      h1: { height: v.height1 },
      h2: { height: v.height2 },
      h3: { height: v.height3 },
      h4: { height: v.height4 },
      h5: { height: v.height5 },
      'h-25': { height: '25%' },
      'h-50': { height: '50%' },
      'h-75': { height: '75%' },
      'h-100': { height: '100%' },
      'min-h-100': { minHeight: '100%' },
      'vh-25': { height: '25vh' },
      'vh-50': { height: '50vh' },
      'vh-75': { height: '75vh' },
      'vh-100': { height: '100vh' },
      'min-vh-100': { minHeight: '100vh' },
      'h-auto': { height: 'auto' },
      'h-inherit': { height: 'inherit' }
    };

    var dimHoverFocus = { opacity: '.5', transition: 'opacity .15s ease-in' };
    var glowHoverFocus = { opacity: '1', transition: 'opacity .15s ease-in' };
    var underlineHoverFocus = { textDecoration: 'underline' };
    var hideChildHoverFocusActive = {
      child: {
        opacity: 1,
        transition: 'opacity .15s ease-in'
      }
    };

    var hovers = {
      dim: {
        opacity: 1,
        transition: 'opacity .15s ease-in',

        ':hover': dimHoverFocus,
        ':focus': dimHoverFocus,
        ':active': {
          opacity: '.8',
          transition: 'opacity .15s ease-in'
        }
      },
      glow: {
        transition: 'opacity .15s ease-in',

        ':hover': glowHoverFocus,
        ':focus': glowHoverFocus
      },
      'hide-child': {
        child: {
          opacity: 0,
          transition: 'opacity .15s ease-in'
        },
        ':hover': hideChildHoverFocusActive
      },
      'underilne-hover': {
        ':hover': underlineHoverFocus,
        ':focus': underlineHoverFocus
      },
      grow: {
        '-moz-osx-font-smoothing': 'grayscale',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        transition: 'transform .25s ease-out'
      }
    };

    var letterSpacing = {
      'tracked': {
        letterSpacing: '.1em'
      },
      'tracked-tight': {
        letterSpacing: '-.05em'
      },
      'tracked-mega': {
        letterSpacing: '.25em'
      }
    };

    var lineHeight = {
      'lh-solid': {
        lineHeight: v.lineHeightSolid
      },
      'lh-title': {
        lineHeight: v.lineHeightTitle
      },
      'lh-copy': {
        lineHeight: v.lineHeightCopy
      }
    };

    var _link;
    var config$2 = tachyonsConfig();

    var links = {
      link: (_link = {
        textDecoration: 'none',
        transition: 'color .15s ease-in'
      }, defineProperty(_link, config$2.pseudo + ':link', {
        transition: 'color .15s ease-in'
      }), defineProperty(_link, config$2.pseudo + ':visited', {
        transition: 'color .15s ease-in'
      }), defineProperty(_link, config$2.pseudo + ':hover', {
        transition: 'color .15s ease-in'
      }), defineProperty(_link, config$2.pseudo + ':active', {
        transition: 'color .15s ease-in'
      }), defineProperty(_link, config$2.pseudo + ':focus', {
        transition: 'color .15s ease-in',
        outline: '1px dotted currentColor'
      }), _link)
    };

    var lists = {
        list: { listStyleType: 'none' }
    };

    var maxWidths = {
      'mw-100': { maxWidth: '100%' },
      'mw1': { maxWidth: v.maxWidth1 },
      'mw2': { maxWidth: v.maxWidth2 },
      'mw3': { maxWidth: v.maxWidth3 },
      'mw4': { maxWidth: v.maxWidth4 },
      'mw5': { maxWidth: v.maxWidth5 },
      'mw6': { maxWidth: v.maxWidth6 },
      'mw7': { maxWidth: v.maxWidth7 },
      'mw8': { maxWidth: v.maxWidth8 },
      'mw9': { maxWidth: v.maxWidth9 },
      'mw-none': { maxWidth: 'none' }
    };

    var negativeMargins = {
      na1: { margin: '-' + v.spacingExtraSmall },
      na2: { margin: '-' + v.spacingSmall },
      na3: { margin: '-' + v.spacingMedium },
      na4: { margin: '-' + v.spacingLarge },
      na5: { margin: '-' + v.spacingExtraLarge },
      na6: { margin: '-' + v.spacingExtraExtraLarge },
      na7: { margin: '-' + v.spacingExtraExtraExtraLarge },
      nl1: { marginLeft: '-' + v.spacingExtraSmall },
      nl2: { marginLeft: '-' + v.spacingSmall },
      nl3: { marginLeft: '-' + v.spacingMedium },
      nl4: { marginLeft: '-' + v.spacingLarge },
      nl5: { marginLeft: '-' + v.spacingExtraLarge },
      nl6: { marginLeft: '-' + v.spacingExtraExtraLarge },
      nl7: { marginLeft: '-' + v.spacingExtraExtraExtraLarge },
      nr1: { marginRight: '-' + v.spacingExtraSmall },
      nr2: { marginRight: '-' + v.spacingSmall },
      nr3: { marginRight: '-' + v.spacingMedium },
      nr4: { marginRight: '-' + v.spacingLarge },
      nr5: { marginRight: '-' + v.spacingExtraLarge },
      nr6: { marginRight: '-' + v.spacingExtraExtraLarge },
      nr7: { marginRight: '-' + v.spacingExtraExtraExtraLarge },
      nb1: { marginBottom: '-' + v.spacingExtraSmall },
      nb2: { marginBottom: '-' + v.spacingSmall },
      nb3: { marginBottom: '-' + v.spacingMedium },
      nb4: { marginBottom: '-' + v.spacingLarge },
      nb5: { marginBottom: '-' + v.spacingExtraLarge },
      nb6: { marginBottom: '-' + v.spacingExtraExtraLarge },
      nb7: { marginBottom: '-' + v.spacingExtraExtraExtraLarge },
      nt1: { marginTop: '-' + v.spacingExtraSmall },
      nt2: { marginTop: '-' + v.spacingSmall },
      nt3: { marginTop: '-' + v.spacingMedium },
      nt4: { marginTop: '-' + v.spacingLarge },
      nt5: { marginTop: '-' + v.spacingExtraLarge },
      nt6: { marginTop: '-' + v.spacingExtraExtraLarge },
      nt7: { marginTop: '-' + v.spacingExtraExtraExtraLarge }
    };

    var colors = {
      'inherit': 'inherit',
      '$black': '#000',
      'near-black': '#111',
      'dark-gray': '#333',
      'mid-gray': '#555',
      'gray': '#777',
      'silver': '#999',
      'light-silver': '#aaa',
      'moon-gray': '#ccc',
      'light-gray': '#eee',
      'near-white': '#f4f4f4',
      'white': '#fff',
      'transparent': 'transparent',
      'black-90': 'rgba(0,0,0,.9)',
      'black-80': 'rgba(0,0,0,.8)',
      'black-70': 'rgba(0,0,0,.7)',
      'black-60': 'rgba(0,0,0,.6)',
      'black-50': 'rgba(0,0,0,.5)',
      'black-40': 'rgba(0,0,0,.4)',
      'black-30': 'rgba(0,0,0,.3)',
      'black-20': 'rgba(0,0,0,.2)',
      'black-10': 'rgba(0,0,0,.1)',
      'black-05': 'rgba(0,0,0,.05)',
      'black-025': 'rgba(0,0,0,.025)',
      'black-0125': 'rgba(0,0,0,.0125)',
      'white-90': 'rgba(255,255,255,.9)',
      'white-80': 'rgba(255,255,255,.8)',
      'white-70': 'rgba(255,255,255,.7)',
      'white-60': 'rgba(255,255,255,.6)',
      'white-50': 'rgba(255,255,255,.5)',
      'white-40': 'rgba(255,255,255,.4)',
      'white-30': 'rgba(255,255,255,.3)',
      'white-20': 'rgba(255,255,255,.2)',
      'white-10': 'rgba(255,255,255,.1)',
      'white-05': 'rgba(255,255,255,.05)',
      'white-025': 'rgba(255,255,255,.025)',
      'white-0125': 'rgba(255,255,255,.0125)',
      'dark-red': '#e7040f',
      'red': '#ff4136',
      'light-red': '#ff725c',
      'orange': '#ff6300',
      'gold': '#ffb700',
      'yellow': '#ffd700',
      'light-yellow': '#fbf1a9',
      'purple': '#5e2ca5',
      'light-purple': '#a463f2',
      'dark-pink': '#d5008f',
      'hot-pink': '#ff41b4',
      'pink': '#ff80cc',
      'light-pink': '#ffa3d7',
      'dark-green': '#137752',
      'green': '#19a974',
      'light-green': '#9eebcf',
      'navy': '#001b44',
      'dark-blue': '#00449e',
      'blue': '#357edd',
      'light-blue': '#96ccff',
      'lightest-blue': '#cdecff',
      'washed-blue': '#f6fffe',
      'washed-green': '#e8fdf5',
      'washed-yellow': '#fffceb',
      'washed-red': '#ffdfdf'
    };

    var addColor = function addColor(colorName, color) {
      colors[colorName] = color;
    };

    var getColor = function getColor(colorName) {
      return colors[colorName];
    };

    var _a;

    var config$3 = tachyonsConfig();

    var nested = {
      'nested-copy-line-height': {
        p: { lineHeight: v.lineHeightCopy },
        ul: { lineHeight: v.lineHeightCopy },
        ol: { lineHeight: v.lineHeightCopy }
      },

      'nested-headline-line-height': {
        h1: { lineHeight: v.lineHeightTitle },
        h2: { lineHeight: v.lineHeightTitle },
        h3: { lineHeight: v.lineHeightTitle },
        h4: { lineHeight: v.lineHeightTitle },
        h5: { lineHeight: v.lineHeightTitle },
        h6: { lineHeight: v.lineHeightTitle }
      },

      'nested-list-reset': {
        ul: {
          paddingLeft: 0,
          marginLeft: 0,
          listStyleType: 'none'
        },
        ol: {
          paddingLeft: 0,
          marginLeft: 0,
          listStyleType: 'none'
        }
      },

      'nested-copy-indent': {
        'p+p': {
          textIndent: '1em',
          marginTtop: 0,
          marginBottom: 0
        }
      },

      'nested-copy-separator': {
        'p+p': {
          marginTop: '1.5em'
        }
      },

      'nested-img': {
        img: {
          width: '100%',
          maxWidth: '100%',
          display: 'block'
        }
      },

      'nested-links': {
        a: (_a = {
          color: colors.blue,
          transition: 'color .15s ease-in'

        }, defineProperty(_a, config$3.pseudo + ':hover', {
          color: colors.lightBlue,
          transition: 'color .15s ease-in'
        }), defineProperty(_a, config$3.pseudo + ':focus', {
          color: colors.lightBlue,
          transition: 'color .15s ease-in'
        }), _a)
      }
    };

    var opacity = {
      'o-100': { opacity: 1 },
      'o-90': { opacity: 0.9 },
      'o-80': { opacity: 0.8 },
      'o-70': { opacity: 0.7 },
      'o-60': { opacity: 0.6 },
      'o-50': { opacity: 0.5 },
      'o-40': { opacity: 0.4 },
      'o-30': { opacity: 0.3 },
      'o-20': { opacity: 0.2 },
      'o-10': { opacity: 0.1 },
      'o-05': { opacity: 0.05 },
      'o-025': { opacity: 0.025 },
      'o-0': { opacity: 0 }
    };

    var outlines = {
      outline: { outline: '1px solid' },
      'outline-transparent': { outline: '1px solid transparent' },
      'outline-0': { outline: 0 }
    };

    var overflow = {
      'overflow-visible': { overflow: 'visible' },
      'overflow-hidden': { overflow: 'hidden' },
      'overflow-scroll': { overflow: 'scroll' },
      'overflow-auto': { overflow: 'auto' },
      'overflow-x-visible': { overflowX: 'visible' },
      'overflow-x-hidden': { overflowX: 'hidden' },
      'overflow-x-scroll': { overflowX: 'scroll' },
      'overflow-x-auto': { overflowX: 'auto' },
      'overflow-y-visible': { overflowY: 'visible' },
      'overflow-y-hidden': { overflowY: 'hidden' },
      'overflow-y-scroll': { overflowY: 'scroll' },
      'overflow-y-auto': { overflowY: 'auto' }
    };

    var position = {
      static: { position: 'static' },
      relative: { position: 'relative' },
      absolute: { position: 'absolute' },
      fixed: { position: 'fixed' }
    };

    var rotations = {
      'rotate-45': { transform: 'rotate(45deg)' },
      'rotate-90': { transform: 'rotate(90deg)' },
      'rotate-135': { transform: 'rotate(135deg)' },
      'rotate-180': { transform: 'rotate(180deg)' },
      'rotate-225': { transform: 'rotate(225deg)' },
      'rotate-270': { transform: 'rotate(270deg)' },
      'rotate-315': { transform: 'rotate(315deg)' }
    };

    var skins = {};

    var getSkinTachyons = function getSkinTachyons(colorName) {
        var _ref;

        var color = getColor(colorName);

        return _ref = {}, defineProperty(_ref, colorName, { color: color }), defineProperty(_ref, 'bg-' + colorName, { backgroundColor: color }), defineProperty(_ref, 'b--' + colorName, { borderColor: color }), _ref;
    };

    Object.keys(colors).forEach(function (colorName) {
        skins = _extends({}, skins, getSkinTachyons(colorName));
    });

    var skins$1 = skins;

    var spacing = {
      pa0: { padding: v.spacingNone },
      pa1: { padding: v.spacingExtraSmall },
      pa2: { padding: v.spacingSmall },
      pa3: { padding: v.spacingMedium },
      pa4: { padding: v.spacingLarge },
      pa5: { padding: v.spacingExtraLarge },
      pa6: { padding: v.spacingExtraExtraLarge },
      pa7: { padding: v.spacingExtraExtraExtraLarge },
      pl0: { paddingLeft: v.spacingNone },
      pl1: { paddingLeft: v.spacingExtraSmall },
      pl2: { paddingLeft: v.spacingSmall },
      pl3: { paddingLeft: v.spacingMedium },
      pl4: { paddingLeft: v.spacingLarge },
      pl5: { paddingLeft: v.spacingExtraLarge },
      pl6: { paddingLeft: v.spacingExtraExtraLarge },
      pl7: { paddingLeft: v.spacingExtraExtraExtraLarge },
      pr0: { paddingRight: v.spacingNone },
      pr1: { paddingRight: v.spacingExtraSmall },
      pr2: { paddingRight: v.spacingSmall },
      pr3: { paddingRight: v.spacingMedium },
      pr4: { paddingRight: v.spacingLarge },
      pr5: { paddingRight: v.spacingExtraLarge },
      pr6: { paddingRight: v.spacingExtraExtraLarge },
      pr7: { paddingRight: v.spacingExtraExtraExtraLarge },
      pb0: { paddingBottom: v.spacingNone },
      pb1: { paddingBottom: v.spacingExtraSmall },
      pb2: { paddingBottom: v.spacingSmall },
      pb3: { paddingBottom: v.spacingMedium },
      pb4: { paddingBottom: v.spacingLarge },
      pb5: { paddingBottom: v.spacingExtraLarge },
      pb6: { paddingBottom: v.spacingExtraExtraLarge },
      pb7: { paddingBottom: v.spacingExtraExtraExtraLarge },
      pt0: { paddingTop: v.spacingNone },
      pt1: { paddingTop: v.spacingExtraSmall },
      pt2: { paddingTop: v.spacingSmall },
      pt3: { paddingTop: v.spacingMedium },
      pt4: { paddingTop: v.spacingLarge },
      pt5: { paddingTop: v.spacingExtraLarge },
      pt6: { paddingTop: v.spacingExtraExtraLarge },
      pt7: { paddingTop: v.spacingExtraExtraExtraLarge },
      pv0: { paddingTop: v.spacingNone, paddingBottom: v.spacingNone },
      pv1: { paddingTop: v.spacingExtraSmall, paddingBottom: v.spacingExtraSmall },
      pv2: { paddingTop: v.spacingSmall, paddingBottom: v.spacingSmall },
      pv3: { paddingTop: v.spacingMedium, paddingBottom: v.spacingMedium },
      pv4: { paddingTop: v.spacingLarge, paddingBottom: v.spacingLarge },
      pv5: { paddingTop: v.spacingExtraLarge, paddingBottom: v.spacingExtraLarge },
      pv6: { paddingTop: v.spacingExtraExtraLarge, paddingBottom: v.spacingExtraExtraLarge },
      pv7: { paddingTop: v.spacingExtraExtraExtraLarge, paddingBottom: v.spacingExtraExtraExtraLarge },
      ph0: { paddingLeft: v.spacingNone, paddingRight: v.spacingNone },
      ph1: { paddingLeft: v.spacingExtraSmall, paddingRight: v.spacingExtraSmall },
      ph2: { paddingLeft: v.spacingSmall, paddingRight: v.spacingSmall },
      ph3: { paddingLeft: v.spacingMedium, paddingRight: v.spacingMedium },
      ph4: { paddingLeft: v.spacingLarge, paddingRight: v.spacingLarge },
      ph5: { paddingLeft: v.spacingExtraLarge, paddingRight: v.spacingExtraLarge },
      ph6: { paddingLeft: v.spacingExtraExtraLarge, paddingRight: v.spacingExtraExtraLarge },
      ph7: { paddingLeft: v.spacingExtraExtraExtraLarge, paddingRight: v.spacingExtraExtraExtraLarge },
      ma0: {
        margin: v.spacingNone
      },
      ma1: {
        margin: v.spacingExtraSmall
      },
      ma2: {
        margin: v.spacingSmall
      },
      ma3: {
        margin: v.spacingMedium
      },
      ma4: {
        margin: v.spacingLarge
      },
      ma5: {
        margin: v.spacingExtraLarge
      },
      ma6: {
        margin: v.spacingExtraExtraLarge
      },
      ma7: {
        margin: v.spacingExtraExtraExtraLarge
      },
      ml0: {
        marginLeft: v.spacingNone
      },
      ml1: {
        marginLeft: v.spacingExtraSmall
      },
      ml2: {
        marginLeft: v.spacingSmall
      },
      ml3: {
        marginLeft: v.spacingMedium
      },
      ml4: {
        marginLeft: v.spacingLarge
      },
      ml5: {
        marginLeft: v.spacingExtraLarge
      },
      ml6: {
        marginLeft: v.spacingExtraExtraLarge
      },
      ml7: {
        marginLeft: v.spacingExtraExtraExtraLarge
      },
      mr0: {
        marginRight: v.spacingNone
      },
      mr1: {
        marginRight: v.spacingExtraSmall
      },
      mr2: {
        marginRight: v.spacingSmall
      },
      mr3: {
        marginRight: v.spacingMedium
      },
      mr4: {
        marginRight: v.spacingLarge
      },
      mr5: {
        marginRight: v.spacingExtraLarge
      },
      mr6: {
        marginRight: v.spacingExtraExtraLarge
      },
      mr7: {
        marginRight: v.spacingExtraExtraExtraLarge
      },
      mb0: {
        marginBottom: v.spacingNone
      },
      mb1: {
        marginBottom: v.spacingExtraSmall
      },
      mb2: {
        marginBottom: v.spacingSmall
      },
      mb3: {
        marginBottom: v.spacingMedium
      },
      mb4: {
        marginBottom: v.spacingLarge
      },
      mb5: {
        marginBottom: v.spacingExtraLarge
      },
      mb6: {
        marginBottom: v.spacingExtraExtraLarge
      },
      mb7: {
        marginBottom: v.spacingExtraExtraExtraLarge
      },
      mt0: {
        marginTop: v.spacingNone
      },
      mt1: {
        marginTop: v.spacingExtraSmall
      },
      mt2: {
        marginTop: v.spacingSmall
      },
      mt3: {
        marginTop: v.spacingMedium
      },
      mt4: {
        marginTop: v.spacingLarge
      },
      mt5: {
        marginTop: v.spacingExtraLarge
      },
      mt6: {
        marginTop: v.spacingExtraExtraLarge
      },
      mt7: {
        marginTop: v.spacingExtraExtraExtraLarge
      },
      mv0: {
        marginTop: v.spacingNone,
        marginBottom: v.spacingNone
      },
      mv1: {
        marginTop: v.spacingExtraSmall,
        marginBottom: v.spacingExtraSmall
      },
      mv2: {
        marginTop: v.spacingSmall,
        marginBottom: v.spacingSmall
      },
      mv3: {
        marginTop: v.spacingMedium,
        marginBottom: v.spacingMedium
      },
      mv4: {
        marginTop: v.spacingLarge,
        marginBottom: v.spacingLarge
      },
      mv5: {
        marginTop: v.spacingExtraLarge,
        marginBottom: v.spacingExtraLarge
      },
      mv6: {
        marginTop: v.spacingExtraExtraLarge,
        marginBottom: v.spacingExtraExtraLarge
      },
      mv7: {
        marginTop: v.spacingExtraExtraExtraLarge,
        marginBottom: v.spacingExtraExtraExtraLarge
      },
      mh0: {
        marginLeft: v.spacingNone,
        marginRight: v.spacingNone
      },
      mh1: {
        marginLeft: v.spacingExtraSmall,
        marginRight: v.spacingExtraSmall
      },
      mh2: {
        marginLeft: v.spacingSmall,
        marginRight: v.spacingSmall
      },
      mh3: {
        marginLeft: v.spacingMedium,
        marginRight: v.spacingMedium
      },
      mh4: {
        marginLeft: v.spacingLarge,
        marginRight: v.spacingLarge
      },
      mh5: {
        marginLeft: v.spacingExtraLarge,
        marginRight: v.spacingExtraLarge
      },
      mh6: {
        marginLeft: v.spacingExtraExtraLarge,
        marginRight: v.spacingExtraExtraLarge
      },
      mh7: {
        marginLeft: v.spacingExtraExtraExtraLarge,
        marginRight: v.spacingExtraExtraExtraLarge
      }
    };

    var tables = {
      collapse: {
        borderCollapse: 'collapse',
        borderSpacing: 0
      },
      'striped--light-silver': {
        ':nth-child(odd)': {
          backgroundColor: colors.lightSilver
        }
      },
      'striped--moon-gray': {
        ':nth-child(odd)': {
          backgroundColor: colors.moonGray
        }
      },
      'striped--light-gray': {
        ':nth-child(odd)': {
          backgroundColor: colors.lightGray
        }
      },
      'striped--near-white': {
        ':nth-child(odd)': {
          backgroundColor: colors.nearWhite
        }
      },
      'stripe-light': {
        ':nth-child(odd)': {
          backgroundColor: colors.white - 10
        }
      },
      'stripe-dark': {
        ':nth-child(odd)': {
          backgroundColor: colors.black - 10
        }
      }
    };

    var textAlign = {
      tl: {
        textAlign: 'left'
      },
      tr: {
        textAlign: 'right'
      },
      tc: {
        textAlign: 'center'
      }
    };

    var textDecoration = {
      strike: {
        textDecoration: 'line-through'
      },
      underline: {
        textDecoration: 'underline'
      },
      'no-underline': {
        textDecoration: 'none'
      }
    };

    var textTransform = {
      ttc: { textTransform: 'capitalize' },
      ttl: { textTransform: 'lowercase' },
      ttu: { textTransform: 'uppercase' },
      ttn: { textTransform: 'none' }
    };

    var typeScale = {
      'f-6': { fontSize: v.fontSizeHeadline },
      'f-headline': { fontSize: v.fontSizeHeadline },
      'f-5': { fontSize: v.fontSizeSubheadline },
      'f-subheadline': { fontSize: v.fontSizeSubheadline },
      f1: { fontSize: v.fontSize1 },
      f2: { fontSize: v.fontSize2 },
      f3: { fontSize: v.fontSize3 },
      f4: { fontSize: v.fontSize4 },
      f5: { fontSize: v.fontSize5 },
      f6: { fontSize: v.fontSize6 },
      f7: { fontSize: v.fontSize7 /* Small and hard to read for many people so use with extreme caution */
      } };

    var typography = {
      /* Measure is limited to ~66 characters */
      'measure': { maxWidth: v.measure },
      /* Measure is limited to ~80 characters */
      'measure-wide': { maxWidth: v.measureWide },
      /* Measure is limited to ~45 characters */
      'measure-narrow': { maxWidth: v.measureNarrow },
      /* Book paragraph style - paragraphs are indented with no vertical spacing. */
      'indent': { textIndent: '1em', marginTop: 0, marginBottom: 0 },
      'small-caps': { fontVariant: 'small-caps' },
      /* Combine this class with a width to truncate text (or just leave as is to truncate at width of containing element. */
      'truncate': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    };

    var utilities = {
      'overflow-container': { overflowY: 'scroll' },
      'center': { marginRight: 'auto', marginLeft: 'auto' },
      'mr-auto': { marginRight: 'auto' },
      'ml-auto': { marginLeft: 'auto' }
    };

    var verticalAlign = {
        'v-base': { verticalAlign: 'baseline' },
        'v-mid': { verticalAlign: 'middle' },
        'v-top': { verticalAlign: 'top' },
        'v-btm': { verticalAlign: 'bottom' }
    };

    var visibility = {
      clip: {
        'position': 'fixed !important',
        '_position': 'absolute !important',
        'clip': 'rect(1px 1px 1px 1px)'
      }
    };

    var whiteSpace = {
      'wsNormal': { whiteSpace: 'normal' },
      'nowrap': { whiteSpace: 'nowrap' },
      'pre': { whiteSpace: 'pre' }
    };

    var widths = {
      'w1': { width: v.width1 },
      'w2': { width: v.width2 },
      'w3': { width: v.width3 },
      'w4': { width: v.width4 },
      'w5': { width: v.width5 },
      'w-10': { width: '10%' },
      'w-20': { width: '20%' },
      'w-25': { width: '25%' },
      'w-30': { width: '30%' },
      'w-33': { width: '33%' },
      'w-34': { width: '34%' },
      'w-40': { width: '40%' },
      'w-50': { width: '50%' },
      'w-60': { width: '60%' },
      'w-70': { width: '70%' },
      'w-75': { width: '75%' },
      'w-80': { width: '80%' },
      'w-90': { width: '90%' },
      'w-100': { width: '100%' },
      'w-third': { width: 'calc(100% / 3' },
      'w-two-thirds': { width: 'calc(100% / 1.5)' },
      'w-auto': { width: 'auto' }
    };

    var wordBreak = {
      'word-normal': { wordBreak: 'normal' },
      'word-wrap': { wordBreak: 'break-all' },
      'word-nowrap': { wordBreak: 'keep-all' }
    };

    var zIndex = {
      'z-0': { zIndex: 0 },
      'z-1': { zIndex: 1 },
      'z-2': { zIndex: 2 },
      'z-3': { zIndex: 3 },
      'z-4': { zIndex: 4 },
      'z-5': { zIndex: 5 },
      'z-999': { zIndex: 999 },
      'z-9999': { zIndex: 9999 },
      'z-max': { zIndex: 2147483647 },
      'z-inherit': { zIndex: 'inherit' },
      'z-initial': { zIndex: 'initial' },
      'z-unset': { zIndex: 'unset' }
    };

    var tachyons = _extends({}, aspectRatios, backgroundPosition, backgroundSize, borderRadius, borderStyle, borderWidths, borders, boxShadow, boxSizing, clears, code, coordinates, debugChildren, debugGrid, display, flexbox, floats, fontFamily, fontStyle, fontWeight, forms, heights, hovers, letterSpacing, lineHeight, links, lists, maxWidths, negativeMargins, nested, opacity, outlines, overflow, position, rotations, skins$1, spacing, tables, textAlign, textDecoration, textTransform, typeScale, typography, utilities, verticalAlign, visibility, whiteSpace, widths, wordBreak, zIndex);

    var addTachyon = function addTachyon(tachyon) {
        tachyons = _extends({}, tachyons, tachyon);
    };

    var getTachyon = function getTachyon(tachyonName) {
        return tachyons[tachyonName];
    };

    var KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;

    var kebabCase = function kebabCase(str) {
        return str.replace(KEBAB_REGEX, function (match) {
            return '-' + match.toLowerCase();
        });
    };

    var getPropAsKabab = function getPropAsKabab(prop) {
        var kebabProp = {};

        Object.keys(prop).forEach(function (key) {
            return kebabProp[kebabCase(key)] = prop[key];
        });

        return kebabProp;
    };

    var getProp = function getProp(tachyonName, asCss) {
        var prop = getTachyon(tachyonName);

        return asCss ? getPropAsKabab(prop) : prop;
    };

    var mediaQueries = {
      ns: '@media screen and (min-width: 30em)',
      m: '@media screen and (min-width: 30em) and (max-width: 60em)',
      l: '@media screen and (min-width: 60em)'
    };

    var addMediaQuery = function addMediaQuery(name, query) {
      mediaQueries[name] = query;
    };

    var getMediaQuery = function getMediaQuery(name) {
      return mediaQueries[name];
    };
    var getMediaQueries = function getMediaQueries(name) {
      return mediaQueries;
    };

    var mdRegex = function mdRegex() {
        var md = Object.keys(getMediaQueries()).map(function (name) {
            return '-' + name;
        });
        return '^(.*?)(' + md.join("|") + ')$';
    };

    var pseudoRegEx = '^(hover-|active-|focus-|visited-|before-|after-)(.*)';

    var matchClassName = function matchClassName(className) {
        var config = tachyonsConfig();
        var md = new RegExp(mdRegex(), 'gm').exec(className);
        var pseudo = new RegExp(pseudoRegEx, 'gm').exec(className);

        if (pseudo) {
            return [pseudo[2], config.pseudo + ':' + pseudo[1].replace('-', '')];
        } else if (md) {
            return [md[1], getMediaQuery(md[2].replace("-", ""))];
        } else {
            return [];
        }
    };

    var addSkin = function addSkin(colorName, color) {
        addColor(colorName, color);
        var skinProps = getSkinTachyons(colorName, color);
        addTachyon(skinProps);
    };

    var tachyonsToCss = function tachyonsToCss(classesStr) {
        var cssAsObj = getTachyons(classesStr, true);

        var css = JSON.stringify(cssAsObj).replace(/,/g, ";").replace(/^{|"|}$/g, "").replace(/\):/g, ")").replace(/:hover:/, ":hover").replace(/:active:/, ":active").replace(/:focus:/, ":focus").replace(/:visited:/, ":visited").replace(/:before:/, 'before').replace(/:after:/, 'after');

        return css + ';';
    };

    var getTachyons = function getTachyons(classesStr, asCss) {
        var classesArr = classesStr.split(" ");

        return classesArr.reduce(function (prevProps, className) {
            className = className.trim();
            var match = matchClassName(className);

            if (match.length) {
                var _match = slicedToArray(match, 2),
                    tachyonName = _match[0],
                    selector = _match[1];

                var prop = getProp(tachyonName, asCss);

                if (prop && selector) {
                    prevProps = _extends({}, prevProps, defineProperty({}, selector, _extends({}, prevProps[selector] || {}, prop)));
                } else {
                    console.warn('media query \'' + prop + '\' does not exists in tachyons');
                }
            } else {
                var _prop = getProp(className, asCss);
                if (_prop) {
                    prevProps = _extends({}, prevProps, _prop);
                } else {
                    console.warn('class \'' + className + '\' does not exists in tachyons');
                }
            }

            return prevProps;
        }, {});
    };

    exports.addSkin = addSkin;
    exports.tachyonsToCss = tachyonsToCss;
    exports.default = getTachyons;
    exports.addMediaQuery = addMediaQuery;
    exports.tachyonsConfig = tachyonsConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
