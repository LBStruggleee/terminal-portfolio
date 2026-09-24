# 奉昌炜的终端作品集 | FCW Terminal

终端风格的个人作品集，React + TypeScript + Styled-Components，多主题，支持命令补全与快捷键。

Live Demo: https://fcw-terminal.netlify.app/

## Features

- Responsive Design
- Multiple themes (6 themes, type `themes` in the terminal)
- Autocomplete feature (TAB | Ctrl + i)
- Go previous and next command
- View command history
- PWA and Offline Support
- Well-tested (Vitest, 99 tests)

## Tech Stack

**Frontend** - [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
**Styling** - [Styled-Components](https://styled-components.com/)
**State Management** - [ContextAPI](https://reactjs.org/docs/context.html)
**Testing** - [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/)
**Deployment** - [Netlify](https://app.netlify.com/)

## Content

所有个人内容集中在 `src/content/`，加新经历/作品/技能只改数据文件：

| File | Content | Shown by |
| --- | --- | --- |
| `profile.ts` | 姓名/方向/城市/简介 | `about` |
| `experiences.ts` | 实习经历 | `experience` |
| `projects.ts` | 项目作品 | `projects` |
| `skills.ts` | 技能 | `skills` |
| `education.ts` | 教育/证书/奖项 | `education` |
| `socials.ts` | 社交链接 | `socials` |

## Running Locally

```bash
git clone https://github.com/LBStruggleee/terminal-portfolio.git
cd terminal-portfolio
npm install
npm run dev
```

```bash
npm run test:once   # tests
npm run build       # production build -> dist/
```

## Credits

Forked and heavily customized from [satnaing/terminal-portfolio](https://github.com/satnaing/terminal-portfolio) (MIT).

## Author

- 奉昌炜 - [@LBStruggleee](https://github.com/LBStruggleee)
