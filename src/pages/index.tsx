import React from 'react';
import ProForm, { ProFormGroup, ProFormSelect } from '@ant-design/pro-form';

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <ProForm name="validate_other">
      <ProFormGroup>
        <ProFormSelect
          width="md"
          showSearch
          fieldProps={{
            optionFilterProp: 'children',
            filterOption: (input, options) => {
              console.log(input);
              console.log(options);
              return false;
            },
          }}
          valueEnum={{
            101: <span>101-实例101</span>,
            202: <span>202-实例202</span>,
            303: <span>303-实例303</span>,
            404: <span>404-实例303</span>,
          }}
          name="list"
          label="列表"
        />
      </ProFormGroup>
    </ProForm>
  </div>
);

export default Demo;
