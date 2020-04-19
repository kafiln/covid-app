import LOCALES from '../locales';
import KEYS from './keys';
export default {
  [LOCALES.FRENCH.id]: {
    ...KEYS,
    //SEO
    [KEYS.WEBSITE_TITLE]: 'Corona virus au Maroc',
    [KEYS.LANG]: 'fr',
    [KEYS.DESCRIPTION]: "Suivre la propagation de l'épidémie au Maroc",
    //TITLE
    [KEYS.TITLE]: 'Suivi Corona',
    [KEYS.SUBTITLE]: "Suivre la propagation de l'épidémie au Maroc",
    [KEYS.STATISTICS]: 'Statistiques globales',
    [KEYS.STATUS_RECOVERED]: 'Cas guéris',
    [KEYS.STATUS_DEATHS]: 'Cas de mort',
    [KEYS.STATUS_CONFIRMED]: 'Cas confirmés',
    [KEYS.STATUS_NEGATIVES]: 'Cas négatifs',
    [KEYS.STATUS_ACTIVES]: 'Cas actifs',
    [KEYS.STATUS_TESTED]: 'Tests effectués',
    [KEYS.STATISTICS_BY_REGION]: 'Statistiques par régions',
    // REGIONS
    [KEYS.REGIONS_CASES]: 'Nombre Actuel',
    [KEYS.REGIONS_OLD_CASES]: 'Nombre Précedant',
    [KEYS.REGIONS_DAILY_CASES]: 'Augmentation journalière',
    [KEYS.REGIONS_PERCENTAGE_CASES]: 'Variation',
    [KEYS.REGIONS_NAME]: 'Région',
    [KEYS.REGIONS_BeniMellalKhénifra]: 'Béni Mellal-Khénifra',
    [KEYS.REGIONS_CasaSettat]: 'Casablanca-Settat',
    [KEYS.REGIONS_MarrakechSafi]: 'Marrakech-Safi',
    [KEYS.REGIONS_RabatSaléKenitra]: 'Rabat-Salé-Kenitra',
    [KEYS.REGIONS_Fèsmeknes]: 'Fès-Meknès',
    [KEYS.REGIONS_TangerTetouanAlHoceima]: 'Tanger-Tétouan-Al Hoceima',
    [KEYS.REGIONS_Oriental]: "L'oriental",
    [KEYS.REGIONS_Daraatafilalet]: 'Derâa-Tafilalet',
    [KEYS.REGIONS_SoussMassa]: 'Souss-Massa',
    [KEYS.REGIONS_LaâyouneSakiaElHamra]: 'Laayoune-Sakia el Hamra',
    [KEYS.REGIONS_DakhlaOuedEdDahab]: 'Dakhla-Oued ed Dahab',
    [KEYS.REGIONS_GuelmimOuedNoun]: ' Guelmim-Oued Noun',
    [KEYS.LAST_UPDATED]: 'Dernière mise à jour le {day} à {hour}',
    // [KEYS.NUMBER_OF_CASES]: 'Nombre de cas',
    [KEYS.INCREASE]: "d'augmentation",
    [KEYS.DECREASE]: 'de baisse',
    [KEYS.INCREASE_FROM_YESTERDAY]:
      '{percentage} {type} depuis hier ({number})',
    [KEYS.LIGHT]: 'Clair',
    [KEYS.DARK]: 'Sombre',
    [KEYS.SPINNER_LOADING]: 'Chargement en cours ...',
  },
};
