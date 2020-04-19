import LOCALES from '../locales';
import KEYS from './keys';
export default {
  [LOCALES.ARABIC.id]: {
    ...KEYS,

    //SEO
    [KEYS.WEBSITE_TITLE]: 'تعقب حالة فيروس كورونا',
    [KEYS.LANG]: 'ar',
    [KEYS.DESCRIPTION]: 'تتبع تطورانتشار فيروس كورونا في المغرب',
    //TITLE

    [KEYS.TITLE]: 'تعقب حالة فيروس كورونا',
    [KEYS.SUBTITLE]: 'تتبع تطورانتشار فيروس كورونا في المغرب',
    [KEYS.STATISTICS]: ' الإحصائيات العامة',
    [KEYS.LAST_UPDATED]: ' اخر تحديث يوم {day} على الساعة {hour}',

    // [KEYS.NUMBER_OF_CASES]: 'عدد حالات',
    [KEYS.STATUS_RECOVERED]: 'حالات الشفاء',
    [KEYS.STATUS_DEATHS]: 'الوفيات',
    [KEYS.STATUS_CONFIRMED]: 'الحالات المؤكدة',
    [KEYS.STATUS_NEGATIVES]: 'الحالات السلبية',
    [KEYS.STATUS_ACTIVES]: 'الحالات النشطة',
    [KEYS.STATUS_TESTED]: 'الاختبارات التي أجريت',

    [KEYS.STATISTICS_BY_REGION]: 'إحصائيات حالات الإصابة حسب الجهات',

    // REGIONS
    [KEYS.REGIONS_CASES]: 'الحالات',
    [KEYS.REGIONS_OLD_CASES]: 'الرقم السابق',
    [KEYS.REGIONS_DAILY_CASES]: 'الزيادة اليومية',
    [KEYS.REGIONS_PERCENTAGE_CASES]: 'نسبة التغير',
    [KEYS.REGIONS_NAME]: 'الجهة',
    [KEYS.REGIONS_BeniMellalKhénifra]: 'بني ملال - خنيفرة',
    [KEYS.REGIONS_CasaSettat]: 'الدار البيضاء - سطات',
    [KEYS.REGIONS_MarrakechSafi]: ' مراكش - آسفي',
    [KEYS.REGIONS_RabatSaléKenitra]: 'الرباط - سلا - القنيطرة',
    [KEYS.REGIONS_Fèsmeknes]: 'فاس - مكناس',
    [KEYS.REGIONS_TangerTetouanAlHoceima]: 'طنجة - تطوان - الحسيمة',
    [KEYS.REGIONS_Oriental]: 'الشرق',
    [KEYS.REGIONS_Daraatafilalet]: ' درعة - تافيلالت',
    [KEYS.REGIONS_SoussMassa]: 'سوس - ماسة',
    [KEYS.REGIONS_LaâyouneSakiaElHamra]: 'العيون - الساقية الحمراء',
    [KEYS.REGIONS_DakhlaOuedEdDahab]: 'الداخلة - وادي الذهب',
    [KEYS.REGIONS_GuelmimOuedNoun]: 'كلميم - واد نون',

    [KEYS.INCREASE]: 'الزيادة',
    [KEYS.DECREASE]: 'الزيادة',
    [KEYS.INCREASE_FROM_YESTERDAY]:
      '{percentage} نسبة {type} مقارنة بأمس ({number})',
    [KEYS.LIGHT]: 'لون فاتح',
    [KEYS.DARK]: 'لون غامق',
    [KEYS.SPINNER_LOADING]: 'جار التحميل ...',
  },
};
