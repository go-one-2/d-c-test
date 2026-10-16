import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
export const Dialog=DialogPrimitive.Root;
export const DialogTitle=DialogPrimitive.Title;
export const DialogDescription=DialogPrimitive.Description;
export function DialogContent({children}:{children:React.ReactNode}){return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-slate-950/50"/><DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-7 text-foreground shadow-xl">{children}<DialogPrimitive.Close aria-label="닫기" className="absolute right-5 top-5 rounded p-1 hover:bg-slate-100"><X size={18}/></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>}
