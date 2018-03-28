const homeUrl = 'https://hn.algolia.com';
//https://.bakesaleforgoodcom'
export default {
    async fetchInitialDeals(){
        try {
            const response = await fetch(homeUrl + '/api/v1/items/1');
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
}