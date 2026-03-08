# 个人学术作品集 — Personal Academic Portfolio

密码保护的个人学术作品集网站，面向研究生导师面试使用。

## 🚀 快速开始

### 本地预览

```bash
# 方式 1：使用 Python（推荐）
cd Personal_web
python3 -m http.server 8080

# 方式 2：使用 Node.js
npx serve .

# 然后在浏览器打开 http://localhost:8080
```

### 默认密码

```
portfolio2026
```

修改密码：编辑 `js/main.js` 文件顶部的 `CONFIG.password` 值。

## 📁 项目结构

```
Personal_web/
├── index.html              # 主页面
├── css/style.css           # 样式
├── js/main.js              # 交互逻辑
├── videos/
│   ├── competition/        # 竞赛视频 (comp1.mp4 ~ comp8.mp4)
│   └── internship/         # 实习视频 (intern1_1.mp4 ~ intern2_4.mp4)
├── images/
│   ├── avatar.jpg          # 个人照片
│   ├── awards/             # 奖状图片 (award1.jpg ~ award4.jpg)
│   └── research/           # 研究计划流程图 (flowchart.png)
└── README.md
```

## 📝 内容定制

### 1. 个人信息
编辑 `index.html`，搜索以下占位文字并替换：
- `你的姓名` → 你的真实姓名
- `XX大学` → 你的学校名称
- `计算机科学与技术专业` → 你的专业
- `your.email@example.com` → 你的邮箱
- 联系方式、GitHub 等信息

### 2. 竞赛成果
- 替换 `images/awards/` 中的奖状图片
- 修改 `index.html` 中竞赛卡片内容
- 将视频放入 `videos/competition/`（命名 comp1.mp4 ~ comp8.mp4）

### 3. 实习经历
- 修改公司名称和描述
- 将视频放入 `videos/internship/`（命名 intern1_1.mp4 ~ intern2_4.mp4）

### 4. 研究计划
- 替换 `images/research/flowchart.png`
- 修改研究方向描述和目标

### 5. 密码
编辑 `js/main.js` 第 8 行：
```javascript
password: 'your_password_here',
```

## 🌐 部署到 GitHub Pages

1. 创建 GitHub 仓库
2. 推送代码：
```bash
git init
git add .
git commit -m "初始化个人作品集"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```
3. 进入仓库 Settings → Pages → Source 选择 `main` 分支
4. 等待几分钟，访问 `https://你的用户名.github.io/你的仓库名/`

## ⚠️ 注意事项

- 视频建议压缩到 10MB 以内（GitHub 限制单文件 100MB）
- GitHub 仓库总大小建议不超过 1GB
- 密码保护为前端级别，适合防止随意访问，不适合保护高度敏感信息
- 建议使用 Chrome / Edge / Safari 最新版浏览
