import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as mod from '../dist/littlejs.esm.js';

// Headless: we can't dispatch touch events or run the renderer, but we can
// pin the public surface of the touch gamepad settings so a future refactor
// can't silently drop an export or drift a default.

test('touchGamepadFloating is exported and defaults to false', () =>
{
    assert.equal(mod.touchGamepadFloating, false);
});

test('setTouchGamepadFloating toggles the setting', () =>
{
    assert.equal(typeof mod.setTouchGamepadFloating, 'function');
    mod.setTouchGamepadFloating(true);
    assert.equal(mod.touchGamepadFloating, true);
    mod.setTouchGamepadFloating(false);
    assert.equal(mod.touchGamepadFloating, false);
});
