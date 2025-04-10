"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDateTextWebElement = void 0;
const InputDateTextWebElementBase_1 = require("./InputDateTextWebElementBase");
const selenium_webdriver_1 = require("selenium-webdriver");
/**
 * The component WebElement for [oj-c-input-date-text](../../../oj-c/docs/oj.InputDateText.html).
 * Do not instantiate this class directly, instead, use
 * [findInputDateText](../functions/findInputDateText.html).
 */
class InputDateTextWebElement extends InputDateTextWebElementBase_1.InputDateTextWebElementBase {
    /**
     * Sets the value of the "value" property of the input component.
     * @param value The value to set for the <code>value</code>
     */
    async changeValue(value) {
        const readonly = await this.getReadonly();
        const disabled = await this.getDisabled();
        if (!(disabled || readonly)) {
            await this.getDriver().executeScript((el) => el.focus(), this);
            await this.whenBusyContextReady();
            // Note that using element.clear() will blur, which commits the change and calls
            // onValueChanged, which we don't want until we're done updating the value.
            // Instead do select-all, then delete to clear the value.
            const input = await this.findElement(selenium_webdriver_1.By.css('input'));
            const currValue = await this.getRawValue();
            if (currValue) {
                const platform = await (await this.getDriver().getCapabilities()).getPlatform();
                await input.sendKeys(platform === 'mac' ? selenium_webdriver_1.Key.COMMAND : selenium_webdriver_1.Key.CONTROL, 'a');
                await input.sendKeys(selenium_webdriver_1.Key.DELETE);
            }
            value && (await input.sendKeys(value));
            return this.getDriver().executeScript((el) => el.validate(), this);
        }
    }
    /**
     * Clears the value of the component.
     */
    clear() {
        return this.changeValue(null);
    }
}
exports.InputDateTextWebElement = InputDateTextWebElement;
//# sourceMappingURL=InputDateTextWebElement.js.map