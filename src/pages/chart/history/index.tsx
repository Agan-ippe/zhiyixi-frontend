import { Card, Divider, List, message, Select } from 'antd';
import Search from 'antd/es/input/Search';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import { listMyChartByPageUsingPost } from '@/services/zhibi/chartController';

/**
 * 数据分析历史记录
 * @author aip
 */
const { Option } = Select;

const chartHistory: React.FC = () => {
  // 图表查询初始化请求参数
  const initSearchParams = {
    current: 1,
    pageSize: 4,
  };
  const [searchParams, setSearchParams] = useState<API.ChartQueryRequest>({
    ...initSearchParams,
  });
  const [chartList, setChartList] = useState<API.ChartDO>();
  // 展示条数
  const [total, setTotal] = useState<number>(0);
  const [searchLoading, setSearchLoading] = useState<boolean>(true);
  // 从后端拿到历史数据/
  const historyData = async () => {
    setSearchLoading(true);
    try {
      const res = await listMyChartByPageUsingPost(searchParams);
      if (res.data) {
        setChartList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
        // 清除图表标题
        if (res.data.records) {
          res.data.records.forEach((data) => {
            const chartOption = JSON.parse(data.genChartInfo ?? '{}');
            chartOption.title = undefined;
            data.genChartInfo = JSON.stringify(chartOption);
          });
        }
      }
    } catch (e: any) {
      message.error('获取历史图表失败' + e.message);
    }
    setSearchLoading(false);
  };
  // 钩子函数，在访问这个页面前先请求后端拿到数据
  useEffect(() => {
    historyData();
  }, [searchParams]);

  return (
    <div className="chart-history">
      {/*搜索栏*/}
      <div>
        <Search
          placeholder="请输入你要查找的图表名称"
          loading={searchLoading}
          enterButton
          onSearch={(value) => {
            setSearchParams({
              // 每次搜索之前先重置搜索条件
              ...initSearchParams,
              // 加上搜索条件对应的属性
              chartName: value,
            });
          }}
        />
      </div>
      <div className="margin-16"></div>
      {/*数据展示*/}
      <List
        itemLayout="vertical"
        // 分页组件
        pagination={{
          onChange: (page, pageSize) => {
            setChartList(undefined);
            setSearchParams({
              ...searchParams,
              current: page,
              pageSize,
            });
          },
          current: searchParams.current,
          pageSize: searchParams.pageSize,
          total: total,
        }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 3,
        }}
        dataSource={chartList}
        renderItem={(item) => (
          <List.Item
            key={item.chartId}
            // actions={[<a>编辑</a>, <a>删除</a>]}
          >
            <Card>
              <List.Item.Meta
                title={item.chartName ?? '暂无名称'}
                description={
                  '分析诉求：' +
                  item.goal +
                  '，并使用 “' +
                  item.chartType +
                  '” 展示数据'
                }
              />
              {item.genChartResult}
              <ReactECharts option={JSON.parse(item.genChartInfo ?? '{}')} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default chartHistory;
