
const countries = [{
  url: 'KredytZen.PL',
  iso2: 'pl'
},{
  url: 'Creditozen.ES',
  iso2: 'es'
},{
  url: 'Creditozen.MX',
  iso2: 'mx'
}]

const navLinks = {

  es:{
    mortgages: {
      title:"Hüpoteeklaenud",
      mortgage: {
        name: 'Uus hüpoteeklaen kinnivara soetamiseks',
        href: '/hüpoteek-laen'
        },
      mortgageEstateGuarantee: {
        name: 'Uus hüpoteek kinnisvara tagatisel',
        href: '/hüpoteek-kinnisvara-tagatisel'
        },
      loanCondisions: {
        name: 'Muuda laenu tingimusi',
        href: '/tingimused'
      }
    },
    loanProducts: {
      title: 'Laenutooted',
      mortage: {
        name: 'Hüpoteek laen',
        href: '/laen/hüpoteek-laen'
      },
      mortgageEstateGuarantee: {
        name: 'Hüpoteek kinnisvara tagatisel',
        href: '/laen/hüpoteek-kinnisvara-tagatisel'
      }
    },
    contact: {
      name: 'Kontakt',
      href: '/kontakt'
      }, 
  }

}


const translations = {

  es: {
    contact: {
      title: "Võtke ühendust",
      company: "Ban kos Technology OÜ",
      email:"info@creditozen.es",
      skype:"Credito.Zen",
      logo:"udubu",
      number: "+34 518 88 88 66"
    },
    copyRight: "- Todos los derechos reservados CreditoZen.es",
    //Nav
    nav: {
      headerLinks: {
        loanLinks: [
          { 
            title: navLinks.es.mortgages.title,
            links: [navLinks.es.mortgages.mortgage,navLinks.es.mortgages.mortgageEstateGuarantee,navLinks.es.mortgages.loanCondisions]
          },
          { 
            title: navLinks.es.loanProducts.title,
            links: [navLinks.es.loanProducts.mortage, navLinks.es.loanProducts.mortgageEstateGuarantee] 
          },
        ],
        contact: navLinks.es.contact 
      },

      footerLinks: [
      
      ],

      },
  }
}

export const getTranslations = () => translations["es"];

