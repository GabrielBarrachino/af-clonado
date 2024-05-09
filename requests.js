function sleep() {
    const ms = Math.floor(Math.random() * (8000 - 1000 + 1) + 1000)
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getHistory() {
    const data = [
        { text: "teste", link_param: "https://www.imovelguide.com.br/guidepro/corretor-de-imoveis-corretor-modelo/18111"},
        { text: "teste2", link_param: "https://bitbucket.org/RavinNero/imovelguide_repo/src/e9858750f1d2/resources/views/painel/assistente/sold.blade.php"},
        { text: "teste3", link_param: "https://bitbucket.org/RavinNero/imovelguide_repo/pull-requests/3242"},
    ]
    sleep()
    return data
}

