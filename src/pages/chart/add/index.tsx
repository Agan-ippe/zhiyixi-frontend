import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Select, Space, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ReactECharts from 'echarts-for-react';
import React, { useState } from 'react';
import { aiGenerateChartUsingPost } from '@/services/zhibi/chartController';

/**
 * 添加图表
 * @author aip
 */
const { Option } = Select;

const chartAdd: React.FC = () => {
  const [chart, setChart] = useState<API.BiResponse>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [option, setOption] = useState<any>();
  // 提交
  const onFinish = async (values: any) => {
    // 避免重复提交
    if (submitting) {
      return;
    }
    const params = {
      ...values,
      file: undefined,
    };
    setSubmitting(true);
    // console.log("提交结果：", values);
    try {
      const res = await aiGenerateChartUsingPost(
        params,
        {},
        values.file.file.originFileObj,
      );
      console.log(res);
      if (!res.data) {
        message.error('分析失败');
      } else {
        message.success('分析成功');
        const chartOption = JSON.parse(res.data.genChart ?? '');
        if (!chartOption) {
          throw new Error('图表代码解析错误');
        } else {
          setChart(res.data);
          setOption(chartOption);
        }
      }
    } catch (e: any) {
      message.error('分析失败:', e.message);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <Form name="addChart" onFinish={onFinish}>
        <Form.Item
          name="chartName"
          label="图表名称"
          rules={[{ required: true, message: '图表名称是必填项!' }]}
        >
          <Input
            showCount
            autoSize
            maxLength={100}
            placeholder="示例：店铺销量增长表"
          />
        </Form.Item>

        {/*分析目标*/}
        <Form.Item
          name="goal"
          label="分析目标"
          rules={[{ required: true, message: '分析目标是必填项!' }]}
        >
          <TextArea
            showCount
            maxLength={500}
            placeholder="示例：分析店铺销量增长情况"
            style={{ height: 120, resize: 'none' }}
          />
        </Form.Item>

        {/*图表类型*/}
        <Form.Item name="chartType" label="图表类型">
          <Select
            placeholder="请选择图表类型"
            options={[
              { value: '折线图', label: '折线图' },
              { value: '柱状图', label: '柱状图' },
              { value: '堆叠图', label: '堆叠图' },
              { value: '雷达图', label: '雷达图' },
              { value: '饼图', label: '饼图' },
            ]}
          />
        </Form.Item>

        {/*上传文件*/}
        <Form.Item
          name="file"
          label="原始数据"
          rules={[{ required: true, message: '请选择需要分析的文件!' }]}
          extra="仅支持 .xlsx 类型的文件"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>点击上传</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={submitting}
            disabled={submitting}
          >
            数据分析
          </Button>
        </Form.Item>
      </Form>
      <div>分析结论：{chart?.genResult}</div>
      <div>
        图表数据：
        {option && <ReactECharts option={option} />}
      </div>
    </div>
  );
};

export default chartAdd;
