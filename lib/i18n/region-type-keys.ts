/** 데이터용 지역명(한글) → 번역 키. 선택 언어에 맞는 지역명 표시 시 t(key) 사용. */
export const REGION_NAME_TO_KEY: Record<string, string> = {
  보르도: 'region_bordeaux',
  부르고뉴: 'region_burgundy',
  샹파뉴: 'region_champagne',
  론: 'region_rhone',
  루아르: 'region_loire',
  알자스: 'region_alsace',
  프로방스: 'region_provence',
  피에몬테: 'region_piedmont',
  토스카나: 'region_tuscany',
  베네토: 'region_veneto',
  시칠리아: 'region_sicily',
  리오하: 'region_rioja',
  '리베라 델 두에로': 'region_ribera_del_duero',
  나파: 'region_napa',
  오레곤: 'region_oregon',
  마이포: 'region_maipo',
  멘도사: 'region_mendoza',
  바로사: 'region_barossa',
  모셀: 'region_mosel',
  도루: 'region_douro',
  스텔렌보스: 'region_stellenbosch',
  말보로: 'region_marlborough',
  '센트럴 오타고': 'region_central_otago',
}

/** 데이터용 타입(한글) → 번역 키. 표시 시 t(key) 사용. */
export const TYPE_LABEL_KEYS: Record<string, string> = {
  레드: 'filter_red',
  화이트: 'filter_white',
  로제: 'filter_rose',
  스파클링: 'filter_sparkling',
  기타: 'filter_other',
}
