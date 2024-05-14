function sleep() {
    const ms = Math.floor(Math.random() * (8000 - 1000 + 1) + 1000);
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function getLogHistory() {
    const data = [
        { text: "Contact New", link_param: "https://www.youtube.com"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
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
        text.classList.add('linkHistory');
        logContainer.appendChild(text);
    }
}

window.onload = async () => {
    const history = await getLogHistory();
    renderHistory(history);

    const metric = await getKeyMetrics();
    renderKeyMetrics(metric);

    const shortcuts = await getShortcuts()
    renderShortcuts(shortcuts)
};

// Tabs (header)
async function getTabs(){
    const data = [
        { 'id': 'xxx-yyy', 'text': 'Dashboard01', 'link_param': 'google'}
    ]
    sleep()
    return data
}

// Indicadores
async function getKeyMetrics(){
    const dataMetric = [
        { 'id': 'xxx-yyy', 'text': 'Pendências de aprovação', 'bgcolor': '#FF5C00', 'link_param': 'google', 'qty': 10},
        { 'id': 'xxx-yyy', 'text': 'Rascunho', 'bgcolor': '#0081FF', 'link_param': 'Github', 'qty': 0},

    ]
    sleep()
    return dataMetric
}

function renderKeyMetrics(metric){
    for (let index = 0; index < metric.length; index += 1){
        const currentItemMetric = metric[index];
        const linkMetric = document.createElement('a');
        linkMetric.id = currentItemMetric.id;
        linkMetric.href = currentItemMetric.link_param;

        const textNumberNotification = document.createElement('span')
        textNumberNotification.classList.add('numberSpan')
        textNumberNotification.innerHTML = currentItemMetric.qty
        textNumberNotification.style.background = currentItemMetric.bgcolor;
        linkMetric.appendChild(textNumberNotification)

        const textMetric = document.createElement('span')
        textMetric.classList.add('textSpan')
        textMetric.innerHTML = currentItemMetric.text;
        linkMetric.appendChild(textMetric);

        const imgMetric = document.createElement('img');
        imgMetric.src = './assets/arrowRight.svg';
        imgMetric.alt = 'Imagem do botão de métrica';
        linkMetric.appendChild(imgMetric);

        metricContainer.appendChild(linkMetric);
    }
}

// Atalhos
async function getShortcuts(){
    const data = [
        { 'id': 'xxx-yyy', 'icon': './assets/clients.svg', 'text': 'Clientes', 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'position': 1},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  mudanças GMUD e mais coisas e não foi ainda', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 1},
    ]
    sleep()
    return data
}


function renderShortcuts(short) {
    for (let index = 0; index < short.length; index += 1) {
        const currentItemShort = short[index];
        const shortcut = document.createElement('a');
        shortcut.classList.add('boxCont');
        shortcut.id = currentItemShort.id;
        shortcut.href = currentItemShort.link_param;

        const divImgShort = document.createElement('div');
        divImgShort.classList.add('boxImg');

        // Criar o elemento span para o fundo colorido
        const spanBg = document.createElement('span');
        spanBg.style.backgroundColor = currentItemShort.bgcolor;
        spanBg.classList.add('bgSpan');

        // Criar o elemento para o ícone
        const imgShort = document.createElement('img');
        imgShort.classList.add('bgImgFundo');
        imgShort.src = currentItemShort.icon;
        imgShort.alt = currentItemShort.text;

        divImgShort.appendChild(spanBg); // Adiciona o fundo colorido antes da imagem
        divImgShort.appendChild(imgShort); // Adiciona a imagem

        shortcut.appendChild(divImgShort);

        const textShort = document.createElement('p');
        textShort.innerHTML = currentItemShort.text;

        shortcut.appendChild(textShort);

        circulatesContainer.appendChild(shortcut);
    }
}


// Opções visitadas recentemente
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