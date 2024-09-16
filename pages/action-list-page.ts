import { Page , expect, Locator} from "@playwright/test";
import { Colors } from "../utils/colors";

export default class AnonymousUserActionList {
    page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async checkActionListNewActionDisabled() {
        const newaction = await this.page.getByRole('button', { name: 'New Action' });
        await expect(newaction).toBeVisible();
        await expect(newaction).toBeDisabled();
    }

    async checkActionListDisplayed() {
        const actionlist = await this.page.getByRole('list');
        await expect(actionlist).toBeInViewport();
        
    }

    async checkActionListItemNumbers() {
        const listItems = await this.page.locator('css=ul > li');
        await expect(listItems).toHaveCount(10);
    }

    async checkActionListLoadMoreButton() {
        const loadmore = await this.page.getByRole('button', { name: 'Load More' });
        await loadmore.scrollIntoViewIfNeeded();
        await expect(loadmore).toBeInViewport();
        await expect(loadmore).toBeEnabled();
        await expect(loadmore).toHaveCSS('background-color', Colors.TEAL )

    }

    async checkSortFilter() {
        const sortfilter = await this.page.getByLabel('Sort Filter');
        await sortfilter.scrollIntoViewIfNeeded();
        await expect(sortfilter).toBeInViewport();

    }

    async checkTypeFilter() {
        const typefilter = await this.page.getByLabel('Sort Filter');
        await typefilter.scrollIntoViewIfNeeded();
        await expect(typefilter).toBeInViewport();

    }

    async checkActionListTitle() {
        const listtitle = await this.page.getByLabel('Filter by Domain');
        await listtitle.scrollIntoViewIfNeeded();
        await expect(listtitle).toBeInViewport();

    }

    async checkListItemTitleAndType(actionType : string , text : string , selected : string) {
        const selectfilter = await this.page.getByLabel('Type Filter');
        await selectfilter.click();
        const option = this.page.locator(`li[title="${selected}"]`);
        await option.scrollIntoViewIfNeeded();
        await option.click();
        
        const listItems = this.page.locator(`[data-action-type="${actionType}"]`).first()
        const title = listItems.getByText(text);
        await listItems.scrollIntoViewIfNeeded();
        await expect(listItems).toBeInViewport();
        await expect(title).toContainText(text);

    }

    async chdseckListItemType() {
        const listItems = await this.page.locator('css=ul > li')
        await listItems.scrollIntoViewIfNeeded();
        await expect(listItems).toBeInViewport();

        
    }

    async clickLoadMoreButton() {
        const loadmore = await this.page.getByRole('button', { name: 'Load More' });
        await loadmore.scrollIntoViewIfNeeded();
        await expect(loadmore).toBeInViewport();
        await expect(loadmore).toBeEnabled();
        await loadmore.click();

    }

    async checkLoadMoreButtonDissapeared() {
        const loadmore = await this.page.getByRole('button', { name: 'Load More' });
        await expect(loadmore).toBeHidden();

    }

    async checkListItemSortingAscending(selected : string) {
        const selectfilter = await this.page.getByLabel('Sort Filter');
        await selectfilter.click();
        const option = this.page.locator(`li[title="${selected}"]`);
        await option.scrollIntoViewIfNeeded();
        await option.click();

        const dateElements = await this.page.locator('.date-selector').allTextContents();

        
        const dates = dateElements.map(dateString => new Date(dateString));

        
        const isSortedByOldest = dates.every((date, index) => {
         if (index === 0) return true;  
        return dates[index - 1] <= date;  
    });

        await expect(isSortedByOldest).toBeTruthy();
        

    }

    async checkListItemSortingDescending(selected : string) {
        const selectfilter = await this.page.getByLabel('Sort Filter');
        await selectfilter.click();
        const option = this.page.locator(`li[title="${selected}"]`);
        await option.scrollIntoViewIfNeeded();
        await option.click();

        const dateElements = await this.page.locator('.date-selector').allTextContents();

        
        const dates = dateElements.map(dateString => new Date(dateString));
      
        
        const isSortedByNewest = dates.every((date, index) => {
          if (index === 0) return true;  
          return dates[index - 1] >= date;  
        });
      
        
        expect(isSortedByNewest).toBeTruthy();
      };
        

    }
    



