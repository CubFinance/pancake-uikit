import getThemeValue from "./getThemeValue";
var getColor = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};
export default getColor;
