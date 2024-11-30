import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

export type ButtonVariant = 'more' | 'cancel' | 'confirm' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  labelId?: string;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface ContextMenuProps {
  open: boolean;
  value: any;
  menus: { desc: string; value: any }[];
  onClickMenuitem: (data: any) => void;
}

export interface MenuItemProps {
  desc: string;
  value: any;
  selected?: boolean;
  onClick: (data: any) => void;
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  labelText?: string;
  required?: boolean;
}

export interface OverlayProps {
  variant?: 'dim' | 'modal';
  isOpen: boolean;
  onClose: () => void;
  dimCloseBlock?: boolean;
  className?: string;
}

export interface SelectProps {
  menus?: { desc: string; value: any }[];
  value?: any;
  onSelect?: (data: any) => void;
}
