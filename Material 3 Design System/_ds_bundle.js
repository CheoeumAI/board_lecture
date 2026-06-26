/* @ds-bundle: {"format":3,"namespace":"Material3DesignSystem_fd173f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Fab","sourcePath":"components/actions/Fab.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/communication/Badge.jsx"},{"name":"ProgressIndicator","sourcePath":"components/communication/ProgressIndicator.jsx"},{"name":"Snackbar","sourcePath":"components/communication/Snackbar.jsx"},{"name":"Tooltip","sourcePath":"components/communication/Tooltip.jsx"},{"name":"Card","sourcePath":"components/containment/Card.jsx"},{"name":"Dialog","sourcePath":"components/containment/Dialog.jsx"},{"name":"Divider","sourcePath":"components/containment/Divider.jsx"},{"name":"ListItem","sourcePath":"components/containment/ListItem.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"RadioButton","sourcePath":"components/forms/RadioButton.jsx"},{"name":"SegmentedButton","sourcePath":"components/forms/SegmentedButton.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"NavigationBar","sourcePath":"components/navigation/NavigationBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopAppBar","sourcePath":"components/navigation/TopAppBar.jsx"},{"name":"Chip","sourcePath":"components/selection/Chip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"d517446ebaf0","components/actions/Fab.jsx":"52cfaf6a5b5b","components/actions/IconButton.jsx":"4613ce015c5c","components/communication/Badge.jsx":"0d346b67b4f3","components/communication/ProgressIndicator.jsx":"0e0c0bc82266","components/communication/Snackbar.jsx":"0b30baf691a9","components/communication/Tooltip.jsx":"9191cfe6c99d","components/containment/Card.jsx":"712640069bd2","components/containment/Dialog.jsx":"ea1b1b02957f","components/containment/Divider.jsx":"c88b1af5a5b1","components/containment/ListItem.jsx":"5ade7a8ebc7b","components/forms/Checkbox.jsx":"406f0135d0b7","components/forms/RadioButton.jsx":"09a0ca69d3f4","components/forms/SegmentedButton.jsx":"f6a6c7bd310b","components/forms/Slider.jsx":"cc0cc901d8c7","components/forms/Switch.jsx":"340f5e3e1990","components/forms/TextField.jsx":"43d846277d80","components/navigation/Menu.jsx":"3a70853c6b58","components/navigation/NavigationBar.jsx":"4d3514d10ef5","components/navigation/Tabs.jsx":"86d5dec700bc","components/navigation/TopAppBar.jsx":"7d569c660ae2","components/selection/Chip.jsx":"946feaa7b3ae","ui_kits/marketing/Sections.jsx":"89456b3a8181"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Material3DesignSystem_fd173f = window.Material3DesignSystem_fd173f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Button.
 * Five variants — filled, tonal, elevated, outlined, text — plus an
 * optional leading/trailing icon (Material Symbols name).
 */
function Button({
  variant = 'filled',
  icon,
  trailingIcon,
  disabled = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: '40px',
    paddingInline: icon ? '16px 24px' : '24px',
    border: 'none',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    fontSize: 'var(--md-sys-typescale-label-large-size)',
    lineHeight: 'var(--md-sys-typescale-label-large-line)',
    letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
    fontWeight: 'var(--md-sys-typescale-weight-medium)',
    cursor: disabled ? 'default' : 'pointer',
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: 'box-shadow var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard), background-color var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    filled: {
      background: 'var(--md-sys-color-primary)',
      color: 'var(--md-sys-color-on-primary)'
    },
    tonal: {
      background: 'var(--md-sys-color-secondary-container)',
      color: 'var(--md-sys-color-on-secondary-container)'
    },
    elevated: {
      background: 'var(--md-sys-color-surface-container-low)',
      color: 'var(--md-sys-color-primary)',
      boxShadow: 'var(--md-sys-elevation-1)'
    },
    outlined: {
      background: 'transparent',
      color: 'var(--md-sys-color-primary)',
      border: '1px solid var(--md-sys-color-outline)'
    },
    text: {
      background: 'transparent',
      color: 'var(--md-sys-color-primary)',
      paddingInline: icon ? '12px 16px' : '12px'
    }
  };
  const disabledStyle = disabled ? {
    background: variant === 'outlined' || variant === 'text' ? 'transparent' : 'color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)',
    color: 'color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)',
    boxShadow: 'none',
    border: variant === 'outlined' ? '1px solid color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)' : base.border,
    pointerEvents: 'none'
  } : {};
  const [hover, setHover] = React.useState(false);
  const hoverTint = !disabled && hover ? {
    filter: 'brightness(0.96)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...disabledStyle,
      ...hoverTint,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '18px'
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("span", null, children), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '18px'
    },
    "aria-hidden": "true"
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Fab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Floating Action Button (FAB).
 * Sizes: small, regular, large. Extended FAB shows a text label.
 * Color: primary, secondary, tertiary, surface.
 */
function Fab({
  size = 'regular',
  color = 'primary',
  icon = 'add',
  label,
  extended = false,
  disabled = false,
  ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    small: {
      box: 40,
      radius: 'var(--md-sys-shape-corner-medium)',
      icon: 24
    },
    regular: {
      box: 56,
      radius: 'var(--md-sys-shape-corner-large)',
      icon: 24
    },
    large: {
      box: 96,
      radius: 'var(--md-sys-shape-corner-extra-large)',
      icon: 36
    }
  }[size];
  const palette = {
    primary: {
      background: 'var(--md-sys-color-primary-container)',
      color: 'var(--md-sys-color-on-primary-container)'
    },
    secondary: {
      background: 'var(--md-sys-color-secondary-container)',
      color: 'var(--md-sys-color-on-secondary-container)'
    },
    tertiary: {
      background: 'var(--md-sys-color-tertiary-container)',
      color: 'var(--md-sys-color-on-tertiary-container)'
    },
    surface: {
      background: 'var(--md-sys-color-surface-container-high)',
      color: 'var(--md-sys-color-primary)'
    }
  }[color];
  const isExtended = extended && label;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    border: 'none',
    cursor: disabled ? 'default' : 'pointer',
    borderRadius: dims.radius,
    boxShadow: hover ? 'var(--md-sys-elevation-4)' : 'var(--md-sys-elevation-3)',
    transition: 'box-shadow var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    WebkitTapHighlightColor: 'transparent',
    ...(isExtended ? {
      height: '56px',
      paddingInline: '16px 20px',
      borderRadius: 'var(--md-sys-shape-corner-large)'
    } : {
      width: `${dims.box}px`,
      height: `${dims.box}px`,
      padding: 0
    }),
    ...palette,
    ...(disabled ? {
      boxShadow: 'none',
      background: 'color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)',
      color: 'color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)',
      pointerEvents: 'none'
    } : {})
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel || label || icon,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: `${dims.icon}px`
    },
    "aria-hidden": "true"
  }, icon), isExtended && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--md-sys-typescale-font-plain)',
      fontSize: 'var(--md-sys-typescale-label-large-size)',
      fontWeight: 'var(--md-sys-typescale-weight-medium)',
      letterSpacing: 'var(--md-sys-typescale-label-large-tracking)'
    }
  }, label));
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Fab.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Icon Button.
 * Variants: standard, filled, tonal, outlined. Optional toggle state.
 */
function IconButton({
  variant = 'standard',
  icon = 'favorite',
  selected = false,
  disabled = false,
  filledIcon,
  ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    width: '40px',
    height: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    cursor: disabled ? 'default' : 'pointer',
    padding: 0,
    transition: 'background-color var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    WebkitTapHighlightColor: 'transparent'
  };
  const palette = {
    standard: selected ? {
      background: 'transparent',
      color: 'var(--md-sys-color-primary)'
    } : {
      background: 'transparent',
      color: 'var(--md-sys-color-on-surface-variant)'
    },
    filled: selected ? {
      background: 'var(--md-sys-color-primary)',
      color: 'var(--md-sys-color-on-primary)'
    } : {
      background: 'var(--md-sys-color-surface-container-highest)',
      color: 'var(--md-sys-color-primary)'
    },
    tonal: selected ? {
      background: 'var(--md-sys-color-secondary-container)',
      color: 'var(--md-sys-color-on-secondary-container)'
    } : {
      background: 'var(--md-sys-color-surface-container-highest)',
      color: 'var(--md-sys-color-on-surface-variant)'
    },
    outlined: selected ? {
      background: 'var(--md-sys-color-inverse-surface)',
      color: 'var(--md-sys-color-inverse-on-surface)',
      border: '1px solid var(--md-sys-color-inverse-surface)'
    } : {
      background: 'transparent',
      color: 'var(--md-sys-color-on-surface-variant)',
      border: '1px solid var(--md-sys-color-outline)'
    }
  };
  const disabledStyle = disabled ? {
    background: variant === 'filled' || variant === 'tonal' ? 'color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)' : 'transparent',
    color: 'color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)',
    border: variant === 'outlined' ? '1px solid color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)' : 'none',
    pointerEvents: 'none'
  } : {};
  const hoverStyle = !disabled && hover ? {
    filter: 'brightness(0.95)'
  } : {};
  const glyph = selected && filledIcon ? filledIcon : icon;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel || glyph,
    "aria-pressed": selected,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...palette[variant],
      ...disabledStyle,
      ...hoverStyle,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    "data-filled": selected ? 'true' : 'false',
    style: {
      fontSize: '24px'
    },
    "aria-hidden": "true"
  }, glyph));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/communication/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Badge — small/large count indicator.
 * Wrap any child; the badge anchors to its top-right.
 */
function Badge({
  count,
  max = 999,
  dot = false,
  children,
  style,
  ...rest
}) {
  const showNum = !dot && count !== undefined && count !== null;
  const display = showNum && count > max ? `${max}+` : count;
  const badge = {
    position: 'absolute',
    top: dot ? '0' : '-4px',
    insetInlineStart: dot ? 'calc(100% - 6px)' : 'calc(100% - 8px)',
    minWidth: dot ? '6px' : '16px',
    height: dot ? '6px' : '16px',
    paddingInline: dot ? 0 : '4px',
    boxSizing: 'border-box',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    background: 'var(--md-sys-color-error)',
    color: 'var(--md-sys-color-on-error)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    fontSize: 'var(--md-sys-typescale-label-small-size)',
    lineHeight: '16px',
    fontWeight: 'var(--md-sys-typescale-weight-medium)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  };
  if (!children) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...badge,
        position: 'static',
        insetInlineStart: 'auto',
        top: 'auto'
      }
    }, rest), display);
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", _extends({
    style: badge
  }, rest), showNum ? display : null));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/Badge.jsx", error: String((e && e.message) || e) }); }

// components/communication/ProgressIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Progress Indicator.
 * variant: 'linear' | 'circular'. Indeterminate when `value` is undefined.
 */
function ProgressIndicator({
  variant = 'linear',
  value,
  size = 48,
  thickness = 4,
  style,
  ...rest
}) {
  const indeterminate = value === undefined || value === null;
  const id = React.useId ? React.useId() : 'mdpi';
  if (variant === 'circular') {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    const offset = indeterminate ? c * 0.75 : c * (1 - Math.max(0, Math.min(100, value)) / 100);
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        width: `${size}px`,
        height: `${size}px`,
        ...style
      },
      role: "progressbar"
    }, rest), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      style: indeterminate ? {
        animation: `m3-spin-${id} 1.4s linear infinite`
      } : undefined
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--md-sys-color-primary)",
      strokeWidth: thickness,
      strokeDasharray: c,
      strokeDashoffset: offset,
      strokeLinecap: "round",
      transform: `rotate(-90 ${size / 2} ${size / 2})`,
      style: {
        transition: indeterminate ? 'none' : 'stroke-dashoffset var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard)'
      }
    })), /*#__PURE__*/React.createElement("style", null, `@keyframes m3-spin-${id}{to{transform:rotate(360deg)}}`));
  }

  // linear
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      width: '100%',
      height: `${thickness}px`,
      background: 'var(--md-sys-color-secondary-container)',
      borderRadius: 'var(--md-sys-shape-corner-full)',
      overflow: 'hidden',
      position: 'relative',
      ...style
    },
    role: "progressbar"
  }, rest), indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--md-sys-color-primary)',
      transformOrigin: 'left',
      animation: `m3-linear-${id} 1.8s var(--md-sys-motion-easing-standard) infinite`
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: `${Math.max(0, Math.min(100, value))}%`,
      background: 'var(--md-sys-color-primary)',
      borderRadius: 'var(--md-sys-shape-corner-full)',
      transition: 'width var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard)'
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes m3-linear-${id}{0%{transform:translateX(-100%) scaleX(0.5)}50%{transform:translateX(0%) scaleX(0.5)}100%{transform:translateX(100%) scaleX(0.5)}}`));
}
Object.assign(__ds_scope, { ProgressIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/ProgressIndicator.jsx", error: String((e && e.message) || e) }); }

// components/communication/Snackbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Material Design 3 Snackbar — brief message with an optional single action. */
function Snackbar({
  message = 'Message',
  actionLabel,
  onAction,
  closable = false,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      minHeight: '48px',
      minWidth: '288px',
      maxWidth: '560px',
      paddingInline: '16px',
      background: 'var(--md-sys-color-inverse-surface)',
      color: 'var(--md-sys-color-inverse-on-surface)',
      borderRadius: 'var(--md-sys-shape-corner-extra-small)',
      boxShadow: 'var(--md-sys-elevation-3)',
      fontFamily: 'var(--md-sys-typescale-font-plain)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "md-typescale-body-medium",
    style: {
      flex: 1,
      paddingBlock: '8px'
    }
  }, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--md-sys-color-inverse-primary)',
      fontFamily: 'inherit',
      fontSize: 'var(--md-sys-typescale-label-large-size)',
      fontWeight: 'var(--md-sys-typescale-weight-medium)',
      letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
      padding: '8px',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent'
    }
  }, actionLabel), closable && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    onClick: onClose,
    style: {
      fontSize: '20px',
      cursor: 'pointer',
      marginRight: '-4px'
    },
    "aria-hidden": "true"
  }, "close"));
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/communication/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Tooltip — plain or rich.
 * Wraps a child and shows the tip on hover/focus.
 */
function Tooltip({
  text = 'Tooltip',
  rich = false,
  subhead,
  position = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '4px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '4px'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '4px'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '4px'
    }
  }[position];
  const plain = {
    position: 'absolute',
    ...pos,
    background: 'var(--md-sys-color-inverse-surface)',
    color: 'var(--md-sys-color-inverse-on-surface)',
    padding: '4px 8px',
    borderRadius: 'var(--md-sys-shape-corner-extra-small)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    fontSize: 'var(--md-sys-typescale-body-small-size)',
    lineHeight: 'var(--md-sys-typescale-body-small-line)',
    whiteSpace: 'nowrap',
    zIndex: 50,
    pointerEvents: 'none'
  };
  const richBox = {
    position: 'absolute',
    ...pos,
    width: '240px',
    whiteSpace: 'normal',
    background: 'var(--md-sys-color-surface-container)',
    color: 'var(--md-sys-color-on-surface-variant)',
    padding: '12px 16px',
    borderRadius: 'var(--md-sys-shape-corner-medium)',
    boxShadow: 'var(--md-sys-elevation-2)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    zIndex: 50
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && (rich ? /*#__PURE__*/React.createElement("span", {
    style: richBox
  }, subhead && /*#__PURE__*/React.createElement("span", {
    className: "md-typescale-title-small",
    style: {
      display: 'block',
      color: 'var(--md-sys-color-on-surface)',
      marginBottom: '4px'
    }
  }, subhead), /*#__PURE__*/React.createElement("span", {
    className: "md-typescale-body-medium"
  }, text)) : /*#__PURE__*/React.createElement("span", {
    style: plain
  }, text)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/communication/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/containment/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Card container.
 * Variants: elevated, filled, outlined.
 */
function Card({
  variant = 'elevated',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    elevated: {
      background: 'var(--md-sys-color-surface-container-low)',
      boxShadow: hover && interactive ? 'var(--md-sys-elevation-2)' : 'var(--md-sys-elevation-1)'
    },
    filled: {
      background: 'var(--md-sys-color-surface-container-highest)',
      boxShadow: hover && interactive ? 'var(--md-sys-elevation-1)' : 'none'
    },
    outlined: {
      background: 'var(--md-sys-color-surface)',
      border: '1px solid var(--md-sys-color-outline-variant)',
      boxShadow: hover && interactive ? 'var(--md-sys-elevation-1)' : 'none'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--md-sys-shape-corner-medium)',
      color: 'var(--md-sys-color-on-surface)',
      overflow: 'hidden',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Card.jsx", error: String((e && e.message) || e) }); }

// components/containment/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Dialog (basic / hero).
 * Renders a scrim + centered container when `open`.
 */
function Dialog({
  open = true,
  icon,
  headline = 'Headline',
  children,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'color-mix(in srgb, var(--md-sys-color-scrim) 40%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: () => (onClose || onCancel) && (onClose || onCancel)()
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(560px, calc(100% - 48px))',
      minWidth: '280px',
      background: 'var(--md-sys-color-surface-container-high)',
      color: 'var(--md-sys-color-on-surface)',
      borderRadius: 'var(--md-sys-shape-corner-extra-large)',
      boxShadow: 'var(--md-sys-elevation-3)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '24px',
      color: 'var(--md-sys-color-secondary)',
      alignSelf: 'center'
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("h2", {
    className: "md-typescale-headline-small",
    style: {
      margin: 0,
      textAlign: icon ? 'center' : 'start',
      color: 'var(--md-sys-color-on-surface)'
    }
  }, headline), /*#__PURE__*/React.createElement("div", {
    className: "md-typescale-body-medium",
    style: {
      color: 'var(--md-sys-color-on-surface-variant)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
      marginTop: '8px'
    }
  }, cancelText && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    onClick: onCancel
  }, cancelText), confirmText && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    onClick: onConfirm
  }, confirmText))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/containment/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Material Design 3 Divider — thin line that groups content. */
function Divider({
  inset = false,
  vertical = false,
  style,
  ...rest
}) {
  if (vertical) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        width: '1px',
        alignSelf: 'stretch',
        background: 'var(--md-sys-color-outline-variant)',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 'none',
      height: '1px',
      margin: 0,
      marginLeft: inset ? '16px' : 0,
      background: 'var(--md-sys-color-outline-variant)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Divider.jsx", error: String((e && e.message) || e) }); }

// components/containment/ListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 List Item (one, two, or three line).
 * Supports leading icon/avatar, trailing icon/text/control.
 */
function ListItem({
  headline = 'Headline',
  supportingText,
  overline,
  leadingIcon,
  leadingAvatar,
  trailingIcon,
  trailingText,
  trailing,
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lines = [overline, headline, supportingText].filter(Boolean).length;
  const minHeight = lines >= 3 ? 88 : lines === 2 ? 72 : 56;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      minHeight: `${minHeight}px`,
      padding: '8px 16px',
      background: hover && interactive ? 'color-mix(in srgb, var(--md-sys-color-on-surface) 8%, var(--md-sys-color-surface))' : 'var(--md-sys-color-surface)',
      color: 'var(--md-sys-color-on-surface)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background-color var(--md-sys-motion-duration-short3)',
      fontFamily: 'var(--md-sys-typescale-font-plain)',
      ...style
    }
  }, rest), leadingAvatar && /*#__PURE__*/React.createElement("img", {
    src: leadingAvatar,
    alt: "",
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      flexShrink: 0
    }
  }), !leadingAvatar && leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '24px',
      color: 'var(--md-sys-color-on-surface-variant)',
      flexShrink: 0
    },
    "aria-hidden": "true"
  }, leadingIcon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, overline && /*#__PURE__*/React.createElement("div", {
    className: "md-typescale-label-small",
    style: {
      color: 'var(--md-sys-color-on-surface-variant)'
    }
  }, overline), /*#__PURE__*/React.createElement("div", {
    className: "md-typescale-body-large",
    style: {
      color: 'var(--md-sys-color-on-surface)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, headline), supportingText && /*#__PURE__*/React.createElement("div", {
    className: "md-typescale-body-medium",
    style: {
      color: 'var(--md-sys-color-on-surface-variant)'
    }
  }, supportingText)), trailing, trailingText && /*#__PURE__*/React.createElement("span", {
    className: "md-typescale-label-small",
    style: {
      color: 'var(--md-sys-color-on-surface-variant)',
      flexShrink: 0
    }
  }, trailingText), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '24px',
      color: 'var(--md-sys-color-on-surface-variant)',
      flexShrink: 0
    },
    "aria-hidden": "true"
  }, trailingIcon));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Material Design 3 Checkbox (optionally with a text label). */
function Checkbox({
  checked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  error = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const active = on || indeterminate;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const accent = error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-primary)';
  const box = {
    width: '18px',
    height: '18px',
    borderRadius: '2px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    background: active ? accent : 'transparent',
    border: active ? `2px solid ${accent}` : `2px solid ${error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)'}`
  };
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.38 : 1,
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    color: 'var(--md-sys-color-on-surface)',
    WebkitTapHighlightColor: 'transparent',
    ...style
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '-11px'
    },
    onClick: toggle,
    role: "checkbox",
    "aria-checked": indeterminate ? 'mixed' : on
  }, /*#__PURE__*/React.createElement("span", {
    style: box
  }, active && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '18px',
      color: 'var(--md-sys-color-on-primary)'
    },
    "aria-hidden": "true"
  }, indeterminate ? 'remove' : 'check'))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--md-sys-typescale-body-large-size)',
      lineHeight: 'var(--md-sys-typescale-body-large-line)',
      marginLeft: '-8px'
    },
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Material Design 3 Radio Button (optionally with a text label). */
function RadioButton({
  checked,
  defaultChecked = false,
  disabled = false,
  name,
  value,
  label,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const select = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(true);
    onChange && onChange(value !== undefined ? value : true);
  };
  const ring = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    boxSizing: 'border-box',
    border: `2px solid ${on ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'border-color var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)'
  };
  const dot = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'var(--md-sys-color-primary)',
    transform: on ? 'scale(1)' : 'scale(0)',
    transition: 'transform var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-emphasized)'
  };
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.38 : 1,
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    color: 'var(--md-sys-color-on-surface)',
    WebkitTapHighlightColor: 'transparent',
    ...style
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '-10px'
    },
    onClick: select,
    role: "radio",
    "aria-checked": on
  }, /*#__PURE__*/React.createElement("span", {
    style: ring
  }, /*#__PURE__*/React.createElement("span", {
    style: dot
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--md-sys-typescale-body-large-size)',
      lineHeight: 'var(--md-sys-typescale-body-large-line)',
      marginLeft: '-8px'
    },
    onClick: select
  }, label));
}
Object.assign(__ds_scope, { RadioButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Segmented Button — a single- or multi-select group
 * of connected options.
 */
function SegmentedButton({
  segments = [],
  value,
  defaultValue,
  multiSelect = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const init = defaultValue !== undefined ? defaultValue : multiSelect ? [] : segments[0] && segments[0].value;
  const [internal, setInternal] = React.useState(init);
  const selected = value !== undefined ? value : internal;
  const isOn = v => multiSelect ? (selected || []).includes(v) : selected === v;
  const pick = v => {
    if (disabled) return;
    let next;
    if (multiSelect) {
      const cur = selected || [];
      next = cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v];
    } else {
      next = v;
    }
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const group = {
    display: 'inline-flex',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    overflow: 'hidden',
    opacity: disabled ? 0.38 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    style: group
  }, rest), segments.map((seg, i) => {
    const on = isOn(seg.value);
    return /*#__PURE__*/React.createElement("button", {
      key: seg.value,
      "aria-pressed": on,
      onClick: () => pick(seg.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        height: '40px',
        paddingInline: '16px',
        border: '1px solid var(--md-sys-color-outline)',
        borderLeftWidth: i === 0 ? '1px' : '0',
        background: on ? 'var(--md-sys-color-secondary-container)' : 'transparent',
        color: on ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface)',
        fontFamily: 'var(--md-sys-typescale-font-plain)',
        fontSize: 'var(--md-sys-typescale-label-large-size)',
        fontWeight: 'var(--md-sys-typescale-weight-medium)',
        letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      className: "m3-icon",
      style: {
        fontSize: '18px'
      },
      "aria-hidden": "true"
    }, "check"), !on && seg.icon && /*#__PURE__*/React.createElement("span", {
      className: "m3-icon",
      style: {
        fontSize: '18px'
      },
      "aria-hidden": "true"
    }, seg.icon), seg.label);
  }));
}
Object.assign(__ds_scope, { SegmentedButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Material Design 3 Slider — single-value continuous slider. */
function Slider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showValue = false,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value !== undefined ? value : internal;
  const pct = (val - min) / (max - min) * 100;
  const handle = e => {
    const next = Number(e.target.value);
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const wrap = {
    position: 'relative',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '200px',
    opacity: disabled ? 0.38 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: '16px',
      borderRadius: 'var(--md-sys-shape-corner-full)',
      background: 'var(--md-sys-color-secondary-container)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `calc(${pct}% - 4px)`,
      height: '16px',
      borderRadius: 'var(--md-sys-shape-corner-full)',
      background: 'var(--md-sys-color-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${pct}% - 2px)`,
      width: '4px',
      height: '44px',
      borderRadius: 'var(--md-sys-shape-corner-full)',
      background: 'var(--md-sys-color-primary)',
      transition: 'left var(--md-sys-motion-duration-short2) linear'
    }
  }, showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '48px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--md-sys-color-primary)',
      color: 'var(--md-sys-color-on-primary)',
      padding: '4px 8px',
      borderRadius: 'var(--md-sys-shape-corner-full)',
      fontSize: 'var(--md-sys-typescale-label-medium-size)',
      whiteSpace: 'nowrap'
    }
  }, val)), /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    value: val,
    min: min,
    max: max,
    step: step,
    disabled: disabled,
    onChange: handle,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      opacity: 0,
      cursor: 'pointer'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Material Design 3 Switch — binary on/off toggle. */
function Switch({
  checked,
  defaultChecked = false,
  disabled = false,
  icon = false,
  onChange,
  ariaLabel,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const track = {
    width: '52px',
    height: '32px',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    position: 'relative',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background-color var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard), border-color var(--md-sys-motion-duration-short4)',
    background: on ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-highest)',
    border: on ? '2px solid var(--md-sys-color-primary)' : '2px solid var(--md-sys-color-outline)',
    boxSizing: 'border-box',
    opacity: disabled ? 0.38 : 1,
    flexShrink: 0,
    WebkitTapHighlightColor: 'transparent',
    ...style
  };
  const knobSize = on ? 24 : 16;
  const knob = {
    position: 'absolute',
    top: '50%',
    left: on ? `calc(100% - ${knobSize}px - 4px)` : '6px',
    width: `${knobSize}px`,
    height: `${knobSize}px`,
    borderRadius: '50%',
    transform: 'translateY(-50%)',
    background: on ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-outline)',
    transition: 'all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-emphasized)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "switch",
    "aria-checked": on,
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: toggle,
    style: {
      ...track,
      border: track.border,
      padding: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: knob
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: `${on ? 16 : 12}px`,
      color: on ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-highest)'
    },
    "aria-hidden": "true"
  }, on ? 'check' : 'close')));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Text Field.
 * Variants: filled, outlined. Supports label, leading/trailing icon,
 * supporting text and error state.
 */
function TextField({
  variant = 'filled',
  label = 'Label',
  value,
  defaultValue,
  placeholder,
  leadingIcon,
  trailingIcon,
  supportingText,
  error = false,
  disabled = false,
  type = 'text',
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue || '');
  const val = value !== undefined ? value : internal;
  const hasValue = val !== undefined && val !== '';
  const floated = focused || hasValue || placeholder;
  const accent = error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-primary)';
  const labelColor = disabled ? 'color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)' : error ? 'var(--md-sys-color-error)' : focused ? accent : 'var(--md-sys-color-on-surface-variant)';
  const isOutlined = variant === 'outlined';
  const container = {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    minWidth: '210px',
    opacity: disabled ? 0.38 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style
  };
  const field = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    height: '56px',
    paddingInline: '16px',
    background: isOutlined ? 'transparent' : 'var(--md-sys-color-surface-container-highest)',
    borderRadius: isOutlined ? 'var(--md-sys-shape-corner-extra-small)' : 'var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0',
    border: isOutlined ? `${focused ? 2 : 1}px solid ${focused ? accent : error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-outline)'}` : 'none',
    borderBottom: isOutlined ? undefined : `${focused ? 2 : 1}px solid ${focused ? accent : error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)'}`,
    transition: 'border-color var(--md-sys-motion-duration-short3), background-color var(--md-sys-motion-duration-short3)'
  };
  const input = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: 'var(--md-sys-color-on-surface)',
    fontSize: 'var(--md-sys-typescale-body-large-size)',
    lineHeight: 'var(--md-sys-typescale-body-large-line)',
    letterSpacing: 'var(--md-sys-typescale-body-large-tracking)',
    fontFamily: 'inherit',
    paddingTop: floated ? '10px' : 0
  };
  const labelStyle = floated ? {
    position: 'absolute',
    top: isOutlined ? '-8px' : '8px',
    left: isOutlined ? leadingIcon ? '40px' : '12px' : leadingIcon ? '48px' : '16px',
    fontSize: 'var(--md-sys-typescale-body-small-size)',
    lineHeight: 1,
    padding: isOutlined ? '0 4px' : 0,
    background: isOutlined ? 'var(--md-sys-color-surface)' : 'transparent',
    color: labelColor,
    transition: 'all var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    pointerEvents: 'none'
  } : {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: leadingIcon ? '48px' : '16px',
    fontSize: 'var(--md-sys-typescale-body-large-size)',
    color: labelColor,
    transition: 'all var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    pointerEvents: 'none'
  };
  const handle = e => {
    if (value === undefined) setInternal(e.target.value);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: field
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '24px',
      color: 'var(--md-sys-color-on-surface-variant)'
    },
    "aria-hidden": "true"
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: val,
    placeholder: focused || !label ? placeholder : '',
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: handle,
    style: input
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '24px',
      color: error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)'
    },
    "aria-hidden": "true"
  }, trailingIcon)), supportingText && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: '4px',
      paddingInline: '16px',
      fontSize: 'var(--md-sys-typescale-body-small-size)',
      lineHeight: 'var(--md-sys-typescale-body-small-line)',
      letterSpacing: 'var(--md-sys-typescale-body-small-tracking)',
      color: error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)'
    }
  }, supportingText));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Menu — surface of selectable items.
 * Render inline (as a positioned popover by the caller) when `open`.
 */
function Menu({
  items = [],
  open = true,
  onSelect,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "menu",
    style: {
      minWidth: '180px',
      maxWidth: '280px',
      paddingBlock: '8px',
      background: 'var(--md-sys-color-surface-container)',
      borderRadius: 'var(--md-sys-shape-corner-extra-small)',
      boxShadow: 'var(--md-sys-elevation-2)',
      color: 'var(--md-sys-color-on-surface)',
      ...style
    }
  }, rest), items.map((item, i) => {
    if (item.divider) return /*#__PURE__*/React.createElement(__ds_scope.Divider, {
      key: `d${i}`,
      style: {
        marginBlock: '8px'
      }
    });
    return /*#__PURE__*/React.createElement(MenuRow, {
      key: item.value || i,
      item: item,
      onSelect: onSelect
    });
  }));
}
function MenuRow({
  item,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  const disabled = item.disabled;
  return /*#__PURE__*/React.createElement("button", {
    role: "menuitem",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => !disabled && onSelect && onSelect(item.value),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      width: '100%',
      height: '48px',
      paddingInline: '12px',
      border: 'none',
      background: hover && !disabled ? 'color-mix(in srgb, var(--md-sys-color-on-surface) 8%, transparent)' : 'transparent',
      color: 'var(--md-sys-color-on-surface)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      fontFamily: 'var(--md-sys-typescale-font-plain)',
      textAlign: 'start',
      WebkitTapHighlightColor: 'transparent'
    }
  }, item.icon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '24px',
      color: 'var(--md-sys-color-on-surface-variant)'
    },
    "aria-hidden": "true"
  }, item.icon), /*#__PURE__*/React.createElement("span", {
    className: "md-typescale-label-large",
    style: {
      flex: 1
    }
  }, item.label), item.trailing && /*#__PURE__*/React.createElement("span", {
    className: "md-typescale-label-large",
    style: {
      color: 'var(--md-sys-color-on-surface-variant)'
    }
  }, item.trailing));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Navigation Bar (bottom nav, 3–5 destinations).
 */
function NavigationBar({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue !== undefined ? defaultValue : items[0] && items[0].value);
  const active = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      height: '80px',
      background: 'var(--md-sys-color-surface-container)',
      paddingBlock: '12px 16px',
      ...style
    }
  }, rest), items.map(item => {
    const on = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      "aria-selected": on,
      onClick: () => pick(item.value),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '64px',
        height: '32px',
        borderRadius: 'var(--md-sys-shape-corner-full)',
        background: on ? 'var(--md-sys-color-secondary-container)' : 'transparent',
        transition: 'background-color var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "m3-icon",
      "data-filled": on ? 'true' : 'false',
      style: {
        fontSize: '24px',
        color: on ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)'
      },
      "aria-hidden": "true"
    }, item.icon), item.badge !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '2px',
        left: '54%',
        minWidth: '16px',
        height: '16px',
        paddingInline: '4px',
        boxSizing: 'border-box',
        borderRadius: '999px',
        background: 'var(--md-sys-color-error)',
        color: 'var(--md-sys-color-on-error)',
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: 600,
        fontFamily: 'var(--md-sys-typescale-font-plain)',
        textAlign: 'center'
      }
    }, item.badge || '')), /*#__PURE__*/React.createElement("span", {
      className: "md-typescale-label-medium",
      style: {
        color: on ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-on-surface-variant)',
        fontWeight: on ? 700 : 500
      }
    }, item.label));
  }));
}
Object.assign(__ds_scope, { NavigationBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Tabs (primary or secondary).
 * Controlled or uncontrolled; optional icon per tab.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  variant = 'primary',
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue !== undefined ? defaultValue : tabs[0] && tabs[0].value);
  const active = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--md-sys-color-surface-variant)',
      background: 'var(--md-sys-color-surface)',
      ...style
    }
  }, rest), tabs.map(tab => {
    const on = tab.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(tab.value),
      style: {
        flex: variant === 'primary' ? 1 : '0 0 auto',
        display: 'inline-flex',
        flexDirection: tab.icon && variant === 'primary' ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        minHeight: '48px',
        paddingInline: variant === 'secondary' ? '16px' : '16px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        position: 'relative',
        color: on ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)',
        fontFamily: 'var(--md-sys-typescale-font-plain)',
        fontSize: 'var(--md-sys-typescale-title-small-size)',
        fontWeight: 'var(--md-sys-typescale-weight-medium)',
        letterSpacing: 'var(--md-sys-typescale-title-small-tracking)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, tab.icon && /*#__PURE__*/React.createElement("span", {
      className: "m3-icon",
      "data-filled": on ? 'true' : 'false',
      style: {
        fontSize: '24px'
      },
      "aria-hidden": "true"
    }, tab.icon), /*#__PURE__*/React.createElement("span", null, tab.label), on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: variant === 'primary' ? '50%' : 0,
        transform: variant === 'primary' ? 'translateX(-50%)' : 'none',
        width: variant === 'primary' ? '40%' : '100%',
        height: '3px',
        borderRadius: '3px 3px 0 0',
        background: 'var(--md-sys-color-primary)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopAppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Top App Bar.
 * variant: 'center' | 'small' | 'medium' | 'large'.
 */
function TopAppBar({
  title = 'Title',
  variant = 'small',
  navIcon = 'menu',
  onNav,
  actions = [],
  scrolled = false,
  style,
  ...rest
}) {
  const tall = variant === 'medium' || variant === 'large';
  const height = variant === 'large' ? 152 : variant === 'medium' ? 112 : 64;
  const titleClass = variant === 'large' ? 'md-typescale-headline-medium' : variant === 'medium' ? 'md-typescale-headline-small' : 'md-typescale-title-large';
  const bg = scrolled ? 'var(--md-sys-color-surface-container)' : 'var(--md-sys-color-surface)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: bg,
      color: 'var(--md-sys-color-on-surface)',
      minHeight: `${height}px`,
      display: 'flex',
      flexDirection: tall ? 'column' : 'row',
      alignItems: tall ? 'stretch' : 'center',
      transition: 'background-color var(--md-sys-motion-duration-short3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: '64px',
      paddingInline: '4px 8px',
      flexShrink: 0
    }
  }, navIcon && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: "standard",
    icon: navIcon,
    ariaLabel: "navigation",
    onClick: onNav
  }), variant === 'center' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), !tall && /*#__PURE__*/React.createElement("h1", {
    className: titleClass,
    style: {
      margin: 0,
      flex: variant === 'center' ? '0 0 auto' : 1,
      paddingInline: variant === 'center' ? 0 : '4px',
      textAlign: variant === 'center' ? 'center' : 'start',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), variant === 'center' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0px',
      marginLeft: tall ? 'auto' : 0
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: i,
    variant: "standard",
    icon: a.icon,
    ariaLabel: a.label,
    onClick: a.onClick
  })))), tall && /*#__PURE__*/React.createElement("h1", {
    className: titleClass,
    style: {
      margin: 0,
      padding: '0 16px 20px',
      display: 'flex',
      alignItems: 'flex-end',
      flex: 1
    }
  }, title));
}
Object.assign(__ds_scope, { TopAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopAppBar.jsx", error: String((e && e.message) || e) }); }

// components/selection/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material Design 3 Chip.
 * Types: assist, filter, input, suggestion.
 * Filter chips support a selected state; input chips can show a trailing remove.
 */
function Chip({
  type = 'assist',
  label = 'Chip',
  icon,
  avatar,
  selected = false,
  elevated = false,
  removable = false,
  disabled = false,
  onClick,
  onRemove,
  style,
  ...rest
}) {
  const showLeading = icon || avatar;
  const isSelected = (type === 'filter' || type === 'input') && selected;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    height: '32px',
    paddingInline: showLeading || isSelected ? '8px 16px' : '16px',
    borderRadius: 'var(--md-sys-shape-corner-small)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    fontSize: 'var(--md-sys-typescale-label-large-size)',
    fontWeight: 'var(--md-sys-typescale-weight-medium)',
    letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background-color var(--md-sys-motion-duration-short3), border-color var(--md-sys-motion-duration-short3)',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    background: isSelected ? 'var(--md-sys-color-secondary-container)' : elevated ? 'var(--md-sys-color-surface-container-low)' : 'transparent',
    color: isSelected ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)',
    border: isSelected || elevated ? 'none' : '1px solid var(--md-sys-color-outline)',
    boxShadow: elevated ? 'var(--md-sys-elevation-1)' : 'none',
    opacity: disabled ? 0.38 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "button",
    "aria-pressed": isSelected,
    onClick: onClick,
    style: base
  }, rest), isSelected && type === 'filter' && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '18px'
    },
    "aria-hidden": "true"
  }, "check"), !isSelected && avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      marginLeft: '-4px',
      objectFit: 'cover'
    }
  }), !isSelected && !avatar && icon && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    style: {
      fontSize: '18px',
      color: type === 'assist' ? 'var(--md-sys-color-primary)' : 'inherit'
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("span", null, label), removable && /*#__PURE__*/React.createElement("span", {
    className: "m3-icon",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      fontSize: '18px',
      cursor: 'pointer',
      marginRight: '-4px'
    },
    "aria-hidden": "true"
  }, "close"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Chip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
/* Material 3 marketing UI kit — page sections.
   Composes design-system primitives from window.Material3DesignSystem_fd173f.
   Each section is attached to window for the host index.html to use. */
(function () {
  const M3 = window.Material3DesignSystem_fd173f || {};
  const {
    Button,
    IconButton,
    Card,
    Chip,
    TopAppBar,
    ListItem,
    Divider,
    TextField
  } = M3;

  /* ---------- Top navigation ---------- */
  function SiteHeader({
    onCta
  }) {
    const links = ['커리큘럼', '강사 소개', '수강 후기', '요금'];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        height: '64px',
        paddingInline: '32px',
        background: 'color-mix(in srgb, var(--md-sys-color-surface) 86%, transparent)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--md-sys-color-outline-variant)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "m3-icon",
      "data-filled": "true",
      style: {
        fontSize: '28px',
        color: 'var(--md-sys-color-primary)'
      }
    }, "brush"), /*#__PURE__*/React.createElement("span", {
      className: "md-typescale-title-large",
      style: {
        fontWeight: 500,
        color: 'var(--md-sys-color-on-surface)'
      }
    }, "M3 \uD074\uB798\uC2A4")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: '4px',
        marginLeft: '16px'
      }
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      style: {
        padding: '8px 12px',
        borderRadius: '999px',
        textDecoration: 'none',
        color: 'var(--md-sys-color-on-surface-variant)',
        fontFamily: 'var(--md-sys-typescale-font-plain)',
        fontSize: 'var(--md-sys-typescale-label-large-size)',
        fontWeight: 500
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text"
    }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(Button, {
      variant: "filled",
      icon: "play_arrow",
      onClick: onCta
    }, "\uC218\uAC15 \uC2E0\uCCAD")));
  }

  /* ---------- Hero ---------- */
  function Hero({
    onCta
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '48px',
        alignItems: 'center',
        padding: '72px 32px',
        maxWidth: '1120px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Chip, {
      type: "assist",
      icon: "auto_awesome",
      label: "2026 \uAC1C\uC815\uD310 \xB7 Material You"
    }), /*#__PURE__*/React.createElement("h1", {
      className: "md-typescale-display-medium",
      style: {
        margin: '20px 0 0',
        color: 'var(--md-sys-color-on-surface)',
        letterSpacing: '-0.5px'
      }
    }, "\uBA38\uD2F0\uB9AC\uC5BC \uB514\uC790\uC778 3,", /*#__PURE__*/React.createElement("br", null), "\uCC98\uC74C\uBD80\uD130 \uC81C\uB300\uB85C"), /*#__PURE__*/React.createElement("p", {
      className: "md-typescale-body-large",
      style: {
        margin: '20px 0 0',
        color: 'var(--md-sys-color-on-surface-variant)',
        maxWidth: '46ch'
      }
    }, "\uD1A0\uD070\xB7\uC0C9\uC0C1 \uC2DC\uC2A4\uD15C\xB7\uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uBD80\uD130 \uC2E4\uC804 \uCEF4\uD3EC\uB10C\uD2B8\uAE4C\uC9C0. \uAD6C\uAE00\uC758 \uC624\uD508 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 8\uC8FC \uB9CC\uC5D0 \uB0B4 \uAC83\uC73C\uB85C \uB9CC\uB4DC\uB294 \uC628\uB77C\uC778 \uAC15\uC758\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px',
        marginTop: '32px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "filled",
      icon: "play_arrow",
      onClick: onCta
    }, "\uC9C0\uAE08 \uC2DC\uC791\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
      variant: "outlined",
      icon: "event"
    }, "\uCEE4\uB9AC\uD058\uB7FC \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '28px',
        marginTop: '40px'
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "12,400+",
      label: "\uC218\uAC15\uC0DD"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "4.9",
      label: "\uD3C9\uADE0 \uBCC4\uC810"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "8\uC8FC",
      label: "\uC644\uC131 \uACFC\uC815"
    }))), /*#__PURE__*/React.createElement(HeroArt, null));
  }
  function Stat({
    value,
    label
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "md-typescale-headline-small",
      style: {
        color: 'var(--md-sys-color-primary)',
        fontWeight: 500
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      className: "md-typescale-body-medium",
      style: {
        color: 'var(--md-sys-color-on-surface-variant)'
      }
    }, label));
  }
  function HeroArt() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '380px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "elevated",
      style: {
        position: 'absolute',
        top: '20px',
        left: '0',
        width: '230px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '96px',
        background: 'var(--md-sys-color-primary-container)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "md-typescale-title-medium",
      style: {
        color: 'var(--md-sys-color-on-surface)'
      }
    }, "\uC0C9\uC0C1 \uC2DC\uC2A4\uD15C"), /*#__PURE__*/React.createElement("div", {
      className: "md-typescale-body-small",
      style: {
        color: 'var(--md-sys-color-on-surface-variant)',
        marginTop: '4px'
      }
    }, "Tonal palette & roles"))), /*#__PURE__*/React.createElement(Card, {
      variant: "elevated",
      style: {
        position: 'absolute',
        top: '120px',
        right: '0',
        width: '230px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '96px',
        background: 'var(--md-sys-color-tertiary-container)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "md-typescale-title-medium",
      style: {
        color: 'var(--md-sys-color-on-surface)'
      }
    }, "\uCEF4\uD3EC\uB10C\uD2B8 \uC2E4\uC2B5"), /*#__PURE__*/React.createElement("div", {
      className: "md-typescale-body-small",
      style: {
        color: 'var(--md-sys-color-on-surface-variant)',
        marginTop: '4px'
      }
    }, "22\uAC1C \uD575\uC2EC \uCEF4\uD3EC\uB10C\uD2B8"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '0',
        left: '40px',
        display: 'flex',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      type: "suggestion",
      label: "Figma"
    }), /*#__PURE__*/React.createElement(Chip, {
      type: "suggestion",
      label: "React"
    }), /*#__PURE__*/React.createElement(Chip, {
      type: "suggestion",
      label: "CSS \uD1A0\uD070"
    })));
  }

  /* ---------- Features ---------- */
  function Features() {
    const items = [{
      icon: 'palette',
      title: '다이내믹 컬러',
      body: '시드 색상에서 톤 팔레트와 시스템 역할을 생성하는 원리를 익힙니다.'
    }, {
      icon: 'text_fields',
      title: '타입 스케일',
      body: 'Display부터 Label까지 15단계 타이포그래피를 실무에 맞게 적용합니다.'
    }, {
      icon: 'widgets',
      title: '컴포넌트 해부',
      body: '버튼·카드·내비게이션 등 핵심 컴포넌트의 구조와 상태를 분해합니다.'
    }, {
      icon: 'dark_mode',
      title: '라이트 & 다크',
      body: '하나의 토큰 세트로 두 테마를 매끄럽게 전환하는 방법을 배웁니다.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px 32px',
        background: 'var(--md-sys-color-surface-container-low)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1120px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "md-typescale-headline-medium",
      style: {
        margin: 0,
        color: 'var(--md-sys-color-on-surface)',
        textAlign: 'center'
      }
    }, "\uC774 \uAC15\uC758\uC5D0\uC11C \uBC30\uC6B0\uB294 \uAC83"), /*#__PURE__*/React.createElement("p", {
      className: "md-typescale-body-large",
      style: {
        margin: '12px auto 40px',
        color: 'var(--md-sys-color-on-surface-variant)',
        textAlign: 'center',
        maxWidth: '52ch'
      }
    }, "\uC774\uB860\uACFC \uC2E4\uC2B5\uC744 \uADE0\uD615 \uC788\uAC8C. \uB9E4 \uC8FC\uCC28 \uC2E4\uC81C \uD654\uBA74\uC744 \uB9CC\uB4E4\uBA70 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uCCB4\uB4DD\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px'
      }
    }, items.map(it => /*#__PURE__*/React.createElement(Card, {
      key: it.title,
      variant: "filled",
      interactive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "m3-icon",
      "data-filled": "true",
      style: {
        fontSize: '32px',
        color: 'var(--md-sys-color-primary)'
      }
    }, it.icon), /*#__PURE__*/React.createElement("div", {
      className: "md-typescale-title-large",
      style: {
        marginTop: '16px',
        color: 'var(--md-sys-color-on-surface)'
      }
    }, it.title), /*#__PURE__*/React.createElement("p", {
      className: "md-typescale-body-medium",
      style: {
        marginTop: '8px',
        color: 'var(--md-sys-color-on-surface-variant)'
      }
    }, it.body)))))));
  }

  /* ---------- Curriculum ---------- */
  function Curriculum() {
    const weeks = [{
      n: '01',
      t: '디자인 토큰 입문',
      d: '레퍼런스 vs 시스템 토큰, 명명 규칙'
    }, {
      n: '02',
      t: '다이내믹 컬러',
      d: '톤 팔레트 생성과 색상 역할 매핑'
    }, {
      n: '03',
      t: '타이포그래피',
      d: '타입 스케일과 한글 폰트 페어링'
    }, {
      n: '04',
      t: 'Shape & Elevation',
      d: '코너 반경, 그림자, 표면 톤'
    }, {
      n: '05',
      t: '핵심 컴포넌트',
      d: '버튼·필드·칩의 상태 설계'
    }, {
      n: '06',
      t: '내비게이션 패턴',
      d: '앱 바, 내비게이션 바, 탭'
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px 32px',
        maxWidth: '880px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "md-typescale-headline-medium",
      style: {
        margin: '0 0 24px',
        color: 'var(--md-sys-color-on-surface)'
      }
    }, "\uCEE4\uB9AC\uD058\uB7FC"), /*#__PURE__*/React.createElement(Card, {
      variant: "outlined"
    }, weeks.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: w.n
    }, /*#__PURE__*/React.createElement(ListItem, {
      interactive: true,
      leadingIcon: "play_circle",
      overline: `WEEK ${w.n}`,
      headline: w.t,
      supportingText: w.d,
      trailingIcon: "chevron_right"
    }), i < weeks.length - 1 && /*#__PURE__*/React.createElement(Divider, {
      inset: true
    })))));
  }

  /* ---------- Pricing CTA ---------- */
  function PricingCta({
    onCta
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '24px 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1120px',
        margin: '0 auto',
        borderRadius: 'var(--md-sys-shape-corner-extra-large)',
        background: 'var(--md-sys-color-primary-container)',
        padding: '56px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '32px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "md-typescale-headline-large",
      style: {
        margin: 0,
        color: 'var(--md-sys-color-on-primary-container)'
      }
    }, "\uC624\uB298 \uC2DC\uC791\uD558\uBA74 \uD3C9\uC0DD \uC18C\uC7A5"), /*#__PURE__*/React.createElement("p", {
      className: "md-typescale-body-large",
      style: {
        margin: '12px 0 0',
        color: 'var(--md-sys-color-on-primary-container)',
        opacity: 0.85
      }
    }, "8\uC8FC \uACFC\uC815 + \uBAA8\uB4E0 \uAC15\uC758 \uC790\uB8CC + \uC218\uB8CC\uC99D. 30\uC77C \uD658\uBD88 \uBCF4\uC7A5."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '12px',
        marginTop: '24px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "md-typescale-display-small",
      style: {
        color: 'var(--md-sys-color-on-primary-container)',
        fontWeight: 500
      }
    }, "\u20A9149,000"), /*#__PURE__*/React.createElement("span", {
      className: "md-typescale-title-medium",
      style: {
        color: 'var(--md-sys-color-on-primary-container)',
        opacity: 0.6,
        textDecoration: 'line-through'
      }
    }, "\u20A9249,000"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "filled",
      icon: "shopping_cart",
      onClick: onCta
    }, "\uC218\uAC15 \uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      icon: "play_arrow"
    }, "\uBBF8\uB9AC\uBCF4\uAE30 \uAC15\uC758"))));
  }

  /* ---------- Footer ---------- */
  function SiteFooter() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--md-sys-color-surface-container)',
        padding: '40px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1120px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "m3-icon",
      "data-filled": "true",
      style: {
        fontSize: '24px',
        color: 'var(--md-sys-color-primary)'
      }
    }, "brush"), /*#__PURE__*/React.createElement("span", {
      className: "md-typescale-title-medium",
      style: {
        color: 'var(--md-sys-color-on-surface)'
      }
    }, "M3 \uD074\uB798\uC2A4"), /*#__PURE__*/React.createElement("span", {
      className: "md-typescale-body-medium",
      style: {
        color: 'var(--md-sys-color-on-surface-variant)',
        marginLeft: 'auto'
      }
    }, "\xA9 2026 Material 3 \uB9C8\uC2A4\uD130\uD074\uB798\uC2A4"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "mail",
      ariaLabel: "\uC774\uBA54\uC77C"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "public",
      ariaLabel: "\uC6F9\uC0AC\uC774\uD2B8"
    }))));
  }
  window.MarketingSections = {
    SiteHeader,
    Hero,
    Features,
    Curriculum,
    PricingCta,
    SiteFooter
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressIndicator = __ds_scope.ProgressIndicator;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.SegmentedButton = __ds_scope.SegmentedButton;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.NavigationBar = __ds_scope.NavigationBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopAppBar = __ds_scope.TopAppBar;

__ds_ns.Chip = __ds_scope.Chip;

})();
