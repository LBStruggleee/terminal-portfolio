export interface Skill {
  name: string;
  detail: string;
}

// Add new skills here. Shown by the `skills` command.
export const skills: Skill[] = [
  {
    name: "Python",
    detail: "最熟，Pandas/Numpy数据清洗分析，matplotlib可视化",
  },
  { name: "SQL", detail: "高效提取业务数据，SQLite/Hive离线分析" },
  {
    name: "Spark/Hadoop",
    detail: "Spark MLlib用户画像，Hadoop/Hive海量数据离线分析",
  },
  {
    name: "LLM/RAG",
    detail: "提示词调优，RAG检索增强，Chroma向量库，FastAPI全栈落地",
  },
  { name: "C语言/MATLAB", detail: "C基础，MATLAB矩阵计算与算法原型" },
];
