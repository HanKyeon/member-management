import { useState } from 'react';

import type { DefaultMemberRecord } from '@/types/type';

export type Filters = DefaultMemberRecord;

export type FilterKey = keyof Filters;
export type FilterValue = Filters[FilterKey];

export const useFilterMap = function (
  initialFilter: Partial<Record<FilterKey, FilterValue[]>> = {
    name: [],
    address: [],
    memo: [],
    joinDate: [],
    job: [],
    emailAgreement: [],
  },
) {
  const [filterMap, setFilterMap] = useState<Map<FilterKey, Set<FilterValue>>>(
    new Map<FilterKey, Set<FilterValue>>(
      Object.entries(initialFilter).map(([key, value]) => [
        key as FilterKey,
        new Set(value),
      ]),
    ),
  );

  const addFilter = function (key: FilterKey, value: FilterValue) {
    setFilterMap(prev => {
      const updatedMap = new Map(prev);
      const existingSet = updatedMap.get(key) || new Set();
      updatedMap.set(key, new Set([...existingSet, value]));
      return updatedMap;
    });
  };

  const removeFilter = function (key: FilterKey, value: FilterValue) {
    setFilterMap(prev => {
      const updatedMap = new Map(prev);
      const existingSet = updatedMap.get(key);
      if (existingSet) {
        existingSet.delete(value);
      }
      updatedMap.set(key, new Set(existingSet));
      return updatedMap;
    });
  };

  const toggleFilter = function (key: FilterKey, value: FilterValue) {
    setFilterMap(prev => {
      const updatedMap = new Map(prev);
      const existingSet = updatedMap.get(key) || new Set();
      if (existingSet.has(value)) {
        existingSet.delete(value);
      } else {
        existingSet.add(value);
      }
      updatedMap.set(key, new Set([...existingSet]));
      return updatedMap;
    });
  };

  return {
    filterMap,
    addFilter,
    removeFilter,
    toggleFilter,
    setFilterMap,
  };
};
