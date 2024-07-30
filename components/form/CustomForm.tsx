"use client";

import { Form, Input } from "antd";
import React from "react";
import { FormInstance } from "antd/lib";
import CustomButton from "../button/CustomButton";
import { CustomFormProps } from "@/types/formTypes";

const CustomForm: React.FC<CustomFormProps> = ({
  inputFields,
  onFinish,
  isUpdating = false,
  initialValues,
  showSubmitButton,
  showCancelButton,
  submitButtonStyles = "bg-gray-400 rounded-full text-white",
  cancelButtonStyles = "bg-red-400 rounded-full text-white",
}) => {
  const formRef = React.useRef<FormInstance>(null);
  console.log(inputFields, "inputFields");

  const handleFinish = (values: any) => {
    console.log(values, "Form submission values");
    onFinish(values);
  };

  const handleValuesChange = () => {
    if (formRef.current) {
      const currentValues = formRef.current.getFieldsValue();
      console.log(currentValues, "Current form values");
    }
  };

  return (
    <Form
      ref={formRef}
      name="basic"
      initialValues={initialValues}
      onValuesChange={handleValuesChange}
      onFinish={handleFinish}
      style={{ width: "300px" }}
    >
      {inputFields.map((field, index) => {
        console.log(field, "field");
        return (
          <Form.Item
            key={index}
            label={field.label}
            name={field.name}
            rules={field.rules}
          >
            {field.component}
          </Form.Item>
        );
      })}
      <Form.Item>
        <div className="flex flex-wrap flex-row gap-3">
          {showSubmitButton && (
            <CustomButton
              btnType="submit"
              title={isUpdating ? "Update" : "Submit"}
              containerStyles={submitButtonStyles}
            />
          )}
          {showCancelButton && (
            <CustomButton
              btnType="button"
              title="Cancel"
              containerStyles={cancelButtonStyles}
            />
          )}
        </div>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
