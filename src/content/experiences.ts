export interface Experience {
  title: string;
  org: string;
  period: string;
  desc?: string;
}

// Add new work experience here. Shown by the `experience` command.
export const experiences: Experience[] = [
  {
    title: "AI开发实习生",
    org: "广东轩辕网络科技股份有限公司 · 研发部",
    period: "2025.5 - 2025.8",
    desc: "参与LLM优化与微调，负责训练数据清洗与质量评估；独立完成2项核心算法实验，业务问答准确率提升15%。",
  },
  {
    title: "数据运营实习生",
    org: "中山市澳辉灯饰电器有限公司 · 运营部",
    period: "2026.6 - 2026.8",
    desc: "用Hadoop/Hive做电商用户行为离线分析，以Spark MLlib构建用户画像；A/B测试优化推荐策略，目标群体转化率提升23%，留存率提升20%。",
  },
];
