function sleep() {
    const ms = Math.floor(Math.random() * (1000 - 1000 + 1) + 1000);
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function getLogHistory() {
    const data = [
        { text: "Contact New", link_param: "https://www.youtube.com"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "User Password", link_param: "https://www.example.com/link2"},
        {text: "último", link_param: "https://www.example.com/link2"},
    ];
    await sleep();
    return data;
}

function renderHistory(history) {
    const swiperWrapper = document.querySelector('.swiper-wrapper1'); // Seleciona o elemento com a classe "swiper-wrapper"
    
    for (let index = 0; index < history.length; index += 1) {
        const currentItem = history[index];
        const slide = document.createElement('div'); // Cria um novo elemento <div> para ser um slide
        slide.classList.add('swiper-slide'); // Adiciona a classe "swiper-slide" ao slide

        const link = document.createElement('a'); // Cria um novo elemento <a> para o link
        link.innerHTML = currentItem.text;
        link.href = currentItem.link_param;
        link.classList.add('linkHistory', 'skeleton');

        slide.appendChild(link); // Adiciona o link dentro do slide
        swiperWrapper.appendChild(slide); // Adiciona o slide dentro do swiper-wrapper
    }
}

window.onload = async () => {
    const history = await getLogHistory();
    renderHistory(history);

    const metric = await getKeyMetrics();
    renderKeyMetrics(metric);

    const shortcuts = await getShortcuts()
    renderShortcuts(shortcuts)

    const visits = await getRecentFeaturesVisits()
    renderRecentFeaturesVisits(visits)

    const boards = await getMyBoards()
    renderMyBoards(boards)
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
        textNumberNotification.classList.add('numberSpan', 'skeletonSpanMetrics')
        textNumberNotification.innerHTML = currentItemMetric.qty
        textNumberNotification.style.background = currentItemMetric.bgcolor;
        linkMetric.appendChild(textNumberNotification)

        const textMetric = document.createElement('span')
        textMetric.classList.add('textSpan', 'skeletonSpanMetricsText')
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
        { 'id': 'xxx-yyy', 'icon': './assets/plus.svg', 'text': 'Adicionar atalho', 'icon_color': '#20CA41', 'bgcolor': '#fff', 'link_param': 'google', 'position': 1}
    ]
    sleep()
    return data
}


// Selecione a div com a classe contentBottom
const contentBottom = document.querySelector('.contentBottom');

// Defina a função renderShortcuts
function renderShortcuts(short) {
    for (let index = 0; index < short.length; index += 1) {
        const currentItemShort = short[index];
        const shortcut = document.createElement('a');
        shortcut.classList.add('boxCont');
        shortcut.id = currentItemShort.id;
        shortcut.href = currentItemShort.link_param;

        const divImgShort = document.createElement('div');
        divImgShort.classList.add('boxImg', 'skeletonAtalhos');

        const spanBg = document.createElement('span');
        spanBg.style.backgroundColor = currentItemShort.bgcolor;
        spanBg.classList.add('bgSpan');

        const imgShort = document.createElement('img');
        imgShort.classList.add('bgImgFundo');
        imgShort.src = currentItemShort.icon;
        imgShort.alt = currentItemShort.text;

        divImgShort.appendChild(spanBg);
        divImgShort.appendChild(imgShort);

        shortcut.appendChild(divImgShort);

        const textShort = document.createElement('p');
        textShort.classList.add('skeletonAtalhosText');
        textShort.innerHTML = currentItemShort.text;

        shortcut.appendChild(textShort);

        // Adicione o atalho criado dentro da div contentBottom
        contentBottom.appendChild(shortcut);
    }
}


// Opções visitadas recentemente
async function getRecentFeaturesVisits(){
    const data = [
        { 'id': 'xxx-yyy', 'icon': './assets/clients.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clients.svg', 'text': 'Solicitação de  solicitação', 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clients.svg', 'text': 'Solicitação de  solicitação', 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clients.svg', 'text': 'Solicitação de  solicitação', 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'date': '10/05/2024 22:33'},
    ]
    // Adicionando cards cinzas para completar cada linha
    const maxColunas = 5; // Número máximo de colunas
    const totalCards = data.length;
    const cardsFaltantes = maxColunas - (totalCards % maxColunas);

    for (let i = 0; i < cardsFaltantes; i++) {
        data.push({ 'id': `grey-card-recent`});
    }
    sleep()
    return data
}


function renderRecentFeaturesVisits(visits) {
    const swiperWrapper = document.querySelector('.swiper-wrapper2');

    for (let index = 0; index < visits.length; index += 1) {
        const featuresVisits = visits[index];
        const slide = document.createElement('div'); // Cria um novo elemento <div> para ser um slide
        slide.classList.add('swiper-slide'); // Adiciona a classe "swiper-slide" ao slide

        const featuresVisitsCard = document.createElement('a');
        featuresVisitsCard.classList.add('boxRecent', 'skeletonRecent');
        featuresVisitsCard.id = featuresVisits.id;
        featuresVisitsCard.href = featuresVisits.link_param;

        const divimg = document.createElement('div');
        divimg.classList.add('divClients');
        divimg.style.background = featuresVisits.bgcolor;

        const imgFixar = document.createElement('img');
        imgFixar.classList.add('imgFixar');
        imgFixar.src = '../assets/fixar.svg'; 

        const img = document.createElement('img');
        img.classList.add('imgClients');
        img.src = featuresVisits.icon;

        const pDate = document.createElement('p');
        pDate.classList.add('date');
        pDate.innerHTML = featuresVisits.date;

        const ptitle = document.createElement('p');
        ptitle.classList.add('title');
        ptitle.innerHTML = featuresVisits.text;

        divimg.appendChild(img);
        divimg.appendChild(imgFixar);

        featuresVisitsCard.appendChild(divimg);
        featuresVisitsCard.appendChild(pDate);
        featuresVisitsCard.appendChild(ptitle);

        slide.appendChild(featuresVisitsCard); // Adiciona o card dentro do slide
        swiperWrapper.appendChild(slide); // Adiciona o slide dentro do swiper-wrapper específico para visitas recentes
    }
}


async function getMyBoards(){
    const data = [
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        { 'id': 'xxx-yyy', 'icon': './assets/multipleMarked.svg', 'text': 'Board de Gestão de entrada e saida', 'icon_color': '#7B51E4', 'bgcolor': '#EEE9FB', 'link_param': 'google'},
        
    ]

    // Adicionando cards cinzas para completar cada linha
    const maxColunas = 6; // Número máximo de colunas
    const totalCards = data.length;
    const cardsFaltantes = maxColunas - (totalCards % maxColunas);

    for (let i = 0; i < cardsFaltantes; i++) {
        data.push({ 'id': `grey-card`});
    }
    sleep()
    return data
}

function renderMyBoards(boards){
    for (let index = 0; index < boards.length; index += 1){
        const myBoards = boards[index];
        const myBoardsCard = document.createElement('a');
        myBoardsCard.classList.add('boxRecent', 'skeletonRecent');
        myBoardsCard.id = myBoards.id;
        myBoardsCard.href = myBoards.link_param;

        const divFixarImg = document.createElement('div'); 
        const divimg = document.createElement('div');
        divimg.classList.add('divMarked')
        divimg.style.background = myBoards.bgcolor


        const imgFixar = document.createElement('img');
        imgFixar.classList.add('imgFixar');
        imgFixar.src = '../assets/fixar.svg'; 

        const img = document.createElement('img');
        img.classList.add('imgClients');
        img.src = myBoards.icon; 

        const textBoards = document.createElement('p');
        textBoards.innerHTML = myBoards.text;

        divimg.appendChild(img);
        divFixarImg.appendChild(imgFixar);

        myBoardsCard.appendChild(divimg)
        myBoardsCard.appendChild(divFixarImg)
        myBoardsCard.appendChild(textBoards)
        
        tasksContainer.appendChild(myBoardsCard)
    }
}

function criarCardCinza() {
    const cardCinza = document.createElement('div');
    cardCinza.classList.add('boxRecent');
    cardCinza.style.background = '#ccc'; // Cor cinza de fundo
    return cardCinza;
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