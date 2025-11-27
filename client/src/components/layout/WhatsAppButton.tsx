import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function WhatsAppButton() {
  const phoneNumber = '919876543210';
  const message = 'Hello! I would like to know more about IETNC nursing programs.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
          data-testid="button-whatsapp"
        >
          <Button
            size="lg"
            className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg animate-float"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Chat with us on WhatsApp</p>
      </TooltipContent>
    </Tooltip>
  );
}
