import LOCALES from '../locales';
import KEYS from './keys';
export default {
  [LOCALES.ARABIC]: {
    ...KEYS,

    [KEYS.TITLE]: 'تعقب حالة فيروس كورونا',
    [KEYS.SUBTITLE]: 'تتبع تطورانتشار فيروس كورونا في المغرب',
    [KEYS.STATISTICS]: 'الإحصائيات',
    [KEYS.LAST_UPDATED]: 'اخر تحديث',

    // [KEYS.NUMBER_OF_CASES]: 'عدد حالات',
    [KEYS.STATUS_RECOVERED]: 'عدد حالات الشفاء',
    [KEYS.STATUS_DEATHS]: 'عدد حالات الموت',
    [KEYS.STATUS_CONFIRMED]: 'عدد الحالات المؤكدة',
    [KEYS.STATUS_NEGATIVES]: 'عدد الحالات السلبية',

    [KEYS.STATISTICS_BY_REGION]: 'إحصائيات حسب الجهات',
    [KEYS.INCREASE]: 'زيادة',
    [KEYS.INCREASE_FROM_YESTERDAY]: 'زيادة منذ أمس',

    [KEYS.LIGHT]: 'لون فاتح',
    [KEYS.DARK]: 'لون غامق',
    [KEYS.SPINNER_LOADING]: 'جار التحميل ...',
  },
};
