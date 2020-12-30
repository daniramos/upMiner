var app = new Vue({
    el: '#app',
    data: {
        currentFilter: 'Todos',
        produtos: [
            {
                title: "Profissional",
                image: "fas fa-briefcase",
                category: 'Profissional',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
                
            },
            {
                title: "Reguladores", 
                image: "fas fa-university", 
                category: 'Reguladores',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
            },
            {
                title: "Sócio Ambiental", 
                image: "fas fa-tree", 
                category: 'Sócio Ambiental',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
            },
            {
                title: "Jurídico", 
                image: "fas fa-gavel", 
                category: 'Jurídico',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
            },
            {
                title: "Listas Restritivas", 
                image: "fas fa-ban", 
                category: 'Listas Restritivas',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
            },
            {
                title: "Mídia / Internet", 
                image: "fas fa-globe-americas", 
                category: 'Mídia / Internet',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
            },
            {
                title: "Bens e Imóveis", 
                image: "fas fa-gem", 
                category: 'Bens e Imóveis',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
            },
            {
                title: "Cadastro", 
                image: "fas fa-male", 
                category: 'Cadastro',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
            },
            {
                title: "Financeiro", 
                image: "fas fa-piggy-bank", 
                category: 'Financeiro',
                description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
            },
        ]
    },
    methods: {
        setFilter: function (filter) {
            this.currentFilter = filter;
        }
    }
})

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
        type    : 'loop',
        autoplay: true,
        perPage : 2,
        pagination: false,
    } ).mount();
} );

var splide = new Splide( '#splide' );

splide.on( 'autoplay:playing', function ( rate ) {
	console.log( rate ); // 0-1
} );

splide.mount();

/* new Splide( '#splide', {
} ).mount(); */
