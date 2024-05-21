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

    return data
}

// Indicadores
async function getKeyMetrics(){
    const dataMetric = [
        { 'id': 'xxx-yyy', 'text': 'Pendências de aprovação', 'bgcolor': '#FF5C00', 'link_param': 'google', 'qty': 10},
        { 'id': 'xxx-yyy', 'text': 'Rascunho', 'bgcolor': '#0081FF', 'link_param': 'Github', 'qty': 0},

    ]

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
async function getShortcuts() {
    const storedShortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
    if (storedShortcuts.length > 0) {
        storedShortcuts.forEach(shortcut => {
            const checkbox = document.querySelector(`input[type="checkbox"]#${shortcut.id}`);
            if (checkbox) {
                checkbox.checked = shortcut.checked;
            }
        });
        return storedShortcuts;
    }
    const defaultShortcuts  = [
        // { 'id': 'item1', 'icon': './assets/clients.svg', 'text': 'Clientes', 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'position': 1, 'data-id': 'item1' },
        // { 'id': 'item2', 'icon': './assets/clientsGreen.svg', 'text': '2', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 2, 'data-id': 'item2' },
        // { 'id': 'item3', 'icon': './assets/clientsGreen.svg', 'text': '3', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 3, 'data-id': 'item3' },
        // { 'id': 'item4', 'icon': './assets/clientsGreen.svg', 'text': '4', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 4, 'data-id': 'item4' },
        // { 'id': 'item5', 'icon': './assets/clientsGreen.svg', 'text': '5', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 5, 'data-id': 'item5' },
    ];
    return defaultShortcuts ;
}

function saveShortcuts(shortcuts) {
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
}

// Selecione a div com a classe contentBottom
const contentBottom = document.getElementById('sortable-list');
let sortable = null; // Variável para armazenar a instância do SortableJS

// Defina a função renderShortcuts
async function renderShortcuts() {
    const shortcuts = await getShortcuts();
    const contentBottom = document.getElementById('sortable-list');

    shortcuts.forEach(item => {
        const shortcut = document.createElement('a');
        shortcut.classList.add('boxCont');
        shortcut.id = item.id;
        shortcut.href = item.link_param;
        shortcut.setAttribute('data-id', item['data-id']); 
        shortcut.draggable = true;

        const divImgShort = document.createElement('div');
        divImgShort.classList.add('boxImg', 'skeletonAtalhos');

        const spanBg = document.createElement('span');
        spanBg.style.backgroundColor = item.bgcolor;
        spanBg.classList.add('bgSpan');

        const imgShort = document.createElement('img');
        imgShort.classList.add('bgImgFundo');
        imgShort.src = item.icon;
        imgShort.alt = item.text;

        divImgShort.appendChild(spanBg);
        divImgShort.appendChild(imgShort);

        shortcut.appendChild(divImgShort);

        const textShort = document.createElement('p');
        textShort.classList.add('skeletonAtalhosText');
        textShort.innerHTML = item.text;

        shortcut.appendChild(textShort);

        contentBottom.appendChild(shortcut);
    });

    // Carregar a ordem dos atalhos
    loadOrder();
}

function addAddShortcutButton() {
    const addShortcut = document.createElement('a');
    addShortcut.href = '#';
    addShortcut.classList.add('boxCont', 'btnAddShortcuts');
    addShortcut.setAttribute('data-js', 'open-modal');
    
    const divImgAdd = document.createElement('div');
    divImgAdd.classList.add('boxImg', 'boxContAdd');
    
    const imgAdd = document.createElement('img');
    imgAdd.src = 'assets/plus.svg';
    imgAdd.alt = 'Imagem caixa';
    
    divImgAdd.appendChild(imgAdd);
    
    addShortcut.appendChild(divImgAdd);
    
    const textAdd = document.createElement('p');
    textAdd.classList.add('textAdd');
    textAdd.textContent = 'Adicionar atalhos';
    
    addShortcut.appendChild(textAdd);
    
    contentBottom.appendChild(addShortcut);
}


// Função para salvar a ordem no localStorage
function saveOrder() {
    const items = Array.from(contentBottom.children);
    const order = items.map(item => item.getAttribute('data-id'));
    localStorage.setItem('sortable-order', JSON.stringify(order));
}

// Função para carregar a ordem do localStorage
function loadOrder() {
    const order = JSON.parse(localStorage.getItem('sortable-order'));
    if (order) {
        order.forEach(id => {
            const item = contentBottom.querySelector(`.boxCont[data-id='${id}']`);
            if (item) {
                contentBottom.appendChild(item);
            }
        });
    }
}

// Função para inicializar o SortableJS
function enableSortable() {
    sortable = new Sortable(contentBottom, {
        animation: 150,
        onEnd: function(evt) {
            saveOrder();
        },
    });
}

// Função para desabilitar o SortableJS
function disableSortable() {
    if (sortable) {
        sortable.destroy();
        sortable = null;
    }
}

// Event listener para o checkbox
const ordenacaoCheckbox = document.getElementById('ordenacao');
ordenacaoCheckbox.addEventListener('change', function() {
    if (this.checked) {
        enableSortable();
    } else {
        disableSortable();
    }
});

// Carregar a ordem dos atalhos e renderizar os atalhos
loadOrder();


// Opções visitadas recentemente
async function getRecentFeaturesVisits(){
    const data = [
        { 'id': 'testeeee', 'icon': './assets/clients.svg', 'text': 'Solicitação de  reembolso', 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'card2', 'icon': './assets/time.svg', 'text': 'Cadastro de clientes', 'icon_color': '#20CA41', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Outras opções', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/homeGreen.svg', 'text': 'Solicitação de  mudanças GMUD 0012', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
        { 'id': 'xxx-yyy', 'icon': './assets/clientsGreen.svg', 'text': 'Solicitação com nome bem grande', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'date': '10/05/2024 22:33'},
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
    // Gera IDs únicos para cada objeto
    data.forEach((item, index) => {
        if (!item.id || item.id === 'xxx-yyy') { // Se o ID for undefined ou padrão
            item.id = `unique-id-${index}`; // Gere um ID único baseado no índice
        }
    });

    return data
}

function addShortcutFromCard(cardInfo) {
    const shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
    const newItem = {
        id: cardInfo.id,
        icon: cardInfo.icon,
        text: cardInfo.text,
        icon_color: cardInfo.icon_color,
        bgcolor: cardInfo.bgcolor,
        link_param: cardInfo.link_param,
        position: shortcuts.length + 1,
        'data-id': cardInfo.id
    };
    shortcuts.push(newItem);
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));

    const shortcutElement = createShortcutElement(newItem);
    contentBottom.appendChild(shortcutElement);

    saveOrder();
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
        imgFixar.addEventListener('click', (event) => {
            event.preventDefault();
            addShortcutFromCard(featuresVisits);
        });

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

    return data
}

function renderMyBoards(boards){
    for (let index = 0; index < boards.length; index += 1) {
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
        imgFixar.addEventListener('click', (event) => {
            event.preventDefault()
            addShortcutFromCard(myBoards); 
        });

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

    return data
}

async function getAddShortcut(id) {
    const checkbox = document.querySelector(`input[type="checkbox"]#${id}`);
    const label = checkbox.closest('label');
    const span = label.querySelector('span');
    const text = span.textContent.trim();
    const icon = './assets/clients.svg'; // Ajuste conforme necessário

    const data = [
        { 'id': id, 'icon': icon, 'text': text, 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'position': 6, 'data-id': id }
    ];
    return data;
}

// Função para renderizar atalhos
async function renderShortcuts() {
    const shortcuts = await getShortcuts();
    const contentBottom = document.getElementById('sortable-list');

    shortcuts.forEach(item => {
        const shortcut = createShortcutElement(item);
        contentBottom.appendChild(shortcut);
    });

    loadOrder();
    removeSkeletonClasses();
}

addAddShortcutButton(); 
// Função para remover as classes de esqueleto
function removeSkeletonClasses() {
    const skeletonElements = document.querySelectorAll('.skeletonAtalhos, .skeletonAtalhosText');
    skeletonElements.forEach(element => {
        element.classList.remove('skeletonAtalhos', 'skeletonAtalhosText');
    });
}

// Função para aplicar as classes de esqueleto aos atalhos
function applySkeletonClasses() {
    const skeletonElements = document.querySelectorAll('.boxCont:not([data-loaded="true"]) .skeletonAtalhos, .boxCont:not([data-loaded="true"]) .skeletonAtalhosText');
    skeletonElements.forEach(element => {
        element.classList.add('skeletonAtalhos', 'skeletonAtalhosText');
    });
}

// Função para criar um elemento de atalho
function createShortcutElement(item) {
    const shortcut = document.createElement('a');
    shortcut.classList.add('boxCont');
    shortcut.id = item.id;
    shortcut.href = item.link_param;
    shortcut.setAttribute('data-id', item['data-id']);
    shortcut.draggable = true;

    const divImgShort = document.createElement('div');
    divImgShort.classList.add('boxImg', 'skeletonAtalhos');

    const spanBg = document.createElement('span');
    spanBg.style.backgroundColor = item.bgcolor;
    spanBg.classList.add('bgSpan');

    const imgShort = document.createElement('img');
    imgShort.classList.add('bgImgFundo');
    imgShort.src = item.icon;
    imgShort.alt = item.text;

    divImgShort.appendChild(spanBg);
    divImgShort.appendChild(imgShort);

    shortcut.appendChild(divImgShort);

    const textShort = document.createElement('p');
    textShort.classList.add('skeletonAtalhosText');
    textShort.innerHTML = item.text;

    shortcut.appendChild(textShort);

    // Remova a classe de esqueleto imediatamente após criar o atalho
    divImgShort.classList.remove('skeletonAtalhos');
    textShort.classList.remove('skeletonAtalhosText');

    return shortcut;
}

// Função para adicionar um novo atalho
async function addShortcut(id) {
    const newShortcuts = await getAddShortcut(id);
    const shortcuts = await getShortcuts();
    newShortcuts.forEach(item => {
        item.checked = true; // Marca o novo atalho como checked
        shortcuts.push(item);
        const shortcut = createShortcutElement(item);
        contentBottom.appendChild(shortcut);
    });

    removeSkeletonClasses();
    saveShortcuts(shortcuts);
    saveOrder();
    saveShortcutState(id, true);
}

// Função para remover um atalho
function removeShortcut(id) {
    let shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
    shortcuts = shortcuts.filter(item => item.id !== id);
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
    
    const shortcut = document.querySelector(`.boxCont#${id}`);
    if (shortcut) {
        shortcut.remove();
    }

    saveOrder();
    saveShortcutState(id, false);
}

// Adicionar eventos de clique aos checkboxes no modal
document.querySelectorAll('.modal input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            addShortcut(this.id);
        } else {
            removeShortcut(this.id);
        }
    });
});

document.querySelectorAll('.boxCont input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            addShortcut(this.id);
        } else {
            removeShortcut(this.id);
        }
    });
});

// Função para salvar o estado dos atalhos no localStorage
function saveShortcutState(id, checked) {
    const shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
    const shortcutToUpdate = shortcuts.find(shortcut => shortcut.id === id);
    if (shortcutToUpdate) {
        shortcutToUpdate.checked = checked;
        localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
    }
}

async function getRemoveShortcut(){
    const data = [
        { 'id': 'xxx-yyy'}
    ]

    return data
}
 
async function getSavesShortcutSorting(){
    const data = [
        { 'id': 'xxx-yyy', 'position': 1}
    ]

    return data
}