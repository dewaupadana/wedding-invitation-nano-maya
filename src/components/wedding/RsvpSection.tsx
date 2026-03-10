import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { z } from 'zod';

const rsvpSchema = z.object({
  name: z.string().trim().min(1, 'Nama wajib diisi').max(100),
  address: z.string().trim().max(200).optional(),
  attendance: z.enum(['hadir', 'tidak_hadir']),
});

const RsvpSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir'>('hadir');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = rsvpSchema.safeParse({ name, address: address || undefined, attendance });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from('rsvp').insert({
      name: result.data.name,
      address: result.data.address || null,
      attendance: result.data.attendance,
    });
    setLoading(false);

    if (error) {
      toast.error('Gagal mengirim RSVP. Coba lagi.');
      return;
    }

    setSubmitted(true);
    toast.success('RSVP berhasil dikirim!');
  };

  return (
    <section ref={ref} className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Konfirmasi Kehadiran
        </p>
        <h2 className="font-script text-4xl text-primary">RSVP</h2>
        <OrnamentDivider showImage={false} className="mt-4" />
      </motion.div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <div className="w-16 h-16 mx-auto border border-primary rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-primary" />
          </div>
          <p className="font-display text-lg text-foreground">Terima kasih!</p>
          <p className="font-body text-sm text-muted-foreground mt-1">RSVP Anda telah kami terima.</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4 max-w-sm mx-auto"
        >
          <div>
            <label className="block font-body text-sm text-muted-foreground mb-1">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border border-primary/30 px-4 py-3 font-body text-sm text-foreground
                focus:border-primary focus:outline-none transition-colors"
              placeholder="Nama lengkap"
              maxLength={100}
              required
            />
          </div>

          <div>
            <label className="block font-body text-sm text-muted-foreground mb-1">Alamat</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-transparent border border-primary/30 px-4 py-3 font-body text-sm text-foreground
                focus:border-primary focus:outline-none transition-colors"
              placeholder="Alamat (opsional)"
              maxLength={200}
            />
          </div>

          <div>
            <label className="block font-body text-sm text-muted-foreground mb-2">Kehadiran</label>
            <div className="flex gap-3">
              {[
                { value: 'hadir' as const, label: 'Hadir' },
                { value: 'tidak_hadir' as const, label: 'Tidak Hadir' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setAttendance(opt.value)}
                  className={`flex-1 py-3 border font-body text-sm tracking-wider transition-all duration-300
                    ${attendance === opt.value
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-primary/30 text-muted-foreground hover:border-primary/60'
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gold-gradient text-primary-foreground font-display text-sm tracking-[0.2em] uppercase
              hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? 'Mengirim...' : (
              <>
                <Send className="w-4 h-4" />
                Kirim RSVP
              </>
            )}
          </button>
        </motion.form>
      )}
    </section>
  );
};

export default RsvpSection;
