import { r as registerInstance, k as createEvent, o as Build, h, j as Host, i as getElement } from './index-136245cb.js';
import { j as closeCircle, k as closeSharp } from './index-c866a147.js';
import { g as getIonMode } from './ionic-global-c4648f25.js';
import { h as debounceEvent, i as inheritAriaAttributes, c as inheritAttributes, j as findItemLabel } from './helpers-9b6adafa.js';
import { c as createColorClasses } from './theme-7ef00c83.js';

const inputIosCss = ".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:flex;position:relative;flex:1;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios:not(.cloned-input){opacity:0.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.cloned-input.sc-ion-input-ios:disabled{opacity:1}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:flex;align-items:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;appearance:none}.input-clear-icon.sc-ion-input-ios ion-icon.sc-ion-input-ios{color:var(--ion-color-step-600, #666666)}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-ios-h{transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios ion-icon.sc-ion-input-ios{width:18px;height:18px}";

const inputMdCss = ".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:flex;position:relative;flex:1;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md:not(.cloned-input){opacity:0.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.cloned-input.sc-ion-input-md:disabled{opacity:1}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:flex;align-items:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;appearance:none}.input-clear-icon.sc-ion-input-md ion-icon.sc-ion-input-md{color:var(--ion-color-step-600, #666666)}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h input.sc-ion-input-md,.has-focus.sc-ion-input-md-h a.sc-ion-input-md,.has-focus.sc-ion-input-md-h button.sc-ion-input-md{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-md-h{transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-stacked.sc-ion-input-md-h,.item-label-stacked .sc-ion-input-md-h,.item-label-floating.sc-ion-input-md-h,.item-label-floating .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md ion-icon.sc-ion-input-md{width:22px;height:22px}";

const Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.inputId = `ion-input-${inputIds++}`;
    this.didBlurAfterEdit = false;
    this.inheritedAttributes = {};
    this.isComposing = false;
    /**
     * This is required for a WebKit bug which requires us to
     * blur and focus an input to properly focus the input in
     * an item with delegatesFocus. It will no longer be needed
     * with iOS 14.
     *
     * @internal
     */
    this.fireFocusEvents = true;
    this.hasFocus = false;
    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     * Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.
     */
    this.autocapitalize = 'off';
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    this.autocomplete = 'off';
    /**
     * Whether auto correction should be enabled when the user is entering/editing the text value.
     */
    this.autocorrect = 'off';
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    this.autofocus = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
     */
    this.debounce = 0;
    /**
     * If `true`, the user cannot interact with the input.
     */
    this.disabled = false;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    this.required = false;
    /**
     * If `true`, the element will have its spelling and grammar checked.
     */
    this.spellcheck = false;
    /**
     * The type of control to display. The default type is text.
     */
    this.type = 'text';
    /**
     * The value of the input.
     */
    this.value = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.ionInput.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.focusChanged();
      this.emitStyle();
      if (this.fireFocusEvents) {
        this.ionBlur.emit(ev);
      }
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.focusChanged();
      this.emitStyle();
      if (this.fireFocusEvents) {
        this.ionFocus.emit(ev);
      }
    };
    this.onKeydown = (ev) => {
      if (this.shouldClearOnEdit()) {
        // Did the input value change after it was blurred and edited?
        // Do not clear if user is hitting Enter to submit form
        if (this.didBlurAfterEdit && this.hasValue() && ev.key !== 'Enter') {
          // Clear the input
          this.clearTextInput();
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
      }
    };
    this.onCompositionStart = () => {
      this.isComposing = true;
    };
    this.onCompositionEnd = () => {
      this.isComposing = false;
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  debounceChanged() {
    this.ionChange = debounceEvent(this.ionChange, this.debounce);
  }
  disabledChanged() {
    this.emitStyle();
  }
  /**
   * Update the item classes when the placeholder changes
   */
  placeholderChanged() {
    this.emitStyle();
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value && !this.isComposing) {
      /**
       * Assigning the native input's value on attribute
       * value change, allows `ionInput` implementations
       * to override the control's value.
       *
       * Used for patterns such as input trimming (removing whitespace),
       * or input masking.
       */
      nativeInput.value = value;
    }
    this.emitStyle();
    this.ionChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, ['tabindex', 'title', 'data-form-type']));
  }
  connectedCallback() {
    this.emitStyle();
    this.debounceChanged();
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
        detail: this.el,
      }));
    }
  }
  componentDidLoad() {
    const nativeInput = this.nativeInput;
    if (nativeInput) {
      // TODO: FW-729 Update to JSX bindings when Stencil resolves bug with:
      // https://github.com/ionic-team/stencil/issues/3235
      nativeInput.addEventListener('compositionstart', this.onCompositionStart);
      nativeInput.addEventListener('compositionend', this.onCompositionEnd);
    }
  }
  disconnectedCallback() {
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
        detail: this.el,
      }));
    }
    const nativeInput = this.nativeInput;
    if (nativeInput) {
      nativeInput.removeEventListener('compositionstart', this.onCompositionStart);
      nativeInput.removeEventListener('compositionEnd', this.onCompositionEnd);
    }
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  shouldClearOnEdit() {
    const { type, clearOnEdit } = this;
    return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      input: true,
      'has-placeholder': this.placeholder !== undefined,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'interactive-disabled': this.disabled,
    });
  }
  focusChanged() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (!this.hasFocus && this.shouldClearOnEdit() && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const mode = getIonMode(this);
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: createColorClasses(this.color, {
        [mode]: true,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
      }) }, h("input", Object.assign({ class: "native-input", ref: (input) => (this.nativeInput = input), "aria-labelledby": label ? labelId : null, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }, this.inheritedAttributes)), this.clearInput && !this.readonly && !this.disabled && (h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onPointerDown: (ev) => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the clear
         * button is activated.
         */
        ev.preventDefault();
      }, onClick: this.clearTextInput }, h("ion-icon", { "aria-hidden": "true", icon: mode === 'ios' ? closeCircle : closeSharp })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "disabled": ["disabledChanged"],
    "placeholder": ["placeholderChanged"],
    "value": ["valueChanged"]
  }; }
};
let inputIds = 0;
Input.style = {
  ios: inputIosCss,
  md: inputMdCss
};

export { Input as ion_input };
