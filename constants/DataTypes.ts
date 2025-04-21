import { pieDataItem } from "react-native-gifted-charts";

export interface chartData {
  title: string;
  date: string;
  data: {
    queue: pieDataItem[];
    waitTime: number;
    busyness: number;
  };
}

export interface chartDataList {
  items: Array<{
    title: string;
    type: string;
    date: string;
    time: Date;
    data: {
      queue: pieDataItem[];
      busyness: number;
    };
  }>;
}
