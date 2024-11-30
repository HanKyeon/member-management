import { DEFAULT_COLS, DEFAULT_JOBS } from '@/components/constant/value';
import { MemberRecord } from '@/types/type';
import { createElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../ui/hook-form-inputs/FormInput';
import FormTextArea from '@/components/ui/hook-form-inputs/FormTextArea';
import FormDate from '@/components/ui/hook-form-inputs/FormDatePicker';
import FormSelect from '@/components/ui/hook-form-inputs/FormSelect';
import { formatDate } from '@/utils/date-utils';
import FormCheckBox from '@/components/ui/hook-form-inputs/FormCheck';
import { MemberFormResolver } from '@/utils/form-utils';
import ModalFooter from './ModalFooter';

interface Props {
  onSubmit: (member: MemberRecord) => void;
  member?: MemberRecord;
  cancelHandler: () => void;
}

const ElementMap = {
  name: FormInput,
  address: FormInput,
  memo: FormTextArea,
  joinDate: FormDate,
  job: FormSelect,
  emailAgreement: FormCheckBox,
};

/**
 * @param {React.ReactNode} children footer로 사용됩니다.
 */
const MemberForm = function ({ onSubmit, member, cancelHandler }: Props) {
  const methods = useForm<MemberRecord>({
    defaultValues: {
      checked: member?.checked ?? false,
      name: member?.name ?? '',
      address: member?.address ?? '',
      memo: member?.memo ?? '',
      joinDate: member?.joinDate ?? formatDate(new Date()),
      job: member?.job ?? DEFAULT_JOBS[0].value,
      emailAgreement: member?.emailAgreement ?? false,
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
