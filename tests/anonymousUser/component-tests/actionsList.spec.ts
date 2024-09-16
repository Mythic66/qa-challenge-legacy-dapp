import { test, expect } from '@playwright/test';
import AnonymousUserActionList from '../../../pages/action-list-page';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('button', { name: 'Connect Wallet' })).toBeVisible();
});


test('Page Title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Home/);
  });

test('New Action Button', async ({ page }) => {

// Test cases are created with methods imported from page objects and the methods are named after steps that are taken within the test so each method is a step and verification.

    const actionlist = new AnonymousUserActionList(page)
    await actionlist.checkActionListNewActionDisabled()
  });

test('Check if action list is displayed and it has 10 elements', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.checkActionListDisplayed()
  await actionlist.checkActionListItemNumbers()

});

test('Check if list elements are rendered', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.checkActionListTitle()
  await actionlist.checkSortFilter()
  await actionlist.checkTypeFilter()
  await actionlist.checkActionListLoadMoreButton()

});

test('Check action list item title and type - Payment', async ({ page }) => {
  
  // All action list type fitlering is broken because the list are not filtering after the filtering method is selected via the automatic process even with the manual one there are issues

  // The workaround found is by making all the action list available so that it can contain all of the types.
  
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('PAYMENT', 'Pay', 'Payment');

});

test('Check action list item title and type - MINT', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('MINT', 'Mint' , 'Mint');

});

test('Check action list item title and type - TRANSFER', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('TRANSFER', 'Move', 'Transfer');

});

test('Check action list item title and type - REPUTATION', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('REPUTATION', 'Awarded', 'Reputation');

});

test('Check action list item title and type - UPGRADE', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('UPGRADE', 'Upgrade', 'Upgrade');

});

test('Check action list item title and type - DETAILS', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('DETAILS', 'Details' , 'Details');

});

test('Check action list item title and type - ADDRESS', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('ADDRESS', 'Address' , 'Address');

});

test('Check action list item title and type - TEAM', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('TEAM', 'New team' , 'Teams' );

});

test('Check action list item title and type - GENERIC', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('GENERIC', 'Generic' , 'Generic' );

});

test('Check action list item title and type - PERMISSIONS', async ({ page }) => {

  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkListItemTitleAndType('PERMISSIONS', 'Assign' , 'Permissions' );

});

test('Check action list item Sorting Ascending', async ({ page }) => {
// sorting does not work with the runner just like the type filtering
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.checkListItemSortingAscending('Oldest');

});

test('Check action list item Sorting Descending', async ({ page }) => {
// sorting does not work with the runner just like the type filtering
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.checkListItemSortingDescending('newest');

});


test('Click on Load more', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();

});

test('Click on Load more until the button is hidden', async ({ page }) => {
  const actionlist = new AnonymousUserActionList(page)
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.clickLoadMoreButton();
  await actionlist.checkLoadMoreButtonDissapeared();


});






