import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ExternalLink, Lightbulb, Download } from 'lucide-react';
import { Button } from './ui/Button';

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-lg p-6 w-full max-w-4xl z-50">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-semibold text-gray-100">
              关于 Nano Banana AI 图像编辑器
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </Dialog.Close>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                感谢原作者{' '}
                <a
                  href="https://markfulton.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
                >
                  Mark Fulton
                  <ExternalLink className="h-3 w-3 inline ml-1" />
                </a>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-500/30">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="text-sm font-semibold text-purple-300">
                      学习构建AI应用及更多解决方案
                    </h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    立即加入社区，学习并掌握 AI 自动化，构建智能代理。
                  </p>
                  <a
                    href="https://thinkinai.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg transition-all duration-200 font-medium"
                  >
                    加入ThinkInAI社区
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center mb-3">
                    <Download className="h-5 w-5 text-yellow-400 mr-2" />
                    <h4 className="text-sm font-semibold text-yellow-300">
                      获取源代码
                    </h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    这是Kevin基于原作者代码进行翻译的项目。
                  </p>
                  <a
                    href="https://github.com/kevin808/NanoBananaEditor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white rounded-lg transition-all duration-200 font-medium"
                  >
                    查看源代码
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};