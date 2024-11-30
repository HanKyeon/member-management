import Check from '@/public/icons/Check.svg';

const CheckBox = () => {
  return (
    <div className="flex items-center justify-center w-[16px] h-[16px]">
      <label className="relative flex items-center justify-center w-full h-full cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-full h-full bg-recatch-text-light-solid border-[1px] border-gray-300 rounded-md peer-checked:bg-recatch-primary peer-checked:border-recatch-primary flex items-center justify-center transition-all duration-200">
          <Check />
        </div>
      </label>
    </div>
  );
};

export default CheckBox;
