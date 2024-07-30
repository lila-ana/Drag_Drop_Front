import CustomButton from "@/components/button/CustomButton";
import CustomForm from "@/components/form/CustomForm";
import CustomMiddleModal from "@/components/modal/pop-up/CustomMiddleModal";
import { API_BASE_URL } from "@/config/endpoint";
import { TaskInputTypes } from "@/types/taskTypes";
import { deleteFetcher, fetcher, postFetcher } from "@/utils/apiFetchers";
import { DatePicker, Input } from "antd";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import moment, { Moment } from "moment";

const defaultTaskInput: TaskInputTypes = {
  title: "",
  description: "",
  status: "To Do",
  priority: "Low",
  dueDate: null,
  createdDate: new Date(),
  assignees: [],
  tags: [],
  subtasks: [],
  comments: [],
};

const Default: React.FC = () => {
  // ==============> REQUEST HANDLER <============
  const { data, error } = useSWR(`${API_BASE_URL}/tasks`, fetcher);

  // ===========> LOCAL STATES <================
  const [formData, setFormData] = useState<TaskInputTypes>(defaultTaskInput);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isMiddleVisible, setIsMiddleVisible] = useState<boolean>(false);

  const { TextArea } = Input;

  // const formatDate = (date: Date) => {
  //   return date.toISOString().split("T")[0];
  // };

  // const parseDate = (dateString: string) => {
  //   return new Date(dateString);
  // };
  // console.log(data, "fetched data");
  const inputFields = [
    {
      name: "Title",
      component: (
        <Input
          id="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      ),
    },
    {
      name: "Description",
      component: (
        <TextArea
          rows={4}
          id="description"
          placeholder="Description ..."
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      ),
    },
    {
      name: "Due Date",
      component: (
        <DatePicker
          id="due_date"
          placeholder="Due Date"
          value={formData.dueDate ? moment(formData.dueDate) : null}
          onChange={(date: Moment | null) =>
            setFormData({ ...formData, dueDate: date ? date.toDate() : null })
          }
        />
      ),
    },
  ];

  // ==============> HANDLERS <============
  const handleCloseMiddleModal = () => {
    setIsMiddleVisible(!isMiddleVisible);
  };
  const handleMiddleModalVisible = () => {
    setIsMiddleVisible(!isMiddleVisible);
  };

  // ==========> POST REQUEST <============

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("data to be send", formData);

    try {
      await mutate(
        `${API_BASE_URL}/task`,
        postFetcher(`${API_BASE_URL}/task`, formData),
        false
      );
      await mutate(`${API_BASE_URL}/task`);
    } catch (error) {
      console.log("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mutate(
        `${API_BASE_URL}/task`,
        deleteFetcher(`${API_BASE_URL}/task/${id}`),
        false
      );
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  if (error) return <div>failed to load</div>;
  if (!error && !data) return <div>loading...</div>;

  return (
    <>
      <div className="flex items-center justify-center">
        <h2 className="tracking-widest title-font font-medium text-gray-400 mb-1">
          Sprint 1
        </h2>
      </div>
      <CustomButton
        title="Add Task"
        btnType="button"
        containerStyles=" bg-[#001529] rounded-md text-white p-2"
        handleClick={handleMiddleModalVisible}
      />
      <div className="flex flex-wrap flex-col font-poppins">
        <div className="container py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data?.map((task) => (
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-md overflow-hidden">
                  <>
                    <div className="flex items-center justify-start text-xs">
                      <h2 className="tracking-widest title-font font-medium text-gray-400 mb-1">
                        Task Title -
                      </h2>
                      {task?.title}
                    </div>
                    <div className="flex items-center justify-start text-xs">
                      <h2 className="tracking-widest title-font font-medium text-gray-400 mb-1">
                        Task Detail -
                      </h2>
                      {task?.description}
                    </div>
                  </>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CustomMiddleModal
        visible={isMiddleVisible}
        title="Create Task"
        onClose={handleCloseMiddleModal}
      >
        <CustomForm
          inputFields={inputFields}
          onFinish={handleSubmit}
          showSubmitButton={true}
          showCancelButton={true}
          submitButtonStyles="bg-gray-500 font-poppins p-2 rounded-md text-white font-light"
          cancelButtonStyles="bg-red-500 font-poppins p-2 rounded-md text-white font-light"
        />
      </CustomMiddleModal>
    </>
  );
};

export default Default;
