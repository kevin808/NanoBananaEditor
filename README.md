# 🍌 Nano Banana AI 图像编辑器
发布版本: (v1.0)

### **⏬ 获取您的一键安装副本！**
加入 [Vibe Coding is Life Skool 社区](https://www.skool.com/vibe-coding-is-life/about?ref=456537abaf37491cbcc6976f3c26af41) 并获取此应用程序的 **一键式 ⚡Bolt.new 安装克隆**，此外还可以访问实时构建会话、独家项目下载、AI 提示、大师班以及网络上最好的 vibe 编码社区！

---

**专业的 AI 图像生成和对话式编辑平台**

一个可用于生产的 React + TypeScript 应用程序，用于使用 Google 的 Gemini 2.5 Flash Image 模型进行令人愉悦的图像生成和对话式、区域感知的修订。采用现代网络技术构建，专为创作者和开发人员设计。

[![Nano Banana 图像编辑器](https://getsmartgpt.com/nano-banana-editor.jpg)](https://nanobananaeditor.dev)

🍌 [尝试在线演示](https://nanobananaeditor.dev)

## ✨ 主要功能

### 🎨 **AI 驱动的创作**
- **文本到图像生成** - 从描述性提示创建令人惊叹的图像
- **实时质量提示** - 实时反馈以改进您的提示
- **参考图像支持** - 最多使用 2 张参考图像来指导生成
- **高级控件** - 微调创造力水平并使用自定义种子

### ✏️ **智能编辑**
- **对话式编辑** - 使用自然语言指令修改图像
- **区域感知选择** - 绘制蒙版以针对特定区域进行编辑
- **样式参考图像** - 上传参考图像以指导编辑样式
- **非破坏性工作流程** - 所有编辑都会保留原始图像

### 🖼️ **专业画布**
- **交互式画布** - 平滑地缩放、平移和导航大型图像
- **画笔工具** - 用于精确蒙版绘制的可变画笔大小
- **移动端优化** - 响应式设计，可在所有设备上完美运行
- **键盘快捷键** - 使用热键的高效工作流程

### 📚 **项目管理**
- **生成历史记录** - 跟踪您的所有创作和编辑
- **变体比较** - 并排生成和比较多个版本
- **完全撤消/重做** - 具有分支历史记录的完整生成树
- **资产管理** - 有组织地存储所有生成的内容

### 🔒 **企业功能**
- **SynthID 水印** - 内置 AI 来源，带有隐形水印
- **离线缓存** - 用于离线资产访问的 IndexedDB 存储
- **类型安全** - 具有严格类型的完整 TypeScript 实现
- **性能优化** - 用于高效状态管理的 React Query

## 🚀 快速入门

### 先决条件
- Node.js 18+
- 一个 [Google AI Studio](https://aistudio.google.com/) API 密钥

### 安装

1. **克隆并安装依赖项**：
   ```bash
   git clone <repository-url>
   cd nano-banana-image-editor
   npm install
   ```

2. **配置环境**：
   ```bash
   cp .env.example .env
   # 将您的 Gemini API 密钥添加到 VITE_GEMINI_API_KEY
   ```

3. **启动开发服务器**：
   ```bash
   npm run dev
   ```

4. **在浏览器中打开**：导航到 `http://localhost:5173`

## 🎯 使用指南

### 创建图像
1. 选择 **生成** 模式
2. 编写详细的提示，描述您想要的图像
3. （可选）上传参考图像（最多 2 张）
4. 如果需要，调整创造力设置
5. 单击 **生成** 或按 `Cmd/Ctrl + Enter`

### 编辑图像
1. 切换到 **编辑** 模式
2. 上传图像或使用先前生成的图像
3. （可选）绘制蒙版以针对特定区域
4. 用自然语言描述您想要的更改
5. 单击 **应用编辑** 以查看结果

### 高级工作流程
- 使用 **选择** 模式绘制精确的蒙版以进行有针对性的编辑
- 在“历史记录”面板中比较变体
- 下载高质量的 PNG 输出
- 使用键盘快捷键进行高效导航

## ⌨️ 键盘快捷键

| 快捷键 | 操作 |
|----------|--------|
| `Cmd/Ctrl + Enter` | 生成/应用编辑 |
| `Shift + R` | 重新生成变体 |
| `E` | 切换到编辑模式 |
| `G` | 切换到生成模式 |
| `M` | 切换到选择模式 |
| `H` | 切换历史记录面板 |
| `P` | 切换提示面板 |

## 🏗️ 架构

### 技术栈
- **前端**：React 18、TypeScript、Tailwind CSS
- **状态管理**：Zustand 用于应用程序状态，React Query 用于服务器状态
- **画布**：Konva.js 用于交互式图像显示和蒙版叠加
- **AI 集成**：Google Generative AI SDK (Gemini 2.5 Flash Image)
- **存储**：IndexedDB 用于离线资产缓存
- **构建工具**：Vite 用于快速开发和优化构建

### 项目结构
```
src/
├── components/          # React 组件
│   ├── ui/             # 可重用的 UI 组件（按钮、输入等）
│   ├── PromptComposer.tsx  # 提示输入和工具选择
│   ├── ImageCanvas.tsx     # 带有 Konva 的交互式画布
│   ├── HistoryPanel.tsx    # 生成历史记录和变体
│   ├── Header.tsx          # 应用程序标题和导航
│   └── InfoModal.tsx       # 关于带有链接的模式
├── services/           # 外部服务集成
│   ├── geminiService.ts    # Gemini API 客户端
│   ├── cacheService.ts     # IndexedDB 缓存层
│   └── imageProcessing.ts  # 图像处理实用程序
├── store/              # Zustand 状态管理
│   └── useAppStore.ts      # 全局应用程序状态
├── hooks/              # 自定义 React 钩子
│   ├── useImageGeneration.ts  # 生成和编辑逻辑
│   └── useKeyboardShortcuts.ts # 键盘导航
├── utils/              # 实用功能
│   ├── cn.ts              # 类名实用程序
│   └── imageUtils.ts      # 图像处理助手
└── types/              # TypeScript 类型定义
    └── index.ts           # 核心类型定义
```

## 🔧 配置

### 环境变量
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 模型配置
- **模型**：`gemini-2.5-flash-image-preview`
- **输出格式**：带有 SynthID 水印的 1024×1024 PNG
- **输入格式**：PNG、JPEG、WebP
- **温度范围**：0-1（0 = 确定性，1 = 创造性）

## 🚀 部署

### 开发
```bash
npm run dev      # 启动开发服务器
npm run build    # 为生产构建
npm run preview  # 预览生产构建
npm run lint     # 运行 ESLint
```

### 生产注意事项
- **API 安全性**：在生产中为 API 调用实施后端代理
- **速率限制**：添加适当的速率限制和使用配额
- **身份验证**：考虑为多用户部署进行用户身份验证
- **存储**：为生成的资产设置云存储
- **监控**：添加错误跟踪和分析

## 📄 许可证和版权

**版权所有 © 2025 [Mark Fulton](https://markfulton.com)**

本项目根据 **GNU Affero 通用公共许可证 v3.0** (AGPL-3.0) 获得许可。

### 这意味着什么：
- ✅ **可免费使用** 用于个人和商业项目
- ✅ **修改和分发** 并附有适当的署名
- ⚠️ **共享修改** - 任何更改都必须在相同的许可下共享
- ⚠️ **网络使用** - 如果您将其作为网络服务运行，则必须提供源代码

有关完整详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 🤝 贡献

我们欢迎贡献！请：

1. **遵循既定模式** - 将组件保持在 200 行以下
2. **维护类型安全** - 严格使用 TypeScript 并带有正确的定义
3. **彻底测试** - 确保键盘导航和可访问性
4. **记录更改** - 更新 README 并添加内联注释
5. **遵守许可证** - 所有贡献都将遵守 AGPL-3.0

## 🔗 链接和资源

- **创作者**：[Mark Fulton](https://markfulton.com)
- **AI 培训计划**：[Reinventing.AI](https://www.reinventing.ai/)
- **社区**：[Vibe Coding is Life Skool](https://www.skool.com/vibe-coding-is-life/about?ref=456537abaf37491cbcc6976f3c26af41)
- **Google AI Studio**：[获取您的 API 密钥](https://aistudio.google.com/)
- **Gemini API 文档**：[官方文档](https://ai.google.dev/gemini-api/docs)

## 🐛 已知问题和限制

- **客户端 API 调用** - 当前使用直接 API 调用（为生产实施后端代理）
- **浏览器兼容性** - 需要具有 Canvas 和 WebGL 支持的现代浏览器
- **速率限制** - 受 Google AI Studio 速率限制的约束
- **图像大小** - 针对 1024×1024 输出进行了优化（Gemini 模型输出尺寸可能会有所不同）

## 🎯 建议的更新

- [ ] 后端 API 代理实现
- [ ] 用户身份验证和项目共享
- [ ] 高级画笔工具和选择方法
- [ ] 用于自定义过滤器的插件系统
- [ ] 与云存储提供商集成

---

**由 [Mark Fulton](https://markfulton.com) 构建** | **由 Gemini 2.5 Flash Image 提供支持** | **使用 Bolt.new 制作**
