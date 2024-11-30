import { createElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { DEFAULT_COLS, DEFAULT_JOBS } from '@/components/constant/value';
import FormCheckBox from '@/components/ui/hook-form-inputs/FormCheck';
import FormDate from '@/components/ui/hook-form-inputs/FormDatePicker';
import FormSelect from '@/components/ui/hook-form-inputs/FormSelect';
import FormTextArea from '@/components/ui/hook-form-inputs/FormTextArea';
import { type MemberRecord } from '@/types/type';
import { formatDate } from '@/utils/date-utils';
import { MemberFormResolver } from '@/utils/form-utils';

import { ModalFormProps } from '../../../types/modal-types';
import FormInput from '../../ui/hook-form-inputs/FormInput';
import ModalFooter from './ModalFooter';

const ElementMap = {
  name: FormInput,
  address: FormInput,
  memo: FormTextArea,
  joinDate: FormDate,
  job: FormSelect,
  emailAgreement: FormCheckBox,
};

const MemberForm = function ({
  onSubmit,
  target,
  cancelHandler,
}: ModalFormProps) {
  const methods = useForm<MemberRecord>({
    defaultValues: {
      checked: target?.checked ?? false,
      name: target?.name ?? '',
      address: target?.address ?? '',
      memo: target?.memo ?? '',
      joinDate: target?.joinDate ?? formatDate(new Date()),
      job: target?.job ?? DEFAULT_JOBS[0].value,
      emailAgreement: target?.emailAgreement ?? false,
    },
    resolver: MemberFormResolver,
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className="w-full px-[24px] pt-[10px] pb-[20px] gap-[20px] flex flex-col">
          {DEFAULT_COLS.map(col => {
            return createElement(ElementMap[col.filterKey], {
              key: `form-block-${col.filterKey}`,
              name: col.filterKey,
              label: col.name,
              required: col.required,
              className: col.className,
            });
          })}
        </main>
        <ModalFooter cancelHandler={cancelHandler} />
      </form>
    </FormProvider>
  );
};

export default MemberForm;
