import TopAnnouncementBar from './components/TopAnnouncementBar';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';
import ValuePropSection from './components/ValuePropSection';
import AboutSection from './components/AboutSection';
import CuratedMenuSection from './components/CuratedMenuSection';
import HampersSection from './components/HampersSection';
import ReviewsSection from './components/ReviewsSection';
import OrderFlowSection from './components/OrderFlowSection';
import FooterComponent from './components/FooterComponent';
import ToastNotification from './components/ToastNotification';
import { useCartManager } from './hooks/useCartManager';

export default function App() {
  const cartManager = useCartManager();

  return (
    <div className="min-h-screen flex flex-col">
      <TopAnnouncementBar />
      <TopNavBar />
      <main className="flex-1">
        <HeroSection />
        <ValuePropSection />
        <AboutSection />
        <CuratedMenuSection onAddToCart={cartManager.addToCart} />
        <HampersSection onAddToCart={cartManager.addToCart} />
        <ReviewsSection />
        <OrderFlowSection />
      </main>
      <FooterComponent />
      <ToastNotification message={cartManager.toast} />
    </div>
  );
}
