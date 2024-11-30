import {
  borderRadiusButton,
  paddingSM,
  paddingSX,
  textBaseNormal,
} from '@/components/constant/style';

export const buttonClasses = {
  more(className?: string) {
    return `${borderRadiusButton} ${paddingSX} text-recatch-text-hover hover:bg-recatch-text-hover active:bg-recatch-text-hover disabled:bg-recatch-text-hover duration-200 ${className}`;
  },
  cancel(className?: string) {
    return `${borderRadiusButton} ${paddingSM} ${textBaseNormal} text-recatch-text-secondary bg-recatch-text-light-solid border-[1px] border-recatch-border hover:bg-recatch-text-hover active:bg-recatch-text-tertiary disabled:text-recatch-text-disabled disabled:bg-recatch-disabled duration-200 ${className}`;
  },
  confirm(className?: string) {
    return `${borderRadiusButton} ${paddingSM} ${textBaseNormal} text-recatch-text-light-solid bg-recatch-primary border-[1px] border-recatch-primary hover:bg-recatch-primary-hover hover:border-recatch-primary-hover active:bg-recatch-primary-active active:border-recatch-primary-active disabled:text-recatch-text-disabled disabled:bg-recatch-disabled disabled:border-recatch-border duration-200 ${className}`;
  },
  icon(className?: string) {
    return `${borderRadiusButton} ${paddingSX} text-recatch-text-hover hover:bg-recatch-text-hover active:bg-recatch-text-hover disabled:bg-recatch-text-hover duration-200 flex-shrink-0 w-[16px] h-[16px] flex items-center justify-center !p-0 ${className}`;
  },
};

export const oberlayClasses = {
  dim(isOpen: boolean, className?: string) {
    return `w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 duration-200 animate-fadeIn ${isOpen ? 'visible z-[500]' : 'z-[-1]'}`;
  },
  modal(isOpen: boolean, className?: string) {
    return `w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 duration-200 animate-fadeIn bg-black bg-opacity-50 ${isOpen ? 'visible z-[200]' : 'z-[-2]'}`;
  },
};
