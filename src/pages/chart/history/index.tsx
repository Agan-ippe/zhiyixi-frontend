import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {
  Card,
  Empty,
  Select,
  Space,
  Table,
  type TableColumnsType,
  TableProps,
  Tag,
} from 'antd';
import React, { useState } from 'react';

/**
 * 数据分析历史记录
 * @author aip
 */
const { Option } = Select;

const chartHistory: React.FC = () => {
  // const [chart, setChart] = useState<API.BiResponse>();
  // const [submitting, setSubmitting] = useState<boolean>(false);
  // const [option, setOption] = useState<any>();
  // const { initialState } = useModel('@@initialState');
  // const { currentUser } = initialState || {};
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: TableColumnsType<DataType>['columns'] = [
    {
      title: '图表名称',
      dataIndex: 'chartName',
      key: 'chartName',
      description:
        'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
      render: (text) => <a>{text}</a>,
    },
    {
      // 可筛选项
      title: '图表类型',
      dataIndex: 'chartType',
      key: 'chartType',
      filters: [
        { text: '折线图', value: '折线图' },
        { text: '柱状图', value: '柱状图' },
        { text: '堆叠图', value: '堆叠图' },
        { text: '雷达图', value: '雷达图' },
        { text: '饼图', value: '饼图' },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value as string),
    },
    {
      title: '分析目标',
      dataIndex: 'goal',
      key: 'goal',
    },
    {
      title: '结论',
      key: 'genChartResult',
      dataIndex: 'genChartResult',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>查看</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  // 模拟数据
  const data: DataType[] = [
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park',
    //   tags: ['nice', 'developer'],
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    //   tags: ['loser'],
    // },
    // {
    //   key: '3',
    //   name: 'Joe Black',
    //   age: 32,
    //   address: 'Sydney No. 1 Lake Park',
    //   tags: ['cool', 'teacher'],
    // },
  ];

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="chart-history">
      <Card title="历史记录">
        <Table<DataType>
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          dataSource={data}
        />
      </Card>
    </div>
  );
};

export default chartHistory;
