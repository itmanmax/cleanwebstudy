'use client';

import { useState } from 'react';
import { Share2, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QRCodeSVG } from 'qrcode.react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const shareUrl = `web2025.maxtral.fun${pathname === '/' ? '' : pathname}`;
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="fixed bottom-6 right-6 flex gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 bg-white shadow-lg hover:shadow-xl transition-all"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 bg-white shadow-lg hover:shadow-xl transition-all"
          onClick={() => setIsOpen(true)}
        >
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>分享页面</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6">
            <QRCodeSVG
              value={shareUrl}
              size={200}
              level="H"
              includeMargin
            />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              扫描二维码访问：{shareUrl}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 