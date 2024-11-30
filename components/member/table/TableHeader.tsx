import CheckBox from '@/components/ui/ChechBox';
import { memo } from 'react';

import { tableWidth } from '@/components/constant/table';
import Filter from '@/components/ui/filter/Filter';
import { tableBorder } from '@/components/constant/style';
import { useMember } from '@/stores/member-store';
import { FilterKey, FilterValue } from '@/hooks/useFilterMap';
import { DEFAULT_COLS } from '@/components/constant/value';

// 변화가 없기에 memoization
const TableHeader = function () {
  const { filterMap, members, toggleFilter, addFilter, removeFilter } =
    useMember();
  return (
    <thead>
      <tr className={`flex flex-row w-full`}>
        {/* 전체 체크박스 */}
        <th scope="col" className={`${tableWidth[0]} ${tableBorder} px-[8px]`}>
          <CheckBox />
        </th>
        {DEFAULT_COLS.map((col, idx) => {
          const filterMenus: FilterValue[] = Array.from(
            new Set(members.map(member => member?.[col.filterKey])),
          );
          const filter = filterMap.get(col.filterKey) as Set<FilterValue>;
          const menus: {
            checked: boolean;
            desc: string;
            onClick: () => void;
          }[] = filterMenus.map(menu => {
            const desc =
              typeof menu === 'string' ? menu : menu ? '선택됨' : '선택 안함';
            return {
              checked: filter.has(menu),
              desc,
              onClick: () => {
                if (filter.has(menu)) {
                  console.log('제거 실행');
                  removeFilter(col.filterKey, menu);
                } else {
                  console.log('추가 실행');
                  addFilter(col.filterKey, menu);
                }
              },
            };
          });
          return (
            <th
              key={`th-${idx}`}
              scope="col"
              className={`${tableWidth[idx + 1]}`}
            >
              <Filter title={col.name} menus={menus} />
            </th>
          );
        })}
        {/* 개인 더보기 버튼을 위한 자리 */}
        <th scope="col" className={`${tableWidth[7]} ${tableBorder}`}></th>
      </tr>
    </thead>
  );
};

TableHeader.displayName = 'TableHeader';

export default TableHeader;
