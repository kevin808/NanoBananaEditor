import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { PromptHint } from '../types';
import { Button } from './ui/Button';

const promptHints: PromptHint[] = [
  {
    category: '主题',
    text: '具体说明主要主题',
    example: '“一辆复古红色自行车” vs “自行车”'
  },
  {
    category: '场景',
    text: '描述环境和背景',
    example: '“在黄金时段的鹅卵石小巷里”'
  },
  {
    category: '动作',
    text: '包括运动或活动',
    example: '“骑自行车的人在水坑里踩水”'
  },
  {
    category: '风格',
    text: '指定艺术风或情绪',
    example: '“电影摄影，喜怒无常的灯光”'
  },
  {
    category: '相机',
    text: '添加相机视角细节',
    example: '“使用 85mm 镜头拍摄，景深较浅”'
  }
];

const categoryColors = {
  '主题': 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  '场景': 'bg-green-500/10 border-green-500/30 text-green-400',
  '动作': 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  '风格': 'bg-orange-500/10 border-orange-500/30 text-orange-400',
  '相机': 'bg-pink-500/10 border-pink-500/30 text-pink-400',
};

interface PromptHintsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PromptHints: React.FC<PromptHintsProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto z-50">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-semibold text-gray-100">
              提示质量技巧
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </Dialog.Close>
          </div>
          
          <div className="space-y-4">
            {promptHints.map((hint, index) => (
              <div key={index} className="space-y-2">
                <div className={`inline-block px-2 py-1 rounded text-xs border ${categoryColors[hint.category]}`}>
                  {hint.category}
                </div>
                <p className="text-sm text-gray-300">{hint.text}</p>
                <p className="text-sm text-gray-500 italic">{hint.example}</p>
              </div>
            ))}
            
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 mt-6">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-400">最佳实践:</strong> 写出完整的句子来描述整个场景，而不仅仅是关键词。把它想象成“用语言为我画一幅画”。
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};