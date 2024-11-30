import {
  borderRadiusButton,
  paddingSM,
  paddingSX,
  textBaseNormal,
} from '@/components/constant/style';

export const buttonClasses = {
  moreButtonClass:
    'text-recatch-text-hover hover:bg-recatch-text-hover active:bg-recatch-text-hover disabled:bg-recatch-text-hover duration-200',
  more(className?: string) {
    return `${borderRadiusButton} ${paddingSX} ${this.moreButtonClass} ${className}`;
  },
  cancelButtonClass:
    'text-recatch-text-secondary bg-recatch-text-light-solid border-[1px] border-recatch-border hover:bg-recatch-text-hover active:bg-recatch-text-tertiary disabled:text-recatch-text-disabled disabled:bg-recatch-disabled duration-200',
  cancel(className?: string) {
    return `${borderRadiusButton} ${paddingSM} ${textBaseNormal} ${this.cancelButtonClass} ${className}`;
  },
  confirmButtonClass:
    'text-recatch-text-light-solid bg-recatch-primary border-[1px] border-recatch-primary hover:bg-recatch-primary-hover hover:border-recatch-primary-hover active:bg-recatch-primary-active active:border-recatch-primary-active disabled:text-recatch-text-disabled disabled:bg-recatch-disabled disabled:border-recatch-border duration-200',
  confirm(className?: string) {
    return `${borderRadiusButton} ${paddingSM} ${textBaseNormal} ${this.confirmButtonClass} ${className}`;
  },
  iconButtonClass:
    'text-recatch-text-hover hover:bg-recatch-text-hover active:bg-recatch-text-hover disabled:bg-recatch-text-hover duration-200 flex-shrink-0 w-[16px] h-[16px] flex items-center justify-center !p-0',
  icon(className?: string) {
    return `${borderRadiusButton} ${paddingSX} ${this.iconButtonClass} ${className}`;
  },
};

export const overlayClasses = {
  dimClass:
    'w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 duration-200 animate-fadeIn',
  dim(isOpen: boolean, className?: string) {
    return `${this.dimClass} ${isOpen ? 'visible z-[500]' : 'z-[-1]'} ${className}`;
  },
  modalClass:
    'w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 duration-200 animate-fadeIn bg-black bg-opacity-50',
  modal(isOpen: boolean, className?: string) {
    return `${this.modalClass} ${isOpen ? 'visible z-[200]' : 'z-[-2]'} ${className}`;
  },
};
