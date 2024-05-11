function sleep() {
    const ms = Math.floor(Math.random() * (8000 - 1000 + 1) + 1000);
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getLogHistory() {
    const data = [
        { text: "Clique no link agoraaaaaaaaaaaa", link_param: "https://www.youtube.com"},
    ];
    await sleep();
    return data;
}

function renderHistory(history) {
    for (let index = 0; index < history.length; index += 1) {
        const currentItem = history[index];
        const text = document.createElement('a');
        text.innerHTML = currentItem.text;
        text.href = currentItem.link_param;
        logContainer.appendChild(text);
    }
}

window.onload = async () => {
    const history = await getLogHistory();
    renderHistory(history);
};



async function getTabs(){
    const data = [
        { 'id': 'xxx-yyy', 'text': 'Dashboard01', 'link_param': 'google'}
    ]
    sleep()
    return data
}
 
async function getKeyMetrics(){
    const data = [
        { 'id': 'xxx-yyy', 'text': 'Dashboard01', 'bgcolor': 'blue', 'link_param': 'google', 'qty': 1}
    ]
    sleep()
    return data
}

async function getShortcuts(){
    const data = [
        { 'id': 'xxx-yyy', 'icon': 'mdi-xxx', 'text': 'Dashboard01', 'icon_color': 'red', 'bgcolor': 'blue', 'link_param': 'google', 'position': 1}
    ]
    sleep()
    return data
}

async function getRecentFeaturesVisits(){
    const data = [
        { 'id': 'xxx-yyy', 'icon': 'mdi-xxx', 'text': 'Dashboard01', 'icon_color': 'red', 'bgcolor': 'blue', 'link_param': 'google', 'date': '10/01'}
    ]
    sleep()
    return data
}

async function getMyBoards(){
    const data = [
        { 'id': 'xxx-yyy', 'icon': 'mdi-xxx', 'text': 'Dashboard01', 'icon_color': 'red', 'bgcolor': 'blue', 'link_param': 'google'}
    ]
    sleep()
    return data
}

async function getSearchShortcuts(){
    const data = [
        { 'id': 'xxx-yyy', 'text': 'Dashboard01', 'itemchecked': true, 'disableToCheck': false, 'subitems': [
            {
                'id': 'xxx-yyy',
                'text': 'Dashboard01',
                'itemchecked': false,
                'disableToCheck': false,
                'subitems': [

                ]
            }
        ]}
    ]
    sleep()
    return data
}

async function getAddShortcut(){
    const data = [
        { 'id': 'xxx-yyy'}
    ]
    sleep()
    return data
}

async function getRemoveShortcut(){
    const data = [
        { 'id': 'xxx-yyy'}
    ]
    sleep()
    return data
}
 
async function getSavesShortcutSorting(){
    const data = [
        { 'id': 'xxx-yyy', 'position': 1}
    ]
    sleep()
    return data
}