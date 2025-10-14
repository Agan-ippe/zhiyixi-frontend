// @ts-ignore
/* eslint-disable */
import { request } from "@umijs/max";

/** 创建图表 POST /api/chart/add */
export async function addChartUsingPost(
  body: API.ChartAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/chart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** AI生成图表 POST /api/chart/ai/generate */
export async function aiGenerateChartUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AIGenerateChartUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any }
) {
  const formData = new FormData();

  if (file) {
    formData.append("file", file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === "object" && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ""));
        } else {
          formData.append(
            ele,
            new Blob([JSON.stringify(item)], { type: "application/json" })
          );
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.BaseResponseBiResponse_>("/api/chart/ai/generate", {
    method: "POST",
    params: {
      ...params,
    },
    data: formData,
    requestType: "form",
    ...(options || {}),
  });
}

/** 删除图表 POST /api/chart/delete */
export async function deleteChartUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/chart/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑图表(创建者) POST /api/chart/edit */
export async function editChartUsingPost(
  body: API.ChartEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/chart/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id获取图表 GET /api/chart/get */
export async function getChartByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseChartDO_>("/api/chart/get", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取图表列表 POST /api/chart/list/page/ */
export async function listChartByPageUsingPost(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageChartDO_>("/api/chart/list/page/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取当前用户创建的图表列表 POST /api/chart/my/list/page/ */
export async function listMyChartByPageUsingPost(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageChartDO_>("/api/chart/my/list/page/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新图表(仅管理员) POST /api/chart/update */
export async function updateChartUsingPost(
  body: API.ChartUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/chart/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
