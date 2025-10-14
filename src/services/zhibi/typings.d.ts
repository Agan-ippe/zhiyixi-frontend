declare namespace API {
  type AIGenerateChartUsingPOSTParams = {
    chartName?: string;
    chartType?: string;
    goal?: string;
  };

  type BaseResponseBiResponse_ = {
    code?: number;
    data?: BiResponse;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseChartDO_ = {
    code?: number;
    data?: ChartDO;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageChartDO_ = {
    code?: number;
    data?: PageChartDO_;
    message?: string;
  };

  type BaseResponsePageUserDO_ = {
    code?: number;
    data?: PageUserDO_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseUserDO_ = {
    code?: number;
    data?: UserDO;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BiResponse = {
    chartId?: number;
    genChart?: string;
    genResult?: string;
  };

  type ChartAddRequest = {
    /** 图表数据 */
    chartData?: string;
    /** 图表名称 */
    chartName?: string;
    /** 图表类型 */
    chartType?: string;
    /** 分析目标 */
    goal?: string;
  };

  type ChartDO = {
    chartData?: string;
    chartName?: string;
    chartType?: string;
    createTime?: string;
    genChartInfo?: string;
    genChartResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartName?: string;
    chartType?: string;
    goal?: string;
    id?: number;
  };

  type ChartQueryRequest = {
    chartName?: string;
    chartType?: string;
    current?: number;
    goal?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartData?: string;
    chartName?: string;
    chartType?: string;
    genChartInfo?: string;
    genChartResult?: string;
    goal?: string;
    id?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getChartByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageChartDO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ChartDO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserDO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserDO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserDO = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
