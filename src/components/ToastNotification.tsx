type Props = {
  message: string | null;
};

export default function ToastNotification({ message }: Props) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 border border-outline transition-all duration-300">
      <span className="material-symbols-outlined text-primary-fixed" data-icon="check_circle">check_circle</span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
