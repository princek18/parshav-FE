import { Button, Form, Input, Modal, Select } from "antd";
import axios from "axios";
import { baseURL } from "../App";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const PopUpModal = ({ open, handleClose, getDataSets }) => {
  const [form] = Form.useForm();
  const [suppliers, setSuppliers] = useState([]);
  const [poNumbers, setPONumbers] = useState([]);

  const handleSubmit = (data) => {
    axios({
      method: "post",
      url: `${baseURL}addDocket`,
      data,
    })
      .then((res) => {
        handleClose();
        form.resetFields();
        getDataSets();
      })
      .catch((e) => {
        console.log(e.response.data.error);
      });
  };

  const getEnum = (query = null) => {
    axios({
      method: "get",
      url: `${baseURL}getEnum`,
      params: query,
    })
      .then((res) => {
        if (query) {
          setPONumbers(res?.data?.data);
        }
        setSuppliers(res?.data?.data);
      })
      .catch((e) => {
        console.log(e.response?.data?.error);
      });
  };

  useEffect(() => {
    if (open) {
      getEnum();
    }
  }, [open]);

  const handleSupplier = (data) => {
    getEnum({ supplier: data });
  };

  return (
    <div>
      <Modal
        title="Add Docket"
        open={open}
        onCancel={() => {
          form.resetFields();
          handleClose();
        }}
        maskClosable={false}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        style={{ position: "sticky" }}
      >
        <Form
          name="basic"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            labelCol={{
              span: 24,
              offset: 2,
            }}
            wrapperCol={{
              span: 14,
            }}
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div style={{ display: "flex" }}>
            <Form.Item
              label="Start Time"
              name="start_time"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 23,
              }}
              rules={[
                {
                  required: true,
                  message: "Please input start date!",
                },
              ]}
              style={{
                width: "50%",
              }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="End Time"
              name="end_time"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 23,
              }}
              rules={[
                {
                  required: true,
                  message: "Please input end date!",
                },
              ]}
              style={{
                width: "50%",
              }}
            >
              <Input />
            </Form.Item>
          </div>

          <div style={{ display: "flex" }}>
            <Form.Item
              label="No. Of hours Worked"
              name="hours_worked"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 23,
              }}
              rules={[
                {
                  required: true,
                  message: "Please input No. Of hours Worked!",
                },
              ]}
              style={{
                width: "50%",
              }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Rate Per hour"
              name="rate_per_hour"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 23,
              }}
              rules={[
                {
                  required: true,
                  message: "Please input Rate Per hour!",
                },
              ]}
              style={{
                width: "50%",
              }}
            >
              <Input />
            </Form.Item>
          </div>

          <div style={{ display: "flex" }}>
            <Form.Item
              label="Supplier"
              name="Supplier"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 23,
              }}
              rules={[
                {
                  required: true,
                  message: "Please select Supplier!",
                },
              ]}
              style={{
                width: "50%",
              }}
            >
              <Select
                allowClear
                onChange={handleSupplier}
                options={suppliers}
              />
            </Form.Item>

            <Form.Item
              label="PO Number"
              name="PO Number"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 23,
              }}
              rules={[
                {
                  required: true,
                  message: "Please select PO Number!",
                },
              ]}
              style={{
                width: "50%",
              }}
            >
              <Select
                allowClear
                disabled={!form.getFieldValue("Supplier")}
                options={poNumbers}
              />
            </Form.Item>
          </div>

          <Form.Item
            wrapperCol={{
              offset: 10,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
