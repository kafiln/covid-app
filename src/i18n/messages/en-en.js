import LOCALES from '../locales';
import KEYS from './keys';
export default {
  [LOCALES.ENGLISH.id]: {
    ...KEYS,
    //SEO
    [KEYS.WEBSITE_TITLE]: 'Corona virus in Morocco',
    [KEYS.LANG]: 'en',
    [KEYS.DESCRIPTION]: 'Track the spread of the epidemic in Morocco',
    //TITLE
    [KEYS.TITLE]: 'Track Corona',
    [KEYS.SUBTITLE]: 'Track the spread of the epidemic in Morocco',
    [KEYS.STATISTICS]: 'Global Statistics',
    [KEYS.STATUS_RECOVERED]: 'Healed cases',
    [KEYS.STATUS_DEATHS]: 'Deaths',
    [KEYS.STATUS_CONFIRMED]: 'Confirmed',
    [KEYS.STATUS_NEGATIVES]: 'Negatif',
    [KEYS.STATUS_ACTIVES]: 'Active',
    [KEYS.STATUS_TESTED]: 'Tests performed',
    [KEYS.STATISTICS_BY_REGION]: 'Statistics by regions',
    // REGIONS
    [KEYS.REGIONS_CASES]: 'Current cases number',
    [KEYS.REGIONS_OLD_CASES]: 'Previous cases Number',
    [KEYS.REGIONS_DAILY_CASES]: 'Daily increase',
    [KEYS.REGIONS_PERCENTAGE_CASES]: 'Variation',
    [KEYS.REGIONS_NAME]: 'Region',
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
    [KEYS.LAST_UPDATED]: 'Last update {day} at {hour}',
    // [KEYS.NUMBER_OF_CASES]: 'Nombre de cas',
    [KEYS.INCREASE]: 'increase',
    [KEYS.DECREASE]: 'drop',
    [KEYS.INCREASE_FROM_YESTERDAY]:
      '{percentage} {type} since yesterday ({number})',
    [KEYS.LIGHT]: 'Light',
    [KEYS.DARK]: 'Dark',
    [KEYS.SPINNER_LOADING]: 'Loading ...',
  },
};
