export interface InputField {
  label?: string;
  name: string;
  rules?: { required: boolean; message: string }[];
  component: React.ReactNode;
}

export interface CustomFormProps {
  inputFields: InputField[];
  onFinish: (values: any) => void;
  isUpdating?: boolean;
  initialValues?: any;
  showSubmitButton?: boolean;
  showCancelButton?: boolean;
  submitButtonStyles?: string;
  cancelButtonStyles?: string;
}
