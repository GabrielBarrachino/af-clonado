import { swiperEl } from "./swiper.js";
// import { sortable } from "./sortable.js";

const reorderButton = document.getElementById("ordenacao");

const shortcutsStore = (() => {
  return {
    shortcuts: [],

    getShortcuts() {
      return this.shortcuts;
    },

    updateShortcuts() {
      this.shortcuts = JSON.parse(localStorage.getItem("shortcuts"));
    },
  };
})();

// Funções de busca de dados
async function getTabs() {
  const data = [{ id: "xxx-yyy", text: "Dashboard01", link_param: "google" }];

  return data;
}
async function getKeyMetrics() {
  const dataMetric = [
    {
      id: "xxx-yyy",
      text: "Pendências de aprovação",
      bgcolor: "#FF5C00",
      link_param: "google",
      qty: 10,
    },
    {
      id: "xxx-yyy",
      text: "Rascunho",
      bgcolor: "#0081FF",
      link_param: "Github",
      qty: 0,
    },
    {
      id: "xxx-yyy",
      text: "Rascunho",
      bgcolor: "#0081FF",
      link_param: "Github",
      qty: 0,
    },
  ];

  return dataMetric;
}
async function getLogHistory() {
  const data = [
    { text: "Contact New", link_param: "https://www.youtube.com" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "User Password", link_param: "https://www.example.com/link2" },
    { text: "último", link_param: "https://www.example.com/link2" },
  ];
  return data;
}

// Shortcuts (Atalhos)
const getShortcutsFromDatabase = () => {
  const rawShortcutsFromLocalstorage = JSON.parse(localStorage.getItem("shortcuts"));

  if (rawShortcutsFromLocalstorage) {
    const orderedShortcuts = rawShortcutsFromLocalstorage.sort(
      (firstItem, secondItem) => firstItem.position - secondItem.position,
    );

    orderedShortcuts.forEach((shortcut) => {
      const checkbox = document.querySelector(`input[type="checkbox"]#${shortcut.id}`);

      if (checkbox) {
        checkbox.checked = shortcut.checked;
      }
    });

    return orderedShortcuts;
  }

  return [];

  //   const defaultShortcuts = [
  //     { 'id': 'item1', 'icon': './assets/clients.svg', 'text': 'Clientes', 'icon_color': '#0281FF', 'bgcolor': '#E8F6FF', 'link_param': 'google', 'position': 1, 'data-id': 'item1' },
  //     { 'id': 'item2', 'icon': './assets/clientsGreen.svg', 'text': '2', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 2, 'data-id': 'item2' },
  //     { 'id': 'item3', 'icon': './assets/clientsGreen.svg', 'text': '3', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 3, 'data-id': 'item3' },
  //     { 'id': 'item4', 'icon': './assets/clientsGreen.svg', 'text': '4', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 4, 'data-id': 'item4' },
  //     { 'id': 'item5', 'icon': './assets/clientsGreen.svg', 'text': '5', 'icon_color': '#20CA41', 'bgcolor': '#E2F8E6', 'link_param': 'google', 'position': 5, 'data-id': 'item5' },
  //   ];

  // const maxColunas = 5;
  // const totalCards = defaultShortcuts.length;
  // const cardsFaltantes = maxColunas - (totalCards % maxColunas);

  // for (let i = 0; i < cardsFaltantes; i++) {
  //     defaultShortcuts.push({ 'id': `undefined`});
  // }

  //   return defaultShortcuts;
};

const saveShortcutsIntoDatabase = (shortcuts) => localStorage.setItem("shortcuts", JSON.stringify(shortcuts));

async function getSearchShortcuts() {
  const data = [
    {
      id: "xxx-yyy",
      text: "Dashboard01",
      itemchecked: true,
      disableToCheck: false,
      subitems: [
        {
          id: "xxx-yyy",
          text: "Dashboard01",
          itemchecked: false,
          disableToCheck: false,
          subitems: [],
        },
      ],
    },
  ];

  return data;
}

async function getRemoveShortcut() {
  const data = [{ id: "xxx-yyy" }];

  return data;
}
async function getSavesShortcutSorting() {
  const data = [{ id: "xxx-yyy", position: 1 }];

  return data;
}

const getRecentFeaturesVisits = async () => {
  const data = [
    {
      id: "testeeee",
      icon: "./assets/clients.svg",
      text: "Solicitação de  reembolso",
      icon_color: "#0281FF",
      bgcolor: "#E8F6FF",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "card2",
      icon: "./assets/time.svg",
      text: "Cadastro de clientes",
      icon_color: "#20CA41",
      bgcolor: "#E8F6FF",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clientsGreen.svg",
      text: "Outras opções",
      icon_color: "#20CA41",
      bgcolor: "#E2F8E6",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/homeGreen.svg",
      text: "Solicitação de  mudanças GMUD 0012",
      icon_color: "#20CA41",
      bgcolor: "#E2F8E6",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clientsGreen.svg",
      text: "Solicitação com nome bem grande",
      icon_color: "#20CA41",
      bgcolor: "#E2F8E6",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clientsGreen.svg",
      text: "Solicitação de  reembolso",
      icon_color: "#20CA41",
      bgcolor: "#E2F8E6",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clientsGreen.svg",
      text: "Solicitação de  reembolso",
      icon_color: "#20CA41",
      bgcolor: "#E2F8E6",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clientsGreen.svg",
      text: "Solicitação de  reembolso",
      icon_color: "#20CA41",
      bgcolor: "#E2F8E6",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clientsGreen.svg",
      text: "Solicitação de  reembolso",
      icon_color: "#20CA41",
      bgcolor: "#E2F8E6",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clients.svg",
      text: "Solicitação de  solicitação",
      icon_color: "#0281FF",
      bgcolor: "#E8F6FF",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clients.svg",
      text: "Solicitação de  solicitação",
      icon_color: "#0281FF",
      bgcolor: "#E8F6FF",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/clients.svg",
      text: "Solicitação de  solicitação",
      icon_color: "#0281FF",
      bgcolor: "#E8F6FF",
      link_param: "google",
      date: "10/05/2024 22:33",
    },
  ];

  // Adicionando cards cinzas para completar cada linha
  const maxColunas = 5; // Número máximo de colunas
  const totalCards = data.length;
  const cardsFaltantes = maxColunas - (totalCards % maxColunas);

  for (let i = 0; i < cardsFaltantes; i++) {
    data.push({ id: `grey-card-recent` });
  }
  // Gera IDs únicos para cada objeto
  data.forEach((item, index) => {
    if (!item.id || item.id === "xxx-yyy") {
      // Se o ID for undefined ou padrão
      item.id = `unique-id-${index}`; // Gere um ID único baseado no índice
    }
  });

  return data;
};

async function getMyBoards() {
  const data = [
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "id2",
      icon: "./assets/multipleMarked.svg",
      text: "Board de 2 Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
    {
      id: "xxx-yyy",
      icon: "./assets/multipleMarked.svg",
      text: "Board de Gestão de entrada e saida",
      icon_color: "#7B51E4",
      bgcolor: "#EEE9FB",
      link_param: "google",
    },
  ];

  // Adicionando cards cinzas para completar cada linha
  const maxColunas = 6; // Número máximo de colunas
  const totalCards = data.length;
  const cardsFaltantes = maxColunas - (totalCards % maxColunas);

  for (let i = 0; i < cardsFaltantes; i++) {
    data.push({ id: `grey-card` });
  }

  return data;
}

// Funções de renderização
function renderKeyMetrics(metric) {
  for (let index = 0; index < metric.length; index += 1) {
    const currentItemMetric = metric[index];
    const linkMetric = document.createElement("a");
    linkMetric.id = currentItemMetric.id;
    linkMetric.href = currentItemMetric.link_param;

    const textNumberNotification = document.createElement("span");
    textNumberNotification.classList.add("numberSpan", "skeletonSpanMetrics");
    textNumberNotification.innerHTML = currentItemMetric.qty;
    textNumberNotification.style.background = currentItemMetric.bgcolor;
    linkMetric.appendChild(textNumberNotification);

    const textMetric = document.createElement("span");
    textMetric.classList.add("textSpan", "skeletonSpanMetricsText");
    textMetric.innerHTML = currentItemMetric.text;
    linkMetric.appendChild(textMetric);

    const imgMetric = document.createElement("img");
    imgMetric.src = "./assets/arrowRight.svg";
    imgMetric.alt = "Imagem do botão de métrica";
    linkMetric.appendChild(imgMetric);

    metricContainer.appendChild(linkMetric);
  }
}
function renderHistory(history) {
  const swiperWrapper = document.querySelector(".swiper-wrapper1");
  for (let index = 0; index < history.length; index += 1) {
    const currentItem = history[index];
    const slide = document.createElement("div");
    const link = document.createElement("a");
    slide.classList.add("swiper-slide");
    link.innerHTML = currentItem.text;
    link.href = currentItem.link_param;
    // link.classList.add("linkHistory", "skeleton");
    slide.appendChild(link);
    swiperWrapper.appendChild(slide);
  }
}

const createVisitCardHTMLElement = (featuresVisits) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  const featuresVisitsCard = document.createElement("a");
  featuresVisitsCard.classList.add("boxRecent", "skeletonRecent");
  featuresVisitsCard.id = featuresVisits.id;
  featuresVisitsCard.href = featuresVisits.link_param;

  const divimg = document.createElement("div");
  divimg.classList.add("divClients");
  divimg.style.background = featuresVisits.bgcolor;

  const imgFixar = document.createElement("img");
  imgFixar.classList.add("imgFixar");
  const isPinned = localStorage.getItem(`pinned_${featuresVisits.id}`) === "true";
  imgFixar.src = isPinned ? "../assets/desafixar.svg" : "../assets/fixar.svg";

  imgFixar.addEventListener("click", (event) => {
    event.preventDefault();

    const isCurrentlyPinned = imgFixar.src.includes("desafixar.svg");

    if (isCurrentlyPinned) {
      imgFixar.src = "../assets/fixar.svg";
      localStorage.setItem(`pinned_${featuresVisits.id}`, "false");
      toggleShortcutPin(featuresVisits.id, false);
    } else {
      imgFixar.src = "../assets/desafixar.svg";
      localStorage.setItem(`pinned_${featuresVisits.id}`, "true");
      addShortcutFromCard(featuresVisits);
    }
  });

  const img = document.createElement("img");
  img.classList.add("imgClients");
  img.src = featuresVisits.icon;

  const pDate = document.createElement("p");
  pDate.classList.add("date");
  pDate.innerHTML = featuresVisits.date;

  const ptitle = document.createElement("p");
  ptitle.classList.add("title");
  ptitle.innerHTML = featuresVisits.text;

  divimg.appendChild(img);
  divimg.appendChild(imgFixar);

  featuresVisitsCard.appendChild(divimg);
  featuresVisitsCard.appendChild(pDate);
  featuresVisitsCard.appendChild(ptitle);

  slide.appendChild(featuresVisitsCard);

  return slide;
};

const renderRecentFeaturesVisits = (visits) => {
  const swiperWrapper = document.querySelector(".swiper-wrapper2");
  swiperWrapper.innerHTML = ""; // Limpar o conteúdo existente

  visits.forEach((featuresVisits) => {
    const slide = createVisitCardHTMLElement(featuresVisits);
    swiperWrapper.appendChild(slide);
  });
};

function renderMyBoards(boards) {
  for (let index = 0; index < boards.length; index += 1) {
    const myBoards = boards[index];
    const myBoardsCard = document.createElement("a");
    myBoardsCard.classList.add("boxRecent", "skeletonRecent");
    myBoardsCard.id = myBoards.id;
    myBoardsCard.href = myBoards.link_param;

    const divFixarImg = document.createElement("div");
    const divimg = document.createElement("div");
    divimg.classList.add("divMarked");
    divimg.style.background = myBoards.bgcolor;

    const imgFixar = document.createElement("img");
    imgFixar.classList.add("imgFixar");
    imgFixar.src = "../assets/fixar.svg";
    imgFixar.addEventListener("click", (event) => {
      event.preventDefault();
      addShortcutFromCard(myBoards);
    });

    imgFixar.addEventListener("click", (event) => {
      event.preventDefault();
      const isCurrentlyPinned = imgFixar.src.includes("desafixar.svg");
      if (isCurrentlyPinned) {
        imgFixar.src = "../assets/fixar.svg";
        localStorage.setItem(`pinned_${myBoardsCard.id}`, "false");
        toggleShortcutPin(myBoardsCard.id, false);
      } else {
        imgFixar.src = "../assets/desafixar.svg";
        localStorage.setItem(`pinned_${myBoardsCard.id}`, "true");
        addShortcutFromCard(myBoardsCard);
      }
    });

    const img = document.createElement("img");
    img.classList.add("imgClients");
    img.src = myBoards.icon;

    const textBoards = document.createElement("p");
    textBoards.innerHTML = myBoards.text;

    divimg.appendChild(img);
    divFixarImg.appendChild(imgFixar);

    myBoardsCard.appendChild(divimg);
    myBoardsCard.appendChild(divFixarImg);
    myBoardsCard.appendChild(textBoards);

    tasksContainer.appendChild(myBoardsCard);
  }
}

const createShortcutHTMLElementToSwiper = (item) => {
  const shortcutDiv = document.createElement("swiper-slide");
  const shortcut = document.createElement("a");

  shortcutDiv.classList.add("swiper-slide");
  shortcut.classList.add("boxCont");
  shortcut.href = item.link_param;
  shortcut.setAttribute("data-id", item.dataId);
  shortcut.draggable = true;

  const divImgShort = document.createElement("div");
  divImgShort.classList.add("boxImg", "skeletonAtalhos");

  const spanBg = document.createElement("span");
  spanBg.style.backgroundColor = item.bgcolor;
  spanBg.classList.add("bgSpan");

  const imgShort = document.createElement("img");
  imgShort.classList.add("bgImgFundo");
  imgShort.src = item.icon;
  imgShort.alt = item.text;

  divImgShort.appendChild(spanBg);
  divImgShort.appendChild(imgShort);
  shortcut.appendChild(divImgShort);

  const textShort = document.createElement("p");
  textShort.classList.add("skeletonAtalhosText");
  textShort.innerHTML = item.text;

  divImgShort.classList.remove("skeletonAtalhos");
  textShort.classList.remove("skeletonAtalhosText");

  shortcut.appendChild(textShort);

  const fixarDiv = document.createElement("div");
  fixarDiv.classList.add("fixar");

  const fixarImg = document.createElement("img");
  fixarImg.src = "./assets/fixar.svg"; // Inicialmente definido para fixar
  fixarImg.alt = "";

  fixarDiv.appendChild(fixarImg);
  shortcut.appendChild(fixarDiv);
  shortcutDiv.appendChild(shortcut);

  return shortcutDiv;
};

const createShortcutHTMLElementToSortable = (item) => {
  const li = document.createElement("li");
  const shortcut = document.createElement("a");

  shortcut.classList.add("boxCont", "swiper-slide");
  shortcut.style.width = "113.636px";
  shortcut.id = item.id;
  shortcut.href = item.link_param;
  li.setAttribute("data-id", item.dataId);
  li.setAttribute("data-draggable", true);
  shortcut.draggable = true;

  const divImgShort = document.createElement("div");
  divImgShort.classList.add("boxImg", "skeletonAtalhos");

  const spanBg = document.createElement("span");
  spanBg.style.backgroundColor = item.bgcolor;
  spanBg.classList.add("bgSpan");

  const imgShort = document.createElement("img");
  imgShort.classList.add("bgImgFundo");
  imgShort.src = item.icon;
  imgShort.alt = item.text;

  divImgShort.appendChild(spanBg);
  divImgShort.appendChild(imgShort);
  shortcut.appendChild(divImgShort);

  const textShort = document.createElement("p");
  textShort.classList.add("skeletonAtalhosText");
  textShort.innerHTML = item.text;

  shortcut.appendChild(textShort);

  // Adicionando o elemento fixar
  const fixarDiv = document.createElement("div");
  fixarDiv.classList.add("fixar");

  const fixarImg = document.createElement("img");
  fixarImg.src = "./assets/ordenacao.svg";
  fixarImg.alt = "";

  fixarDiv.appendChild(fixarImg);
  shortcut.appendChild(fixarDiv);
  li.appendChild(shortcut);

  // sortableListElement.classList.remove("sortable-list-hidden");

  return li;
};

// Funções de manipulação de atalhos
const addShortcutFromCard = (cardInfo) => {
  const shortcuts = getShortcutsFromDatabase();
  const existingShortcut = shortcuts.find((shortcut) => shortcut.id === cardInfo.id);

  if (existingShortcut) {
    removeShortcut(cardInfo.id);
    return;
  }

  const shortcutAddedByUser = {
    id: cardInfo.id,
    icon: cardInfo.icon,
    text: cardInfo.text,
    icon_color: cardInfo.icon_color,
    bgcolor: cardInfo.bgcolor,
    link_param: cardInfo.link_param,
    position: null,
    dataId: cardInfo.id,
  };

  // shortcuts.push(newItem);
  // localStorage.setItem("shortcuts", JSON.stringify(shortcuts));

  const updatedShortcuts = [...shortcuts, shortcutAddedByUser];
  localStorage.setItem("shortcuts", JSON.stringify(updatedShortcuts));
  shortcutsStore.updateShortcuts();

  renderShortcutSlideIntoDOM(shortcutAddedByUser);
  renderShortcutSortableIntoDOM(shortcutAddedByUser);

  removeSkeletonClasses();

  // saveShortcutOrderIntoLocalStorage();

  // Atualize a imagem de fixar para desafixar
  //   const cardElement = document.getElementById(cardInfo.id);

  //   if (cardElement) {
  //     const fixarDiv = cardElement.querySelector(".fixar");
  //     toggleFixarImage(fixarDiv, true);
  //   }
};

const getSelectedShortcut = (id) => {
  const checkbox = document.querySelector(`input[type="checkbox"]#${id}`);
  const label = checkbox.closest("label");
  const span = label.querySelector("span");
  const text = span.textContent.trim();
  const icon = `./assets/clients.svg`; // Ajuste conforme necessário

  const shortcutsArray = shortcutsStore.getShortcuts();
  const shortcutPosition = shortcutsArray.length;

  return {
    id,
    icon,
    text,
    icon_color: "#0281FF",
    bgcolor: "#E8F6FF",
    link_param: "google",
    position: null,
    dataId: id,
    checked: true,
  };
};

const renderShortcutSlideIntoDOM = (shortcut) => {
  const addedShortcutElement = createShortcutHTMLElementToSwiper(shortcut);
  const addShortcutButtonIndex = swiperEl.swiper.slides.findIndex((item) =>
    item.querySelector('[data-id="addItem"]') ? true : false,
  );

  swiperEl.swiper.addSlide(addShortcutButtonIndex, addedShortcutElement);
  removeSkeletonClasses();
  //   saveShortcutState(id, true);
};

const renderShortcutSortableIntoDOM = (shortcut) => {
  const sortableListElement = document.querySelector("#sortable-list");
  const addShortcutButton = sortableListElement.querySelector(".boxImgAdd").closest("LI");
  const newShortcutHTMLElement = createShortcutHTMLElementToSortable(shortcut);

  addShortcutButton.insertAdjacentElement("beforebegin", newShortcutHTMLElement);
  removeSkeletonClasses();

  // loadOrder();
};

const toggleShortcutPin = async (id, fromModal = true) => {
  let selectedShortcut = null;

  if (fromModal) {
    selectedShortcut = getSelectedShortcut(id);
  }

  const shortcuts = shortcutsStore.getShortcuts();
  const shortcutAlreadyExists = shortcuts.filter((shortcut) => shortcut.id === id);

  if (shortcutAlreadyExists.length !== 0) {
    const shortcutIndex = shortcuts.findIndex((shortcut) => shortcut.id === shortcutAlreadyExists[0].id);

    swiperEl.swiper.removeSlide(shortcutIndex);

    const updatedShortcuts = shortcuts.filter((_, index) => index !== shortcutIndex);
    localStorage.setItem("shortcuts", JSON.stringify(updatedShortcuts));
    shortcutsStore.updateShortcuts();

    // const cardElement = document.getElementById(id);
    // if (cardElement) {
    //   const fixarDiv = cardElement.querySelector(".fixar");
    //   toggleFixarImage(fixarDiv, false);
    // }

    return;
  }

  const updatedShortcuts = [...shortcuts, selectedShortcut];
  localStorage.setItem("shortcuts", JSON.stringify(updatedShortcuts));
  shortcutsStore.updateShortcuts();

  renderShortcutSlideIntoDOM(selectedShortcut);
  renderShortcutSortableIntoDOM(selectedShortcut);
};

const removeShortcut = (id) => {
  // const shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
  const shortcuts = getShortcutsFromDatabase();

  // const updatedShortcuts = shortcuts.filter((shortcut) => shortcut.id !== id);

  localStorage.setItem("shortcuts", JSON.stringify(updatedShortcuts));
  shortcutsStore.updateShortcuts();

  const shortcutIndex = shortcuts.findIndex((shortcut) => shortcut.id === shortcutAlreadyExists[0].id);
  swiperEl.swiper.removeSlide(shortcutIndex);

  // const shortcut = document.querySelector(`.boxCont#${id}`);

  // if (shortcut) {
  //   shortcut.remove();
  // }

  // saveShortcutOrderIntoLocalStorage();
  // // Atualize a imagem de desafixar para fixar
  // const cardElement = document.getElementById(id);

  // if (cardElement) {
  //   const fixarDiv = cardElement.querySelector(".fixar");
  //   toggleFixarImage(fixarDiv, false);
  // }
};

function saveShortcutState(id, checked) {
  const shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
  const shortcutToUpdate = shortcuts.find((shortcut) => shortcut.id === id);
  if (shortcutToUpdate) {
    shortcutToUpdate.checked = checked;
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  }
}

function toggleFixarImage(element, isFixed) {
  const img = element.querySelector("img");
  if (isFixed) {
    img.src = "./assets/desafixar.svg"; // Caminho para a imagem de desafixar
  } else {
    img.src = "./assets/fixar.svg"; // Caminho para a imagem de fixar
  }
}

function loadOrder() {
  //   const order = JSON.parse(localStorage.getItem("sortable-order"));
  //   const sortableListElement = document.querySelector("#sortable-list");
  //   console.log(sortableListElement);
  //   if (order) {
  //     order.forEach((id) => {
  //       const item = sortableListElement.querySelector(
  //         `.boxCont[data-id='${id}']`
  //       );
  //       console.log(item);
  //       if (item) {
  //         sortableListElement.appendChild(item);
  //       }
  //     });
  //   }
}

// let sortable = null;
// const contentBottom = document.getElementById("sortable-list");

function removeSkeletonClasses() {
  const skeletonElements = document.querySelectorAll(".skeletonAtalhos, .skeletonAtalhosText");
  skeletonElements.forEach((element) => {
    element.classList.remove("skeletonAtalhos", "skeletonAtalhosText");
  });
}

function applySkeletonClasses() {
  const skeletonElements = document.querySelectorAll(
    '.boxCont:not([data-loaded="true"]) .skeletonAtalhos, .boxCont:not([data-loaded="true"]) .skeletonAtalhosText',
  );
  skeletonElements.forEach((element) => {
    element.classList.add("skeletonAtalhos", "skeletonAtalhosText");
  });
}

// function addAddShortcutButton() {
//   let mySwiper3 = document.querySelector(".mySwiper3");
//   if (!mySwiper3) {
//     mySwiper3 = document.createElement("div");
//     // mySwiper3.classList.add('mySwiper3');
//     document.body.appendChild(mySwiper3);
//   }

//   // let swiperWrapper3 = mySwiper3.querySelector('.swiper-wrapper3');
//   let swiperWrapper = mySwiper3.querySelector(".swiper-wrapper");
//   if (!swiperWrapper) {
//     swiperWrapper = document.createElement("div");
//     // swiperWrapper3.classList.add('swiper-wrapper3');
//     mySwiper3.appendChild(swiperWrapper);
//   }

//   const addShortcut = document.createElement("a");
//   addShortcut.href = "#";
//   addShortcut.classList.add("boxCont", "btnAddShortcuts", "swiper-slide");
//   addShortcut.setAttribute("data-js", "open-modal");

//   const divImgAdd = document.createElement("div");
//   divImgAdd.classList.add("boxImg", "boxContAdd");

//   const imgAdd = document.createElement("img");
//   imgAdd.src = "assets/plus.svg";
//   imgAdd.alt = "Imagem caixa";

//   divImgAdd.appendChild(imgAdd);
//   addShortcut.appendChild(divImgAdd);

//   const textAdd = document.createElement("p");
//   textAdd.classList.add("textAdd");
//   textAdd.textContent = "Adicionar atalhos";

//   addShortcut.appendChild(textAdd);

//   // Adicionar o novo botão de atalho dentro da 'swiper-wrapper3'
//   swiperWrapper.appendChild(addShortcut);
// }

// function saveShortcutsIntoLocalStorage(shortcuts) {
//   localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
// }

function saveShortcutOrderIntoLocalStorage() {
  const sortableListElement = document.querySelector("#sortable-list");
  const sortableItems = Array.from(sortableListElement.children);

  const shortcuts = getShortcutsFromDatabase();
  const reorderedShortcuts = shortcuts
    .map((shortcut) => {
      const sortableItemIndex = sortableItems.findIndex((sortableItem) => sortableItem.dataset.id === shortcut.id);
      return { ...shortcut, position: sortableItemIndex };
    })
    .sort((firstItem, secondItem) => firstItem.position - secondItem.position);

  const updatedShortcuts = [...reorderedShortcuts];
  localStorage.setItem("shortcuts", JSON.stringify(updatedShortcuts));
  shortcutsStore.updateShortcuts();

  const amountThatShouldBeRemoved = shortcutsStore.getShortcuts().length - 1;
  const indexesThatShouldBeRemoved = [];

  for (let index = 0; index <= amountThatShouldBeRemoved; index++) {
    indexesThatShouldBeRemoved.push(index);
  }

  swiperEl.swiper.removeSlide(indexesThatShouldBeRemoved);

  shortcutsStore.getShortcuts().forEach((shortcut) => {
    renderShortcutSlideIntoDOM(shortcut);
  });
}

document.querySelectorAll('.modal input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    toggleShortcutPin(this.id);
  });
});

const createDefaultButtons = ({ slide }) => {
  let firstButton = null;
  const firstALink = document.createElement("a");

  if (slide) {
    firstButton = document.createElement("swiper-slide");
    firstButton.classList.add("swiper-slide", "swiper-slide-postal");
  } else {
    firstButton = document.createElement("li");
    firstButton.classList.add("swiper-slide-postal");
    firstButton.setAttribute("data-draggable", true);
  }

  firstALink.classList.add("boxCont");
  firstALink.setAttribute("data-id", "item0");
  firstALink.textContent = "Caixa de Entrada";
  firstALink.classList.add("boxContText");

  // Image fixaar
  const divImgFixar = document.createElement("div");
  const imgFixar = document.createElement("img");
  imgFixar.src = "./assets/fixar.svg";
  imgFixar.alt = "ícone de fixar";
  divImgFixar.classList.add("fixar");
  imgFixar.classList.add("imgFixar");

  // imagem
  const divImgPostal = document.createElement("div");
  const imgPostal = document.createElement("img");
  const spanPostal = document.createElement("span");
  imgPostal.src = "./assets/inbox.svg";
  imgPostal.alt = "Ícone de caixa postal";
  divImgPostal.classList.add("boxImg");
  spanPostal.classList.add("bgSpan");
  spanPostal.style.backgroundColor = "rgb(232, 246, 255)";

  divImgPostal.appendChild(spanPostal);
  divImgPostal.appendChild(imgPostal);
  divImgFixar.appendChild(imgFixar);
  firstButton.appendChild(divImgFixar);
  firstButton.appendChild(divImgPostal);
  firstButton.appendChild(firstALink);

  // ===========================================

  let secondButton = null;
  const secondALink = document.createElement("a");

  if (slide) {
    secondButton = document.createElement("swiper-slide");
    secondButton.classList.add("swiper-slide", "swiper-slide-plus");
  } else {
    secondButton = document.createElement("li");
  }

  secondALink.classList.add("boxCont", "btnAddShortcuts");
  secondALink.setAttribute("data-js", "open-modal");
  secondALink.setAttribute("data-id", "addItem");
  secondALink.textContent = "Adicionar atalho";
  secondALink.classList.add("addText");

  // imagem
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  img.src = "./assets/plus.svg";
  img.alt = "Ícone de adicionar atalho";
  divImg.classList.add("boxImg", "boxImgAdd");
  img.classList.add("imgPlus");

  secondButton.addEventListener("click", () => {
    const modal = document.querySelector('[data-js="modal"]');
    modal.classList.add("show");
  });

  divImg.appendChild(img);
  secondButton.appendChild(divImg);
  secondButton.appendChild(secondALink);

  return [firstButton, secondButton];
};

const initializeAddShortcutButton = (shortcuts) => {
  const sortableListElement = document.querySelector("#sortable-list");

  const [_, addButtonToSlide] = createDefaultButtons({ slide: true });
  const [__, addButtonToSortable] = createDefaultButtons({ slide: false });

  swiperEl.swiper.addSlide(shortcuts.length + 1, addButtonToSlide);
  sortableListElement.insertAdjacentElement("beforeend", addButtonToSortable);
};

// const initializeFirstButtonsToSortable = (shortcuts) => {
//   const sortableListElement = document.querySelector("#sortable-list");
//   const [defaultButton1Sortable, defaultButton2Sortable] = createDefaultButtons({ slide: false });
//   sortableListElement.append(defaultButton1Sortable, defaultButton2Sortable);
// };

const toggleSortable = async (event) => {
  // const shortcutsArray = shortcutsStore.getShortcuts();
  const clickedElement = event.target;
  const shouldDisableSortable = !clickedElement.checked;
  // const swiperWrapper = swiperEl.swiper.wrapperEl;
  const sortableListElement = document.getElementById("sortable-list");

  //   swiperWrapper.setAttribute("id", "sortable-list");

  if (shouldDisableSortable) {
    swiperEl.classList.remove("swiper-hidden");
    sortableListElement.classList.add("sortable-list-hidden");
    swiperEl.swiper.enable();
    return;
  }

  swiperEl.swiper.disable();
  swiperEl.classList.add("swiper-hidden");

  // const sortableListItems = Array.from(sortableListElement.children);

  // for (let index = 0; index <= sortableListItems.length - 1; index++) {
  //   const sortableListItem = sortableListItems[index];
  //   const lastItemIndex = sortableListItems.length - 1 === index;

  //   if (lastItemIndex) {
  //     break;
  //   }

  //   const imageFixar = sortableListItem.querySelector(".fixar img");
  //   console.log(imageFixar);
  //   imageFixar.setAttribute("src", "./assets/ordenacao.svg");
  // }

  removeSkeletonClasses();
  sortableListElement.classList.remove("sortable-list-hidden");
};

const initApp = async () => {
  const sortableListElement = document.getElementById("sortable-list");

  const history = await getLogHistory(); // 3s, 6s, 4s
  const metric = await getKeyMetrics();
  const shortcuts = await getShortcutsFromDatabase();
  const visits = await getRecentFeaturesVisits();
  const boards = await getMyBoards();

  // Promise.all([history, metric, shortcuts, visits, boards]);

  const isShortcutsEmpty = shortcuts.length === 0;

  if (isShortcutsEmpty) {
    const inbox = {
      id: "inbox",
      icon: "./assets/inbox.svg",
      text: "Caixa de Entrada",
      icon_color: "#0281FF",
      bgcolor: "#E8F6FF",
      link_param: "google",
      position: null,
      dataId: "inbox",
    };

    saveShortcutsIntoDatabase([inbox]);
  }

  shortcutsStore.updateShortcuts();
  initializeAddShortcutButton(shortcuts);

  shortcutsStore.getShortcuts().forEach((shortcut) => {
    renderShortcutSlideIntoDOM(shortcut);
    renderShortcutSortableIntoDOM(shortcut);
  });

  Sortable.create(sortableListElement, {
    animation: 150,
    draggable: "[data-draggable]",

    onEnd: function () {
      saveShortcutOrderIntoLocalStorage();
    },
  });

  const skeletonMetrics = document.querySelector(".metric-skeleton");
  const skeletonHistory = document.querySelector(".history-skeleton");
  const skeletonRecent = document.querySelector(".recent-skeleton");
  const skeletonBoards = document.querySelector(".boards-skeleton");
  const skeletonShortcuts = document.querySelector(".shortcut-skeleton");
  skeletonMetrics.remove();
  skeletonHistory.remove();
  skeletonRecent.remove();
  skeletonBoards.remove();
  skeletonShortcuts.remove();

  renderHistory(history);
  renderKeyMetrics(metric);
  renderRecentFeaturesVisits(visits);
  renderMyBoards(boards);
  setTimeout(() => {}, 4000);
};

window.addEventListener("load", initApp);
reorderButton.addEventListener("change", toggleSortable);

// applySkeletonClasses();
// loadOrder();
// addAddShortcutButton();
