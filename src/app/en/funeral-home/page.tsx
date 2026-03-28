import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage/IndustryPage';
import type { IndustryPageData } from '@/components/IndustryPage/IndustryPage';

export const metadata: Metadata = {
  title: 'AI phone answering for funeral homes | Bra Svar!',
  description:
    'Be available for grieving families even when you are occupied. Bra Svar handles inquiries with dignity and compassion.',
};

const data: IndustryPageData = {
  lang: 'en',
  industry: 'Funeral homes',
  intro:
    'Families who have just lost someone call when they need to, not when it suits you. When you are in a ceremony or meeting with another family, Bra Svar makes sure those who call are met with calm and respect.',
  situation:
    'You are often in situations where you cannot take the phone. Ceremonies, personal meetings with bereaved families and planning require your full presence.',
  situationBullets: [
    'In the middle of a funeral ceremony or service',
    'Meeting with a grieving family who needs your undivided attention',
    'Coordinating practical details with the church, crematorium or cemetery',
    'Arranging with florists, musicians and other parties involved',
    'Transport and preparations where you do not have your phone accessible',
  ],
  consequence:
    'When someone loses a loved one, the first thing they often do is call a funeral home. If no one answers, they feel alone in a difficult moment. They call the next one on the list.',
  solutionIntro:
    'Bra Svar meets grieving families with warmth and dignity, gathers the necessary information and ensures you can call back as soon as you are free.',
  handles: [
    'New inquiries from bereaved families with care and compassion',
    'Basic information about planning a ceremony',
    'Questions about flowers, caskets and memorial pages',
    'Practical information about what happens next',
    'Forwarding urgent matters to the right person',
  ],
  benefitsIntro:
    'With Bra Svar you know that bereaved families are always met with respect, no matter when they call.',
  benefits: [
    'Families feel cared for from the very first moment',
    'You can give the family you are with your full attention',
    'No inquiry is lost, not even outside office hours',
    'The tone and care match what families need in a vulnerable moment',
  ],
  chat: [
    { who: 'customer', text: 'Hello. My father passed away last night. We are not sure what to do.' },
    { who: 'ai', text: 'I am so sorry for your loss. It is completely understandable that this feels overwhelming. We are here to help you through this.' },
    { who: 'customer', text: 'Thank you. He is at the hospital now. What happens next?' },
    { who: 'ai', text: 'We will take care of everything. The funeral home can arrange transport from the hospital and help you with all the practical details. May I have your name so we can call you back as soon as possible to talk about the way forward?' },
    { who: 'customer', text: 'Yes, my name is Sarah Williams. My number is the one I am calling from.' },
    { who: 'ai', text: 'Thank you, Sarah. I have noted everything down. You will be contacted shortly. Take the time you need. We will handle the rest.' },
  ],
};

export default function Page() {
  return <IndustryPage data={data} />;
}
