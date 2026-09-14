export default function WhatsappBanner() {
  return (
    <section className="bg-secondary text-on-secondary py-space-xl">
      <div className="max-w-[1200px] mx-auto px-gutter text-center flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl mb-space-sm" data-icon="celebration">celebration</span>
        <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg max-w-2xl text-on-secondary">
          Setiap Momen Berharga Pantas Dirayakan dengan Cita Rasa yang Tulus
        </h2>
        <p className="font-body-lg text-body-lg text-secondary-fixed mt-space-sm max-w-xl leading-relaxed">
          Dari arisan hangat di teras rumah hingga perhelatan penting keluarga besar. Ceritakan rencana acara Anda, dan biarkan Dapur Yani Snack meracik hidangan yang terkenang di hati setiap tamu.
        </p>
        <div className="mt-space-lg">
          <a className="inline-flex items-center gap-2 bg-surface-container-lowest text-on-surface px-space-lg py-3 rounded-full font-label-lg text-label-lg hover:bg-surface-container transition-all active:scale-95 shadow-md" href="https://wa.me/6281234567890?text=Halo%20Dapur%20Yani%20Snack,%20saya%20mau%20order%20untuk%20acara">
            <span className="material-symbols-outlined text-primary text-xl" data-icon="chat" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span>Chat Langsung via WhatsApp (+62 812-3456-7890)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
