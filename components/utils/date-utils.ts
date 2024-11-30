/**
 * 년도와 월의 총 일수를 반환
 * @param {number} year - 연도
 * @param {number} month - 월
 * @returns {number[]} - 1~28, 29, 30, 31 배열 반환
 */
export const getDaysInMonth = (year: number, month: number) => {
  return Array.from(
    { length: new Date(year, month + 1, 0).getDate() },
    (_, i) => i + 1,
  );
};

/**
 * locale에 따라 요일 배열 반환. 확장성을 위해 작성.
 * @param {string} locale - en-US, ko-KR, ...etc
 * @returns {string[]} - 요일 배열
 */
export const getWeekdayNames = (locale: string) => {
  const baseDate = new Date(Date.UTC(2021, 0, 3)); // 2021년 1월 3일은 일요일
  return Array.from({ length: 7 }, (_, i) =>
    new Date(baseDate.setDate(baseDate.getDate() + 1)).toLocaleDateString(
      locale,
      {
        weekday: 'short',
      },
    ),
  );
};

/**
 * 첫 번째 날짜의 요일 인덱스 반환
 * @param {number} year - 연도
 * @param {number} month - 월
 * @param {string} locale - en-US, ko-KR
 * @returns {number} - 요일 index 반환
 */
export const getStartDayIndex = (
  year: number,
  month: number,
  locale: string,
) => {
  const firstDay = new Date(year, month, 1);
  const weekday = firstDay.toLocaleDateString(locale, { weekday: 'short' });
  const weekdays = getWeekdayNames(locale);
  return weekdays.indexOf(weekday);
};
