import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  panelClassName?: string;
};

export default function Drawer({ open, onClose, title, children, panelClassName = "" }: DrawerProps) {
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    // block body scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        // basic focus trap (loop)
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    // focus first focusable or panel
    setTimeout(() => {
      const focusable = panelRef.current?.querySelector<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      (focusable ?? panelRef.current)?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex" aria-hidden={false}>
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Detalhes do serviço"}
        tabIndex={-1}
        className={
          "ml-auto w-full h-full bg-white overflow-auto p-6 shadow-2xl focus:outline-none " +
          "sm:w-11/12 md:w-96 lg:w-[420px] rounded-l-2xl " +
          panelClassName
        }
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>
        <div className="text-gray-800">{children}</div>
      </aside>
    </div>,
    document.body
  );
}