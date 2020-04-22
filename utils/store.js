const LOCAL_STORAGE_KEY = "searchHistory";

class Store { }

Store.saveHistory = (arr) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
}

Store.loadHistory = () =>JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

Store.removeAllHistory=()=>{localStorage.removeItem(LOCAL_STORAGE_KEY)}


module.exports = Store




