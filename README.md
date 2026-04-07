# Superpower Skills 宣传视频

使用 Remotion 创建的 Superpower Skills 宣传视频项目。

## 视频信息

- 时长：20秒 (600帧 @ 30fps)
- 分辨率：1080x1920 (竖屏格式，适合微信和 X)
- 格式：MP4

## 场景结构

1. **场景 1 (0-3秒)**: 标题冲击 - "终于有人治得住 AI 写的屎山代码了"
2. **场景 2 (3-8秒)**: 功能展示 - 三个核心功能点
3. **场景 3 (8-13秒)**: 命令行展示 - 打字机效果
4. **场景 4 (13-18秒)**: 代码展示 + 结果说明
5. **场景 5 (18-20秒)**: CTA - 向下箭头

## 使用方法

### 预览视频

```bash
npm start
```

在浏览器中打开 http://localhost:3002 预览视频效果。

### 渲染视频

渲染完整视频：
```bash
npm run build
```

视频将输出到 `out/video.mp4`

### 自定义渲染

指定输出路径：
```bash
npx remotion render SuperpowerSkills output.mp4
```

渲染特定帧范围：
```bash
npx remotion render SuperpowerSkills out/video.mp4 --frames=0-300
```

## 项目结构

```
src/
├── index.ts                    # Remotion 入口
├── Root.tsx                    # 注册视频组件
├── Video.tsx                   # 主视频组件
└── components/
    ├── Scene1Title.tsx         # 场景1：标题
    ├── Scene2Features.tsx      # 场景2：功能展示
    ├── Scene3Command.tsx       # 场景3：命令行
    ├── Scene4Code.tsx          # 场景4：代码展示
    └── Scene5CTA.tsx           # 场景5：CTA
```

## 自定义修改

### 调整时长

在 `src/Root.tsx` 中修改 `durationInFrames`：
```typescript
durationInFrames={600}  // 20秒 @ 30fps
```

### 调整分辨率

在 `src/Root.tsx` 中修改 `width` 和 `height`：
```typescript
width={1080}
height={1920}
```

### 修改场景时长

在 `src/Video.tsx` 中调整 `<Sequence>` 的 `from` 和 `durationInFrames`。

## 依赖

- Node.js 18+
- Remotion 4.x
- React 19.x
- TypeScript 5.x
