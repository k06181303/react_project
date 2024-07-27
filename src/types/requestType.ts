// 接口返回公共數據類型
export interface IApiBase<T> {
  code: number;
  data: T[];
  msg: null;
}

// 課程分類
export interface CardType {
  id: number;
  name: string;
  summay: string;
  rowNum: number;
  columnNum: number;
  productList: [
    {
      id: number;
      title: string;
      coverImg: string;
      oldAmount: number;
      amount: number;
      summary: string;
      detail: string;
      productType: string;
      uv: number;
      buyNum: number;
      teacherId: number;
      teacher: null;
      totalPoint: number;
      contentPoint: number;
      easyPoint: number;
      logicPoint: number;
      courseLevel: string;
      hour: number;
      weight: number;
      episodeNum: number;
      recordState: string;
      player: string;
      stock: null;
      share: string;
      tdk: string;
      aliZipUrl: null;
      bdZipUrl: null;
      noteUrl: null;
      gmtModified: string;
      gmtCreate: string;
    }
  ];
}

export interface PageItemType {
  id: number;
  type: string;
  title: string;
  summary: string;
  imgUrl: string;
  pcLink: string;
  h5Link: string;
  del: number;
  weight: number;
  gmtCreate: string;
  gmtModified: string;
}
