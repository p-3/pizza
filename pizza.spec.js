import { t, Selector} from 'testcafe';

fixture `P3s pizza`
    .page `https://pizza.p-3.se/`;

test('should add user details', async t => {
    const nameInput = await Selector('input[formcontrolname=name]');
    const mailInput = await Selector('input[formcontrolname=email]');
    const mailConfirmInput = await Selector('input[formcontrolname=confirm]');
    const addressInput = await Selector('input[formcontrolname=address]');
    const postCodeInput = await Selector('input[formcontrolname=postcode]');
    const phoneNumberInput = await Selector('input[formcontrolname=phone]');

    await t
        .typeText(nameInput,'P-3')
        .typeText(mailInput,'pizza@p-3.se')
        .typeText(mailConfirmInput,'pizza@p-3.se')
        .typeText(addressInput,'testgatan 123')
        .typeText(postCodeInput,'12 234 Stockholm')
        .typeText(phoneNumberInput,'000 123 45 67')
});

test('should select large pizza', async t => {
    await t
        .wait(10);
});

test('should add toppings', async t => {
    await t
        .wait(10);
});

test('should cost 9.99 dollar', async t => {
    await t
        .wait(10);
});

test('should show warning if mail is missing', async t => {
    await t
        .wait(10);
});


test('should show warning on if mail not match', async t => {
    await t
        .wait(10);
});


test('should have disabled submit button', async t => {
    await t
        .wait(10);
});

test('should change mouse icon on hover', async t => {
    await t
        .wait(10);
});

test('should add second pizza', async t => {
    await t
        .wait(10);
});


test('should switch to first pizza', async t => {
    await t
        .wait(10);
});


test('should delete second pizza', async t => {
    await t
        .wait(10);
});

test('should hide pizza on accordian click', async t => {
    await t
        .wait(10);
});

test('should not have any errors in console', async t => {
    await t
        .wait(10);
});

test('should compare screenshots', async t => {
    await t
        .wait(10);
});