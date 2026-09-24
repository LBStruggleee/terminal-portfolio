export interface Project {
  id: number;
  title: string;
  desc: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DataQuery-Copilot",
    desc: "自然语言交互式数据查询工具：自然语言→SQL生成→自动执行→数据清洗→可视化输出，关键词黑名单+语法校验双重安全，CSV/Excel自动接入SQLite。",
    url: "https://github.com/LBStruggleee/DataQuery-Copilot",
  },
  {
    id: 2,
    title: "KnowFlow RAG知识库问答",
    desc: "基于RAG的智能问答系统：多格式文档解析→分块→向量入库→语义检索→大模型回答，支持引用溯源与Token统计，FastAPI+Vue3+Chroma全栈实现。",
    url: "https://github.com/LBStruggleee/KnowFlow",
  },
];
