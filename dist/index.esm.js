import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, typography, background, border, layout, position, flexbox } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space, typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 640 701.07" }, props),
        React.createElement("defs", null,
            React.createElement("style", null, ".cls-1{fill:#070707;}.cls-2{fill:#2e2e2e;}.cls-3{fill:#fff;opacity:0.05;}.cls-4{fill:url(#linear-gradient);}.cls-5{fill:url(#linear-gradient-2);}.cls-6{fill:url(#linear-gradient-3);}.cls-7{fill:url(#linear-gradient-4);}"),
            React.createElement("linearGradient", { id: "linear-gradient", x1: "117.3", y1: "452.72", x2: "595.64", y2: "126.99", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", stopColor: "#00e1ff" }),
                React.createElement("stop", { offset: "1", stopColor: "#007aff" })),
            React.createElement("linearGradient", { id: "linear-gradient-2", x1: "155.53", y1: "508.85", x2: "633.86", y2: "183.12" }),
            React.createElement("linearGradient", { id: "linear-gradient-3", x1: "109.05", y1: "440.6", x2: "587.38", y2: "114.87" }),
            React.createElement("linearGradient", { id: "linear-gradient-4", x1: "174.09", y1: "536.11", x2: "652.42", y2: "210.38" })),
        React.createElement("title", null, "lionfinance"),
        React.createElement("path", { className: "cls-1", d: "M640,464.49V236.58a122.64,122.64,0,0,0-61.31-106.2L381.31,16.43a122.59,122.59,0,0,0-122.62,0l-197.38,114A122.64,122.64,0,0,0,0,236.58V464.49A122.61,122.61,0,0,0,61.31,570.68l197.38,114a122.64,122.64,0,0,0,122.62,0l197.38-114A122.61,122.61,0,0,0,640,464.49Z" }),
        React.createElement("path", { className: "cls-2", d: "M320,14.75a108,108,0,0,1,53.94,14.46l197.37,114a108.17,108.17,0,0,1,53.94,93.42V464.49a108.18,108.18,0,0,1-53.94,93.42l-197.37,114a107.9,107.9,0,0,1-107.88,0l-197.37-114a108.18,108.18,0,0,1-53.94-93.42V236.58a108.17,108.17,0,0,1,53.94-93.42L266.06,29.21A108,108,0,0,1,320,14.75M320,0a122.57,122.57,0,0,0-61.31,16.43l-197.38,114A122.64,122.64,0,0,0,0,236.58V464.49a122.64,122.64,0,0,0,61.31,106.2L258.69,684.64a122.61,122.61,0,0,0,122.62,0L578.69,570.69A122.64,122.64,0,0,0,640,464.49V236.58a122.64,122.64,0,0,0-61.31-106.2L381.31,16.43A122.57,122.57,0,0,0,320,0Z" }),
        React.createElement("path", { className: "cls-3", d: "M602,451V250.12a108.07,108.07,0,0,0-54-93.58L374,56.13a108.07,108.07,0,0,0-108.06,0L92.05,156.54a108.07,108.07,0,0,0-54,93.58V451a108,108,0,0,0,54,93.57L266,644.94a108.07,108.07,0,0,0,108.06,0L548,544.52A108,108,0,0,0,602,451Z" }),
        React.createElement("path", { className: "cls-4", d: "M320.3,536.86c-13.87,0-27.79.66-41.6-.33a28,28,0,0,1-15.95-7,234.93,234.93,0,0,1-25.5-28.1c-13.19-17.22-31.65-27.11-49.27-38.47a45.27,45.27,0,0,1-14.78-15.68c-25-46.16-49.28-92.7-74.07-139-3.9-7.29-4.91-14-2.58-22.06,7.92-27.27,15.13-54.75,22.9-82.08,3.87-13.63,10.3-16.24,23.59-11.54Q190,209.18,237.3,225a22.48,22.48,0,0,0,13.34-.14c46.44-15.56,92.71-15.61,139.18,0,4.48,1.51,10.45.82,15.1-.74,30.14-10.14,60.1-20.84,90.15-31.28,17.1-5.93,22.2-3.38,27,13.8,7.53,27.07,15.24,54.11,22,81.38a28.44,28.44,0,0,1-2.11,18.35q-37.1,71.55-75.48,142.43c-2.9,5.38-7.77,10.92-13.12,13.55-31.68,15.61-53.48,41.95-76.34,67.41-3.69,4.12-11,6.41-16.87,6.86-13.2,1-26.52.31-39.8.31ZM208.05,244.29c-1.51-1.21-2.31-2.26-3.35-2.63q-28.33-10.2-56.72-20.27c-6-2.13-7.33,1.52-8.57,6.3-4.9,18.84-9.76,37.7-15.35,56.33-2.14,7.14-1.4,13,2.06,19.38,22.87,42.43,45.37,85.06,68.34,127.43,2.5,4.61,6.59,9.32,11.14,11.68,22.9,11.87,41.85,28.23,58,48.16,3.69,4.56,7.31,9.37,11.83,13,3.78,3,8.73,6.12,13.31,6.37,16.31.88,32.84-.77,49,1.06,15.83,1.8,26.54-4.15,35.68-15.79,16.7-21.23,35.13-40.42,60.09-52.31a26.23,26.23,0,0,0,11.1-10.53Q480.23,366.39,515,299.84a17.49,17.49,0,0,0,1.54-11.35c-5.06-20.07-10.91-39.94-16.08-60-1.78-6.89-4.92-8.08-11.35-5.69-16.21,6-32.64,11.49-48.95,17.26-2.64.94-5.12,2.33-8.17,3.74,11.38,9.35,21.76,17.56,31.66,26.32,1.82,1.61,3.16,6.31,2.13,8.1-3.51,6.1-8.17,11.54-12.39,17.24-5.34-4.36-7.3-5.8-9.11-7.42-70.94-63.57-172.06-65.06-244.71-3.59-10.47,8.86-10.47,8.86-20.35-1.06-8.24-8.27-8.39-8.44.69-16.19S198.35,252.16,208.05,244.29Z" }),
        React.createElement("path", { className: "cls-5", d: "M355,365.76c.51-8.91.26-17.95,1.67-26.71a37.74,37.74,0,0,1,36.53-32.12c13.87-.49,27.76,0,41.64-.22,5.71-.1,8.09,2.38,7.34,7.75-1,7.26,3.82,16.3-6.57,21-1.34.6-1.13,5.12-1.26,7.84-1.22,26.22-16,40.92-42,41.71-4.07.13-6.87,1.93-10.47,4.48-5.48,3.88-14.53,3.29-22.05,3.27-1.45,0-3.74-6-4.14-9.4-.69-5.77-.19-11.7-.19-17.56Zm52.08-23.47c.56-4.84-.28-9.19-8-9.1-10.81.13-16.17,4.82-16.54,15.32-.21,5.72,0,10.26,8,10C401.83,358.2,406.76,354.15,407.12,342.29Z" }),
        React.createElement("path", { className: "cls-6", d: "M227,306.92c6.16,0,12.33-.15,18.49,0,21.21.63,37.56,16.11,38.56,37.28.66,13.84.08,27.74.27,41.6.07,5.6-2.46,8.05-7.83,7.53-7.6-.74-16.88,3.68-21.41-7.22-.54-1.3-5.11-1.18-7.83-1.28-25.62-1-39.84-15.5-41.2-41.33-.2-3.76-4.53-7.17-5.34-11.07a97.11,97.11,0,0,1-2.12-22c0-1.27,6.38-3.06,9.93-3.39C214.67,306.51,220.87,306.91,227,306.92Zm30.31,43.13c0-12-4.49-16.56-15.3-17-6.39-.25-9.72,1.66-9.58,8.77.23,11.23,5.12,16.33,16.14,16.72C255.56,358.81,258.29,356,257.35,350.05Z" }),
        React.createElement("path", { className: "cls-7", d: "M367.3,436.34c-.92,1.62-2.05,5.5-4.61,7.75-10.89,9.52-22,18.79-33.41,27.7-7.29,5.7-14.77,5-21.83-1.19-9.26-8.14-18.8-16-28-24.17-5.18-4.59-8.13-10.37-5.33-17.35,2.55-6.36,8.18-7.73,14.46-7.72,21,0,42-.15,62.94,0C361.49,421.44,367.46,426.61,367.3,436.34Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("circle", { cx: "45", cy: "45", r: "45", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7703 49.9442C15.7626 50.1122 15.7587 50.2809 15.7587 50.4501C15.7587 51.0897 15.8144 51.7214 15.923 52.3435H15.7587V53.3228C15.7587 53.8008 15.7898 54.2744 15.8508 54.7428C17.0423 63.8844 29.6377 71.0772 45 71.0772C60.3623 71.0772 72.9577 63.8844 74.1492 54.7428C74.2102 54.2744 74.2413 53.8008 74.2413 53.3228V52.3435H74.077C74.1856 51.7214 74.2413 51.0897 74.2413 50.4501C74.2413 50.2809 74.2374 50.1122 74.2297 49.9442C73.7886 40.3727 60.8709 32.6957 45 32.6957C29.1291 32.6957 16.2114 40.3727 15.7703 49.9442ZM13.3688 49.9442C13.5863 44.1042 17.5547 39.1986 23.0781 35.845C28.8037 32.3686 36.5601 30.2964 45 30.2964C53.4399 30.2964 61.1964 32.3686 66.9219 35.845C72.4453 39.1986 76.4137 44.1042 76.6312 49.9442H76.6406V53.3228C76.6406 59.3853 72.6041 64.4779 66.9219 67.9279C61.1964 71.4043 53.4399 73.4765 45 73.4765C36.5601 73.4765 28.8037 71.4043 23.0781 67.9279C17.3959 64.4779 13.3594 59.3853 13.3594 53.3228V49.9442H13.3688Z", fill: "#606063" }),
        React.createElement("path", { d: "M74.2412 53.3233C74.2412 63.1287 61.1494 71.0776 44.9999 71.0776C28.8503 71.0776 15.7585 63.1287 15.7585 53.3233V50.5127H74.2412V53.3233Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M74.2412 50.4502C74.2412 60.2557 61.1494 68.2046 44.9999 68.2046C28.8503 68.2046 15.7585 60.2557 15.7585 50.4502C15.7585 40.6447 28.8503 32.6958 44.9999 32.6958C61.1494 32.6958 74.2412 40.6447 74.2412 50.4502Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 45.4345C20.2577 45.4456 20.2577 45.4567 20.2577 45.4679C20.2577 46.2752 20.3747 47.0659 20.5989 47.8338H20.2574V48.8736C20.2574 49.3326 20.2953 49.7861 20.3691 50.2332C21.4839 56.9839 30.8104 62.2532 42.1508 62.2532C53.4912 62.2532 62.8178 56.9839 63.9326 50.2332C64.0064 49.7861 64.0442 49.3326 64.0442 48.8736V47.8338H63.7032C63.9213 47.0868 64.038 46.3183 64.0442 45.5339C64.0444 45.5119 64.0445 45.4899 64.0445 45.4679C64.0445 45.4567 64.0444 45.4456 64.0444 45.4345C64.015 38.0605 54.2243 32.0883 42.1511 32.0883C30.0779 32.0883 20.2872 38.0605 20.2578 45.4345ZM17.8585 45.4345H17.8582V48.8736C17.8582 53.7204 21.0631 57.7199 25.4188 60.3817C29.8156 63.0687 35.7372 64.6525 42.1508 64.6525C48.5644 64.6525 54.4861 63.0687 58.8829 60.3817C63.2385 57.7199 66.4435 53.7204 66.4435 48.8736V45.5428C66.4437 45.5178 66.4438 45.4928 66.4438 45.4679C66.4438 40.621 63.2388 36.6216 58.8832 33.9598C54.4863 31.2728 48.5647 29.689 42.1511 29.689C35.7375 29.689 29.8158 31.2728 25.419 33.9598C21.0734 36.6155 17.8731 40.6027 17.8585 45.4345Z", fill: "#633001" }),
        React.createElement("path", { d: "M64.0441 48.8738C64.0441 56.2631 54.2421 62.2534 42.1507 62.2534C30.0593 62.2534 20.2573 56.2631 20.2573 48.8738V45.7346H64.0441V48.8738Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M64.0441 45.4679C64.0441 52.8573 54.2421 58.8475 42.1507 58.8475C30.0593 58.8475 20.2573 52.8573 20.2573 45.4679C20.2573 38.0786 30.0593 32.0884 42.1507 32.0884C54.2421 32.0884 64.0441 38.0786 64.0441 45.4679Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.8557 38.2365C26.8556 38.2476 26.8556 38.2587 26.8556 38.2699C26.8556 39.0772 26.9726 39.8679 27.1968 40.6359H26.8553V41.6756C26.8553 42.1346 26.8932 42.5881 26.967 43.0352C28.0818 49.7859 37.4083 55.0552 48.7487 55.0552C60.0891 55.0552 69.4157 49.7859 70.5305 43.0352C70.6043 42.5881 70.6421 42.1346 70.6421 41.6756V40.6359H70.3011C70.5192 39.8888 70.6359 39.1203 70.6421 38.3359C70.6423 38.3139 70.6424 38.2919 70.6424 38.2699C70.6424 38.2587 70.6423 38.2476 70.6423 38.2365C70.6129 30.8625 60.8222 24.8903 48.749 24.8903C36.6758 24.8903 26.8851 30.8625 26.8557 38.2365ZM24.4564 38.2365H24.4561V41.6756C24.4561 46.5224 27.661 50.5219 32.0167 53.1837C36.4135 55.8707 42.3351 57.4545 48.7487 57.4545C55.1623 57.4545 61.084 55.8707 65.4808 53.1837C69.8364 50.5219 73.0414 46.5224 73.0414 41.6756V38.3448C73.0416 38.3198 73.0417 38.2948 73.0417 38.2699C73.0417 33.4231 69.8367 29.4236 65.4811 26.7618C61.0842 24.0748 55.1626 22.491 48.749 22.491C42.3354 22.491 36.4137 24.0748 32.0169 26.7618C27.6713 29.4175 24.471 33.4047 24.4564 38.2365Z", fill: "#633001" }),
        React.createElement("path", { d: "M70.6422 41.6758C70.6422 49.0651 60.8402 55.0554 48.7488 55.0554C36.6575 55.0554 26.8555 49.0651 26.8555 41.6758V38.5366H70.6422V41.6758Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M70.6422 38.2699C70.6422 45.6593 60.8402 51.6495 48.7488 51.6495C36.6575 51.6495 26.8555 45.6593 26.8555 38.2699C26.8555 30.8806 36.6575 24.8904 48.7488 24.8904C60.8402 24.8904 70.6422 30.8806 70.6422 38.2699Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 31.0385C20.2577 31.0496 20.2577 31.0607 20.2577 31.0719C20.2577 31.8792 20.3747 32.6699 20.5989 33.4379H20.2574V34.4776C20.2574 34.9366 20.2953 35.3901 20.3691 35.8372C21.4839 42.5879 30.8104 47.8572 42.1508 47.8572C53.4912 47.8572 62.8178 42.5879 63.9326 35.8372C64.0064 35.3901 64.0442 34.9366 64.0442 34.4776V33.4379H63.7032C63.9213 32.6908 64.038 31.9223 64.0442 31.1379C64.0444 31.1159 64.0445 31.0939 64.0445 31.0719C64.0445 31.0607 64.0444 31.0496 64.0444 31.0385C64.015 23.6645 54.2243 17.6923 42.1511 17.6923C30.0779 17.6923 20.2872 23.6645 20.2578 31.0385ZM17.8585 31.0385H17.8582V34.4776C17.8582 39.3244 21.0631 43.3239 25.4188 45.9857C29.8156 48.6727 35.7372 50.2565 42.1508 50.2565C48.5644 50.2565 54.4861 48.6727 58.8829 45.9857C63.2385 43.3239 66.4435 39.3244 66.4435 34.4776V31.1468C66.4437 31.1218 66.4438 31.0968 66.4438 31.0719C66.4438 26.2251 63.2388 22.2256 58.8832 19.5638C54.4863 16.8768 48.5647 15.293 42.1511 15.293C35.7375 15.293 29.8158 16.8768 25.419 19.5638C21.0734 22.2195 17.8731 26.2067 17.8585 31.0385Z", fill: "#633001" }),
        React.createElement("path", { d: "M64.0441 34.4778C64.0441 41.8671 54.2421 47.8574 42.1507 47.8574C30.0593 47.8574 20.2573 41.8671 20.2573 34.4778V31.3386H64.0441V34.4778Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M64.0441 31.0719C64.0441 38.4613 54.2421 44.4515 42.1507 44.4515C30.0593 44.4515 20.2573 38.4613 20.2573 31.0719C20.2573 23.6826 30.0593 17.6924 42.1507 17.6924C54.2421 17.6924 64.0441 23.6826 64.0441 31.0719Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4361 31.9044C25.4361 34.3714 27.2287 36.5809 30.0567 38.0676L28.0973 41.4614L28.0977 41.4617H28.0973V50.0509C28.0973 51.1867 29.018 52.1075 30.1538 52.1075C31.2896 52.1075 32.2104 51.1867 32.2104 50.0509V43.22L34.3184 39.5686C35.6663 39.8545 37.1133 40.0097 38.6192 40.0097C45.9 40.0097 51.8022 36.3808 51.8022 31.9044C51.8022 27.428 45.9 23.7991 38.6192 23.7991C31.3383 23.7991 25.4361 27.428 25.4361 31.9044Z", fill: "url(#paint1_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0569 38.0676C29.7437 37.9029 29.4431 37.7294 29.1563 37.5476C26.8538 36.0883 25.4363 34.0982 25.4363 31.9045C25.4363 27.428 31.3386 23.7991 38.6194 23.7991C45.9002 23.7991 51.8025 27.428 51.8025 31.9045C51.8025 36.3809 45.9002 40.0098 38.6194 40.0098C37.1135 40.0098 35.6666 39.8545 34.3187 39.5687L32.2106 43.22V50.0509C32.2106 51.1868 31.2899 52.1075 30.1541 52.1075C29.0183 52.1075 28.0975 51.1868 28.0975 50.0509V41.4617L30.0569 38.0676ZM25.9981 41.4978V50.0509C25.9981 52.3462 27.8588 54.2069 30.1541 54.2069C32.4493 54.2069 34.31 52.3462 34.31 50.0509V43.7826L35.4034 41.8887C36.4418 42.0334 37.5181 42.1092 38.6194 42.1092C42.584 42.1092 46.2738 41.1254 49.0408 39.4242C51.7735 37.7441 53.9019 35.1446 53.9019 31.9045C53.9019 28.6643 51.7735 26.0648 49.0408 24.3847C46.2738 22.6835 42.584 21.6997 38.6194 21.6997C34.6548 21.6997 30.965 22.6835 28.198 24.3847C25.4652 26.0648 23.3369 28.6643 23.3369 31.9045C23.3369 34.7481 24.9657 37.0898 27.2286 38.7677L26.2939 40.3867C26.2048 40.5358 26.1337 40.697 26.0835 40.8672C26.0221 41.0746 25.9943 41.2873 25.9981 41.4978Z", fill: "#633001" }),
        React.createElement("path", { d: "M29.5544 28.4894C29.5544 30.8083 32.5084 32.6882 36.1524 32.6882C39.7964 32.6882 42.7505 30.8083 42.7505 28.4894C42.7505 26.1704 39.7964 24.2905 36.1524 24.2905C32.5084 24.2905 29.5544 26.1704 29.5544 28.4894Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M29.5547 26.6899H42.7508V28.4894H29.5547V26.6899Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M29.5544 26.6898C29.5544 29.0088 32.5084 30.8887 36.1524 30.8887C39.7964 30.8887 42.7505 29.0088 42.7505 26.6898C42.7505 24.3709 39.7964 22.491 36.1524 22.491C32.5084 22.491 29.5544 24.3709 29.5544 26.6898Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M33.6489 26.1838L35.5086 25.0003C35.9016 24.7502 36.4038 24.7502 36.7968 25.0003L38.6565 26.1838C39.0269 26.4195 39.0269 26.9602 38.6565 27.1959L36.7968 28.3794C36.4038 28.6295 35.9016 28.6295 35.5086 28.3794L33.6489 27.1959C33.2785 26.9602 33.2785 26.4195 33.6489 26.1838Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.3599 21.9496C31.9392 20.9446 33.9929 20.3916 36.1525 20.3916C38.3121 20.3916 40.3658 20.9446 41.9451 21.9496C43.4996 22.9389 44.8499 24.5636 44.8499 26.6899V28.4894C44.8499 30.6156 43.4996 32.2404 41.9451 33.2296C40.3658 34.2347 38.3121 34.7876 36.1525 34.7876C33.9929 34.7876 31.9392 34.2347 30.3599 33.2296C28.8054 32.2404 27.4551 30.6156 27.4551 28.4894V26.6899C27.4551 24.5636 28.8054 22.9389 30.3599 21.9496ZM36.1525 22.491C32.5085 22.491 29.5545 24.3709 29.5545 26.6899V28.4894C29.5545 30.8083 32.5085 32.6882 36.1525 32.6882C39.7965 32.6882 42.7505 30.8083 42.7505 28.4894V26.6899C42.7505 24.3709 39.7965 22.491 36.1525 22.491Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "45", y1: "0", x2: "45", y2: "90", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "38.7618", y1: "24.0704", x2: "38.7618", y2: "51.8948", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Box = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$4;

var Flex = styled(Box)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$5;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$6, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$7, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$8;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$9;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$a;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardHeader = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var CardFooter = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$d;

var StyledCardRibbon = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$e;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$f;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$g, templateObject_2$3;

var bunnyFall = keyframes(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArrays(Array(count)).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$q, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$h, templateObject_2$4;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$i;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$j;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$k, templateObject_2$5;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$l;

var GridLayout = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$m;

var GridLayout$1 = styled(GridLayout)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$n;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$o;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$p;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$q;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$u, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$r, templateObject_2$6;

var ProgressBunnyWrapper = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$s;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$A, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React.createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React.createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React.createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React.createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React.createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React.createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate$1 = keyframes(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon$J)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var FloatingPanIcon = styled(Icon$I)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React.createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$t, templateObject_2$7, templateObject_3$2, templateObject_4$1, templateObject_5;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$u, templateObject_2$8, templateObject_3$3, templateObject_4$2, templateObject_5$1;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale$2("handleHeight"), getScale$2("handleLeft"), getScale$2("handleTop"), getScale$2("handleWidth"));
var Input$1 = styled.input(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale$2("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale$2("toggleHeight"), getScale$2("toggleWidth"));
var templateObject_1$v, templateObject_2$9, templateObject_3$4;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input$1, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales$3.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$w, templateObject_2$a, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$x;

var ModalWrapper = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$y;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    var textColor = isDark ? "#FFFFFF" : "#000000";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 1734.33 453.72" }, props),
        React.createElement("defs", null,
            React.createElement("style", null, ".cls-1{isolation:isolate;}.cls-2{opacity:0.2;mix-blend-mode:multiply;}.cls-3{fill:" + textColor + ";}.cls-4{fill:#24b2fa;}.cls-5{fill:#2e2e2e;}.cls-6{fill:#fff;opacity:0.05;}.cls-7{fill:url(#linear-gradient);}.cls-8{fill:url(#linear-gradient-2);}.cls-9{fill:url(#linear-gradient-3);}.cls-10{fill:url(#linear-gradient-4);}"),
            React.createElement("linearGradient", { id: "linear-gradient", x1: "81.58", y1: "289.8", x2: "374.89", y2: "90.06", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", stopColor: "#00e1ff" }),
                React.createElement("stop", { offset: "1", stopColor: "#007aff" })),
            React.createElement("linearGradient", { id: "linear-gradient-2", x1: "105.02", y1: "324.22", x2: "398.33", y2: "124.48", xlinkHref: "#linear-gradient" }),
            React.createElement("linearGradient", { id: "linear-gradient-3", x1: "76.52", y1: "282.37", x2: "369.83", y2: "82.63", xlinkHref: "#linear-gradient" }),
            React.createElement("linearGradient", { id: "linear-gradient-4", x1: "116.41", y1: "340.94", x2: "409.72", y2: "141.2", xlinkHref: "#linear-gradient" })),
        React.createElement("title", null, "lionfinance"),
        React.createElement("g", { className: "cls-1" },
            React.createElement("g", { id: "Layer_1", "data-name": "Layer 1" },
                React.createElement("image", { className: "cls-2", width: "1273", height: "180", transform: "translate(438.52 139.16)", xlinkHref: "data:image/png;base64,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" }),
                React.createElement("path", { className: "cls-3", d: "M526.11,309.24c-25.52,0-46.92-8.5-61.89-24.58-13.59-14.61-21.13-34.93-21.25-57.22-.26-23.72,7.95-45.22,23.1-60.54,14.93-15.08,35.69-23.06,60-23.06A82.66,82.66,0,0,1,585,168.09a3,3,0,0,1-.16,4.39l-8.23,7.13a3,3,0,0,1-4.09-.15,65.06,65.06,0,0,0-46.41-18.93c-19.4,0-35.78,6.16-47.37,17.81-11.85,11.92-18.31,29.19-18.2,48.63.37,30,17.76,65.14,65.57,65.14a67,67,0,0,0,46.65-19,3,3,0,0,1,4.17,0l8,7.57A3,3,0,0,1,585,285,82.67,82.67,0,0,1,526.11,309.24Z" }),
                React.createElement("path", { className: "cls-3", d: "M651.45,309.24c-32,0-52.64-20.23-52.64-51.54V194.26a3,3,0,0,1,3-3h10.9a3,3,0,0,1,3,3v63.22c0,22.29,13,35.07,35.6,35.07h.56c20.59-.2,35.54-15.79,35.54-37.07V194.26a3,3,0,0,1,3-3h10.91a3,3,0,0,1,3,3v110.2a3,3,0,0,1-3,3H690.63a3,3,0,0,1-3-3V294c-8.62,9.58-21.33,15-36.14,15.26Z" }),
                React.createElement("path", { className: "cls-3", d: "M786.59,309.24c-17,0-32.69-7.23-42.86-19.37v14.59a3,3,0,0,1-3,3H730a3,3,0,0,1-3-3V148.62a3,3,0,0,1,3-3h10.69a3,3,0,0,1,3,3v59.71c9.66-12,24.69-18.63,42.63-18.63,34.82,0,58.21,24,58.21,59.77S821.27,309.24,786.59,309.24Zm-.67-103.08c-24.32,0-42,18.12-42,43.09,0,25.49,17.26,43.3,42,43.3,25.49,0,42-16.91,42-43.08C827.89,217.54,806.21,206.16,785.92,206.16Z" }),
                React.createElement("path", { className: "cls-3", d: "M899.62,307.46a3,3,0,0,1-3-3V148.84a3,3,0,0,1,3-3h112a3,3,0,0,1,3,3v28.28a3,3,0,0,1-3,3H932v36.52h75.14a3,3,0,0,1,3,3V246.8a3,3,0,0,1-3,3H932v54.66a3,3,0,0,1-3,3Z" }),
                React.createElement("path", { className: "cls-3", d: "M1029.86,307.46a3,3,0,0,1-3-3V194.26a3,3,0,0,1,3-3H1057a3,3,0,0,1,3,3v110.2a3,3,0,0,1-3,3Zm13.58-124.84c-9.46,0-19-6.48-19-18.86s9.57-18.86,19-18.86,19,6.48,19,18.86S1052.89,182.62,1043.44,182.62Z" }),
                React.createElement("path", { className: "cls-3", d: "M1162.32,307.46a3,3,0,0,1-3-3V247c0-12.76-6.17-26.39-23.49-26.39-14.29,0-25.06,11.92-25.06,27.72v56.11a3,3,0,0,1-3,3h-26.93a3,3,0,0,1-3-3v-110a3,3,0,0,1,3-3h24.26a3,3,0,0,1,3,2.64l1.09,9.11c10.7-9.17,21.31-13.31,33.78-13.31,29.62,0,49.53,22.86,49.53,56.88v57.66a3,3,0,0,1-3,3Z" }),
                React.createElement("path", { className: "cls-3", d: "M1262.85,310.8c-17.17,0-31.76-5.42-42.19-15.66-11-10.81-16.81-26.6-16.81-45.67,0-36.72,23.42-60.44,59.68-60.44h.55c12.76,0,24.68,4.78,32.41,12.61l.42-7.11a3,3,0,0,1,3-2.83h26a3,3,0,0,1,3,3V304.46a3,3,0,0,1-3,3h-25.6a3,3,0,0,1-3-2.76l-.65-7.76c-8.3,8.88-21.94,13.65-33.26,13.85Zm3.66-91.5c-17.65,0-29.5,12.12-29.5,30.17s11.85,30.39,29.5,30.39c9,0,16.52-3.23,21.76-9.35a32.07,32.07,0,0,0,7.29-20.93C1295.56,235,1286.47,219.3,1266.51,219.3Z" }),
                React.createElement("path", { className: "cls-3", d: "M1429.69,307.46a3,3,0,0,1-3-3V247c0-12.76-6.17-26.39-23.49-26.39-14.28,0-25,11.92-25,27.72v56.11a3,3,0,0,1-3,3h-26.94a3,3,0,0,1-3-3v-110a3,3,0,0,1,3-3h24.27a3,3,0,0,1,3,2.64l1.08,9.11c10.71-9.17,21.32-13.31,33.79-13.31,29.62,0,49.52,22.86,49.52,56.88v57.66a3,3,0,0,1-3,3Z" }),
                React.createElement("path", { className: "cls-3", d: "M1532.1,310.79c-37.25,0-61.32-24-61.32-61.1s24.07-61.1,61.32-61.1c17,0,29.51,5.11,41.73,17.11a3,3,0,0,1,.07,4.21l-17.14,18a3,3,0,0,1-2.17.93,2.94,2.94,0,0,1-2-.77,30.56,30.56,0,0,0-20-7.91c-16.85,0-28.61,12.13-28.61,29.5,0,21.45,15.17,29.06,28.16,29.06,9.08,0,16.45-2.78,21.93-8.25a3,3,0,0,1,2.12-.88,3,3,0,0,1,2.09.85l18.26,17.81a3,3,0,0,1,.9,2.15,3,3,0,0,1-.9,2.14C1563.67,305.17,1550,310.79,1532.1,310.79Z" }),
                React.createElement("path", { className: "cls-3", d: "M1646.31,310.35c-19.19,0-35.26-5.86-46.47-17-11-10.91-16.86-26.34-16.86-44.6,0-17.14,5.92-32.54,16.68-43.36,11.11-11.17,26.55-17.08,44.64-17.08,18.93,0,34.34,5.93,44.54,17.13,11.24,12.34,16,31,13.88,54.05a3,3,0,0,1-3,2.72h-82c3.11,10.81,13.91,17.38,29,17.38,8.84,0,21.38-3.27,27.23-9.33a3,3,0,0,1,2.12-.91h0a3,3,0,0,1,2.11.86l17.36,17.15a3,3,0,0,1,.05,4.21C1684.54,303.17,1665.63,310.35,1646.31,310.35Zm23.76-76.57c-3.54-13.28-16.86-15.37-24.88-15.37-12.7,0-22.13,5.54-26.47,15.37Z" }),
                React.createElement("path", { className: "cls-4", d: "M582.88,282.86a80.25,80.25,0,0,1-56.77,23.38c-52.54,0-79.92-36.74-80.14-78.81-.45-41.63,26.71-80.59,80.14-80.59a80.24,80.24,0,0,1,56.77,23.37l-8.24,7.13a68.16,68.16,0,0,0-48.53-19.81c-45.41,0-68.79,32.05-68.57,69.45.45,36.51,23.6,68.13,68.57,68.13a69.65,69.65,0,0,0,48.76-19.82Z" }),
                React.createElement("path", { className: "cls-4", d: "M690.63,304.46V284.64c-8.46,15.14-23.82,21.37-39.18,21.6-29.39,0-49.64-18-49.64-48.54V194.26h10.9v63.22c0,24.94,15.36,38.29,39.19,38.07,22.7-.22,38.51-17.36,38.51-40.07V194.26h10.91v110.2Z" }),
                React.createElement("path", { className: "cls-4", d: "M740.73,148.62v69.9c8.9-17.81,26.71-25.82,45.63-25.82,30.73,0,55.21,20.48,55.21,56.77,0,36.51-24.26,56.77-55,56.77-18.7,0-36.74-9.35-45.86-26.05v24.27H730V148.62ZM741,249.25c0,27.38,19.14,46.3,45,46.3,24.71,0,45-15.58,45-46.08,0-30.95-20.26-46.31-45-46.31C760.54,203.16,741,221.86,741,249.25Z" }),
                React.createElement("path", { className: "cls-4", d: "M899.62,304.46V148.84h112v28.28H929v42.52h78.14V246.8H929v57.66Z" }),
                React.createElement("path", { className: "cls-4", d: "M1059.46,163.76c0,21.15-32,21.15-32,0S1059.46,142.61,1059.46,163.76Zm-29.6,30.5v110.2H1057V194.26Z" }),
                React.createElement("path", { className: "cls-4", d: "M1162.32,304.46V247c0-16.7-9.13-29.39-26.49-29.39-16.7,0-28.06,14-28.06,30.72v56.11h-26.93v-110h24.26l1.78,14.92c11.14-10.91,22.27-16.48,36.07-16.48,25.82,0,46.53,19.37,46.53,53.88v57.66Z" }),
                React.createElement("path", { className: "cls-4", d: "M1299.9,194.7h26V304.46h-25.6l-1.34-16c-6.23,12.91-23.37,19.14-35.62,19.36-32.5.23-56.55-19.81-56.55-58.32,0-37.85,25.16-57.66,57.22-57.44,14.69,0,28.72,6.9,35,17.81ZM1234,249.47c0,20.93,14.47,33.39,32.5,33.39,42.74,0,42.74-66.56,0-66.56C1248.48,216.3,1234,228.54,1234,249.47Z" }),
                React.createElement("path", { className: "cls-4", d: "M1429.69,304.46V247c0-16.7-9.12-29.39-26.49-29.39-16.69,0-28,14-28,30.72v56.11h-26.94v-110h24.27l1.78,14.92c11.13-10.91,22.26-16.48,36.07-16.48,25.82,0,46.52,19.37,46.52,53.88v57.66Z" }),
                React.createElement("path", { className: "cls-4", d: "M1574.4,290.43c-12.69,12.47-26.05,17.36-42.3,17.36-31.83,0-58.32-19.14-58.32-58.1s26.49-58.1,58.32-58.1c15.59,0,27.61,4.45,39.63,16.25l-17.14,18a33.33,33.33,0,0,0-22-8.68c-18.26,0-31.61,13.36-31.61,32.5,0,20.93,14.24,32.06,31.16,32.06,8.69,0,17.37-2.45,24.05-9.13Z" }),
                React.createElement("path", { className: "cls-4", d: "M1614,259.26c1.78,13.58,13.58,23.38,32.72,23.38,10,0,23.16-3.79,29.39-10.24l17.36,17.14c-11.57,12-30.5,17.81-47.19,17.81-37.85,0-60.33-23.38-60.33-58.55,0-33.39,22.7-57.44,58.32-57.44,36.74,0,59.67,22.71,55.44,67.9Zm59.66-22.48c-1.78-14.25-12.91-21.37-28.5-21.37-14.69,0-26.71,7.12-30.72,21.37Z" }),
                React.createElement("path", { className: "cls-3", d: "M402.1,297V157.27a75.18,75.18,0,0,0-37.6-65.12l-121-69.88a75.2,75.2,0,0,0-75.19,0l-121,69.88a75.18,75.18,0,0,0-37.6,65.12V297a75.19,75.19,0,0,0,37.6,65.12l121,69.87a75.15,75.15,0,0,0,75.19,0l121-69.87A75.19,75.19,0,0,0,402.1,297Z" }),
                React.createElement("path", { className: "cls-5", d: "M205.88,21.24A66.22,66.22,0,0,1,239,30.11L360,100a66.33,66.33,0,0,1,33.07,57.29V297A66.33,66.33,0,0,1,360,354.3L239,424.18a66.17,66.17,0,0,1-66.15,0l-121-69.88A66.33,66.33,0,0,1,18.7,297V157.27A66.33,66.33,0,0,1,51.77,100l121-69.87a66.22,66.22,0,0,1,33.08-8.87m0-9a75.08,75.08,0,0,0-37.6,10.07l-121,69.88a75.18,75.18,0,0,0-37.6,65.12V297a75.19,75.19,0,0,0,37.6,65.12l121,69.87a75.15,75.15,0,0,0,75.19,0l121-69.87A75.19,75.19,0,0,0,402.1,297V157.27a75.18,75.18,0,0,0-37.6-65.12l-121-69.88A75.07,75.07,0,0,0,205.88,12.2Z" }),
                React.createElement("path", { className: "cls-6", d: "M378.78,288.71V165.57a66.25,66.25,0,0,0-33.13-57.38L239,46.62a66.22,66.22,0,0,0-66.25,0L66.1,108.19A66.25,66.25,0,0,0,33,165.57V288.71A66.27,66.27,0,0,0,66.1,346.1l106.65,61.57a66.27,66.27,0,0,0,66.25,0L345.65,346.1A66.27,66.27,0,0,0,378.78,288.71Z" }),
                React.createElement("path", { className: "cls-7", d: "M206.06,341.4c-8.51,0-17,.4-25.51-.2a17.21,17.21,0,0,1-9.78-4.32,145,145,0,0,1-15.64-17.23c-8.08-10.56-19.4-16.63-30.21-23.6a27.7,27.7,0,0,1-9.06-9.61c-15.33-28.3-30.22-56.84-45.42-85.22a16.77,16.77,0,0,1-1.58-13.52c4.86-16.72,9.28-33.58,14-50.33,2.37-8.36,6.32-10,14.47-7.08q28.82,10.17,57.79,19.86a13.86,13.86,0,0,0,8.19-.09c28.47-9.54,56.84-9.57,85.34,0,2.75.92,6.41.5,9.26-.46,18.48-6.22,36.85-12.78,55.28-19.18,10.48-3.64,13.61-2.07,16.54,8.46,4.62,16.6,9.34,33.18,13.47,49.91A17.45,17.45,0,0,1,342,200q-22.76,43.88-46.28,87.34c-1.78,3.29-4.77,6.69-8.05,8.31-19.42,9.57-32.79,25.72-46.81,41.33-2.26,2.52-6.76,3.93-10.34,4.2-8.1.61-16.27.19-24.41.19ZM137.23,162a10.27,10.27,0,0,0-2-1.61Q117.8,154.13,100.39,148c-3.67-1.31-4.49.93-5.25,3.87-3,11.54-6,23.11-9.41,34.54A14.37,14.37,0,0,0,87,198.24c14,26,27.82,52.16,41.91,78.14a17.86,17.86,0,0,0,6.83,7.16,111.41,111.41,0,0,1,35.54,29.53c2.26,2.8,4.48,5.75,7.25,8,2.32,1.86,5.36,3.75,8.17,3.9,10,.54,20.13-.47,30,.66,9.71,1.1,16.27-2.55,21.88-9.69,10.24-13,21.54-24.78,36.85-32.07a16.11,16.11,0,0,0,6.8-6.46q21.87-40.51,43.19-81.33a10.69,10.69,0,0,0,.94-7c-3.1-12.31-6.69-24.49-9.86-36.78-1.09-4.23-3-4.95-7-3.49-9.94,3.69-20,7-30,10.58-1.62.58-3.14,1.43-5,2.3,7,5.73,13.34,10.76,19.41,16.14,1.11,1,1.94,3.86,1.31,5-2.15,3.74-5,7.08-7.6,10.57-3.27-2.67-4.48-3.55-5.58-4.55-43.51-39-105.51-39.89-150.06-2.2-6.42,5.43-6.42,5.43-12.48-.65-5-5.07-5.14-5.18.42-9.92S131.28,166.82,137.23,162Z" }),
                React.createElement("path", { className: "cls-8", d: "M227.36,236.48c.31-5.47.16-11,1-16.38a23.15,23.15,0,0,1,22.39-19.7c8.51-.29,17,0,25.54-.13,3.5-.06,5,1.46,4.5,4.75-.62,4.45,2.35,10-4,12.86-.82.37-.69,3.14-.77,4.81-.75,16.08-9.83,25.09-25.78,25.58-2.5.08-4.21,1.18-6.42,2.75-3.36,2.38-8.91,2-13.52,2-.89,0-2.29-3.67-2.54-5.76-.43-3.54-.12-7.17-.12-10.77Zm31.94-14.39c.34-3-.17-5.64-4.9-5.58-6.63.07-9.92,3-10.15,9.39-.12,3.51,0,6.29,4.88,6.15C256.06,231.84,259.08,229.36,259.3,222.09Z" }),
                React.createElement("path", { className: "cls-9", d: "M148.87,200.4c3.78,0,7.56-.09,11.34,0,13,.38,23,9.87,23.65,22.86.4,8.48,0,17,.16,25.51,0,3.43-1.51,4.93-4.8,4.61-4.66-.45-10.35,2.26-13.13-4.43-.33-.79-3.13-.72-4.8-.78-15.71-.59-24.43-9.5-25.26-25.34-.13-2.31-2.78-4.4-3.28-6.79a60.13,60.13,0,0,1-1.3-13.5c0-.78,3.92-1.88,6.09-2.07C141.29,200.14,145.09,200.39,148.87,200.4Zm18.59,26.45c0-7.37-2.76-10.16-9.38-10.42-3.92-.15-6,1-5.87,5.38.13,6.89,3.13,10,9.89,10.25C166.36,232.21,168,230.5,167.46,226.85Z" }),
                React.createElement("path", { className: "cls-10", d: "M234.88,279.76c-.57,1-1.26,3.37-2.83,4.75q-10,8.76-20.49,17c-4.46,3.49-9.05,3.08-13.38-.73-5.68-5-11.53-9.8-17.18-14.82-3.18-2.82-5-6.36-3.27-10.64,1.56-3.9,5-4.75,8.87-4.74,12.86,0,25.73-.09,38.59,0C231.32,270.62,235,273.79,234.88,279.76Z" })))));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$K,
    GroupsIcon: Icon$L,
    HamburgerIcon: Icon$M,
    HamburgerCloseIcon: Icon$N,
    HomeIcon: Icon$O,
    IfoIcon: Icon$P,
    InfoIcon: Icon$Q,
    LanguageIcon: Icon$R,
    LogoIcon: Logo,
    MoonIcon: Icon$S,
    MoreIcon: Icon$T,
    NftIcon: Icon$U,
    PoolIcon: Icon$V,
    SunIcon: Icon$W,
    TelegramIcon: Icon$X,
    TicketIcon: Icon$Y,
    TradeIcon: Icon$Z,
    TwitterIcon: Icon$_
});

var MenuButton = styled(Button)(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$z;

var StyledLink$1 = styled(Link$1)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$q, { className: "mobile-icon" }),
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$N, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$M, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$A;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.pancakeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/pancakeswap",
            },
            {
                label: "Docs",
                href: "https://docs.pancakeswap.finance",
            },
            {
                label: "Blog",
                href: "https://pancakeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        href: "https://t.me/leofinanceio"
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/financeleo",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$B, templateObject_2$b, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$C, templateObject_2$c;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$D;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            cakePriceUsd ? (React.createElement(PriceLink, { href: "https://pancakeswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", target: "_blank" },
                React.createElement(Icon$w, { width: "24px", mr: "8px" }),
                React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "24px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            }))),
        React.createElement(SettingsEntry, null,
            React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); })))));
};
var templateObject_1$E, templateObject_2$d, templateObject_3$7, templateObject_4$3;

var StyledPanel = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$F;

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$$,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$12,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$10,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$11,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$13,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$14,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React.createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$G;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$H, templateObject_2$e;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var StyledAvatar = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$t, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$I, templateObject_2$f;

var Wrapper$1 = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$J, templateObject_2$g, templateObject_3$8, templateObject_4$4, templateObject_5$2;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$K;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$L;

var ResetCSS = createGlobalStyle(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$M;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#1FC7D4",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#452A7A", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#100C18", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", inputSecondary: "#66578D", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#A28BD4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var light$7 = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)',
};
var dark$7 = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)',
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3, tooltip: dark$7 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3, tooltip: light$7 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Box, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, Icon$n as CopyIcon, Dropdown, Icon$1 as ErrorIcon, FallingBunnies, Flex, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MinusIcon, Modal, ModalProvider, Icon$t as NoProfileAvatarIcon, Icon$u as OpenNewIcon, Icon$w as PancakeRoundIcon, Icon$v as PancakesIcon, Icon$x as PrizeIcon, Progress, Icon$A as ProgressBunny, Radio, Icon$y as RemoveIcon, ResetCSS, Icon$E as SearchIcon, Skeleton, Spinner, Svg, Icon$F as SwapVertIcon, Icon$G as SyncAltIcon, Tag, Text, Icon$C as Ticket, Icon$D as TicketRound, ToastContainer, Toggle, Icon$z as VerifiedIcon, Icon$H as WarningIcon, Icon$B as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
