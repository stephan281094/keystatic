import { LabelAria } from '@react-aria/label';
import {
  AriaLabelingProps,
  DOMProps,
  InputBase,
  Validation,
} from '@react-types/shared';
import { HTMLAttributes, ReactElement, ReactNode } from 'react';

import { BaseStyleProps } from '@keystar/ui/style';
import { HTMLTag } from '@keystar/ui/utils/ts';

type FieldRenderInputProps = LabelAria['fieldProps'] & {
  disabled?: boolean;
  readOnly?: boolean;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
};
export type FieldRenderProp = (
  inputProps: FieldRenderInputProps
) => ReactElement;

export type FieldProps = {
  /** A `ContextualHelp` element to place next to the label. */
  contextualHelp?: ReactElement;
  /**
   * Description text provides information to assist the user in completing a
   * field.
   */
  description?: ReactNode;
  /**
   * Error messages inform the user when the input does not meet validation
   * criteria.
   */
  errorMessage?: ReactNode;
  /** Concisely label the field. */
  label?: ReactNode;
} & InputBase &
  Pick<Validation, 'isRequired'> &
  AriaLabelingProps &
  BaseStyleProps &
  DOMProps;

export type FieldPrimitiveProps = {
  children: ReactElement;
  /** A `ContextualHelp` element to place next to the label. */
  contextualHelp?: ReactElement;
  isRequired?: boolean;
  label?: ReactNode;
  labelElementType?: HTMLTag;
  labelProps?: HTMLAttributes<HTMLElement>;
  description?: ReactNode;
  descriptionProps?: HTMLAttributes<HTMLElement>;
  errorMessage?: ReactNode;
  errorMessageProps?: HTMLAttributes<HTMLElement>;
  /**
   * For controls that DO NOT use a semantic element for user input. In these
   * cases the "required" state would not otherwise be announced to users of
   * assistive technology.
   */
  supplementRequiredState?: boolean;
} & BaseStyleProps;
