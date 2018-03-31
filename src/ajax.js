const homeUrl = 'https://jsonplaceholder.typicode.com';
//https://.bakesaleforgoodcom'
export default {
    async fetchInitialDeals(){
        try {
            const response = await fetch(homeUrl + '/posts');
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
}