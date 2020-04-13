import LOCALES from '../locales';
import KEYS from './keys';
export default {
  [LOCALES.FRENCH]: {
    ...KEYS,
    [KEYS.TITLE]: 'Traqueur de COVID-19',
    [KEYS.SUBTITLE]:
      "Suivre la propagation de l'épidémie de Coronavirus Covid-19",
    [KEYS.STATISTICS]: 'Statistiques',
    [KEYS.STATUS_RECOVERED]: 'Nombre de cas guéris',
    [KEYS.STATUS_DEATHS]: 'Nombre de cas de mort',
    [KEYS.STATUS_CONFIRMED]: 'Nombre de cas confirmés',
    [KEYS.STATUS_NEGATIVES]: 'Nombre de cas négatifs',
    [KEYS.STATISTICS_BY_REGION]: 'Statistiques par régions',
    [KEYS.LAST_UPDATED]: 'Dernière mise à jour',
    // [KEYS.NUMBER_OF_CASES]: 'Nombre de cas',
    [KEYS.INCREASE]: 'Augmentation',
    [KEYS.INCREASE_FROM_YESTERDAY]: 'Augmentation depuis hier',
    [KEYS.LIGHT]: 'Clair',
    [KEYS.DARK]: 'Sombre',
    [KEYS.SPINNER_LOADING]: 'Chargement en cours ...',
  },
};
